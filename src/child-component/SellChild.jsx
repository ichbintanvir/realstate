import { GiBathtub } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";

const SellChild = ({ eachData }) => {
    const { img, title, price, info, bed, bathroom } = eachData
    return (
        <div className="w-[343px] md:w-[374px] h-[430px]">
            <img className="w-[343px] md:w-[373px] h-[261px] pb-[20px] bg-cover" src={img} alt="" />
            <span className="flex justify-between items-center pb-[15px] md:pb-[18px]">
                <p className="font-outfit font-[400] text-[20px]">{title}</p>
                <p className="font-pluse font-[700] font-bold text-[18px] ">${price}</p>
            </span>
            <p className="font-outfit font-[400] text-[16px] pb-[20px]">{info}</p>
            <div className="flex gap-[29px] items-center">
                <span className="flex items-center gap-[12px]">
                    <p className="bg-black rounded-full p-[10px]">
                        <IoBedOutline className="w-[18px] h-[18px] text-[#FFCC83]" />
                    </p>
                    <p className="font-outfit font-[400] text-[16px]">{bed} bedroom</p>
                </span>
                <span className="flex items-center gap-[12px]">
                    <p className="bg-black rounded-full p-[10px]">
                        <GiBathtub className="w-[18px] h-[18px] text-[#FFCC83]" />
                    </p>
                    <p className="font-outfit font-[400] text-[16px]">{bathroom} bathroom</p>
                </span>
            </div>
        </div>
    )
};

export default SellChild;
