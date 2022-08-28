import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BookWhereInput = {
  author?: AuthorWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
