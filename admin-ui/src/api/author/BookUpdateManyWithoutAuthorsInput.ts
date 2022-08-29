import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";

export type BookUpdateManyWithoutAuthorsInput = {
  connect?: Array<BookWhereUniqueInput>;
  disconnect?: Array<BookWhereUniqueInput>;
  set?: Array<BookWhereUniqueInput>;
};
