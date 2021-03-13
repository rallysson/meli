const URL_API = "http://localhost:8000/api";

export async function getItems(query: string = "") {
  return (await fetch(`${URL_API}/items?query=${query}`)).json();
}

export async function getItem(id: string) {
  return (await fetch(`${URL_API}/items/${id}`)).json();
}
