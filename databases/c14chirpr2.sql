create database c14chirpr2;

use c14chirpr2;

CREATE TABLE IF NOT EXISTS `c14chirpr2`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` TEXT NULL DEFAULT NULL,
  `_created` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 55
DEFAULT CHARACTER SET = latin1;

CREATE TABLE IF NOT EXISTS `c14chirpr2`.`chirps` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userid` INT(11) NOT NULL,
  `text` TEXT NULL DEFAULT NULL,
  `location` VARCHAR(50) NULL DEFAULT NULL,
  `_created` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `day` VARCHAR(20) NOT NULL,
  `time` VARCHAR(30) NOT NULL,
  `edit` VARCHAR(3) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `userid` (`userid` ASC),
  CONSTRAINT `chirps_ibfk_1`
    FOREIGN KEY (`userid`)
    REFERENCES `c14chirpr2`.`users` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 143
DEFAULT CHARACTER SET = latin1;

create user 'guest'@'localhost'
identified with mysql_native_password
by 'guest';

GRANT ALL PRIVILEGES ON c14chirpr2.* TO 'guest'@'localhost';


