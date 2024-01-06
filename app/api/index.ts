import { ICharacter } from "./../interfaces/api";

const api = {
  fetch: async (query: string, page: number) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const item = await fetch(
      //iria process.env.API_URL
      `https://rickandmortyapi.com/api/${query}/?page=${page}`
    ).then((res) => res.json() as Promise<ICharacter>);

    return item;
  },
  search: (query: string) =>
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${query}
      `
    ).then((res) => res.json() as Promise<ICharacter>),
};
export default api;
