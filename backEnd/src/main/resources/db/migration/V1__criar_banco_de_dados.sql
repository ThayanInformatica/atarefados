CREATE TABLE usuario_login (
  id_login INT NOT NULL AUTO_INCREMENT,
  login VARCHAR(80) NOT NULL,
  senha VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_login));

INSERT INTO usuario_login(id_login, login, senha) VALUES (1, 'Thayan', '123456');