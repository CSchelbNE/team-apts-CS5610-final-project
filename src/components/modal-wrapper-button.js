import Button from "react-bootstrap/Button";
import CreateListingModal from "./create-listing-modal";
import {useState} from "react";
import AdminPanelModal from "./admin-panel-modal";
import {useDispatch} from "react-redux";
import {clearListings} from "../reducers/discog-reducer";

const ModalWrapperButton = ({props}) => {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();

    // PASS IN "ADMIN" OR ANY STRING AS PROPS TO MAKE THE ADMIN MODAL APPEAR,
    // OTHERWISE DEFAULTS TO THE CREATE LISTINGS MODAL
    return (
        <div>
            {!props ?
                <Button className="bg-dark rounded-pill mt-2 border-dark" onClick={() => setModalShow(true)}>
                    Create Listing
                </Button> :
                <div onClick={() => setModalShow(true)} className="p-0">
                    Admin
                </div>
            }
            {!props ? <CreateListingModal show={modalShow}
                                    onHide={() => {
                                        dispatch(clearListings())
                                        setModalShow(false)
                                    }}/> :
                <AdminPanelModal show ={modalShow} onHide={()=> setModalShow(false)}/>
            }
        </div>

    );
}

export default  ModalWrapperButton;