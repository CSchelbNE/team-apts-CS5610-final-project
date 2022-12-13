import React from "react";

const WhoToFollowComponent = ({currentUser, followers}) => {
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h3>Who To Follow</h3>
                </li>
            {
                !currentUser &&
                <>
                    <li className="list-group-item">
                        Please log in...
                    </li>
                </>

            }
            {
                currentUser &&
                <>

                </>
            }
            </ul>
        </>
    );
}
export default WhoToFollowComponent;