CREATE TABLE hospital_info (
	hospital_name VARCHAR(50) NOT NULL PRIMARY KEY,
	address VARCHAR(60),
	city VARCHAR(50),
	state VARCHAR(2),
	zip INT,
	county VARCHAR(30),
	hospital_type VARCHAR(50),
	ownership VARCHAR(60),
	emergency_services BOOLEAN,
	overall_rating FLOAT
);
	
CREATE TABLE hospital_locations (
	hospital_name VARCHAR(50) NOT NULL PRIMARY KEY,
	address VARCHAR(50),
	city VARCHAR(50),
	state VARCHAR(2),
	zip INT,
	type VARCHAR(50),
	status VARCHAR(10),
	population INT,
	county VARCHAR(20),
	latitude FLOAT,
	longitude FLOAT,
	owner VARCHAR(20),
	beds INT,
	helipad VARCHAR(2),
	FOREIGN KEY (hospital_name) REFERENCES hospital_info(hospital_name)
);


