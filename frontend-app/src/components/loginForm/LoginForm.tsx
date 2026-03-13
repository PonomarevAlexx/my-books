export const LoginForm = () => {
    return (
        <div>
            <form>
                <label>Email:</label>
                <input type="text" id="email" name="email" />
                <label>Password:</label>
                <input type="text" id="password" name="password" />
                <button>Войти</button>
                <button>Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default LoginForm;
