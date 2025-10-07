/*
  # Booking System Database Schema

  ## Overview
  Creates a comprehensive booking system for mkenya studio services with time slot management
  and availability tracking.

  ## New Tables

  ### `bookings`
  Stores booking information for client appointments
  - `id` (uuid, primary key) - Unique booking identifier
  - `client_name` (text) - Name of the client
  - `client_email` (text) - Email of the client
  - `client_phone` (text) - Phone number of the client
  - `service_type` (text) - Type of service being booked
  - `booking_date` (date) - Date of the appointment
  - `start_time` (time) - Start time of the appointment
  - `end_time` (time) - End time of the appointment
  - `status` (text) - Booking status: pending, confirmed, cancelled, completed
  - `notes` (text) - Additional notes or requirements
  - `created_at` (timestamptz) - When the booking was created

  ### `time_slots`
  Manages available time slots for bookings
  - `id` (uuid, primary key) - Unique slot identifier
  - `date` (date) - Date of the slot
  - `start_time` (time) - Start time of the slot
  - `end_time` (time) - End time of the slot
  - `is_available` (boolean) - Whether the slot is available
  - `booking_id` (uuid) - Reference to booking if slot is booked
  - `created_at` (timestamptz) - When the slot was created

  ## Security
  - Enable RLS on all tables
  - Public can view available slots
  - Public can create bookings
  - Only authenticated users can update/delete bookings
  - Authenticated users can view all bookings and manage slots

  ## Indexes
  - Index on booking_date for faster queries
  - Index on date for time_slots
  - Index on status for filtering bookings
*/

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_email text NOT NULL,
  client_phone text,
  service_type text NOT NULL,
  booking_date date NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create time_slots table
CREATE TABLE IF NOT EXISTS time_slots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  is_available boolean DEFAULT true,
  booking_id uuid REFERENCES bookings(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_time_slots_date ON time_slots(date);
CREATE INDEX IF NOT EXISTS idx_time_slots_available ON time_slots(is_available);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE time_slots ENABLE ROW LEVEL SECURITY;

-- Bookings policies
CREATE POLICY "Anyone can view bookings"
  ON bookings FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete bookings"
  ON bookings FOR DELETE
  TO authenticated
  USING (true);

-- Time slots policies
CREATE POLICY "Anyone can view time slots"
  ON time_slots FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert time slots"
  ON time_slots FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update time slots"
  ON time_slots FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete time slots"
  ON time_slots FOR DELETE
  TO authenticated
  USING (true);
