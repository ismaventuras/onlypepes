sudo apt-get update
sudo apt purge -y postgresql postgresql-contrib

sudo rm -rf /etc/postgresql/
sudo rm /rf /var/lib/postgresql
sudo deluser --remove-home postgres
sudo delgroup postgres

sudo apt install -y postgresql


