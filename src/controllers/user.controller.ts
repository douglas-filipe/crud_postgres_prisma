/**
 * Responśavel por chamar as funções
 * dos services e retornar para o usuário
 * respostas em JSON
 */

import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  listUsersService,
  updateUserService,
  userDetailsService,
} from "../services/user.services";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ message: (e as Error).message });
  }
};

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  res.status(200).json(users);
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = await updateUserService(req.body, req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ message: (e as Error).message });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const user = await deleteUserService(req.params.id);
    res.status(204).json(user);
  } catch (e) {
    res.status(400).json({ message: (e as Error).message });
  }
};

export const userDetailsController = async (req: Request, res: Response) => {
  try {
    const user = await userDetailsService(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(404).json({ message: (e as Error).message });
  }
};
