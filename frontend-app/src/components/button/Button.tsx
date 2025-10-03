import "./style.css";

interface ButtonOptions {
    style: string;
    text: string;
    handler: () => void;
}

export const Button: React.FC<ButtonOptions> = ({ style, text, handler }) => {
    return (
        <div className={style}>
            <button className="Button-btn" onClick={handler}>
                {text}
            </button>
        </div>
    );
};
