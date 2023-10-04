import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' }); // Load environment variables from .env.local

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb

export default prismadb;
