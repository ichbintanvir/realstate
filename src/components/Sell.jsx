import { useEffect, useState } from "react";
import SellChild from "../child-component/SellChild";

const Sell = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('sell.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="container mx-auto grid justify-center items-center py-[40px] md:py-[120px]">
                <h1 className="uppercase font-cinzel font-[400] text-[24px] md:text-[56px] text-center pb-[24px] md:pb-[48px]">property for sell</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                    {
                        data.map(eachData => <SellChild key={eachData.id} eachData={eachData} />)
                    }
                </div>
            </div>
        </div>
    )
};

export default Sell;
