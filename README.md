# mqtt

Documentation and source code for the departmental mqtt server hosted at https://mqtt.chem.wisc.edu.

To prepare (starting with Ubuntu 20.04)
```
$ apt install docker.io
$ apt install docker-compose
```

This machine needs the following ports to be open to the campus network:
- 80 (http) (used via reverse proxy)
- 1883 (mqtt)
- 8086 (influxdb)

To run:
```
$ docker-compose up -d --build
```

Volumes:

This compose file will create a docker volume `mqtt_influxdb`.
This volume contains the influx database itself and should be backed up.
On the host machine it appears at `/var/lib/docker/volumes/mqtt_influxdb/`.