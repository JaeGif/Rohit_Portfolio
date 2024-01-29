import ContactForm from '@/components/contact/ContactForm';
import ContactTitle from '@/components/contact/ContactTitle';
import React from 'react';

function contact() {
  return (
    <div className='w-screen flex flex-col items-center h-screen'>
      <ContactTitle />
      <ContactForm />
    </div>
  );
}

export default contact;
