mongo --host "rs0/mongo1,mongo2,mongo3" --eval 'db.users.insert({ "username": "test", "password": "test", "email": " })'