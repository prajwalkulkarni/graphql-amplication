import { BookWhereInput } from "./BookWhereInput";

export type BookListRelationFilter = {
  every?: BookWhereInput;
  some?: BookWhereInput;
  none?: BookWhereInput;
};
