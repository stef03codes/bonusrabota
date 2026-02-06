'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const res = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            // Refresh the router to update middleware state and redirect
            router.push('/dashboard');
            router.refresh();
        } else {
            const data = await res.json();
            setError(data.error || 'Invalid credentials');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="p-8 border rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Signup</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="text" placeholder="Name" className="w-full p-2 mb-4 border"
                    onChange={(e) => setName(e.target.value)} required
                />
                <input
                    type="email" placeholder="Email" className="w-full p-2 mb-4 border"
                    onChange={(e) => setEmail(e.target.value)} required
                />
                <input
                    type="password" placeholder="Password" className="w-full p-2 mb-4 border"
                    onChange={(e) => setPassword(e.target.value)} required
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Sign Up
                </button>
            </form>
        </div>
    );
}