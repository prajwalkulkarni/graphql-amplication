import { BookCreateNestedManyWithoutAuthorsInput } from "./BookCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  books?: BookCreateNestedManyWithoutAuthorsInput;
  name?: string | null;
};
