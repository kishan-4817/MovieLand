import React, { useState } from 'react';
import { ChevronDownIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

import Header from './Header';
import Footer from './Footer';

const contactChannels = [
  {
    title: 'Editorial and product',
    value: 'hello@movieland.app',
    note: 'Design feedback, partnerships, and product conversations.',
    icon: EnvelopeIcon,
  },
  {
    title: 'Direct line',
    value: '+1 (555) 123-4567',
    note: 'Weekdays, 10:00 AM to 6:00 PM.',
    icon: PhoneIcon,
  },
  {
    title: 'Studio base',
    value: 'New York, NY',
    note: 'Remote-first team with a small city studio footprint.',
    icon: MapPinIcon,
  },
];

const countryOptions = [
  'United States',
  'Canada',
  'United Kingdom',
  'France',
  'Germany',
  'India',
  'Australia',
  'Brazil',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: 'United States',
    message: '',
  });
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess('Thanks. Your message has been queued for the MovieLand team.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      country: 'United States',
      message: '',
    });
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="app-panel rounded-[2rem] p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--accent-gold)]">
              Contact MovieLand
            </p>
            <h1 className="mt-4 max-w-xl text-5xl leading-[0.92] sm:text-6xl">
              Start a conversation with the team.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              Product feedback, partnerships, and thoughtful suggestions all belong here.
              The page now follows the same calmer system as the rest of MovieLand.
            </p>

            <div className="mt-10 grid gap-4">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <article
                    key={channel.title}
                    className="rounded-[1.5rem] border border-[var(--surface-border)] bg-[var(--surface-panel-strong)] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface-soft)] text-[var(--accent-gold)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-gold)]">
                          {channel.title}
                        </p>
                        <h2 className="mt-2 text-2xl leading-tight text-[var(--text-primary)]">
                          {channel.value}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                          {channel.note}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="app-panel rounded-[2rem] p-7 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent-gold)]">
              Send Message
            </p>
            <h2 className="mt-4 text-4xl">Tell us what you need</h2>
            <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
              A cleaner inquiry form, tuned to the same spacing and surface language as the
              homepage and auth screens.
            </p>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="app-input"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="app-input"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="app-input"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="app-input"
                    placeholder="+1 555 123 4567"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="app-input"
                    placeholder="Studio or company"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="app-input pr-12"
                      required
                    >
                      {countryOptions.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--text-muted)]" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="app-input"
                  placeholder="Share your feedback, request, or collaboration idea."
                  required
                />
              </div>

              {success ? <p className="app-alert app-alert-success">{success}</p> : null}

              <button type="submit" className="app-button-primary w-full">
                Send Message
              </button>
            </form>

            <div className="mt-8 rounded-[1.5rem] border border-[var(--surface-border)] bg-[var(--surface-panel-strong)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-gold)]">
                For direct inquiries
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                If you are sharing product ideas, bug notes, or collaboration requests,
                this form is the fastest path. We review feedback in small focused batches.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
