import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";

const Carusol = () => {
    const [slide, setSlide] = useState(0);

    return (
        <div className='bg-[#F7F7F4]'>
            <div className="container mx-auto grid justify-center items-center py-[40px] md:py-[120px]">
                <h1 className="uppercase font-cinzel font-[400] text-[24px] md:text-[56px] text-center pb-[24px] md:pb-[48px]">our clients say</h1>
                <div className="grid justify-center items-center">
                    {
                        slide === 0 ? <Slide2 /> : <Slide1 />
                    }

                    <div className="flex justify-center gap-[12px] pt-[24px] md:pt-[48px]">
                        {/* <button onClick={() => setSlide(slide - 1)} className={`${slide == 0}?'bg-btnBG':'bg-red-400'`} disabled={slide == 0}> */}
                        <button onClick={() => setSlide(slide - 1)} className={`${slide === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={slide == 0}>
                            <IoIosArrowRoundBack className={`text-[#D37D0C] text-[42px] border border-[#D37D0C] ${slide === 0 ? 'bg-btnBG' : ''}`} />
                        </button>
                        {/* <button onClick={() => setSlide(slide + 1)} className={`${slide == 1}?bg-btnBG:bg-red-400`} disabled={slide == 1}> */}
                        <button onClick={() => setSlide(slide + 1)} className={`${slide === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={slide == 1}>
                            <IoIosArrowRoundForward className={`text-[#D37D0C] text-[42px] border border-[#D37D0C] ${slide === 1 ? 'bg-btnBG' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Carusol;
