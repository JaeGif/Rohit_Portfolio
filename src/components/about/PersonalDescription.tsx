import React from 'react';
import Image from 'next/image';
function PersonalDescription() {
  return (
    <div id='about' className='flex flex-col w-full'>
      <span className='w-full flex md:flex-row flex-col justify-center items-center gap-10'>
        <div className='flex w-full justify-start flex-col gap-2'>
          <p>
            Hiya! My name is Rohit Mallick and I&apos;m from Bel Air, Maryland.
            My family has always been interested in exploring new places and
            that&apos;s why I&apos;m no different! I&apos;ve visited Western
            Europe, India, Nepal, Singapore, Thailand and more! When it came
            time to choose an undergraduate college I knew I needed to leave
            Maryland so I ventured off and became a Purdue University
            Boilermaker. In May 2020 I successfully graduated with a Brain and
            Behavioral Sciences bachelors and a minor in Computer Science. It
            was through my experiences at Purdue and my summer internships at
            the U.S. Army Research Lab that led me to Clemson&apos;s TRACE Lab
            to pursue research as a career. Upon entering, I was astounded by
            the range of research ideas and different disciplines working
            together cohesively and efficiently. This was my first indication
            that I had made the right choice.
          </p>
          <br />
          <p>
            Currently, I am pursuing a Human-Centered Computing PhD and focusing
            on how to design effective AI teammates that motivate and inspire
            their human teammates within human-AI teams. I am eager to continue
            making a positive difference within the field of human-computer
            interaction and look forward to learning more about you! Thanks for
            visiting!
          </p>
        </div>
        <Image
          className='md:w-1/3 w-full'
          src={'/assets/rohit.jpg'}
          alt='rohit'
          height={300}
          width={300}
        />
      </span>
    </div>
  );
}

export default PersonalDescription;
