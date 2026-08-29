SELECT * FROM applications ORDER BY applied_date DESC;
SELECT * FROM applications WHERE status = 'interview' ORDER BY applied_date DESC;
SELECT * FROM applications WHERE id = 3;
SELECT status, COUNT(*) FROM applications GROUP BY status;
SELECT COUNT(*) FROM applications WHERE status != 'wishlist';
SELECT COUNT(*) FROM applications WHERE status IN ('screening', 'interview', 'offer');
SELECT company, role, follow_up_date FROM applications WHERE follow_up_date <= CURRENT_DATE AND status = 'applied';
SELECT * FROM applications WHERE company ILIKE '%bank%';\
SELECT company, role, salary_max FROM applications ORDER BY salary_max DESC LIMIT 5;
SELECT referral_source, COUNT(*) FROM applications WHERE referral_source IS NOT NULL GROUP BY referral_source;

INSERT INTO applications (company, role, status)
VALUES
	('shopee', 'software dev', 'not applied'),
    ('grab', 'junior dev', 'applied'),
    ('gx bank', 'web developer', 'not applied'),
    ('maybank', 'software engineer', 'applied'),
    ('uob', 'junior software engineer', 'not applied'),
    ('moneylion', 'Software Engineer I', 'applied'),
    ('ryt bank', 'junior web developer', 'not applied'),
    ('lazada', 'software engineer', 'applied'),
    ('maxis', 'junior developer', 'not applied'),
    ('BASF', 'graduate trainee', 'applied');

SELECT * FROM applications;

UPDATE applications SET applied_date = CURRENT_DATE WHERE status = 'applied';

SELECT * FROM applications;

DELETE FROM applications WHERE company = 'BASF';

SELECT * FROM applications;