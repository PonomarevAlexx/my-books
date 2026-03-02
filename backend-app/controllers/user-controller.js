import {
    registrationUser,
    activateLink,
    loginUser,
    logoutUser,
    refreshUserToken,
    getAllUsers,
} from "../service/user-service.js";
import { validationResult } from "express-validator";
import ApiError from "../exceptions/api-error.js";

export async function registration(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("Ошибка при валидации", errors.array()));
        }
        const { email, password } = req.body;
        const userData = await registrationUser(email, password);
        res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
        return res.json(userData);
    } catch (error) {
        next(error);
    }
}

export async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const userData = await loginUser(email, password);
        res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
        return res.json(userData);
    } catch (error) {
        next(error);
    }
}

export async function logout(req, res, next) {
    try {
        const { refreshToken } = req.cookies;
        const token = await logoutUser(refreshToken);
        res.clearCookie("refreshToken");
        return res.json(token);
    } catch (error) {
        next(error);
    }
}

export async function activate(req, res, next) {
    try {
        const link = req.params.link;
        await activateLink(link);
        return res.redirect(process.env.CLIENT_URL);
    } catch (error) {
        next(error);
    }
}

export async function refresh(req, res, next) {
    try {
        const { refreshToken } = req.cookies;
        const userData = await refreshUserToken(refreshToken);
        res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
        return res.json(userData);
    } catch (error) {
        next(error);
    }
}

export async function getUsers(req, res, next) {
    try {
        const users = await getAllUsers();
        return res.json(users);
    } catch (error) {
        next(error);
    }
}
