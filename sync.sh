
# lan
#rsync -iavzc --omit-dir-times --no-times --no-perms --no-owner --no-group --exclude=.git/ --exclude=node_modules . root@192.168.3.25:/root/TreeOfLife
#rsync -iavzc --omit-dir-times --no-times --no-perms --no-owner --no-group --exclude=.git/ --exclude=node_modules . root@192.168.3.57:/root/TreeOfLife

#wifi
rsync -iavzc --omit-dir-times --no-times --no-perms --no-owner --no-group --exclude=.git/ --exclude=node_modules . root@192.168.42.1:/root/TreeOfLife

#rsync -iavzc --omit-dir-times --no-times --no-perms --no-owner --no-group --exclude=.git/ --exclude=node_modules . root@192.168.3.25:/root/TreeOfLife
#rsync -iavzc --omit-dir-times --no-times --no-perms --no-owner --no-group --exclude=.git/ --exclude=sync.sh --exclude=node_modules root@192.168.42.1:/root/TreeOfLife/ .
