DROP DATABASE bdcheck;
CREATE DATABASE bdcheck;
USE bdcheck;

CREATE TABLE `student` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `name` varchar(255)  NOT NULL ,
    `class` varchar(255)  NOT NULL ,
    `unity` varchar(255)  NOT NULL ,
    `rm` int  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `essay_info` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `theme` varchar(255)  NOT NULL ,
    `type` varchar(255)  NOT NULL ,
    `week` varchar(255)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `essay` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `sudent_id` int  NOT NULL ,
    `info_id` int  NOT NULL ,
    `source` varchar(255)  NOT NULL ,
    `is_corrected` bool  NOT NULL ,
    `correction_description` varchar(255) DEFAULT NULL ,
    `total_score` float DEFAULT NULL,
    `parcial_score` float DEFAULT NULL,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `corrector` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `name` varchar(255)  NOT NULL ,
    `unity` varchar(255)  NOT NULL ,
    `rm` int  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `coordinator` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `name` varchar(255)  NOT NULL ,
    `unity` varchar(255)  NOT NULL ,
    `rm` int  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `user` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `id_ref` int  NOT NULL ,
    `nick` varchar(255)  NOT NULL ,
    `pass` varchar(255)  NOT NULL ,
    `type` int  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

ALTER TABLE `essay` ADD CONSTRAINT `fk_essay_sudent_id` FOREIGN KEY(`sudent_id`)
REFERENCES `student` (`id`);

ALTER TABLE `essay` ADD CONSTRAINT `fk_essay_info_id` FOREIGN KEY(`info_id`)
REFERENCES `essay_info` (`id`);

INSERT INTO student VALUES (0, "Maria Roberto", "1B", "Vila Mariana", "22212223");
INSERT INTO student VALUES (0, "Predo Predregulho Pedroso", "MED1A", "Vila Mariana", "33313233");

INSERT INTO coordinator VALUES (0, "Julison Condenado", "Vila Mariana", "123456789");
INSERT INTO coordinator VALUES (0, "Creusa Condicionador", "Vila Mariana", "987654321");

INSERT INTO corrector VALUES (0, "NPM Install", "Vila Mariana", "1020304012");
INSERT INTO corrector VALUES (0, "Dasença Bento", "Vila Mariana", "1010101112");

INSERT INTO user VALUES (0, 1, "Maria", "senha", 0);
INSERT INTO user VALUES (0, 2, "Predo", "senha", 0);
INSERT INTO user VALUES (0, 1, "Juju", "senha", 2);
INSERT INTO user VALUES (0, 2, "Creusa", "senha", 2);
INSERT INTO user VALUES (0, 1, "npm", "senha", 1);
INSERT INTO user VALUES (0, 2, "dada", "senha", 1);

INSERT INTO essay_info VALUES (0, "Dode Expiatório do sistema", "ENEM", "3");
INSERT INTO essay_info VALUES (0, "Coorporações de ofício Contemporâneos", "FUVEST", "10");
INSERT INTO essay_info VALUES (0, "A manipulação do senso comum", "ITA", "1");

INSERT INTO essay VALUES (0, 1, 1,  "a", false, null, null, null);
INSERT INTO essay VALUES (0, 2, 2,  "b", false, null, null, null);
INSERT INTO essay VALUES (0, 2, 3,  "b", true, "talz tlala", 7, 6.6);
