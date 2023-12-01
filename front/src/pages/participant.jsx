import { useState, useEffect } from "react";
import { getAllParticipants } from "../api/getAllParticipants";

function Participant() {
  const [loading, setLoading] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState("");

  const fetchParticipants = async () => {
    setLoading(true);

    const resp = await getAllParticipants({});

    if (resp.success) {
      setLoading(false);
      setParticipants(resp.participants);
    } else {
      setLoading(false);
      setError(resp.message);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  return (
    <section className="section-registers">
      {loading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <>
          <h2>Liste des participants</h2>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénoms</th>
                <th>Adresse email</th>
                <th>Numéro de téléphone</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="participants-list">
            {participants.map((user) => (
              <div key={user._id}>
                <p>{user.name}</p>
                <p>{user.firstName}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            ))}
          </div>
          {error && (
            <div className="form-column">
              <span className="response">{error}</span>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Participant;
