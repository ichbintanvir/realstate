import Hero2 from "../components/Hero2";
import IslamicCard from "../components/IslamicCard";

const info = [
    {
        "title": "Understanding Islamic Finance in Real Estate",
        "details": "Islamic finance, rooted in Sharia law, presents a unique and ethical approach to financial transactions, including those in the real estate sector. Unlike conventional finance, Islamic finance prohibits interest (riba), ensuring that all financial dealings are conducted ethically and with mutual benefit. This section delves into the foundational principles of Islamic finance, exploring how these principles influence real estate transactions. It examines the prohibition of interest.",
        "src": "/img/if1.png"
    },
    {
        "title": "Key Principles of Islamic Financing for Property Investments",
        "details": "Islamic financing for property investments operates on several core principles designed to promote fairness, transparency, and ethical conduct. One of the primary models used is Mudarabah, a partnership where one party provides the capital while the other offers expertise and management.",
        "src": "/img/if2.png"
    }
]

const IslamicFinance = () => {
    return (
        <div>
            <Hero2 name="islamic finance" />
            <IslamicCard rowrotate='false' title={info[0].title} details={info[0].details} src={info[0].src} />
            <IslamicCard rowrotate='true' title={info[1].title} details={info[1].details} src={info[1].src} />
        </div>
    )
};

export default IslamicFinance;
