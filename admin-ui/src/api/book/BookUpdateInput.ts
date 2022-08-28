import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type BookUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  name?: string | null;
};
