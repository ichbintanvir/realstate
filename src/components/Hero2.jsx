const Hero2 = (props) => {
    return (
        <div className="bg-home2 bg-cover bg-center">
            <div className="bg-customBlack2 w-full h-[240px] text-white grid justify-center items-center">
                <div>
                    <h1 className="uppercase text-center font-cinzel font-[400] text-[28px] md:text-[48px]">{props.name}</h1>
                    <p className="text-center font-[outfit] font-[400] text-[16px]">Transfering Your Vision into Reality</p>
                </div>
            </div>
        </div>
    )
};

export default Hero2;
