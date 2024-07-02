import { useEffect, useState } from "react";
import SellChild from "../child-component/SellChild";
import { Link } from "react-router-dom";

const HPC = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('sell.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="container mx-auto grid justify-center items-center py-[40px] md:py-[120px]">
                <h1 className="uppercase font-cinzel font-[400] text-[24px] md:text-[56px] text-center pb-[24px] md:pb-[48px]">{props.title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                    {
                        data.map(eachData => <SellChild key={eachData.id} eachData={eachData} />)
                    }
                </div>
                <div className="flex justify-center">
                    <button className="border border-[#D37D0C] bg-[#D37D0C] font-outfit font-[600] text-[16px] text-white py-[19px] px-[47px] mt-[56px]"><Link to='/contactus'>Contact us</Link></button>
                </div>
            </div>
        </div>
    )
};

export default HPC;
