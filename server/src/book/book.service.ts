import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BookServiceBase } from "./base/book.service.base";

@Injectable()
export class BookService extends BookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
