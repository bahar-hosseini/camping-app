-- schema/02_create_urls.sql
DROP TABLE IF EXISTS packages CASCADE;
-- CREATE URLS
CREATE TABLE packages (
  id SERIAL PRIMARY KEY NOT NULL,
  image character varying(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  price INTEGER  NOT NULL DEFAULT 0,
  category INTEGER  NOT NULL DEFAULT 0,
 description character varying(500) NOT NULL,
 tent_description character varying(255) NOT NULL,
 bags_description character varying(255) NOT NULL,
 lantern_description character varying(255) NOT NULL,
 cooking_description character varying(255) NOT NULL,
 location INTEGER  NOT NULL DEFAULT 0
);