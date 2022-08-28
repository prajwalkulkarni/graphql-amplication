import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type BookCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  name?: string | null;
};
