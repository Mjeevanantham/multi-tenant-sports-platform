import { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';
import Card from './ui/Card';

interface BookingFormProps {
  venueId: number;
}

export default function BookingForm({ venueId }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dateTime: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('dateTime', formData.dateTime);
      formDataToSend.append('venueId', venueId.toString());

      const response = await fetch('/api/bookings', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to book slot');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        dateTime: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Book Your Slot</h2>
      
      {success && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
          Booking successful! We'll contact you soon.
        </div>
      )}
      
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          type="email"
          label="Email ID"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Input
          type="tel"
          label="Phone Number"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <Input
          type="text"
          label="Address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <Input
          type="datetime-local"
          label="Date & Timing"
          value={formData.dateTime}
          onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
          required
        />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Booking...' : 'Book Slot'}
        </Button>
      </form>
    </Card>
  );
}

