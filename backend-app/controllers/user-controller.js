import { registrationUser } from "../service/user-service.js";

export async function registration(req, res) {
    try {
        const { email, password } = req.body;
        const userData = await registrationUser(email, password);
        res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
        return res.json(userData);
    } catch (error) {
        console.log(error);
    }
}

export async function login(req, res) {
    try {
    } catch (error) {
        console.log(error);
    }
}

export async function logout(req, res) {
    try {
    } catch (error) {
        console.log(error);
    }
}

export async function activate(req, res) {
    try {
    } catch (error) {
        console.log(error);
    }
}

export async function refresh(req, res) {
    try {
    } catch (error) {
        console.log(error);
    }
}

export async function getUsers(req, res) {
    try {
        res.json(["hi"]);
    } catch (error) {
        console.log(error);
    }
}
