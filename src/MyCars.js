import {  MdEditSquare,  MdCheckBox } from "react-icons/md";

export const MyCars = ({text, updatingInInput, deleteCar}) => {
    return(
        <div>
            <p>{text}</p>
            <MdEditSquare onClick={updatingInInput}/>
            < MdCheckBox onClick={deleteCar} />
        </div>
    )
}