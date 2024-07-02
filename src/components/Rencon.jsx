import { useEffect, useState } from "react";
import RenconChild from "../child-component/RenconChild";

const Rencon = () => {
    const [data, setDate] = useState([])

    useEffect(() => {
        fetch('rencon.json')
            .then(res => res.json())
            .then(data => setDate(data))
    }, [])

    return (
        <div className="bg-black">
            <div className="container md:mx-auto grid justify-center items-center">
                <h1 className="uppercase text-center font-cinzel font-[400] text-[24px] md:text-[56px] text-white pt-[88px] pb-[48px]">renovation & construction </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-[24px] md:gap-[30px] pb-[88px]">
                    {
                        data.map(eachData => <RenconChild key={eachData.id} eachData={eachData} />)
                    }
                </div>
            </div>
        </div>
    )
};

export default Rencon;
