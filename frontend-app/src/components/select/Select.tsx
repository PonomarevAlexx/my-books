import type { ChangeEvent } from "react";
import "./style.scss";
import { useQueryFilteres } from "@/hooks/useQueryFilteres";

export const Select = () => {
    const {  setLimit, limit } = useQueryFilteres();

    const handlePerPage = (event: ChangeEvent<HTMLSelectElement>) => {
        setLimit(Number(event.target.value))
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <select value={limit} name="limitPerPage" className="Select" onChange={handlePerPage}>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
            <option value={100}>100</option>
        </select>
    );
};
