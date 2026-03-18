import "./style.scss";

interface ButtonOptions {
    style: string;
    text: string;
    disabled: boolean;
    handler: () => void;
}

export const Button: React.FC<ButtonOptions> = ({ style, text, disabled, handler }) => {
    return (
        <div className={style}>
            <button
                disabled={disabled}
                className={disabled ? "Button-btn-disabled" : "Button-btn"}
                onClick={handler}
            >
                {text}
            </button>
        </div>
    );
};
