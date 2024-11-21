import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import banner from '../assets/banner.png';
import google from '../assets/goggle.png';
import microsoft from '../assets/microsoft.png';
import airbnb from '../assets/Airbnb.png';
import facebook from '../assets/facebook.png';
import spotify from '../assets/spotify.png';
import partner from '../assets/partner.png';
import group from '../assets/Group2.png';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'

const InfoSection = ({ title, text, buttonText, image, reverse }) => (
    <div className={`h-[60vh] w-full p-10 pl-[100px] flex ${reverse ? 'flex-row-reverse' : ''}`}>
        <img className="w-auto" src={image} alt={title} />
        <div className="w-[40%] h-full flex flex-col justify-center items-center">
            <h1>{title}</h1>
            <p>{text}</p>
            <button className="px-3 py-2 bg-black text-white">{buttonText}</button>
        </div>
    </div>
);

const Home = () => {
    return (
        <>
            <header className="home text-white max-h-auto w-full bg-[#74C69D] flex flex-col lg:flex-row p-[100px] justify-between">
                <div className="w-[40%] text-wrap">
                    <h1 className="text-2xl">Welcome</h1>
                    <h1 className="text-4xl">Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <button className="bg-white text-black px-6 py-2 hover:bg-black hover:text-white rounded-md">Explore</button>
                </div>
                <img className="h-[50vh]" src={banner} alt="Banner showcasing [content]" />
            </header>
            <section>
                <div className="flex flex-col justify-center items-center p-10 gap-5">
                    <h1 className="text-2xl">Partner</h1>
                    <h1 className="text-3xl font-bold">Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                </div>
                <div className="flex gap-12 pl-[100px]">
                    <img src={google} alt="Google logo" />
                    <img src={microsoft} alt="Microsoft logo" />
                    <img src={airbnb} alt="Airbnb logo" />
                    <img src={facebook} alt="Facebook logo" />
                    <img src={spotify} alt="Spotify logo" />
                </div>
                <div className="w-full flex justify-center items-center p-5">
                    <button className="px-3 py-2 bg-black text-white">Learn More</button>
                </div>
            </section>
            <InfoSection
                title="Lorem ipsum dolor sit amet."
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit..."
                buttonText="Learn More"
                image={partner}
            />
            <InfoSection
                title="Lorem ipsum dolor sit amet"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit..."
                buttonText="Learn More"
                image={group}
                reverse
            />
            <div>
                <div className='flex flex-col justify-center items-center '>
                    <h1>Team</h1>
                    <h1>
                        Our talents
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur.lorem
                    </p>
                </div>
                <div className='card flex justify-center gap-20 pt-10 items-center'>
                    <div className='flex flex-col justify-center items-center border p-3 shadow-2xl'>
                        <img src={card1} />
                        <h1>Peg Legge</h1>
                        <span>ceo</span>
                    </div>
                    <div className='flex flex-col justify-center items-center border p-3 shadow-2xl'>
                        <img src={card2} />
                        <h1>Richard Guerra</h1>
                        <span>cto</span>
                    </div>
                    <div className='flex flex-col justify-center items-center border p-3 shadow-2xl'>
                        <img src={card3} />
                        <h1>Alexandra Stolz</h1>
                        <span>Designer</span>
                    </div>
                    <div className='flex flex-col justify-center items-center border p-3 shadow-2xl'>
                        <img src={card4} />
                        <h1>Janet Bray</h1>
                        <span>Devloper</span>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center pt-10 p-5">
                    <button className="px-3 py-2 bg-black text-white">View Team</button>
                </div>
            </div>
        </>
    );
};

export default Home;
