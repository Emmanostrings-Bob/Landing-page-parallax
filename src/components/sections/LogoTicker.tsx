'use client';
import AcmeLogo from '@/assets/logo-acme.png';
import QuantumLogo from '@/assets/logo-quantum.png';
import CelestialLogo from '@/assets/logo-celestial.png';
import PulseLogo from '@/assets/logo-pulse.png';
import ApexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
export const LogoTicker = () => {
  return (
    <div className='py-8 bg-white md:py-12'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>

          <motion.div 
          animate={{
            translateX: '-50%',
          }}
          transition={{
            duration : 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}

          className='flex gap-14 flex-none pr-14'>

            <Image src={AcmeLogo} alt='Acme Logo' className='logo-ticker-image' />
            <Image src={QuantumLogo} alt='Quantum Logo' className='logo-ticker-image' />
            <Image src={CelestialLogo} alt='celestial logo' className='logo-ticker-image' />
            <Image src={PulseLogo} alt='Pulse logo' className='logo-ticker-image' />
            <Image src={ApexLogo} alt='Apex Logo' className='logo-ticker-image' />

            {/* Second set for animation */}
            <Image src={AcmeLogo} alt='Acme Logo' className='logo-ticker-image' />
            <Image src={QuantumLogo} alt='Quantum Logo' className='logo-ticker-image' />
            <Image src={CelestialLogo} alt='celestial logo' className='logo-ticker-image' />
            <Image src={PulseLogo} alt='Pulse logo' className='logo-ticker-image' />
            <Image src={ApexLogo} alt='Apex Logo' className='logo-ticker-image' />
          </motion.div>

        </div>
      </div>
    </div>
    
  );
};
