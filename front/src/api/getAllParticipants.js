import host from "./host";

export async function getAllParticipants() {
  const requestOptions = {
    method: "GET",
    // mode: "no-cors",
    headers: {
      // "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${host}/participants`, requestOptions);
  return response.json();
}
