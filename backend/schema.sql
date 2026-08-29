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