-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema pics_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pics_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pics_db` DEFAULT CHARACTER SET utf8 ;
USE `pics_db` ;

-- -----------------------------------------------------
-- Table `pics_db`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pics_db`.`category` (
  `cat_id` INT NOT NULL AUTO_INCREMENT,
  `cat_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cat_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pics_db`.`pictures`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pics_db`.`pictures` (
  `pic_id` INT NOT NULL AUTO_INCREMENT,
  `pic_link` VARCHAR(255) NOT NULL,
  `pic_name` VARCHAR(45) NULL,
  `pic_description` VARCHAR(45) NULL,
  `category_cat_id` INT NOT NULL,
  PRIMARY KEY (`pic_id`, `category_cat_id`),
  INDEX `fk_pictures_category1_idx` (`category_cat_id` ASC),
  CONSTRAINT `fk_pictures_category1`
    FOREIGN KEY (`category_cat_id`)
    REFERENCES `pics_db`.`category` (`cat_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pics_db`.`tags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pics_db`.`tags` (
  `tag_id` INT NOT NULL AUTO_INCREMENT,
  `tag_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tag_id`),
  UNIQUE INDEX `tag_name_UNIQUE` (`tag_name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pics_db`.`pictures_has_tags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pics_db`.`pictures_has_tags` (
  `pictures_pic_id` INT NOT NULL,
  `tags_tag_id` INT NOT NULL,
  PRIMARY KEY (`pictures_pic_id`, `tags_tag_id`),
  INDEX `fk_pictures_has_tags_tags1_idx` (`tags_tag_id` ASC),
  INDEX `fk_pictures_has_tags_pictures_idx` (`pictures_pic_id` ASC),
  CONSTRAINT `fk_pictures_has_tags_pictures`
    FOREIGN KEY (`pictures_pic_id`)
    REFERENCES `pics_db`.`pictures` (`pic_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pictures_has_tags_tags1`
    FOREIGN KEY (`tags_tag_id`)
    REFERENCES `pics_db`.`tags` (`tag_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pics_db`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pics_db`.`admin` (
  `admin_id` INT NOT NULL AUTO_INCREMENT,
  `admin_mail` VARCHAR(45) NOT NULL,
  `admin_password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE INDEX `admin_mail_UNIQUE` (`admin_mail` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
