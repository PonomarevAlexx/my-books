import "./style.css";

interface ButtonOptions {
    text: string;
    handler: () => void;
}

export const Button: React.FC<ButtonOptions> = ({ text, handler }) => {
    return (
        <div className="Button">
            <button className="Button-btn" onClick={handler}>
                {text}
            </button>
        </div>
    );
};
