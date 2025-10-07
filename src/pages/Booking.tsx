import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Calendar, Clock, CheckCircle, XCircle, Loader } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface TimeSlot {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  is_available: boolean;
  booking_id: string | null;
}

interface Booking {
  client_name: string;
  client_email: string;
  client_phone: string;
  service_type: string;
  booking_date: string;
  start_time: string;
  end_time: string;
  notes: string;
}

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const [formData, setFormData] = useState<Booking>({
    client_name: '',
    client_email: '',
    client_phone: '',
    service_type: '',
    booking_date: '',
    start_time: '',
    end_time: '',
    notes: ''
  });

  const services = [
    'Logo & Identity',
    'Graphic Design',
    'Social Media',
    'Web Design',
    'Photography',
    'Videography',
    'Audio Design',
    'Mural Art'
  ];

  const generateTimeSlots = () => {
    const slots: { start: string; end: string }[] = [];
    const startHour = 9;
    const endHour = 17;

    for (let hour = startHour; hour < endHour; hour++) {
      const startTime = `${hour.toString().padStart(2, '0')}:00:00`;
      const endTime = `${(hour + 1).toString().padStart(2, '0')}:00:00`;
      slots.push({ start: startTime, end: endTime });
    }

    return slots;
  };

  useEffect(() => {
    if (selectedDate) {
      fetchTimeSlots();
    }
  }, [selectedDate]);

  const fetchTimeSlots = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('time_slots')
        .select('*')
        .eq('date', selectedDate)
        .order('start_time');

      if (error) throw error;

      if (!data || data.length === 0) {
        const defaultSlots = generateTimeSlots();
        const slotsToInsert = defaultSlots.map(slot => ({
          date: selectedDate,
          start_time: slot.start,
          end_time: slot.end,
          is_available: true
        }));

        const { data: newSlots, error: insertError } = await supabase
          .from('time_slots')
          .insert(slotsToInsert)
          .select();

        if (insertError) throw insertError;
        setTimeSlots(newSlots || []);
      } else {
        setTimeSlots(data);
      }
    } catch (error) {
      console.error('Error fetching time slots:', error);
      setMessage({ type: 'error', text: 'Failed to load time slots' });
    } finally {
      setLoading(false);
    }
  };

  const handleSlotSelect = (slot: TimeSlot) => {
    if (slot.is_available) {
      setSelectedSlot(slot);
      setFormData(prev => ({
        ...prev,
        booking_date: slot.date,
        start_time: slot.start_time,
        end_time: slot.end_time
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSlot) {
      setMessage({ type: 'error', text: 'Please select a time slot' });
      return;
    }

    setSubmitting(true);
    setMessage(null);

    try {
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert([{
          client_name: formData.client_name,
          client_email: formData.client_email,
          client_phone: formData.client_phone,
          service_type: formData.service_type,
          booking_date: formData.booking_date,
          start_time: formData.start_time,
          end_time: formData.end_time,
          notes: formData.notes,
          status: 'pending'
        }])
        .select()
        .maybeSingle();

      if (bookingError) throw bookingError;

      const { error: slotError } = await supabase
        .from('time_slots')
        .update({
          is_available: false,
          booking_id: booking?.id
        })
        .eq('id', selectedSlot.id);

      if (slotError) throw slotError;

      setMessage({ type: 'success', text: 'Booking created successfully! We will contact you shortly to confirm.' });

      setFormData({
        client_name: '',
        client_email: '',
        client_phone: '',
        service_type: '',
        booking_date: '',
        start_time: '',
        end_time: '',
        notes: ''
      });
      setSelectedSlot(null);
      fetchTimeSlots();
    } catch (error) {
      console.error('Error creating booking:', error);
      setMessage({ type: 'error', text: 'Failed to create booking. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const formatTime = (time: string) => {
    const [hours] = time.split(':');
    const hour = parseInt(hours);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:00 ${period}`;
  };

  return (
    <div className="pt-24 sm:pt-32 py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-yellow-400 text-black text-xs font-bold uppercase mb-4">
            Book Your Session
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            SCHEDULE AN <span className="text-yellow-400">APPOINTMENT</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Choose a date and time that works for you. We'll confirm your booking shortly.
          </p>
        </div>

        {message && (
          <div className={`max-w-4xl mx-auto mb-8 p-4 rounded-lg flex items-center gap-3 ${
            message.type === 'success' ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 flex-shrink-0" />
            )}
            <p className="font-bold">{message.text}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-black text-black">Select Date</h2>
            </div>

            <input
              type="date"
              min={getTodayDate()}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium rounded-lg mb-6"
            />

            {selectedDate && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-black text-black">Available Time Slots</h3>
                </div>

                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader className="w-8 h-8 animate-spin text-blue-500" />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => handleSlotSelect(slot)}
                        disabled={!slot.is_available}
                        className={`p-3 rounded-lg font-bold text-sm transition-all ${
                          selectedSlot?.id === slot.id
                            ? 'bg-yellow-400 text-black'
                            : slot.is_available
                            ? 'bg-gray-50 text-black hover:bg-blue-100 border-2 border-transparent hover:border-blue-500'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                        }`}
                      >
                        {formatTime(slot.start_time)}
                        <div className="text-xs mt-1">
                          {slot.is_available ? 'Available' : 'Booked'}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
            <h2 className="text-2xl font-black text-black mb-6">Booking Details</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="client_name"
                  value={formData.client_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium rounded-lg"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="client_email"
                  value={formData.client_email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium rounded-lg"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="client_phone"
                  value={formData.client_phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium rounded-lg"
                  placeholder="+254 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Type *</label>
                <select
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium rounded-lg"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium rounded-lg resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {selectedSlot && (
                <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-500">
                  <p className="text-sm font-bold text-blue-900">
                    Selected: {new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} at {formatTime(selectedSlot.start_time)}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting || !selectedSlot}
                className="w-full bg-gradient-to-r from-blue-500 to-yellow-400 text-white py-4 font-black uppercase text-lg hover:shadow-xl transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {submitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
