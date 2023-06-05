#!/bin/bash
# How to use
#   chmod +x setup_postgres.sh
#   set variables on .env files

#sudo apt-get update
#sudo apt install -y postgresql

source .env

username="$POSTGRES_USER"
password="$POSTGRES_PASSWORD"
db_name="$POSTGRES_DB"

sudo -u postgres psql -c "CREATE USER $username WITH ENCRYPTED PASSWORD '$password';"
sudo -u postgres psql -c "CREATE DATABASE $db_name OWNER $username;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $db_name TO $username;"
sudo -u postgres psql -c "ALTER USER $username CREATEDB;"

echo "PostgreSQL user created:"
