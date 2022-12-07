import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";
import {faXmarkSquare} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const AdminApprovalItem = ({approval}) => {
    return (
        <div className="p-2 align-items-center d-flex flex-row mb-2 w-100" style={{border: "1px solid lightgray"}}>
            <img style={{height: "75px", width: "75px"}} src={approval.profilePic}/>
            <div className="mt-1 ms-3 d-flex flex-column">
                <h4 className="me-3">{"Approve Vendor Status"}</h4>
                <h5>{"User: " + approval.firstName + " " +approval.lastName}</h5>

            </div>
            <div className="p-0 d-flex flex-row justify-content-center align-content-center">
                <FontAwesomeIcon style={{cursor: "pointer"}} className="ms-3 me-3 wd-font-awesome-hover" fontSize="2.75rem" icon={faCheckSquare} color="darkgreen"/>
                <FontAwesomeIcon className="wd-font-awesome-hover" fontSize="2.75rem" icon={faXmarkSquare} color="red"/>
            </div>
        </div>
    )

}

export default AdminApprovalItem;