import { Link } from "react-router-dom";

const Navlink = ({ eachData }) => {
    const { id, name, path } = eachData;
    return (
        <div>
            <p className="text-white font-outfit font-normal text-[16px] mr-[36px]"><Link to={eachData.path}>{name}</Link></p>
        </div>
    )
};

export default Navlink;
