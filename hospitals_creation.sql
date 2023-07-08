CREATE TABLE hospital_info (
	hospital_name VARCHAR NOT NULL PRIMARY KEY,
	address VARCHAR,
	city VARCHAR,
	state VARCHAR,
	zip INT,
	county VARCHAR,
	hospital_type VARCHAR,
	ownership VARCHAR,
	emergency_services BOOLEAN,
	overall_rating REAL
);


CREATE TABLE hospital_locations (
	hospital_name VARCHAR NOT NULL PRIMARY KEY,
	address VARCHAR,
	city VARCHAR(50),
	state VARCHAR(2),
	zip INT,
	type VARCHAR(50),
	status VARCHAR(10),
	population INT,
	county VARCHAR(20),
	latitude FLOAT,
	longitude FLOAT,
	owner VARCHAR,
	beds INT,
	helipad VARCHAR,
	FOREIGN KEY (hospital_name) REFERENCES hospital_info(hospital_name)
);


select * from hospital_info;
select * from hospital_locations;
