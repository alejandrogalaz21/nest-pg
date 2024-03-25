-- crate a database
CREATE DATABASE shop;

-- show all dbs
SELECT datname FROM pg_database;

SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public' -- Puedes cambiar 'public' por el esquema que desees mostrar
AND table_type = 'BASE TABLE';