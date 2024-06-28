
const RenconChild = ({ eachData }) => {
    const { img, title } = eachData;
    return (
        <div className="relative w-[343px] md:w-[369px] h-[413px] md:h-[432px]">
            <img className="" src={img} alt="" />
            <p className="absolute text-white bottom-0 font-cinzel font-[400] text-[30px] p-[16px] text-white">{title}</p>
        </div>
    )
};

export default RenconChild;
