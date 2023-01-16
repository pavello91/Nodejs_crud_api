import { getBodyData, validateBody } from '../utils/utils.js';
import * as User from '../models/user.js';

export const getUsers = async(req, res) => {
    try {
        const users = await User.getAllUsers();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Bad request' }));
    }
};

export const create = async(req, res) => {
    try {
        const body = await getBodyData(req);
        const { username, age, hobbies } = JSON.parse(body);

        if (!username || !age || !hobbies) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Bad request' }));
        } else {
            const user = { username, age, hobbies };

            if (!validateBody(user)) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Bad request' }));
            } else {
                const newUser = await User.createUser(user);

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newUser));
            }
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Bad request' }));
    }
};

export const getById = async(req, res, id) => {
    try {
        const condidate = await User.getUserById(id);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(condidate));
    } catch (error) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not found' }));
    }
};

export const update = async(req, res, id) => {
    try {
        const body = await getBodyData(req);
        const { username, age, hobbies } = JSON.parse(body);

        if (!username || !age || !hobbies) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Missing required fields in request body' }));
        } else {
            const condidate = { username, age, hobbies };

            if (!validateBody(condidate)) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'One of the body properties is in the wrong format' }));
            } else {
                const updatedUser = await User.updateUser(condidate, id);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(updatedUser));
            }
        }
    } catch (error) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not found' }));
    }
};

export const remove = async(req, res, id) => {
    try {
        await User.deleteUser(id);
        res.writeHead(204, { 'Content-Type': 'application/json' });
        res.end();
    } catch (error) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not found' }));
    }
};