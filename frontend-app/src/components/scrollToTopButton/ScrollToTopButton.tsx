import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export const ScrollToTopButton = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isShow && (
                <button className="ScrollToTopButton" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </>
    );
};
