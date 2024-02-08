import React from 'react';

function ContactForm() {
  return (
    <div className='flex justify-center items-center lg:w-[45vw] md:w-[50vw] w-full bg-slate-200 p-6 rounded-xl shadow-lg'>
      <form
        className='w-full h-full flex flex-col gap-2'
        action='https://formsubmit.co/ro.mallick@gmail.com'
        method='POST'
      >
        <div className='flex flex-col'>
          <label htmlFor='name'>Name</label>
          <input
            className='h-10 p-2 rounded-md bg-gray-50 shadow-sm'
            id='name'
            required
            type='text'
            name='name'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input
            className='h-10 p-2 rounded-md bg-gray-50 shadow-sm'
            id='email'
            required
            type='email'
            name='email'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='resize-y h-24 min-h-[2.5rem] rounded-md p-2 bg-gray-50 shadow-sm'
            id='message'
            name='message'
            required
            maxLength={150}
            minLength={1}
          ></textarea>
        </div>
        <div className='w-full flex justify-center'>
          <button
            className='flex w-fit p-2 pr-3 pl-3 justify-center border-2 border-gray-800 rounded-md'
            type='submit'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
