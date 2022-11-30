import { findByCredentials, findByUsername } from './users-dao.js';
import * as dao from "./users-dao.js"

let currentUser = null
const UserController = async (app) => {

    const createUser = async (req, res) => {
        const user = req.body;
        const actualUser = await dao.createUser(user);
        res.json(actualUser);
    }
    
    const findAllUsers = async (req , res) => {
        const users = await dao.findAllUsers()
        res.json(users);
    }

    const deleteUser = async (req, res) => {
        const uid = req.params.uid;
        const status = await dao.deleteUser(uid);
        res.json(status);
    }
    const updateUser = async(req, res) => {
        const uid = req.params.uid;
        const updates = req.body;
        const status = await dao.updateUser(uid, updates);
        res.json(status);
    }
    const register = async (req, res) => {
        const user = req.body;
        const exisitingUser = await findByUsername(user.username);
        if (exisitingUser) {
            res.sendStatus(403);
            return
        }
        console.log("user----->", user)
        const actualUser = await dao.createUser(user)
        currentUser = actualUser
        res.json(actualUser)
    }

    const login = async (req, res) => {
        const credentials = req.body;
        const exisitingUser = await dao.findByCredentials(credentials.username, credentials.password)
        console.log(exisitingUser)
        if (!exisitingUser) {
            res.sendStatus(403);
            return
        }
        currentUser = exisitingUser;
        res.json(exisitingUser);
    }

    const profile = async (reqm, res) => {
        if (currentUser) {
            res.json(currentUser)
            return;
        }
        res.sendStatus(403)
    }

    const logout = (req, res) => {
        currentUser = null
        res.sendStatus(200)
    };

    app.post("/users", createUser);
    app.get('/users', findAllUsers);
    app.delete('/users/:uid', deleteUser);
    app.put('/users/:uid', updateUser);

    app.post('/register', register)
    app.post('/login', login)
    app.post("/profile", profile)
    app.post("/logout", logout)
}

export default UserController;