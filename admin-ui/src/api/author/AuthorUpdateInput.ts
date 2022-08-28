import { BookUpdateManyWithoutAuthorsInput } from "./BookUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  books?: BookUpdateManyWithoutAuthorsInput;
  name?: string | null;
};
