/**
 * Services é responsável pela lógica da
 * aplicação, deixando o controller com
 * a responsabilidade de apenas chamar
 * as funções deste service
 */

import { ICreateUser, IRequestBody } from "../@types/body.types";
import {
  create,
  deleteUser,
  findById,
  findManyUsers,
  update,
} from "../repositories/user.repositories";

export const createUserService = (body: ICreateUser) => {
  try {
    return create(body);
  } catch (e) {
    /**
     * Estou capturando qualquer erro da aplicação
     * e mostrando como resposta
     */
    throw new Error((e as Error).message);
  }
};

export const listUsersService = () => {
  return findManyUsers();
};

export const updateUserService = async (body: IRequestBody, id: string) => {
  try {
    //procuro o usuário pelo id
    const user = await findById(id);
    /**
     * Depois verifico se passei o email
     * ou name no body da requisição.
     * Se não passei um dos campos, eu apenas
     * insiro o que já existo no banco de dados.
     * Isto é para impedir a atualização do
     * id do usuário, caso ele passe no body
     */
    const email = body.email || user?.email;
    const name = body.name || user?.name;
    return update({ email, name }, id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const deleteUserService = (id: string) => {
  try {
    return deleteUser(id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const userDetailsService = async (id: string) => {
  try {
    const user = await findById(id);
    if (!user) {
      /**
       * Se o usuário não existir
       * eu crio um erro com alguma
       * mensagem que faça sentido
       */
      throw new Error("User not found");
    }
    return user;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
