import { useState } from "react";

const IslamicCard = (props) => {
    const [more, setMore] = useState(false);
    let details = props.details;

    if (!more) {
        details = details.substring(0, 250) + '...'
    }

    return (
        <div className="container mx-auto py-[48px] md:py-[120px]">
            <div className={`flex flex-col flex-col-reverse justify-center items-center md:flex-row ${props.rowrotate === 'true' ? 'md:flex-row-reverse' : ''} gap-[30px]`}>
                <div className="bg-[#F7F7F4] w-[343px] md:w-[518px]  h-[450px] md:h-[408px] p-[16px] md:p-[24px]">
                    <h1 className='font-cinzel font-[400] text-[24px] uppercase pb-[12px]'>{props.title}</h1>
                    <p className='font-outfit font-[300] text-[16px] pb-[24px]'>{details}</p>
                    <button onClick={() => setMore((prevstate) => !prevstate)} className="font-outfit font-[400] text-[20px] text-[#996830]">{more ? 'Less' : 'Read More'}</button>
                </div>
                <div>
                    {/* <img src={`${props.src === 'first' ? '/img/lr1.png' : '/img/lr3.png'}`} alt="" className="w-[343px] md:w-[570px] h-[336px] md:h-[560px]" /> */}
                    <img src={props.src} alt="" className="w-[343px] md:w-[669px] h-[210px] md:h-[408px]" />
                </div>
            </div>
        </div>
    )
};

export default IslamicCard;
