DROP DATABASE if exists prueba;
CREATE DATABASE if not exists prueba;
USE prueba;

CREATE TABLE Personas(
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    DNI INT(8),
    ganador BOOLEAN,
    fecha DATE,
    PRIMARY KEY(DNI));
    
    
INSERT INTO Personas VALUES
('Juan', 'Pablo', 123456, TRUE, '2022-10-20'),
('Facundo', 'Nieto', 45695317, FALSE, '2022-10-20'),
('Ayrton', 'Miotti', 45095310, TRUE, '2022-10-20'),
('Ludmila Anahí', 'Noriega', 45896547, TRUE, '2022-10-20'),
('Pancho', 'con Fritas', 2500000, FALSE, '2022-10-20'),
('Ale', 'Trolo',53146053, FALSE, '2022-10-20');


SELECT * from Personas order by ganador;
SELECT * from Personas order by rand() limit 5;

-- aplellito //apellido*



/*
while carrgados == 0

if app, == ganador
{ == 1}


*/