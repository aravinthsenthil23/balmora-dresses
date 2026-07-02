import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const serviceId = 'service_r2s4dty';
        const templateId = 'template_bzb5y04';
        const publicKey = 'WEq5a-Oauowz0tQe0';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Email sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatus('Failed to send email. Please try again.');
            });
    };

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ display: 'inline', marginBottom: '5px' }}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', borderTop: '0.5px solid white', borderLeft: '0.5px solid white', borderRight: '0.5px solid white', borderBottom: '0.5px solid black' }}
                    />
                </div>

                {/* Email Input */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderTop: '0.5px solid white', borderLeft: '0.5px solid white', borderRight: '0.5px solid white', borderBottom: '0.5px solid black' }}
                    />
                </div>

                {/* Message Input */}
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%', padding: '8px', boxSizing: 'border-box',
                            borderTop: '0.5px solid white', borderLeft: '0.5px solid white', borderRight: '0.5px solid white', borderBottom: '0.5px solid black'
                        }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer',borderRadius:'25px' }}>Submit</button>
            </form>
            {status && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{status}</p>}
        </div>
    );
}

export default ContactForm;
