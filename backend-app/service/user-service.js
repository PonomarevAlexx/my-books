import { UserModel } from "../models/user-model.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import MailService from "./mail-service.js";
import { generateTokens, saveToken } from "./token-service.js";
import { UserDto } from "../dtos/user-dto.js";

export async function registrationUser(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
        throw new Error(`Пользователь с почтовым ящиком ${email} уже существует!`);
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
