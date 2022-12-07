import Button from "react-bootstrap/Button";
import CreateListingModal from "./create-listing-modal";
import {useState} from "react";
import AdminPanelModal from "./admin-panel-modal";

const ModalWrapperButton = ({props}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <Button onClick={() => setModalShow(true)}>
                {!props ?  "Create Listing": "Open Approvals"}
            </Button>
            {!props ? <CreateListingModal show={modalShow}
                                    onHide={() => setModalShow(false)}/> :
                <AdminPanelModal show ={modalShow} onHide={()=> setModalShow(false)}/>

            }
        </div>

    );
}

export default  ModalWrapperButton;