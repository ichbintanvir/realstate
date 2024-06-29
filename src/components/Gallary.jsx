const images = [
    {
        img: '/img/projectGallary/pg1.png'
    },
    {
        img: '/img/projectGallary/pg2.png'
    },
    {
        img: '/img/projectGallary/pg3.png'
    },
    {
        img: '/img/projectGallary/pg4.png'
    },
    {
        img: '/img/projectGallary/pg5.png'
    },
    {
        img: '/img/projectGallary/pg6.png'
    },
    {
        img: '/img/projectGallary/pg7.png'
    },
    {
        img: '/img/projectGallary/pg8.png'
    }
]
const Gallary = () => {
    return (
        <div className="bg-[#F7F7F4]">
            <div className="container mx-auto py-[40px] md:py-[88px] grid justify-center items-center">
                <h1 className="font-cinzel font-[400] text-[24px] md:text-[56px] text-center">Project gallary</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mt-[48px]">
                    {
                        images.map(eachImg => <img src={eachImg.img} className="w-[162px] md:w-[280px] h-[182px] md:h-[266px]" />)
                    }
                </div>
            </div>
        </div>
    )
};

export default Gallary;
