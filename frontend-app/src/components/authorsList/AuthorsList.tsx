import { useAppSelector } from "../../hooks/hooks";
import { selectAllAuthors } from "../../store/slices/authors-slice";
import { AuthorItem } from "../authorItem/AuthorItem";
import "./style.css";

const AuthorsList = () => {
    const authorsList = useAppSelector(selectAllAuthors);

    return (
        <div className="AuthorsList">
            {authorsList.map((el) => {
                return <AuthorItem id={el._id} cover={el.photo} key={el._id} name={el.name} />;
            })}
        </div>
    );
};

export default AuthorsList;
