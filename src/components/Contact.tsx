import React from 'react';

interface ContactProps {
  email: string;
}

const Contact: React.FC<ContactProps> = ({ email }) => {
  return (
    <section id="contact" className="section container">
      <h2 className="text-3xl font-bold mb-4.5">Contact</h2>
      <p className="text-lg text-muted mb-6">Have a project or role in mind? Let's talk.</p>
      <a href={`mailto:${email}`} className="btn btn-primary text-lg px-8 py-3">
        Email Me
      </a>
    </section>
  );
};

export default Contact;
