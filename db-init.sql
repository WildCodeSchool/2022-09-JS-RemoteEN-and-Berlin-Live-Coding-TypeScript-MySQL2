CREATE TABLE users (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  birthday DATE,
  verified BOOLEAN NOT NULL DEFAULT false,
  height_cm INT,
  email VARCHAR(255) NOT NULL,
  hashed_password VARCHAR(255),
  avatar BLOB
);