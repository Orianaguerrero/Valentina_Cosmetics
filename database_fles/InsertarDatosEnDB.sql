/*INSERTAR ROLES*/
INSERT INTO `valentina_cosmetics`.`role` (`name`) VALUES ('user');
INSERT INTO `valentina_cosmetics`.`role` (`name`) VALUES ('admin');

/*INSERTAR USUARIOS */
INSERT INTO `valentina_cosmetics`.`user` (`name`, `lastname`, `email`, `password`, `id_role`) VALUES ('Felipe ', 'Antonio', 'felipe@vc.com', '123456', '4');
INSERT INTO `valentina_cosmetics`.`user` (`name`, `lastname`, `email`, `password`, `id_role`) VALUES ('Oriana', 'Guerrero', 'oriana@vc.com', '123456', '4');

/*INSERTAR SECCIONES */
INSERT INTO `valentina_cosmetics`.`section` (`name`) VALUES ('on-sale');
INSERT INTO `valentina_cosmetics`.`section` (`name`) VALUES ('new');

/*INSERTAR PRODUCTOS */
INSERT INTO `valentina_cosmetics`.`product` (`name`, `description`, `image`, `price`, `id_section`) VALUES ('Lash sensational máscara de pestañas sky high', 'Máscara de pestañas de volumen y alargamiento Sky High para un impacto espectacular en las pestañas desde todos los ángulos. La máscara de pestañas de larga duración ofrece un volumen completo y una longitud ilimitada', 'maybelline-lash.webp', '10.99', '1');
INSERT INTO `valentina_cosmetics`.`product` (`name`, `description`, `image`, `price`, `id_section`) VALUES ('Perfect blush too faced', 'Tres swatches perfecta de ultraflattering Blush le permiten a cualquiera Swirl los colores juntos y tulipa de aplicar o usar más de uno para un personalizado Flush o resaltar. Este Blush fue desarrollado con una fácil aplicación y un no-fail paleta de colores a tomar las conjeturas de crear un dulce, romántico Flush', 'foofaced-blush.jpg', '8.99', '1');
INSERT INTO `valentina_cosmetics`.`product` (`name`, `description`, `image`, `price`, `id_section`) VALUES ('Base liquida ifallible l´oreal', 'Base líquida liviana de cobertura alta. Duración de hasta 24 horas que mantiene la piel hidrata y permite su transpiración mientras el acabado se mantiene intacto. Resistente al sudor, al agua y a la transferencia. Está formulada con pigmentos que unifican el tono de la piel.', 'loreal-base.jpg', '25.99', '1');
INSERT INTO `valentina_cosmetics`.`product` (`name`, `description`, `image`, `price`, `id_section`) VALUES ('Polvo compacto doble uso divine L´bel', 'Son unos delicados y deliciosos polvos Compactos doble uso: húmedos como base, ayudan a cubrir imperfecciones y secos como polvos, ayudan a matificar', 'loreal-polvo.jpg', '11.99', '2');
INSERT INTO `valentina_cosmetics`.`product` (`name`, `description`, `image`, `price`, `id_section`) VALUES ('Labial rouge allure channel', 'Una barra de labios intensa y luminosa. Una textura ultrafina, fundente y de efecto segunda piel, una paleta de tonos intensos. Un estilo afirmado y audaz.', 'chanel-labial.webp', '24.99', '2');
INSERT INTO `valentina_cosmetics`.`product` (`name`, `description`, `image`, `price`, `id_section`) VALUES ('Benetint benefit', 'Tinta de labios y mejillas que ofrece un acabado de aspecto natural', 'benefit-tint.jpg', '4.99', '2');
