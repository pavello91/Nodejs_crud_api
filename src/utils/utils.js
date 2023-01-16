import { validate, version } from 'uuid';

export const getBodyData = (req) => new Promise((resolve, reject) => {
    try {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            resolve(body);
        });
    } catch (error) {
        reject(error);
    }
});

export const validateUuid = (uuid) => validate(uuid) && version(uuid) === 4;

export const validateBody = (userBody) => {
    const isNameString = (typeof userBody.username === 'string');
    const isAgeNumber = (typeof userBody.age === 'number');
    const isHobbyArray = Array.isArray(userBody.hobbies);

    let isHobbyElString = true;

    if (isHobbyArray && userBody.hobbies.length !== 0) {
        userBody.hobbies.forEach((hobby) => {
            if (typeof hobby !== 'string') {
                isHobbyElString = false;
            }
        });
    }

    return isNameString && isAgeNumber && isHobbyArray && isHobbyElString;
};