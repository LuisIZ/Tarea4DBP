drop database if exists pokedex;

create database pokedex;

show databases;

use pokedex;

CREATE TABLE pokemon (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(500) NOT NULL,
    altura float NOT NULL,
    categoria varchar(500) NOT NULL,
    peso float NOT NULL,
    habilidad varchar(500) NOT NULL,
    tipo varchar(500) NOT NULL,
    url varchar(1000) NOT NULL,
    PRIMARY KEY (id)
);

desc pokemon;

-- Altura en cm
-- Peso en kg

INSERT INTO pokemon (nombre, altura, categoria, peso, habilidad, tipo, url) VALUES ('Bulbasaur',5.08,'Seed',6.89,'Overgrow','Grass&Venom','https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'),('Charmander',5.08,'Lizard',8.48,'Blaze','Fire','https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'),('Squirtle',2.54,'Tiny_Turtle',8.98,'Torrent','Water','https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'),('Caterpie',2.54,'Worm',2.90,'Shield_Dust','Bug','https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png');

SELECT nombre,altura,categoria,peso,habilidad,tipo,url FROM pokemon;

