-- ============================================
-- Riverside Riders Fall Wheels Show 2026
-- Supabase Database Schema
-- ============================================
-- Run this ENTIRE script in Supabase > SQL Editor > New Query > Paste > Run
-- ============================================

-- 1. REGISTRATIONS TABLE
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. VEHICLES TABLE
CREATE TABLE IF NOT EXISTS vehicles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id UUID NOT NULL REFERENCES registrations(id) ON DELETE CASCADE,
  vehicle_type TEXT NOT NULL CHECK (vehicle_type IN ('car', 'bike')),
  year INTEGER NOT NULL,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  class TEXT NOT NULL,
  class_number TEXT,  -- Auto-generated class ID like "SC-001", "MB-002", etc.
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. ENABLE ROW LEVEL SECURITY
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

-- 4. POLICIES: Allow anonymous inserts (for registration form)
CREATE POLICY "Allow anonymous inserts on registrations"
  ON registrations FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on vehicles"
  ON vehicles FOR INSERT TO anon WITH CHECK (true);

-- 5. POLICIES: Allow authenticated users full read (for admin dashboard)
CREATE POLICY "Allow authenticated read on registrations"
  ON registrations FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read on vehicles"
  ON vehicles FOR SELECT TO authenticated USING (true);

-- 6. POLICIES: Allow authenticated users to update (for admin actions)
CREATE POLICY "Allow authenticated update on vehicles"
  ON vehicles FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Allow authenticated update on registrations"
  ON registrations FOR UPDATE TO authenticated USING (true);

-- 7. POLICIES: Allow authenticated users to delete (for admin actions)
CREATE POLICY "Allow authenticated delete on vehicles"
  ON vehicles FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated delete on registrations"
  ON registrations FOR DELETE TO authenticated USING (true);

-- 8. INDEXES for performance
CREATE INDEX IF NOT EXISTS idx_vehicles_registration_id ON vehicles(registration_id);
CREATE INDEX IF NOT EXISTS idx_vehicles_class ON vehicles(class);
CREATE INDEX IF NOT EXISTS idx_vehicles_class_number ON vehicles(class_number);
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at);

-- 9. FUNCTION: Auto-generate class_number on vehicle insert
-- Prefix map: SC=Stock Classic, MC=Modified Classic, MD=Modern, AB=American Bike, IB=Import Bike, CT=Classic Truck
CREATE OR REPLACE FUNCTION generate_class_number()
RETURNS TRIGGER AS $$
DECLARE
  prefix TEXT;
  next_num INTEGER;
BEGIN
  -- Determine prefix based on class
  CASE NEW.class
    WHEN 'Best Stock Classic' THEN prefix := 'SC';
    WHEN 'Best Modified Classic' THEN prefix := 'MC';
    WHEN 'Best Modern Car (under 25 years)' THEN prefix := 'MD';
    WHEN 'Best American Bike' THEN prefix := 'AB';
    WHEN 'Best Import Bike' THEN prefix := 'IB';
    WHEN 'Best Classic Truck' THEN prefix := 'CT';
    ELSE prefix := 'XX';
  END CASE;

  -- Get the next number for this class
  SELECT COALESCE(MAX(
    CAST(SUBSTRING(class_number FROM LENGTH(prefix) + 2) AS INTEGER)
  ), 0) + 1
  INTO next_num
  FROM vehicles
  WHERE class = NEW.class AND class_number IS NOT NULL;

  -- Set the class_number (e.g., SC-001)
  NEW.class_number := prefix || '-' || LPAD(next_num::TEXT, 3, '0');

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 10. TRIGGER: Auto-assign class_number on insert
DROP TRIGGER IF EXISTS trg_generate_class_number ON vehicles;
CREATE TRIGGER trg_generate_class_number
  BEFORE INSERT ON vehicles
  FOR EACH ROW
  EXECUTE FUNCTION generate_class_number();
