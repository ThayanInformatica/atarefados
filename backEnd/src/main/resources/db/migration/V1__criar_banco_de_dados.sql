-- Sempre que criar tabela neste arquivo SQL, dropar o database(ou a tabela "flyway_schema_history") e statar novamente a aplicação
-- Fazer isto para não da conflito com o flyway com a tabela que o flyway cria em schemas dentro do banco
CREATE TABLE usuario_login
(
    id_login INT          NOT NULL AUTO_INCREMENT,
    login    VARCHAR(80) UNIQUE NOT NULL,
    senha    VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_login)
);

INSERT INTO usuario_login(id_login, login, senha)
VALUES (1, 'Thayan', '123456');


 /*         tabela de usuarios        */
create table usuario
(
    id_usuario      int         not null auto_increment,
    nome_usuario    VARCHAR(60) not null,
    data_nascimento DATE        not null,
    id_login        int         not null,
    constraint usuario_pk
        primary key (id_usuario),
    constraint usuario_usuario_login_id_login_fk
        foreign key (id_login) references usuario_login (id_login)
);

INSERT INTO usuario(id_usuario, nome_usuario, data_nascimento, id_login)
VALUES (1, 'Thayan Alves Pereira', '2020-02-02', 1);