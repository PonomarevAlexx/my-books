import { Router } from "express";
import { getAllBooks, getBookById } from "../controllers/book-controller.js";
import { getAllAuthors, getAuthorById } from "../controllers/author-controller.js";
import { registration, login, logout, activate, refresh, getUsers } from "../controllers/user-controller.js";
const router = Router();

// Получить всех книг
router.get("/books/:limit", getAllBooks);

// Получить книгу по ID
router.get("/book/:id", getBookById);

// Получить всех авторов
router.get("/authors/:limit", getAllAuthors);

// Получить автора по ID
router.get("/author/:id", getAuthorById);

router.post("/registration", registration);
router.post("/login", login);
router.post("/logout", logout);
router.get("/activate/:link", activate);
router.get("/refresh", refresh);
router.get("/users", getUsers);

export default router;
