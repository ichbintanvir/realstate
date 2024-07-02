
const Videomessage = () => {
    return (
        <div className="grid justify-center py-[120px] px-[16px]">
            <h1 className="uppercase font-cinzel font-[400] text-[24px] md:text-[56px] text-center">our message to our client</h1>
            {/* <iframe className="w-[1180px] h-[430px] rounded-md" src="https://youtu.be/hw6caNefVqc" /> */}
            <iframe className="w-[343px] md:w-[1180px] h-[375px] md:h-[430px] rounded-md mt-[40px]" src="https://www.youtube.com/embed/hw6caNefVqc?si=5wd1W7kSYR-dfrND" allowfullscreen></iframe>
        </div>
    )
};

export default Videomessage;
