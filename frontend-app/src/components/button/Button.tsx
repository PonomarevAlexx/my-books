import "./style.scss";

interface ButtonOptions {
    text: string;
    disabled: boolean;
    variant: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonOptions> = ({ text, disabled, variant, onClick }) => {
    return (
        <button
            disabled={disabled}
            className={`Button Button-${variant} ${disabled ? "Button-disabled" : ""}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
