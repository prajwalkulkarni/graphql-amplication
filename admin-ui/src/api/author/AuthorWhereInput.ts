import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AuthorWhereInput = {
  books?: BookListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
