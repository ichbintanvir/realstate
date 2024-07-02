// import contactBG from '../img/contactBG.png'
const Contactus = () => {
    const ok = (event) => {
        event.preventDefault();
        const form = event.target;
        form.reset();
    }
    return (
        <div className="h-[545px] w-full bg-contactBG bg-cover bg-center py-[50px]">
            {/* <div className="w-[776px] h-[444px] mx-auto py-[50px] bg-transparent opacity-3 place-content-center"> */}
            <div className="w-[300px] md:w-[776px] h-[465px] mx-auto bg-customBlack3 place-content-center py-[16px]">
                <h1 className="font-cinzel font-[400] text-[24px] md:text-[56px] text-white text-center mb-[18px]">CONTACT US</h1>
                <p className="font-pluse font-[500] text-[12px] md:text-[18px] text-white text-center mb-[32px]">Looking for inspiration to enhance for Contact Us</p>
                <form onSubmit={ok} className="px-[16px] md:px-[176px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] font-outfit font-[400] text-[#D6D6D6]">
                        <span className="flex flex-col col-span-2 md:col-span-1">
                            <label htmlFor="" className="text-[14px]">First Name*</label>
                            <input className="bg-transparent border border-[#D4D4D8] px-[8px] py-[10px] text-[12px]" type="text" placeholder="Ex. Adnan" required />
                        </span>
                        <span className="flex flex-col col-span-2 md:col-span-1">
                            <label htmlFor="" className="text-[14px]">Last Name*</label>
                            <input className="bg-transparent border border-[#D4D4D8] px-[8px] py-[10px] text-[12px]" type="text" placeholder="Ex. Ralf" required />
                        </span>
                        <span className="flex flex-col col-span-2 mt-[20px]">
                            <label htmlFor="" className="text-[14px]">Email*</label>
                            <input className="bg-transparent border border-[#D4D4D8] px-[8px] py-[10px] text-[12px]" type="email" placeholder="example@gmail.com" required />
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#D37D0C] font-outfit font-[600] text-[20px] text-white py-[13px] px-[20px] my-[32px]">Schedule for consulation</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contactus;
