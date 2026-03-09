import { setPerPage } from "@/features/filters/model/filtersSlice";
import type { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import "./style.scss";

export const Select = () => {
    const dispatch = useDispatch();

    const handlePerPage = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPerPage(+event.target.value));
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <select name="limitPerPage" className="Select" onChange={handlePerPage}>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
            <option value={100}>100</option>
        </select>
    );
};
