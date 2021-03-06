CREATE TABLE customersTemp(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    business BIGINT UNSIGNED,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    province VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    district VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    movil VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE businessTemp (
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	ruc VARCHAR(20) NOT NULL,
	rubro VARCHAR(50),
	address VARCHAR(255),
	address_reference VARCHAR(255),
	anniversary VARCHAR(50),
	page_web VARCHAR(255),
	PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE requirements (
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	business VARCHAR(255) NOT NULL,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255), 
	phone VARCHAR(255),
	message longtext NOT NULL,
	requirements_date datetime NOT NULL,
	site_web VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE business (
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	ruc VARCHAR(20) NOT NULL,
	rubro VARCHAR(50),
	address VARCHAR(255),
	address_reference VARCHAR(255),
	anniversary VARCHAR(50),
	page_web VARCHAR(255),
	PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE customers(
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	business BIGINT UNSIGNED,
	name VARCHAR(255) NOT NULL,
	position VARCHAR(255) NOT NULL,
	address VARCHAR(255) NOT NULL,
	province VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	district VARCHAR(50) NOT NULL,
	email VARCHAR(255) NOT NULL,
	phone VARCHAR(50) NOT NULL,
	movil VARCHAR(50) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (business) REFERENCES business (id) ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE people(
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	birthday date,
	email VARCHAR(150) NOT NULL,
	phone VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE history (
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	people BIGINT UNSIGNED NOT NULL,
	date_history datetime,
	text longtext,
	PRIMARY KEY (id),
	FOREIGN KEY (people) REFERENCES business (id) ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE details_attention (
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	people BIGINT UNSIGNED NOT NULL,
	business BIGINT UNSIGNED NOT NULL,
	history BIGINT UNSIGNED NOT NULL,
	customers BIGINT UNSIGNED NOT NULL,
	date_attention datetime NOT NULL,
	date_notice datetime,
	type_customers VARCHAR(50),
	origin VARCHAR(255),
	status VARCHAR(50) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (people) REFERENCES people (id) ON UPDATE CASCADE,
	FOREIGN KEY (business) REFERENCES business (id) ON UPDATE CASCADE,
	FOREIGN KEY (history) REFERENCES history (id) ON UPDATE CASCADE,
	FOREIGN KEY (customers) REFERENCES customers (id) ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE users(
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	people BIGINT UNSIGNED NOT NULL,
	user_login VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	type_user VARCHAR(50) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (people) REFERENCES people (id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

INSERT INTO people (id, name, last_name, birthday, email, phone) VALUES 
(1,'Admin','','2020-04-03','hola@compina.net','123456789');
INSERT INTO users (id, people, user_login, password, type_user) VALUES 
(1,1,'admin','202cb962ac59075b964b07152d234b70','Administrador');