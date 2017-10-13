#! /bin/sh
# /etc/init.d/blah
#

### BEGIN INIT INFO
# Provides:          pixelnode
# Required-Start:
# Required-Stop:
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description:  pixelnode-service
# Description:       Enable service provided by daemon.
### END INIT INFO


# Carry out specific functions when asked to by the system
case "$1" in
  start)
    echo "Starting Pixelnode"
    cd /SoLM/TreeOfLife
    nohup /SoLM/node sound > /dev/null 2>/var/log/pixelnode_error.log &
    ;;
  stop)
    echo "Pixelnode stopping"
    killall node
    ;;
  restart)
    echo "Pixelnode stopping"
    killall node

    echo "Starting Pixelnode"
    cd /SoLM/TreeOfLife
    nohup /SoLM/node sound > /dev/null 2>/var/log/pixelnode_error.log &
    ;;

  *)
    echo "Usage: /etc/init.d/ {start|stop|restart}"
    exit 1
    ;;
esac

exit 0
