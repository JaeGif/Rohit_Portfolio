import ContactForm from '@/components/contact/ContactForm';
import ContactTitle from '@/components/contact/ContactTitle';
import React from 'react';
import Head from 'next/head';
function contact() {
  return (
    <>
      <Head>
        <title>Rohit Mallick | Contact</title>
        <meta name='description' content='Contact Rohit Mallick' />
      </Head>
      <div className='w-screen flex flex-col items-center h-screen'>
        <ContactTitle />
        <ContactForm />
      </div>
    </>
  );
}

export default contact;
