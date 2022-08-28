import { Book } from "../book/Book";

export type Author = {
  books?: Array<Book>;
  createdAt: Date;
  id: string;
  name: string | null;
};
