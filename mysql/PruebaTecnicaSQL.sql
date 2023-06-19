CREATE database carla20230619;

USE carla20230619;

CREATE TABLE tresource_type (
  idResourceType int AUTO_INCREMENT PRIMARY KEY,
  created datetime,
  descrip varchar(200)
);

CREATE TABLE tresource (
  idResource int AUTO_INCREMENT PRIMARY KEY,
  created datetime,
  descrip varchar(200),
  idResourceType int,
  FOREIGN KEY (idResourceType) REFERENCES tresource_type(idResourceType)
);

INSERT INTO tresource_type (created, descrip) VALUES
  (CURRENT_TIMESTAMP, 'Vídeo'),
  (CURRENT_TIMESTAMP, 'PDF Documentación'),
  (CURRENT_TIMESTAMP, 'PDF Enunciado'),
  (CURRENT_TIMESTAMP, 'PDF Solución');
  
INSERT INTO tresource (created, descrip, idResourceType) VALUES
(CURRENT_TIMESTAMP, 'Video NET', 1),
(CURRENT_TIMESTAMP, 'Documentacion del framework', 2),
(CURRENT_TIMESTAMP, 'Ejercicio ASP.NET', 3),
(CURRENT_TIMESTAMP, 'Fundamentos NET', 2),
(CURRENT_TIMESTAMP, 'Solución avanzada', 4),
(CURRENT_TIMESTAMP, 'Video tutorial ASP.NET', 1);

SELECT  tresource_type.descrip AS ResourceType,
(SELECT COUNT(*) FROM tresource WHERE tresource.idResourceType = tresource_type.idResourceType) AS Cantidad FROM tresource_type;

