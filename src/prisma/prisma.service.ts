import { PrismaClient } from "@prisma/client/extension";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaService{
    public prismaClient: PrismaClient;
    constructor() {
        this.prismaClient = new PrismaClient();
    }
}