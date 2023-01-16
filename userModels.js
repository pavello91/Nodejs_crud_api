import { v4 as uuidv4 } from 'uuid';
import { users } from '../data/users';

export const getAllUsers = () => new Promise((resolve, reject) => {
    resolve(users);
});

export const createUser = (user) => new Promise((resolve, reject) => {
    const newUser = { id: uuidv4(), ...user };
    users.push(newUser);
    resolve(newUser);
});

export const getUserById = (id) => new Promise((resolve, reject) => {
    const condidate = users.find((user) => user.id === id);

    if (condidate) {
        resolve(condidate);
    } else {
        reject();
    }
});

export const updateUser = (updatedUser, id) => new Promise((resolve, reject) => {
    const condidateIndex = users.findIndex((user) => user.id === id);
    if (condidateIndex !== -1) {
        users[condidateIndex] = { id, ...updatedUser };
        resolve(users[condidateIndex]);
    } else {
        reject();
    }
});

export const deleteUser = (id) => new Promise((resolve, reject) => {
    const condidateIndex = users.findIndex((user) => user.id === id);
    if (condidateIndex !== -1) {
        users.splice(condidateIndex, 1);
        resolve();
    } else {
        reject();
    }
});