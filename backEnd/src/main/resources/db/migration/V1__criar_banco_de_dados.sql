-- Sempre que criar tabela neste arquivo SQL, dropar o database(ou a tabela "flyway_schema_history") e statar novamente a aplicação
-- Fazer isto para não da conflito com o flyway com a tabela que o flyway cria em schemas dentro do banco
CREATE TABLE usuario_login
(
    id_login INT                NOT NULL AUTO_INCREMENT,
    login    VARCHAR(80) UNIQUE NOT NULL,
    senha    VARCHAR(100)       NOT NULL,
    PRIMARY KEY (id_login)
);

INSERT INTO usuario_login(id_login, login, senha)
VALUES (1, 'Thayan', '123456');


/*         tabela de usuarios        */
CREATE TABLE usuario
(
    id_usuario      INT         NOT NULL AUTO_INCREMENT,
    nome_usuario    VARCHAR(60) NOT NULL,
    data_nascimento DATE        NOT NULL,
    id_login        INT UNIQUE  NOT NULL,
    CONSTRAINT usuario_pk
        PRIMARY KEY (id_usuario),
    CONSTRAINT usuario_usuario_login_id_login_fk
        FOREIGN KEY (id_login) REFERENCES usuario_login (id_login)
);

INSERT INTO usuario(id_usuario, nome_usuario, data_nascimento, id_login)
VALUES (1, 'Thayan Alves Pereira', '2020-02-02', 1);

CREATE TABLE estado_tarefa
(
    id_estado_tarefa INT    NOT NULL AUTO_INCREMENT,
    pendente         BOOLEAN DEFAULT 0,
    concluida        BOOLEAN DEFAULT 0,
    denuncia         BOOLEAN DEFAULT 0,
    nao_feita        BOOLEAN DEFAULT 0,
    data_conclusao   DATETIME  NULL,
    CONSTRAINT estado_tarefa_pk
        PRIMARY KEY (id_estado_tarefa)
);

CREATE TABLE tarefas
(
    id_tarefa        BIGINT       NOT NULL AUTO_INCREMENT,
    nome_tarefa      VARCHAR(60)  NOT NULL,
    desricao         VARCHAR(255) NOT NULL,
    data             DATETIME         NOT NULL,
    id_usuario       INT          NOT NULL,
    id_estado_tarefa INT          NOT NULL,
    CONSTRAINT tarefas_pk
        PRIMARY KEY (id_tarefa),
    CONSTRAINT usuario_tarefa_id_tarefa_fk
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
    CONSTRAINT estado_tarefa_id_tarefa_estado_fk
        FOREIGN KEY (id_estado_tarefa) REFERENCES estado_tarefa (id_estado_tarefa)
);

INSERT INTO estado_tarefa(id_estado_tarefa, pendente, concluida, denuncia, nao_feita, data_conclusao)
VALUES (1, true, false, false, false, null);

INSERT INTO estado_tarefa(id_estado_tarefa, pendente, concluida, denuncia, nao_feita, data_conclusao)
VALUES (2, true, false, false, false, null);

INSERT INTO estado_tarefa(id_estado_tarefa, pendente, concluida, denuncia, nao_feita, data_conclusao)
VALUES (3, true, false, false, false, null );

INSERT INTO tarefas(id_tarefa, nome_tarefa, desricao, data, id_usuario, id_estado_tarefa)
VALUES (1, 'Larva Louça', 'Lavar as louças da pia e as panelas', '2020-03-07', 1, 1);

INSERT INTO tarefas(id_tarefa, nome_tarefa, desricao, data, id_usuario, id_estado_tarefa)
VALUES (2, 'Limpar a casa', 'Limpar a casa para passar o pano', '2020-03-07', 1, 2);

INSERT INTO tarefas(id_tarefa, nome_tarefa, desricao, data, id_usuario, id_estado_tarefa)
VALUES (3, 'lavar o banheiro', 'Lavar o banheiro e esfregar as paredes', '2020-03-07', 1, 3);

CREATE TABLE denuncia_tarefa
(
    id_denuncia   INT          NOT NULL AUTO_INCREMENT,
    descricao     VARCHAR(255) NOT NULL,
    data_denuncia DATETIME         NOT NULL,
    id_tarefa     BIGINT       NOT NULL,
    id_usuario    INT          NOT NULL,
    CONSTRAINT denuncia_tarefa_pk
        PRIMARY KEY (id_denuncia),
    CONSTRAINT denuncia_tarefa_tarefa_id_tarefa_fk
        FOREIGN KEY (id_tarefa) REFERENCES tarefas (id_tarefa),
    CONSTRAINT denuncia_tarefa_usuario_id_usuario_fk
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
);