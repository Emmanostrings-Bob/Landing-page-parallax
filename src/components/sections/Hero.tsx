'use client';
import ArrowIcon from '@/assets/arrow-right.svg';
import CogImage from '@/assets/cog.png';
import Image from 'next/image';
import CylinderImage from '@/assets/cylinder.png';
import NoodleImage from '@/assets/noodle.png'; 
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from "react";
export const Hero = () => {

  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);


  return (
    <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className="tag">Verion 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
            <p className="text-xl md:text-2xl text-[#010D3E] tracking-tight mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti quidem velit. Cupiditate suscipit nostrum placeat iste eius voluptatum nisi rem quod</p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5"/>
              </button>
            </div>
          </div>
          <div className='mt-20 md:-0 md:h-[648px] md:flex-1 relative'>
            <motion.img
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 3,
              ease: 'easeInOut',
            }}
             src={CogImage.src} alt='Cog image' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'/>

            <motion.img
            style={{
              translateY: translateY,
            }}
             src={CylinderImage.src} alt='Cylinder image' width={220} height={220}
            className='hidden md:block -top-8 -left-32 md:absolute'
            />

            <motion.img
            style={{
              rotate: 30,
              translateY: translateY,
            }}
             src={NoodleImage.src} alt='Noodle image' width={220} className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'  />
          </div>
        </div>
      </div>
    </section>
  );
};
