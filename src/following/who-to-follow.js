import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";


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
                currentUser && followers.length > 0 &&

                    followers.slice(0).reverse().map((user, i) => {
                    if (i < 5) {
                        return <WhoToFollowListItem key={user.username} user={user} currentUser={currentUser}/>
                    }
                    })

            }
            </ul>
        </>
    );
}
export default WhoToFollowComponent;