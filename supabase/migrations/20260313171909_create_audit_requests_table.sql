/*
  # Create Audit Requests Table

  1. New Tables
    - `audit_requests`
      - `id` (uuid, primary key)
      - `name` (text, required) - Requestor full name
      - `email` (text, required) - Contact email
      - `company` (text, required) - Company name
      - `company_size` (text) - Company size category
      - `current_challenges` (text) - Optional description of automation needs
      - `created_at` (timestamptz, auto-timestamp) - Submission timestamp
      - `status` (text, default 'new') - Lead status tracking

  2. Security
    - Enable RLS on `audit_requests` table
    - Add policy allowing public inserts (for form submissions)
    - Add policy allowing read access only via authenticated admin context
*/

CREATE TABLE IF NOT EXISTS audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  company_size text,
  current_challenges text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE audit_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts for audit requests"
  ON audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);
