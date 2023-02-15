# Introduction

This repository is for a Witsound Technologies technical test.

The test consists of 2 small parts.

## Client

Creation of a form with React and typescript with a single text field called "name" and a submit button.

Clicking the submit button will make an http post request to our server `http://localhost:3000/name`

After making the post request, a list of names obtained with a get request to our server will be displayed: `http://localhost:3000/name`

We will be able to find the entire environment already prepared in the "Client" folder. Don't worry about the style of the form.

## Server

Creation of 2 http endpoints on our server to be able to resolve our client's requests. We are going to use sqllite to store these users (everything is already installed and prepared, you just need to program it).

These 2 routes will be _(already created at `server/routes/index.ts`)_:

- http get `/name`: we are going to get all the names of the db and return them

- http post `/name`: we are going to save a name in the DB, validating that it does not start with Z.

I propose to use the "controllers" folder to put the handlers of the different routes.

If you need to create other components or folders, feel free.

In this part it is important to take into account an architecture that allows us to change the database if necessary.

Try to develop with clean architectures and patterns like SOLID in mind.

### Help with Sqlite

There is a file called `server/db/example.ts` which shows how to access the database in case you don't have previous experience with sqlite.

# Requisites

- Nodejs. The latest LTS should be fine.

# How to start

1. Clone this repository

2. install the dependencies with `yarn install`

run the project with `yarn start`. This will start a server at port `3000` which corresponds to the server folder and another server to port `8000` which corresponds to the client part.

- Client: [localhost:8000](http://localhost:8000).
- Server: [localhost:3000](http://localhost:3000).

**It is NOT necessary to restart the server when files are changed, the system will do it by itself.**

# Technologies in the project

- TSX as runtime to run the server without having to transpile the typescript
- express as http server
- better-sqlite as access to sqlite database.

- React as front library
- vite as a react and typescript transpiler
