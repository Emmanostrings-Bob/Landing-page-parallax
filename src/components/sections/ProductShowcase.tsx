import ProductImage from  '@/assets/product-image.png'
import PyramidImage from '@/assets/pyramid.png'
import TubeImage from '@/assets/tube.png'
import Image from 'next/image';

export const ProductShowcase = () => {
  return(
<section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
  <div className="container">
    <div className='section-heading'>
      <div className='flex flex-col justify-center items-center'>
        <div className='tag'>Boost your productivity</div>
        <h2 className='section-title mt-5'>A more effect way to track progress</h2>
        <p className='section-description mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eaque omnis? Impedit eum explicabo, quidem labore error tempora ut reiciendis officia ea, consectetur saepe repellat aperiam facere molestiae incidunt sit.</p>
      </div>
    </div>
    <div className='relative'>
        <Image src={ProductImage} alt='product image' className='mt-10'/>
        <Image src={PyramidImage} alt='pyramid image' height={262} width={262} className='hidden md:block absolute -right-36 -top-32'/>
        <Image src={TubeImage} alt='tube image' height={248} className='hidden md:block absolute bottom-24 -left-36'/>
      </div>
  </div>
</section>
  );
};
