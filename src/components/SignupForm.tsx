import { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      // Redirect to login page
      window.location.href = '/login';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-4 bg-red-100 text-red-800 rounded-lg">
          {error}
        </div>
      )}
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
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        type="tel"
        label="Phone"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <Input
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        required
      />
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Signing up...' : 'Sign Up'}
      </Button>
      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-primary hover:underline">
          Login
        </a>
      </p>
    </form>
  );
}

