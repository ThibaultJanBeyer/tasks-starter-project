# Web-Client

See the projects parent README for more information.

This runs a simple web-client using next.js that can be used in conjunction with the API server.

## Notes on production
- Store the credentials securely
- Use Kubernetes for deployment and networking instead of `--net=host` on the docker run command in the package.json (see: [Kubernetes Cheatsheets](https://github.com/ThibaultJanBeyer/cheatsheets/blob/master/kubernetes-cheatsheet.md))
