import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SociaLindkedIn from '@/assets/social-linkedin.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative before:content-[""] before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:bg-red-500 before:absolute'>
          <Image src={Logo} alt='logo' height={40} />
        </div>
        
        <nav>
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Customers</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>

        <div>
          <SocialX />
          <SociaLindkedIn />
          <SocialInsta />
          <SocialYoutube /> 
        </div>
        <p>&copy; 2024 Your Company, Inc. All rights reserved</p>
      </div>
    </footer>
  );
};
