/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookWhereInput } from "./BookWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BookListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BookWhereInput,
  })
  @ValidateNested()
  @Type(() => BookWhereInput)
  @IsOptional()
  @Field(() => BookWhereInput, {
    nullable: true,
  })
  every?: BookWhereInput;

  @ApiProperty({
    required: false,
    type: () => BookWhereInput,
  })
  @ValidateNested()
  @Type(() => BookWhereInput)
  @IsOptional()
  @Field(() => BookWhereInput, {
    nullable: true,
  })
  some?: BookWhereInput;

  @ApiProperty({
    required: false,
    type: () => BookWhereInput,
  })
  @ValidateNested()
  @Type(() => BookWhereInput)
  @IsOptional()
  @Field(() => BookWhereInput, {
    nullable: true,
  })
  none?: BookWhereInput;
}
export { BookListRelationFilter };