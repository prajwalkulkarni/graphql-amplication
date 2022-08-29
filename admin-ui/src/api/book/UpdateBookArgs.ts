import { BookWhereUniqueInput } from "./BookWhereUniqueInput";
import { BookUpdateInput } from "./BookUpdateInput";

export type UpdateBookArgs = {
  where: BookWhereUniqueInput;
  data: BookUpdateInput;
};
