// import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Hero = () => {
    return (
        <div className="bg-heroBG bg-cover bg-center">
            <div className="bg-customBlack2 w-full max-h-[626px] text-white grid justify-center items-center">
                <div className="container mx-auto">
                    <h1 className="uppercase text-center font-cinzel font-[400] pt-[223px] text-[28px] md:text-[56px]">our service in buffalo</h1>
                    <p className="text-center font-[outfit] font-[400] text-[16px]">Just a phone call away</p>
                    <div className="flex justify-center mt-[32px]">
                        <button className="bg-[#D37D0C] font-outfit font-[600] text-[20px] text-white py-[13px] px-[20px]">Get FREE Estimation</button>
                    </div>
                    <span className="grid justify-center mt-[24px]">
                        <img src="/img/arrow.png" className="text-white w-[18px] md:w-[28px] h-[40px] md:h-[30px]" />
                    </span>
                    <h1 className="text-center font-bangla font-[400] text-[16px] md:text-[36px] pb-[75px] mt-[30px]">বাফেলোতে আমাদের সেবা মাত্র একটি ফোন কল দূরে</h1>
                </div>
            </div>
        </div>
    )
};

export default Hero;
