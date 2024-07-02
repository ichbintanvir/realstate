import Carusol from "../components/Carusol";
import Contactus from "../components/Contactus";
import Hero from "../components/Hero";
import Poster from "../components/Poster";
import Poster2 from "../components/Poster2";
import Property from "../components/Property";
import Rencon from "../components/Rencon";
import Videomessage from "../components/Videomessage";

const info = [
    {
        "title": 'PROPERTY MANAGEMENT',
        "src": '/img/lr1.png',
        "information": "Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor. Generally, property managers take responsibility for day-to-day repairs and ongoing maintenance, security, and upkeep of properties."
    },
    {
        "title": 'Islamic finance',
        "src": '/img/lr3.png',
        "information": "Islamic finance is a way to manage money that keeps within the moral principles of Islam . It covers things like saving, investing, and borrowing to buy a home. The moral principles many Muslims live their lives by are sometimes known as the 'Shari'ah'"
    }
]

const Home = () => {
    return (
        <div>
            <Hero />
            <Videomessage />
            <Property name='buy' color='false' path='/buy' />
            <Property name='sell' color='true' path='/sell' />
            <Property name='rent' color='false' path='/rent' />
            <Rencon />
            <Poster title={info[0].title} information={info[0].information} src={info[0].src} />
            <Poster2 />
            <Poster title={info[1].title} information={info[1].information} src={info[1].src} />
            <Carusol />
            <Contactus />
        </div>
    )
};

export default Home;
