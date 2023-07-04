-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema valentina_cosmetics
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `valentina_cosmetics` ;

-- -----------------------------------------------------
-- Schema valentina_cosmetics
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `valentina_cosmetics` DEFAULT CHARACTER SET utf8 ;
USE `valentina_cosmetics` ;

-- -----------------------------------------------------
-- Table `valentina_cosmetics`.`section`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `valentina_cosmetics`.`section` ;

CREATE TABLE IF NOT EXISTS `valentina_cosmetics`.`section` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `valentina_cosmetics`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `valentina_cosmetics`.`product` ;

CREATE TABLE IF NOT EXISTS `valentina_cosmetics`.`product` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `price` FLOAT NOT NULL,
  `id_section` INT(11) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_product_section`
    FOREIGN KEY (`id_section`)
    REFERENCES `valentina_cosmetics`.`section` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_product_section_idx` ON `valentina_cosmetics`.`product` (`id_section` ASC) ;


-- -----------------------------------------------------
-- Table `valentina_cosmetics`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `valentina_cosmetics`.`role` ;

CREATE TABLE IF NOT EXISTS `valentina_cosmetics`.`role` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `created_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `valentina_cosmetics`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `valentina_cosmetics`.`user` ;

CREATE TABLE IF NOT EXISTS `valentina_cosmetics`.`user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `id_role` INT(11) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_role`
    FOREIGN KEY (`id_role`)
    REFERENCES `valentina_cosmetics`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_user_role_idx` ON `valentina_cosmetics`.`user` (`id_role` ASC) ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
