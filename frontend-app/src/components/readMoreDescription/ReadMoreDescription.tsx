import { useState } from "react";
import "./style.scss";
import { Button } from "../button/Button";
import { ButtonLayout } from "../buttonLayout/ButtonLayout";

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
                <ButtonLayout className="ButtonLayout_center">
                    <Button
                        variant="light"
                        disabled={false}
                        text={!showMore ? "Показать больше" : "Показать меньше"}
                        onClick={toggleReadMore}
                    />
                </ButtonLayout>
            )}
        </>
    );
};
