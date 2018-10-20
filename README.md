# Simple node watcher

This simple node-watcher will watch for the change in the file specified via `FILE_LOCATION` and triggers an email with the data that's been changed.

## ENV parameters:

| Environment Varialbe | Description |
| -------------------- | ----------- |
| SMTP_HOST | smtp host address|
| SMTP_PORT | smtp host port number |
| TO_ADDRESS | Receiver's address |
| FROM_ADDRESS | From address |
| FILE_LOCATION | location of the file to watch for. |

## Docker
To use this image as a docker, follow the below steps.

```shell
docker run --name file-watcher -e SMTP_HOST=domain.com -e SMTP_PORT=25 -e SMTP_PORT=25 -e TO_ADDRESS=to@domain.com -e FROM_ADDRESS=from@domain.com -e FILE_LOCATION=<LOCATION_OF_FILE> -d gkarthics/file-watcher
```