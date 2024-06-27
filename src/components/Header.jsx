import { useEffect } from 'react';
import navlogo from '../img/navlogo.png'
import { useState } from 'react';
import Navlink from '../child-component/Navlink';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

const Header = () => {
    const [data, setDate] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch('header.json')
            .then(res => res.json())
            .then(data => setDate(data))
    }, []);

    return (
        <div className='bg-[#18181B]'>
            {/* <div className='bg-[#18181B] h-[104px]'> */}
            <nav className='container mx-auto grid grid-cols-3 items-center py-[24px] px-[16px]'>
                <img src={navlogo} alt="" />
                <ul className={`bg-[#18181B] w-full flex flex-col md:flex-row justify-end col-span-2 row-start-2 md:row-start-1 md:col-start-2 absolute md:static duration-500 ease-in left-0 py-5 px-5 ${!open ? ' top-[-250px]' : 'top-[100px]'}`}>
                    {
                        data.map(eachData => <Navlink key={eachData.id} eachData={eachData} />)
                    }
                </ul>
                <div onClick={() => setOpen(!open)} className='text-white text-[24px] md:hidden row-start-1 col-start-2 col-span-3 grid justify-end'>
                    {
                        open ? <MdClose /> : <HiOutlineMenuAlt2 className='rotate-180' />
                    }
                </div>
            </nav>
        </div>
    )
};

export default Header;
