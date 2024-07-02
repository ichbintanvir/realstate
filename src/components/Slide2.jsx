import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

const Slide2 = () => {
    return (
        <div className="grid grid-cols-2">
            <section className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-[24px] justify-center items-center">
                <div className="w-[374px] h-[204px] bg-white p-[20px]">
                    <span className="flex gap-[12px] mb-[20px]">
                        <FaRegUserCircle className="w-[48px] h-[48px]" />
                        <span>
                            <p>Leslie Alexander</p>
                            <p> ⭐ ⭐ ⭐ ⭐ ⭐</p>
                        </span>
                    </span>
                    <span>The Podcast Service has made recording and sharing my episodes simple with user-friendly tools and customizable .</span>
                </div>
                <div className="w-[374px] h-[204px] bg-white p-[20px]">
                    <span className="flex gap-[12px] mb-[20px]">
                        <FaRegUserCircle className="w-[48px] h-[48px]" />
                        <span>
                            <p>Alexander Leslie </p>
                            <p> ⭐ ⭐ ⭐ ⭐ ⭐</p>
                        </span>
                    </span>
                    <span>The Podcast Service has made recording and sharing my episodes simple with user-friendly tools and customizable .</span>
                </div>
                <div className="w-[374px] h-[204px] bg-white p-[20px]">
                    <span className="flex gap-[12px] mb-[20px]">
                        <FaRegUserCircle className="w-[48px] h-[48px]" />
                        <span>
                            <p>Les Xander</p>
                            <p> ⭐ ⭐ ⭐ ⭐ ⭐</p>
                        </span>
                    </span>
                    <span>The Podcast Service has made recording and sharing my episodes simple with user-friendly tools and customizable .</span>
                </div>
            </section>
        </div>
    )
}

export default Slide2