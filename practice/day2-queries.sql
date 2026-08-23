SELECT * FROM applications ORDER BY applied_date DESC;
SELECT * FROM applications WHERE status = 'interview' ORDER BY applied_date DESC;
SELECT * FROM applications WHERE id = 3;
SELECT status, COUNT(*) FROM applications GROUP BY status;
SELECT COUNT(*) FROM applications WHERE status != 'wishlist';
SELECT COUNT(*) FROM applications WHERE status IN ('screening', 'interview', 'offer');