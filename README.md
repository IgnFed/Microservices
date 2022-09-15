# Microservice API system with Load Balancer and Socket.io.

---

### You will need to install [docker-compose](https://docs.docker.com/compose/install/), [docker engine](https://docs.docker.com/engine/install/) and [docker-desktop](https://docs.docker.com/desktop/install/windows-install/) base on your OS.

If you are using windows see [(WSL) windows requeriments](https://docs.docker.com/desktop/install/windows-install/#system-requirements)

## USAGE

1.  <code>npm i</code>
1.  <code>docker-compose up -d redis db</code>
1.  Go to <code>cd ./microservice</code> and <code>npm run start</code> (You can run multiple instances of **microservice** and see the load balance in action when many request are attached)
1.  Go to <code>cd ./gateway</code> and <code>npm run start</code>
1.  Go to <code>cd ./cliente</code> and <code>npm run start</code> (you can initialize many instances of **cliente**)

**Uncomment the setInterval function on [cliente](/cliente/index.js) and see Bull's Load Balance in action attaching many request per second in differents <code>microservice</code> instances**
