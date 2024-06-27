
const Navlink = ({ eachData }) => {
    const { id, name } = eachData;
    return (
        <div>
            <p className="text-white font-outfit font-normal text-[16px] mr-[36px]">{name}</p>
        </div>
    )
};

export default Navlink;
