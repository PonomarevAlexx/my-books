import { useState } from "react";
import { Button } from "../button/Button";
import Input from "../input/Input";
import "./style.scss";
import { loginThunk, registrationThunk } from "@/features/user/model/userThunks";
import { useAppDispatch } from "@/hooks/hooks";

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        dispatch(loginThunk({ email, password }));
        setEmail("");
        setPassword("");
    };

    const handleRegistration = () => {
        dispatch(registrationThunk({ email, password }));
        setEmail("");
        setPassword("");
    };

    return (
        <div className="LoginForm">
            <form className="LoginForm-form" onSubmit={handleSubmit}>
                <div className="LoginForm-item">
                    <label className="LoginForm-item-label" htmlFor="emailInput">
                        Email:
                    </label>
                    <Input
                        style="Input-login"
                        placeholder="Введите Email..."
                        type="text"
                        id="emailInput"
                        name="email"
                        value={email}
                        handle={handleChangeEmail}
                    />
                </div>
                <div className="LoginForm-item">
                    <label className="LoginForm-item-label" htmlFor="passwordInput">
                        Пароль:
                    </label>
                    <Input
                        style="Input-login"
                        placeholder="Введите пароль..."
                        type="password"
                        id="passwordInput"
                        name="password"
                        value={password}
                        handle={handleChangePassword}
                    />
                </div>
                <div className="LoginForm-control">
                    <Button
                        styleForBtn="Button-btn-dark"
                        style="Button"
                        text="Войти"
                        disabled={false}
                        handler={handleLogin}
                    />
                    <Button
                        text="Зарегистрироваться"
                        styleForBtn="Button-btn-dark"
                        style="Button"
                        disabled={false}
                        handler={handleRegistration}
                    />
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
