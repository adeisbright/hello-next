import Link from "next/link";
import { IGrant } from "../constant/interfaces";


export const Grant = ({ grant } : {grant : IGrant}) => {
    return (
        <div className="relative" key={grant._id}>
            <div className="card-body m-b-1">
                <h3>
                    <Link className="no-decoration" href={"/grants/" + grant._id}>
                    {grant.title}
                    </Link>
                    
                </h3>

                <p>
                    {grant.description.length > 50
                        ? grant.description.substring(0, 50) + "..."
                        : grant.description}
                </p>
                {/* <p 
                    className="remove-grant" 
                    onClick={() => grant.removeGrant(grant._id)}
                    id="pointer"
                >
                    X
                </p> */}
            </div>
        </div>
    );
};
