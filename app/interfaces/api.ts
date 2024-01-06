
  
  export interface ICharacter {
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
      image: string;
      episode: string[];
      url: string;
    }[];
  }
  