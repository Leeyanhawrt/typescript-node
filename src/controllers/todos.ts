import { RequestHandler } from "express";
import { ToDo } from "../models/todo";

// export const createTodo = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {};

const TODOS: ToDo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newToDo = new ToDo(Math.random().toString(), text);

  TODOS.push(newToDo);

  res.status(201).json({ message: "Created the todo", createTodo: newToDo });
};
