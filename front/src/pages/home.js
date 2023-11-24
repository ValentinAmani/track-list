import { useState, useEffect } from "react";
import { getAllParticipants } from "../api/getAllParticipants";
import { addParticipant } from "../api/addParticipant";

function Home() {
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const fetchParticipants = async () => {
    setLoading(true);

    const resp = await getAllParticipants();

    if (resp.success) {
      setLoading(false);
    } else {
      setLoading(false);
      setError(resp.message);
    }
  };

  const submitParticipant = async () => {
    setLoading(true);

    const resp = await addParticipant({
      firstName: firstName,
      name: name,
      email: email,
      phone: phone,
    });

    if (resp.success) {
      setLoading(false);
      setTrigger(!trigger);
      clearInput();
      setMessage(resp.message);
    } else {
      setLoading(false);
      setError(resp.message);
    }
  };

  const clearInput = () => {
    setFirstName("");
    setName("");
    setPhone("");
    setEmail("");
  };

  useEffect(() => {
    fetchParticipants();
  }, [trigger]);

  return (
    <section className="section-form">
      {loading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <>
          <h2>Enregistrement du participant</h2>
          <form
            onSubmit={() => {
              submitParticipant();
            }}
          >
            <div className="form">
              <div className="form-column">
                <label>Nom</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-column">
                <label>Prénoms</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="form-column">
                <label>Adresse email</label>
                <input
                  type="e-mail"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-column">
                <label>Numéro de téléphone</label>
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
            {message && (
              <div className="form-column">
                <span className="response">{message}</span>
              </div>
            )}
            {error && (
              <div className="form-column">
                <span className="error">{error}</span>
              </div>
            )}
            <input type="submit" value="ENREGISTRER" className="cta" />
          </form>
        </>
      )}
    </section>
  );
}

export default Home;
