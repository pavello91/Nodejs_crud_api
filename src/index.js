import http from 'http'
import { config } from 'dotenv';
import { resolve } from 'path';
import { cwd } from 'process';
import * as UserController from './controllers/userController.js';
import { validateUuid } from './utils/utils.js';

config({ path: resolve(cwd(), '.env') });


export const startServer = () => {
    const server = http.createServer(async(req, res) => {
        try {
            const userId = req.url.split('/')[3];

            if (req.url === '/api/users') {
                switch (req.method) {
                    case 'GET':
                        await UserController.getUsers(req, res);
                        break;
                    case 'POST':
                        await UserController.create(req, res);
                        break;
                    default:
                        break;
                }
            } else if (userId) {
                if (validateUuid(userId)) {
                    switch (req.method) {
                        case 'GET':
                            await UserController.getById(req, res, userId);
                            break;
                        case 'PUT':
                            await UserController.update(req, res, userId);
                            break;
                        case 'DELETE':
                            await UserController.remove(req, res, userId);
                            break;
                        default:
                            break;
                    }
                } else {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Invalid ID format' }));
                }
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Requested address doesn`t exist' }));
            }
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Error on the server side' }));
        }
    });

    const { PORT } = process.env;

    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();