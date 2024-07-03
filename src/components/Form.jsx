import React, { useState } from 'react'
import Form1 from './Form1'
import Form3 from './Form3'
import Form2 from './Form2'

const Form = () => {
    const [page, setPage] = useState(0);
    const send = (event) => {
        event.preventDefault();
    }
    return (
        <div className='bg-white'>
            <div className="container mx-auto py-[40px] md:py-[120px]">
                <h1 className='uppercase text-center font-cinzel font-[400] text-[24px] md:text-[56px]'>input form</h1>
                <div className='grid grid-cols-3 gap-[16px] pt-[32px] pb-[72px] mx-[16px]'>
                    <div className={`h-[14px]  ${page === 0 || page === 1 || page === 2 ? 'bg-[#D37D0C]' : 'bg-[#EAECF0]'}`}></div>
                    <div className={`h-[14px]  ${page === 1 || page === 2 ? 'bg-[#D37D0C]' : 'bg-[#EAECF0]'}`}></div>
                    <div className={`h-[14px]  ${page === 2 ? 'bg-[#D37D0C]' : 'bg-[#EAECF0]'}`}></div>
                </div>
                <form onSubmit={send}>
                    <div className='max-w-[770px] mx-[16px] md:mx-auto'>
                        {
                            page === 0 ? <Form1 /> : page === 1 ? <Form2 /> : <Form3 />
                        }
                    </div>
                    <div className='flex justify-end gap-[12px] md:gap-[24px] mx-[16px]'>
                        {
                            page === 0 ? <button onClick={() => setPage(page + 1)} className='bg-[#D37D0C] text-white font-outfit font-[600] text-[16px] px-[40px] py-[16px] mt-[72px]'>Next</button>
                                :
                                page === 1 ?
                                    <>
                                        <button onClick={() => setPage(page - 1)} className='border border-[#D37D0C] text-[#D37D0C] font-outfit font-[600] text-[16px] px-[40px] py-[16px] mt-[72px]' disabled={page == 0}>Previous</button>
                                        <button onClick={() => setPage(page + 1)} className='bg-[#D37D0C] text-white font-outfit font-[600] text-[16px] px-[40px] py-[16px] mt-[72px]' disabled={page == 2}>Next</button>
                                    </>
                                    :
                                    <>
                                        <button onClick={() => setPage(page - 1)} className='border border-[#D37D0C] text-[#D37D0C] font-outfit font-[600] text-[16px] px-[40px] py-[16px] mt-[72px]' disabled={page == 0}>Previous</button>
                                        <button className='bg-[#D37D0C] text-white font-outfit font-[600] text-[16px] px-[40px] py-[16px] mt-[72px]' >Submit</button>
                                    </>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form