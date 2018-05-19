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
    `correction_description` varchar(255)  NULL ,
    `total_score` float  NULL ,
    `parcial_score` float  NULL ,
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
