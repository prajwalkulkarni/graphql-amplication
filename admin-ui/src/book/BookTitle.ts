import { Book as TBook } from "../api/book/Book";

export const BOOK_TITLE_FIELD = "name";

export const BookTitle = (record: TBook): string => {
  return record.name || record.id;
};
