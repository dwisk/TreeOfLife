
./sync.sh

fswatch -o . | xargs -n1 ./sync.sh
