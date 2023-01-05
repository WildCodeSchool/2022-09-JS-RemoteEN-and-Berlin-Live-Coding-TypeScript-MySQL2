import Router from "express";
import { createUser, getAllUsers, getUserByID } from "./handlers";

const UsersRouter = Router();

UsersRouter.get("/", getAllUsers);
UsersRouter.get("/:userId", getUserByID);
UsersRouter.post("/", createUser);
UsersRouter.put("/:userId");
UsersRouter.delete("/:userId");

export default UsersRouter;