import React from 'react'

const Form1 = () => {
    return (
        <form className='grid grid-cols-1 md:grid-cols-2 gap-[30px] font-outfit font-[400]'>
            <span className='col-span-2 md:col-span-1 flex flex-col'>
                <label htmlFor="" className='text-[16px]'>Home type</label>
                <input className='p-[16px] mt-[8px] border border-[#BFBFBD] text-[14px]' type="text" placeholder='house#23, new york |' />
            </span>
            <span className='col-span-2 md:col-span-1 flex flex-col'>
                <label htmlFor="" className='text-[16px]'>Address</label>
                <input className='p-[16px] mt-[8px] border border-[#BFBFBD] text-[14px]' type="text" placeholder='house#23, new york |' />
            </span>
            <span className='col-span-2 md:col-span-1 flex flex-col'>
                <label htmlFor="" className='text-[16px]'>Full baths</label>
                <input className='p-[16px] mt-[8px] border border-[#BFBFBD] text-[14px]' type="text" placeholder='house#23, new york |' />
            </span>
            <span className='col-span-2 md:col-span-1 flex flex-col'>
                <label htmlFor="" className='text-[16px]'>Full rooms</label>
                <input className='p-[16px] mt-[8px] border border-[#BFBFBD] text-[14px]' type="text" placeholder='house#23, new york |' />
            </span>
            <span className='col-span-2 flex flex-col'>
                <label htmlFor="" className='text-[16px]'>What I have love about this home</label>
                <textarea className='p-[16px] mt-[8px] border border-[#BFBFBD] text-[14px]' type="text" placeholder='Share details about your project to help us understand your vision.' rows={5}></textarea>
            </span>
            <span className='col-span-2 flex flex-col'>
                <label htmlFor="" className='text-[16px]'>Total sq. feet</label>
                <input className='p-[16px] mt-[8px] border border-[#BFBFBD] text-[14px]' type="text" placeholder='house#23, new york |' />
            </span>
        </form>
    )
}

export default Form1