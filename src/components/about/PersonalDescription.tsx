import React from 'react';
import Image from 'next/image';
function PersonalDescription() {
  return (
    <div id='about' className='flex flex-col w-full'>
      <span className='w-full flex md:flex-row flex-col justify-center items-center gap-10'>
        <div className='flex w-full justify-start flex-col gap-2'>
          {/* <p>
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
          </p> */}


          <p>
          Rohit Mallick is a Research Scientist & Project Manager for the Team Research 
          Analytics in Computational Environments (TRACE) Research Group at Clemson University. 
          This position is an extension of his 5-year appointment as a Graduate Research Assistant 
          and was awarded for successfully completing his Ph.D. in Human-Centered Computing under 
          the advisement of Dr. Nathan J. McNeese. Throughout these five years, Rohit has worked on 
          funded grants from the United States Army Combat Capabilities Development Command (CCDC), 
          the Office of Naval Research (ONR), the National Science Foundation (NSF), and the Air Force 
          Office of Scientific Research (AFOSR) totaling a value of $1,784,551.20. Rohit has leveraged 
          these grants to make notable contributions to the fields of human-AI teaming (HAT), human-computer 
          interaction (HCI), human factors, and computer-supported collaborative work (CSCW). To date, Rohit 
          has produced six journal articles, thirteen conference papers, a technology disclosure, seven 
          conference presentations, and thirteen research posters as a mixed-methods researcher of 
          qualitative and quantitative methods. Along with his research accomplishments, he has also 
          consistently taken on leadership within TRACE as the Undergraduate Student Coordinator (2023) 
          and Lead Ph.D. Student (2024) to mentor incoming students in the nuances of academic research. 
          Boasting research experience for over ten years via previous internships/assistantships at the 
          United States Army Research Laboratory and Purdue University's Computational Cognitive Neuroscience 
          Laboratory, Rohit actively works to provide diverse perspectives in the design of AI technologies to 
          promote the well-being of their human collaborators. 
          </p>
          
        </div>
        <Image
          className='md:w-1/3 w-full'
          src={'/assets/gallery/15.jpg'}
          alt='rohit'
          height={300}
          width={300}
        />
      </span>
    </div>
  );
}

export default PersonalDescription;
