import "./style.scss";

interface InputProps {
    placeholder: string;
    type: string;
    value: string;
    id: string;
    name: string;
    style: string;
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ style, placeholder, type, value, handle, id, name }) => {
    return (
        <input
            className={`Input ${style}`}
            placeholder={placeholder}
            type={type}
            value={value}
            id={id}
            name={name}
            onChange={handle}
        />
    );
};

export default Input;
