import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
/**
 * Este será o serviço responsável por chamar
 * o prisma cliente e poder usar ele no repositories.
 */