import { UserModel } from "../models/user-model.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import MailService from "./mail-service.js";
import { findToken, generateTokens, removeToken, saveToken, validateRefreshToken } from "./token-service.js";
import { UserDto } from "../dtos/user-dto.js";
import ApiError from "../exceptions/api-error.js";

export async function registrationUser(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
        throw ApiError.BadRequest(`Пользователь с почтовым ящиком ${email} уже существует!`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuidv4();

    const user = await UserModel.create({ email, password: hashPassword, activationLink });
    const mailService = new MailService();
    await mailService.sendActivationMail(email, `${process.env.API_URL}/activate/${activationLink}`);

    const userDto = new UserDto(user);
    const tokens = generateTokens({ ...userDto });
    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto,
    };
}

export async function activateLink(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
        throw ApiError.BadRequest("Неккоректная ссылка активации");
    }

    user.isActivated = true;
    await user.save();
}

export async function loginUser(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw ApiError.BadRequest("Пользователь с таким email не найден");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
        throw ApiError.BadRequest("Неверный пароль!");
    }
    const userDto = new UserDto(user);
    const tokens = generateTokens({ ...userDto });
    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto,
    };
}

export async function logoutUser(refreshToken) {
    const token = await removeToken(refreshToken);
    return token;
}

export async function refreshUserToken(refreshToken) {
    if (!refreshToken) {
        throw ApiError.UnauthorizedError();
    }

    const userData = validateRefreshToken(refreshToken);
    const tokenFomDb = await findToken(refreshToken);
    if (!userData || !tokenFomDb) {
        throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = generateTokens({ ...userDto });
    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto,
    };
}

export async function getAllUsers() {
    const users = UserModel.find();
    return users;
}
