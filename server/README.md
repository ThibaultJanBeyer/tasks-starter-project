# Server

See the projects parent README for more information.
This runs a simple API server that can be used in conjunction with the web-client.

## Database
The server can be run for local dev setting up dependencies like the DB locally via docker-compose.  
If you build an image, the DB will not be included, because in production you would use an external DB, ideally hosted for you, see the [database readme](../db/README.md).

## Notes on production
- In production you might want to use a hosted database, this saves quite some maintenance  
- Store the credentials securely (what you find in the production.json file)
- Use Kubernetes for deployment and networking instead of `--net=host` on the docker run command in the package.json (see: [Kubernetes Cheatsheets](https://github.com/ThibaultJanBeyer/cheatsheets/blob/master/kubernetes-cheatsheet.md))
- Use a stronger node process manager service like [pm2](https://pm2.keymetrics.io/)

## Docs

- [config](https://github.com/node-config/node-config)
