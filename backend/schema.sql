/*
Six columns -
1) id that auto-generates and uniquely identifies each row
2) company (as required text)
3) role (as required text)
4) status (as text with a sensible default so that INSERTs that don't specify one don't fail or come back NULL)
5) applied_date (that defaults to today)
6) created_at (timestamp that defaults to now) 
* Both applied_date and created_at are necessary because applied_date is something I might eventually let a user edit;
created_at is a permanent record of when the row itself was made - they can drift apart later, 
e.g. if I log something as a wishlist item today but don't actually apply until next week.

//The table commented out below is from a practice exercise
CREATE TABLE applications (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	company TEXT NOT NULL,
	role TEXT NOT NULL,
	source TEXT,
	url TEXT,
	salary_min INT,
	salary_max INT,
	status TEXT CHECK (status IN ('not applied', 'applied', 'screening', 'interview', 'offer', 'rejected', 'ghosted')) NOT NULL,
	applied_date DATE,
	notes TEXT,
	created_at TIMESTAMPTZ DEFAULT now(),
	cv_version TEXT,
	referral_source TEXT,
	follow_up_date DATE,
	user_id INT
);
*/
CREATE TABLE applications (
	id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	company text NOT NULL,
	role text NOT NULL,
	status text NOT NULL DEFAULT 'new',
	applied_date date NOT NULL DEFAULT CURRENT_DATE,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);