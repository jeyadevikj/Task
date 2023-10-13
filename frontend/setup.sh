# Store workspace public IP to config file
IP_VAR="$(curl http://checkip.amazonaws.com/)"
CONFIG='{"workspaceIp": "http://'"$IP_VAR"':8082"}'
echo $CONFIG > src/ipConfig.json