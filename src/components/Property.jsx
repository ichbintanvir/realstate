import { useEffect, useState } from "react";
import SellChild from "../child-component/SellChild";

const Property = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('sell.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const newData = data.slice(0, 3);
    return (
        <div className={`${props.color === 'true' ? 'bg-[#F7F7F4]' : ''}`}>
            <div className="container mx-auto grid justify-center items-center py-[40px] md:py-[120px]">
                <h1 className="uppercase font-cinzel font-[400] text-[24px] md:text-[56px] text-center pb-[24px] md:pb-[48px]">{props.name} property</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                    {
                        newData.map(eachData => <SellChild key={eachData.id} eachData={eachData} />)
                    }
                </div>
                <div className="flex justify-center">
                    <button className="border border-[#D37D0C] font-outfit font-[600] text-[16px] text-[#D37D0C] py-[19px] px-[40px] mt-[56px]">See all properties</button>
                </div>
            </div>
        </div>
    )
};

export default Property;
