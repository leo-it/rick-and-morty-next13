const api = {
  item: {
    fetch: async (query: string, page: number) => {
      const item = await fetch(
        //iria process.env.API_URL
        `https://rickandmortyapi.com/api/${query}/?page=${page}`
      ).then(
        (res) =>
          res.json() as Promise<{
            info: {
              pages: number;
            };
            results: {
              id: number;
              name: string;
              status: string;
              species: string;
              type: string;
              gender: string;
              // origin: Origin
              // location: Location
              image: string;
              episode: string[];
              url: string;
              // created: string
            }[];
          }>
      );

      return item;
    },
  },
};
export default api;
