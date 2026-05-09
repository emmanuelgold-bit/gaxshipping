-- Seed data for Global Atlantic Xpress Ltd.
-- Insert default compliance documents

INSERT INTO compliance_documents (slug, title, category, content, version, effective_date, last_reviewed, next_review) VALUES
('export-disclaimer', 'Legal Export Disclaimer', 'legal', 
'<h1>Legal Export Disclaimer</h1><p>Global Atlantic Xpress Ltd. operates in strict compliance with Sierra Leone Mines and Minerals Act 2009...</p>', 
'1.0', '2024-01-01', '2024-01-01', '2025-01-01')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO compliance_documents (slug, title, category, content, version, effective_date, last_reviewed, next_review) VALUES
('compliance-notice', 'Compliance Notice', 'legal', 
'<h1>Compliance Notice</h1><p>Global Atlantic Xpress Ltd. maintains rigorous AML/CTF protocols...</p>', 
'1.0', '2024-01-01', '2024-01-01', '2025-01-01')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample admin user (password: Admin@GAX2024!)
INSERT INTO users (email, password_hash, role, company_name, kyc_status, is_active) VALUES
('admin@globalatlanticxpress.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/X4.VTtYA.qGZvKG6', 'admin', 'Global Atlantic Xpress Ltd.', 'verified', true)
ON CONFLICT (email) DO NOTHING;

-- Insert sample shipments
INSERT INTO shipments (tracking_number, client_id, origin, destination, corridor, cargo_type, weight_kg, declared_value, status, current_location, security_level, armed_escort, estimated_delivery) VALUES
('GAX-2024-001234', NULL, 'Freetown, Sierra Leone', 'Dubai, UAE', 'SL-DXB', 'Gold Bullion', 12.500, 750000.00, 'air_transit', 'In transit over Mediterranean', 'high', true, '2024-06-20'),
('GAX-2024-001235', NULL, 'Freetown, Sierra Leone', 'Zurich, Switzerland', 'SL-CH', 'Refined Gold', 8.250, 495000.00, 'customs_cleared', 'Zurich Airport', 'maximum', true, '2024-06-18'),
('GAX-2024-001236', NULL, 'Freetown, Sierra Leone', 'Hong Kong', 'SL-HK', 'Gold Dore', 25.000, 1250000.00, 'vaulted', 'Freetown Secure Vault', 'high', false, '2024-06-25')
ON CONFLICT (tracking_number) DO NOTHING;

-- Insert sample tracking events
INSERT INTO tracking_events (shipment_id, stage, status, location, timestamp, notes) 
SELECT s.id, 'collection', 'Collection completed', '175 Regent Road, Freetown', CURRENT_TIMESTAMP - INTERVAL '5 days', 'Collected by authorized personnel'
FROM shipments s WHERE s.tracking_number = 'GAX-2024-001234'
ON CONFLICT DO NOTHING;

INSERT INTO tracking_events (shipment_id, stage, status, location, timestamp, notes) 
SELECT s.id, 'verification', 'Verified and sealed', 'PMTD Facility, Freetown', CURRENT_TIMESTAMP - INTERVAL '4 days', 'Assay: 99.95% purity, Weight: 12.500kg'
FROM shipments s WHERE s.tracking_number = 'GAX-2024-001234'
ON CONFLICT DO NOTHING;

INSERT INTO tracking_events (shipment_id, stage, status, location, timestamp, notes) 
SELECT s.id, 'vaulting', 'Secured in transit vault', 'Freetown Secure Vault', CURRENT_TIMESTAMP - INTERVAL '3 days', 'Vault receipt: V-2024-0892'
FROM shipments s WHERE s.tracking_number = 'GAX-2024-001234'
ON CONFLICT DO NOTHING;

INSERT INTO tracking_events (shipment_id, stage, status, location, timestamp, notes) 
SELECT s.id, 'customs', 'Customs clearance obtained', 'Freetown International Airport', CURRENT_TIMESTAMP - INTERVAL '2 days', 'Export permit: EXP-2024-4567, Duty paid: 3%'
FROM shipments s WHERE s.tracking_number = 'GAX-2024-001234'
ON CONFLICT DO NOTHING;

INSERT INTO tracking_events (shipment_id, stage, status, location, timestamp, notes) 
SELECT s.id, 'air_transit', 'In transit to Dubai', 'Flight EK-785, Over Mediterranean', CURRENT_TIMESTAMP - INTERVAL '6 hours', 'ETA Dubai: 14:00 GMT'
FROM shipments s WHERE s.tracking_number = 'GAX-2024-001234'
ON CONFLICT DO NOTHING;
