# Simpre  CRUD API

## Installation
```bash
git clone https://github.com/pavello91/Nodejs_crud_api
cd Nodejs_crud_api
git checkout devel
npm install
```

## Description

To test all functions CRUD API you need to use

1. [Postman](https://www.postman.com) - HTTP client that tests HTTP requests, utilizing a graphical user interface, through which we obtain different types of responses;

2. Сommand line to run the application locally.

You can run the CRUD API in development mode by command in the root directory:

```bash
npm run start:dev
```

You can run the CRUD API in production mode by command in the root directory:

```bash
npm run start:prod
```

## Details

CRUD API path is `api/users`, that has to be used with request method `GET`, `POST`, `PUT`, `DELETE`. How it works:

1. GET `api/users` or `api/users/${userId}` is used to return all users or user with corresponding userId or empty array if there are no users;
2. POST `api/users` is used to create record about new user and store it in memory database;
3. PUT `api/users/${userId}` is used to update record about existing user (it need to send all the fields in the body);
4. DELETE `api/users/${userId}` is used to delete record about existing user from memory database;

Users are stored as objects that have following properties:

- `id` — unique identifier (string, uuid) generated on server side;
- `username` — user's name (string, **required**);
- `age` — user's age (number, **required**);
- `hobbies` — user's hobbies (array of strings or empty array, **required**);

## Start tests

To ckeck test you have to run the CRUD API first by one of the command above, then run tests in the second terminal in the root directory:

```bash
npm run test
```

## Start cluster

To check horizontal scaling for application you shold use this command in the root directory:

```bash
npm run start:multi
```








