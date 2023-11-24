import host from "./host";

export async function addParticipant({ firstName, name, email, phone }) {
  const requestOptions = {
    method: "POST",
    headers: {
      // "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstName,
      name: name,
      email: email,
      phone: phone,
    }),
  };

  const response = await fetch(`${host}/participants`, requestOptions);
  return response.json();
}
