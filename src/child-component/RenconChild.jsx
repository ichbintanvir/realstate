
const RenconChild = ({ eachData }) => {
    const { img, title } = eachData;
    return (
        // <div className="relative w-[343px] md:w-[369px] h-[413px] md:h-[432px]">
        <div className="relative max-w-[343px] md:max-w-[369px]">
            <div className="bg-customBlack">
                <img className="" src={img} alt="" />
                <p className="absolute text-white bottom-0 font-cinzel font-[400] text-[30px] p-[16px] text-white">{title}</p>
            </div>
        </div>
    )
};

export default RenconChild;
