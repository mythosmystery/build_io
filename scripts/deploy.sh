#! /bin/bash
git checkout $1
git pull

docker compose down
docker compose up -d --build