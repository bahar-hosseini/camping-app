DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages(
  id SERIAL PRIMARY KEY NOT NULL,
   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  package_id INTEGER REFERENCES packages(id) ON DELETE CASCADE,
  message character varying(500),
  date_sent DATE
);
