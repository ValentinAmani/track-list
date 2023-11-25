import host from "./host";

export async function getAllParticipants() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${host}/participants`, requestOptions);
  return response.json();
}
