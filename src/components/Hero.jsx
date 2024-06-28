import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Hero = () => {
    return (
        <div className="bg-heroBG bg-cover bg-center">
            <div className="bg-customBlack2 w-full h-screen text-white grid justify-center items-center">
                <div>
                    <h1 className="uppercase text-center font-cinzel font-[400] text-[28px] md:text-[56px]">our service in buffalo</h1>
                    <p className="uppercase text-center font-[outfit] font-[400] text-[16px]">just a phone call away</p>
                    <div className="flex justify-center">
                        <button className="bg-[#D37D0C] font-outfit font-[600] text-[20px] text-white py-[13px] px-[20px] my-[32px]">Schedule for consulation</button>
                    </div>
                    <span className="grid justify-center">
                        <MdKeyboardDoubleArrowUp className="text-white w-[18px] md:w-[28px] h-[40px] md:h-[30px]" />
                    </span>
                    <h1 className="text-center font-bangla font-[400] text-[16px] md:text-[36px]">বাফেলোতে আমাদের সেবা মাত্র একটি ফোন কল দূরে</h1>
                </div>
            </div>
        </div>
    )
};

export default Hero;
