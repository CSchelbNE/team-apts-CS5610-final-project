import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../services/users-thunks";
import UserItem from "./user-item";
import "./index.css";

let once = true;

const UsersListComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);

    const {users} = useSelector(state => state.users);
    // const [userArray, setUserArray] = useState([]);

    // if (users.length >= 3 && once) {
    //     let newArray = [];
    //     for (let i = 0; i < 3; i++) {
    //         newArray.push(users[users.length - 1 - i]);
    //     }
    //     console.log(newArray);
    //     setUserArray(newArray);
    //     once = false;
    // }
    // console.log("userArray");
    // console.log(userArray);

    return(
        <>
            <ul className="list-group">
                {   users.length > 0 &&
                    users.slice(0).reverse().map((user, i) => {
                        if (i < 5) {
                            return <UserItem key={user.username} user={user}/>
                        }
                    })
                }
            </ul>
        </>
    );
}
export default UsersListComponent;