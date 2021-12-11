export type Parking =
  | {
      type: 'way';
      id: number;
      nodes: number[];
      tags: {
        [key: string]: string;
      };
    }
  | {
      id: number;
      lat: number;
      lon: number;
    };
