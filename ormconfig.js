module.exports = {
    "name": "default",
    "type": "mysql",
    "logging": true,
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "1234",
    "database": "db_petshop",
    "migrations": ["./src/db/migrations/**.ts"],
    "cli": {
        "migrationsDir": "./src/db/migrations"
    },
    "entities": [
        "./src/modulos/**/models/entidades/**.ts"
    ]
}