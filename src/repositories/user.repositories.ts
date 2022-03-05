/**
 * Este arquivo é responsável por chamar
 * as operações do CRUD
 * CREATE - (Criar)
 * READ   - (Ler)
 * UPDATE - (Atualizar)
 * DElETE - (Deletar)
 *
 * Depois é só chamar estas operações no user.services.ts
 */

import { ICreateUser, IRequestBody } from "../@types/body.types";
import prisma from "../services/prisma.services";

//Cria usuário
export const create = (body: ICreateUser) => {
  return prisma.user.create({ data: body });
};

//Listar todos os usuários
export const findManyUsers = () => {
  return prisma.user.findMany();
};

//Atualizar a conta do usuário
export const update = (body: IRequestBody, id: string) => {
  return prisma.user.update({
    where: { id },
    data: body,
  });
};

//Deletar usuário
export const deleteUser = (id: string) => {
  return prisma.user.delete({ where: { id } });
};

//Procurar usuário pelo id e mostrar suas informações
export const findById = (id: string) => {
  return prisma.user.findUnique({ where: { id } });
};
