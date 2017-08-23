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
    echo "Starting FadeCandy"
    nohup /root/fadecandy/bin/fcserver-rpi > /dev/null 2>&1 &
    echo "Starting Pixelnode"
    cd /root/TreeOfLife
    nohup /root/node . > /dev/null 2>/var/log/pixelnode_error.log &
    ;;
  stop)
    echo "Lightcave stopping"
    killall fcserver-rpi
    killall node
    ;;
  restart)
    echo "Lightcave stopping"
    killall fcserver-rpi
    killall node

    echo "Starting FadeCandy"
    nohup /root/fadecandy/bin/fcserver-rpi > /dev/null 2>&1 &
    echo "Starting Pixelnode"
    cd /root/TreeOfLife
    nohup /root/node . > /dev/null 2>/var/log/pixelnode_error.log &
    ;;

  *)
    echo "Usage: /etc/init.d/ {start|stop|restart}"
    exit 1
    ;;
esac

exit 0
