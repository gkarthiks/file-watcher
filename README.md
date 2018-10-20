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