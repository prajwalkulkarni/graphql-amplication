import { Author } from "../author/Author";

export type Book = {
  author?: Author | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
