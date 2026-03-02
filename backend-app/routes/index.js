import { Router } from "express";
import { getAllBooks, getBookById } from "../controllers/book-controller.js";
import { getAllAuthors, getAuthorById } from "../controllers/author-controller.js";
import { registration, login, logout, activate, refresh, getUsers } from "../controllers/user-controller.js";
import { body } from "express-validator";
import authMiddleware from "../middlewares/auth-middleware.js";
const router = Router();

// Получить всех книг
router.get("/books/:limit", getAllBooks);

// Получить книгу по ID
router.get("/book/:id", getBookById);

// Получить всех авторов
router.get("/authors/:limit", getAllAuthors);

// Получить автора по ID
router.get("/author/:id", getAuthorById);

router.post("/registration", body("email").isEmail(), body("password").isLength({ min: 3, max: 16 }), registration);
router.post("/login", login);
router.post("/logout", logout);
router.get("/activate/:link", activate);
router.get("/refresh", refresh);
router.get("/users", authMiddleware, getUsers);

export default router;
