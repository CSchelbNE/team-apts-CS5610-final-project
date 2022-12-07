import {Modal, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllOpenApprovalsThunk} from "../services/admin-thunk";
import AdminApprovalItem from "./admin-approval-item";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import {getFocalApprovals} from "../reducers/admin-reducer";
import {uuid4} from "uuid4";

const CreateListingModal = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOpenApprovalsThunk());
    }, [])
    const openApprovals = useSelector(state => state.admin.openApprovals);
    const [lowerIndex, setLowerIndex] = useState(0);
    const [upperIndex, setUpperIndex] = useState(4);
    return (
        <div className="p-0">
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Open Approvals
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-2 pb-2">
                    {openApprovals === [] ? "There are currently no requests pending approval" : openApprovals.map((e) =>
                    <AdminApprovalItem key={uuid4()} approval={e}/>)}
                </Modal.Body>
                <Modal.Footer className="d-flex flex-row justify-content-between">
                    <span>{"Showing Approvals "+(lowerIndex+1)+" to "+ (upperIndex)}</span>
                    <div className="p-0 d-flex flex-row align-items-center">
                        <FontAwesomeIcon className="wd-font-awesome-hover me-3" fontSize="1.5rem" icon={faCircleArrowLeft}/>
                        <FontAwesomeIcon className="wd-font-awesome-hover me-3" fontSize="1.5rem" icon={faCircleArrowRight}/>
                        <Button className="ms-3 bg-dark" onClick={props.onHide}>Close</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateListingModal;
