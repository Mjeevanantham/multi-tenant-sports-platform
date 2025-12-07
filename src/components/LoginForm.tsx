import { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Redirect to home page
      window.location.href = '/';
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
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="/signup" className="text-primary hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
}

