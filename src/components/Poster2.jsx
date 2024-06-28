import lr2 from '/img/lr2.png'
const Poster = () => {
    return (
        <div className="flex flex-col flex-col-reverse md:flex-row justify-center items-center gap-[40px] md:gap-[126px] py-[40px] md:py-[90px] bg-[#F7F7F4]">
            <div>
                <img src={lr2} alt="" className="w-[343px] md:w-[570px] h-[336px] md:h-[560px]" />
            </div>
            <div className="w-[343px] md:w-[474px] h-[316px] md:h-[426px] space-y-[16px] md:space-y-[24px]">
                <h1 className='font-cinzel font-[400] text-[24px] md:text-[56px]'>SHARED OWNERSHIP</h1>
                <p className='font-outfit font-[300] text-[16px] md:text-[18px]'>Crowdfunding is the practice of funding a project or venture by raising money from a large number of people, typically via the internet. Crowdfunding is a form of crowdsourcing and alternative finance. In 2015, over US$34 billion was raised worldwide by crowdfunding.</p>
                <p className="font-outfit font-[600] text-[16px] md:text-[18px] text-[#D37D0C]">Read More</p>
            </div>
        </div>
    )
};

export default Poster;
