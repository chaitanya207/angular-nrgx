export interface Book {
  id: string;
  valumeInfo: {
    title: string;
    authors: Array<string>;
  };
}
