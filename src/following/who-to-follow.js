import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../services/users-thunks";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowComponent = ({currentUser}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);

    const {users} = useSelector(state => state.users);

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
                currentUser && users.length > 0 &&

                    users.slice(0).reverse().map((user, i) => {
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