import { Router } from "express";
import {
  createTodo,
  deleteToDo,
  getTodos,
  updateToDo,
} from "../controllers/todos";

const router = Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.patch("/:id", updateToDo);
router.delete("/:id", deleteToDo);

export default router;

// Init working on advanced css
