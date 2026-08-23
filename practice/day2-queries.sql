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