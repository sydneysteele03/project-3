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

drop table hospital_locations;
drop table hospital_info; 


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


COPY hospital_locations(NAME, ADDRESS, CITY, STATE, ZIP, TYPE, STATUS, POPULATION, COUNTY, LATITUDE, LONGITUDE, OWNER, BEDS, HELIPAD)
FROM 'Desktop/project-3/clean_location_df.csv'
DELIMITER ','
CSV HEADER;

select * from hospital_info;
select * from hospital_locations;
