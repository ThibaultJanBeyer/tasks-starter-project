# tasks-starter-project
A simple boilerplate project (tasks app) that follows best practices:

- Project structure
- Containerization
- Error Handling
- Testing (unit & integration) (e2e tbd)
- Code linting/prettier 
- Input Validations
- API designs

The parts can also be used in isolation!  
The server however is dependant on the db, if you want only one folder, you can very well also move the db folder into the server folder  

## Prerequisites
- `docker` & `docker-compose` (see [cheatsheet > install](https://github.com/ThibaultJanBeyer/cheatsheets/blob/master/docker-cheatsheet.md#install))
- `node` & `git` & `yarn`

## Running

- `yarn start:dev` will run all individual parts in dev mode locally and watch them for reloads on file change
- `yarn start` will build all containers and run them all with docker-compose (I recommend using Kubernetes in production)
- `yarn build` will just build all docker containers

## Docker
All parts are containerized using docker, see `yarn docker:*` for the different commands. If you just want to quickly build and run, `yarn docker:dev` is your friend. It will build the image, create a common network and run the container sync. You can run it in detached mode using `docker:detach`.

To build all and run all containers you can run `yarn start:init` on the root of this repository.


## db/postgres Branch
On main branch we currently have a `web-client`, a `server` and a `db` for database.
### Database
- Postgres
### Server
#### Technology
- Node
- Sequelize (Postgres ORM)
- Testing with Jest
- Typescript
- REST API
### Web Client
#### Technology
- React+Next (via create-next-app)
- Testing with Jest
- Typescript

## Other Branches:

### main

Using mongodb as database and mongoose as orm

### feature/sockets

Includes a chat-app build on socket connection
