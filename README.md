# mqtt

Documentation and source code for departmental mqtt server hosted at https://mosquitto.chem.wisc.edu.

To prepare (starting with Ubuntu 20.04)
```
$ apt install docker.io
$ apt install docker compose
```

This machine needs the following ports to be open to the campus network:
- 80 (http)
- 1883 (mqtt)
- 8086 (influxdb)

To run:
```
$ docker-compose up --build
```