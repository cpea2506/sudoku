const API = "https://week11-ai.herokuapp.com";

async function getResult(API: string) {
  let response = await fetch(API);
  let data = await response.text();

  return data;
}

export function getAC3(board: string) {
  return getResult(`${API}/ac3/${board}`);
}

export function getBackTrack(board: string) {
  return getResult(`${API}/backtrack/${board}`);
}
