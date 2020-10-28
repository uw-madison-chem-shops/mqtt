# mqtt

Documentation and source code for departmental mqtt server hosted at https://mosquitto.chem.wisc.edu.

To run:
```
$ docker-compose up
```

## mosquitto

https://mosquitto.org/

## influxdb

https://www.influxdata.com/

## bridge daemon

`write_influx.py`

move service file to /etc/systemd/system/
`systemctl enable write-influx.service`
`systemctl start write-influx.service`
now it will run forever