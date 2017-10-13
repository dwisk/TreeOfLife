#! /bin/bash

# sound.sh <file> <volume>
# echo "$(date): play $1 at $2" >> soundlog.txt


mpg321 Sounds/$1 -g $2 &

exit 0
