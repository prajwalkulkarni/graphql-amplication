/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";
import { BookUpdateInput } from "./BookUpdateInput";

@ArgsType()
class UpdateBookArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;
  @Field(() => BookUpdateInput, { nullable: false })
  data!: BookUpdateInput;
}

export { UpdateBookArgs };