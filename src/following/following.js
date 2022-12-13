import React, {useEffect} from "react";
import FollowingListItem from "./following-list-item";
import {useDispatch, useSelector} from "react-redux";
import {getAllFollowersThunk} from "../services/following-thunk";

const FollowingComponent = ({currentUser}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllFollowersThunk());
    }, []);

    const {followingUsers} = useSelector(state => state.following);

    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h3>Following</h3>
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
                    currentUser && followingUsers.length > 0 &&

                    followingUsers.slice(0).reverse().map((user, i) => {
                        if (i < 10) {
                            return <FollowingListItem key={user.username} user={user} currentUser={currentUser}/>
                        }
                    })

                }
            </ul>
        </>
    );
}
export default FollowingComponent;