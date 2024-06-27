// import navlogo from '../img/navlogo'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import navlogo from '../img/navlogo.png'
import { TiMessage } from 'react-icons/ti';
const Footer = () => {
    return (
        <div className='bg-[#18181B] text-white'>
            <section className="container mx-auto">
                <section className='grid md:grid-cols-3 grid-cols-1 px-[16px] pt-[80px] gap-[40px]'>
                    <div className=''>
                        <img src={navlogo} alt="" />
                        <div className='mt-[20px] flex gap-[18px]'>
                            <span className='border border-white p-[12px] rounded-full'>
                                <FaLinkedinIn className='w-[24px] h-[24px]' />
                            </span>
                            <span className='border border-white p-[12px] rounded-full'>
                                <FaFacebook className='w-[24px] h-[24px]' />
                            </span>
                            <span className='border border-white p-[12px] rounded-full'>
                                <FaInstagram className='w-[24px] h-[24px]' />
                            </span>
                        </div>
                    </div>
                    <div className='col-span-2 grid grid-cols-3'>
                        <div>
                            <h1 className='font-outfit text-[18px] md:text-[20px] font-[700]'>Company</h1>
                            <ul className='font-outfit text-[16px] font-[600] text-white mt-[24px] flex flex-col gap-[20px]'>
                                <li>Home</li>
                                <li>Projects</li>
                                <li>About Us</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-outfit text-[18px] md:text-[20px] font-[700]'>Services</h1>
                            <ul className='font-outfit text-[16px] font-[600] text-white mt-[24px] flex flex-col gap-[20px]'>
                                <li>Rentals</li>
                                <li>Sales</li>
                                <li>Contact</li>
                                <li>Our Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-outfit text-[18px] md:text-[20px] font-[700]'>Resource</h1>
                            <ul className='font-outfit text-[16px] font-[600] text-white mt-[24px] flex flex-col gap-[20px]'>
                                <li>Contact Us</li>
                                <li>Term</li>
                                <li>Police</li>
                                <li>Payment</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='grid grid-cols-1 md:grid-cols-2 items-center pt-[40px] pb-[80px] border-t-2 border-zinc-300 my-[60px] px-[16px]'>
                    <div className='grid grid-cols-3'>
                        <div className='flex gap-[12px] items-center'>
                            <span className='border border-white p-[10px] md:p-[12px] rounded-full'>
                                <FaPhoneAlt className='w-[20px] md:w-[24px] w-[20px] md:h-[24px]' />
                            </span>
                            <span className='font-outfit text-[12px] md:text-[16px] font-[400]'>
                                <p>Have a questions?</p>
                                <p>310-437-2766</p>
                            </span>
                        </div>
                        <div className='flex gap-[12px] items-center col-span-2 justify-end md:justify-start'>
                            <span className='border border-white p-[10px] md:p-[12px] rounded-full'>
                                <TiMessage className='w-[20px] md:w-[24px] w-[20px] md:h-[24px]' />
                            </span>
                            <span className='font-outfit text-[12px] md:text-[16px] font-[400]'>
                                <p>Have a questions?</p>
                                <p>310-437-2766</p>
                            </span>
                        </div>
                    </div>
                    <span className='flex sm:justify-start md:justify-end mt-[40px] md:mt-0'>&copy;{new Date().getFullYear()} - Renovastic, All Rights Reserved </span>
                </section>
            </section>
        </div>
    )
};

export default Footer;
