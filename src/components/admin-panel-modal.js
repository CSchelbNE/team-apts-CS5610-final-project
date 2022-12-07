import {Modal, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SearchBarCreate from "./search-bar-create";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createAlbumListingThunk} from "../services/discogs-thunk";

const CreateListingModal = (props) => {
    const currentUser = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();
    return (
        <div className="p-0">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Open Approvals
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-2 pb-0">

                </Modal.Body>
                <Modal.Footer>
                    <Button className="bg-dark" onClick={() => {}}>Submit</Button>
                    <Button className="bg-dark" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateListingModal;
