
const RenconChild = ({ eachData }) => {
    const { img, title } = eachData;
    return (
        // <div className="relative w-[343px] md:w-[369px] h-[413px] md:h-[432px]">
        <div className="relative max-w-[343px] md:max-w-[369px]">
            <div className="">
                <img src={img} alt="" />
                {/* <p className="absolute text-white bottom-0 font-cinzel font-[400] text-[30px] p-[16px] text-white bg-customBlack3">{title}</p> */}
                <div className="absolute inset-x-0 bottom-0">
                    <p className="text-white font-cinzel font-[400] text-[30px] p-[16px] text-white bg-customBlack3">{title}</p>
                </div>
            </div>
        </div>
    )
};

export default RenconChild;
