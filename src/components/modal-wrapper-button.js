import Button from "react-bootstrap/Button";
import CreateListingModal from "./create-listing-modal";
import {useState} from "react";
import AdminPanelModal from "./admin-panel-modal";

const ModalWrapperButton = ({props}) => {
    const [modalShow, setModalShow] = useState(false);

    // PASS IN "ADMIN" OR ANY STRING AS PROPS TO MAKE THE ADMIN MODAL APPEAR,
    // OTHERWISE DEFAULTS TO THE CREATE LISTINGS MODAL
    return (
        <div>
            <Button className="bg-dark" onClick={() => setModalShow(true)}>
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