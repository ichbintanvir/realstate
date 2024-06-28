// import lr1 from '../img/lr1.png'
const Poster = (props) => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-[40px] md:gap-[126px] py-[40px] md:py-[90px]">
            <div className="w-[343px] md:w-[474px] h-[316px] md:h-[426px] space-y-[16px] md:space-y-[24px]">
                <h1 className='font-cinzel font-[400] text-[24px] md:text-[56px] uppercase'>{props.title}</h1>
                <p className='font-outfit font-[300] text-[16px] md:text-[18px]'>{props.information}</p>
                <p className="font-outfit font-[600] text-[16px] md:text-[18px] text-[#D37D0C]">Read More</p>
            </div>
            <div>
                {/* <img src={`${props.src === 'first' ? '/img/lr1.png' : '/img/lr3.png'}`} alt="" className="w-[343px] md:w-[570px] h-[336px] md:h-[560px]" /> */}
                <img src={props.src} alt="" className="w-[343px] md:w-[570px] h-[336px] md:h-[560px]" />
            </div>
        </div>
    )
};

export default Poster;
