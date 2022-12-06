import Button from "react-bootstrap/Button";
import CreateListingModal from "./create-listing-modal";
import {useState} from "react";

const ModalWrapperButton = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Button onClick={() => setModalShow(true)}>
                Create Listing
            </Button>
            <CreateListingModal  show={modalShow}
                                     onHide={() => setModalShow(false)}/>
        </div>

    );
}

export default  ModalWrapperButton;