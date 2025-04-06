export interface Person {
  // birthplace: string;
  name: string;
  personid: number;
  role: string;
  // displayorder: number;
  // culture: string;
}

export interface ArtRecord {
  id: number;
  title: string;
  primaryimageurl: string;
  people: Person[];
  description: string;
  
}
