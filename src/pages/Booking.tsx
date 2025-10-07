import { useState } from 'react';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface BookingData {
  client_name: string;
  client_email: string;
  client_phone: string;
  service_type: string;
  notes: string;
}

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const [formData, setFormData] = useState<BookingData>({
    client_name: '',
    client_email: '',
    client_phone: '',
    service_type: '',
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

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '09:00', available: true },
    { id: '2', time: '10:00', available: true },
    { id: '3', time: '11:00', available: true },
    { id: '4', time: '12:00', available: true },
    { id: '5', time: '13:00', available: true },
    { id: '6', time: '14:00', available: true },
    { id: '7', time: '15:00', available: true },
    { id: '8', time: '16:00', available: true },
    { id: '9', time: '17:00', available: true },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      setMessage({ type: 'error', text: 'Please select both date and time' });
      return;
    }

    setMessage({ type: 'success', text: 'Booking request submitted! We will contact you shortly to confirm.' });

    setFormData({
      client_name: '',
      client_email: '',
      client_phone: '',
      service_type: '',
      notes: ''
    });
    setSelectedDate('');
    setSelectedTime('');
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${period}`;
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

            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-black text-black">Select Time</h3>
            </div>

            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => setSelectedTime(slot.time)}
                  className={`p-3 rounded-lg font-bold text-sm transition-all ${
                    selectedTime === slot.time
                      ? 'bg-yellow-400 text-black'
                      : 'bg-gray-50 text-black hover:bg-blue-100 border-2 border-transparent hover:border-blue-500'
                  }`}
                >
                  {formatTime(slot.time)}
                </button>
              ))}
            </div>
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

              {selectedDate && selectedTime && (
                <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-500">
                  <p className="text-sm font-bold text-blue-900">
                    Selected: {new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} at {formatTime(selectedTime)}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-gradient-to-r from-blue-500 to-yellow-400 text-white py-4 font-black uppercase text-lg hover:shadow-xl transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
