# Database

See the projects parent README for more information.

## Notes on production

In production I would recommend using a hosted database, this saves quite some time on maintenance.  
If you still want to run your own:
- Store the credentials securely (currently they just reside in the container for simplicity)
- - The `/bin/init.js` is baked in the image via dockerfile for simplicity
- - The admin credentials are stored in the `/bin/.env` file and sourced on execution
- Use Kubernetes ClusterIP/NodePorts/LoadBalancer instead of `--net=host` (see: [Kubernetes Cheatsheets](https://github.com/ThibaultJanBeyer/cheatsheets/blob/master/kubernetes-cheatsheet.md))
