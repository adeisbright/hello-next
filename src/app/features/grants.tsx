import { Grant } from "./grant";
import {  IGrant , IGrantListProps } from "../constant/interfaces" 


export const GrantList = ({ grants} : {grants : IGrant[]}) => {
    return (
        <div className="framer pad-tb-20 d-grid grid-3">
            {grants.map((grant : IGrant) => (
                <Grant
                    grant={grant} 
                />
            ))}
        </div>
    );
};
