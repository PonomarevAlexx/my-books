import { useState } from "react";
import "./style.css";
import { Button } from "../button/Button";

interface Description {
    description: string;
}

export const ReadMoreDescription: React.FC<Description> = ({ description }) => {
    const [showMore, setShowMore] = useState(false);

    const shortDescription = (description.slice(0, 500) + "...").split("\n").map((el, i) => <p key={i}>{el}</p>);
    const fullDescription = description.split("\n").map((el, i) => <p key={i}>{el}</p>);

    const toggleReadMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            {description.length < 500 || showMore ? fullDescription : shortDescription}
            {description.length > 500 && (
                <Button
                    style="Button"
                    text={!showMore ? "Показать больше" : "Показать меньше"}
                    handler={toggleReadMore}
                />
            )}
        </>
    );
};
