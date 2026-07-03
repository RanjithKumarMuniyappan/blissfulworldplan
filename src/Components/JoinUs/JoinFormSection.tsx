import React, { useState } from 'react'
import Button from '../../CommonComponents/Button';
import { CheckCircleIcon } from '../../icons';

const JoinFormSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.email.trim()) {
            setError('Please fill in both your name and email address.');
            return;
        }
        // Basic email validation
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
             setError('Please enter a valid email address.');
             return;
        }
        setError('');
        setIsSubmitted(true);
        console.log('Form Submitted:', formData);
    };

    if (isSubmitted) {
        return (
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-6 text-center max-w-2xl">
                    <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
                    <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f] mt-6">Welcome! You're in.</h2>
                    <p className="mt-4 text-lg text-[#bc961f]">Thank you for joining the Blissful World Plan. We're so glad to have you. You'll receive a welcome email shortly with resources to help you get started.</p>
                     <div className="mt-8">
                        <Button to="/plan" variant="primary">Explore the Plan</Button>
                    </div>
                </div>
            </section>
        );
    }
    
    const inputClasses = "w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#bc961f] transition-shadow";

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-lg">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#bc961f] text-center mb-6">Become a Member Today</h2>
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[#bc961f] mb-1">Full Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="Your Name" />
                        </div>
                        <div>
                             <label htmlFor="email" className="block text-sm font-medium text-[#bc961f] mb-1">Email Address</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="you@example.com" />
                        </div>
                        {error && <p className="text-red-600 text-sm">{error}</p>}
                        <div className="flex items-start">
                            <input id="updates" name="updates" type="checkbox" defaultChecked className="h-4 w-4 text-[#bc961f] focus:ring-[#a6801b] border-gray-300 rounded mt-1" />
                            <div className="ml-3 text-sm">
                                <label htmlFor="updates" className="font-medium text-[#bc961f]">I'd like to receive updates and resources.</label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-6 py-3 font-bold rounded-md transition-colors duration-300 bg-[#bc961f] text-[#FFFFFF] hover:bg-[#a6801b]">
                                Join the Plan
                            </button>
                        </div>
                    </form>
                    <p className="text-xs text-gray-500 mt-6 text-center">We respect your privacy. Read our <a href="#" className="underline hover:text-[#bc961f] hover:font-bold">Privacy Policy</a>.</p>
                </div>
            </div>
        </section>
    );
}

export default JoinFormSection