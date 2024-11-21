import React from 'react';
import frame1 from '../assets/dscdscd 1.png';
import frame2 from '../assets/Frame 2.png';
import frame3 from '../assets/Frame 3.png';
import frame4 from '../assets/Frame 4.png';
import frame5 from '../assets/Frame 5.png';
import frame6 from '../assets/Frame 6.png';
import frame7 from '../assets/Frame 7.png';
import frame8 from '../assets/Frame 8.png';

const portfolioItems = [
    { id: 1, image: frame1, alt: "Portfolio Item 1" },
    { id: 2, image: frame2, alt: "Portfolio Item 2" },
    { id: 3, image: frame3, alt: "Portfolio Item 3" },
    { id: 4, image: frame4, alt: "Portfolio Item 4" },
    { id: 5, image: frame5, alt: "Portfolio Item 5" },
    { id: 6, image: frame6, alt: "Portfolio Item 6" },
    { id: 7, image: frame7, alt: "Portfolio Item 7" },
    { id: 8, image: frame8, alt: "Portfolio Item 8" },
];

function Portfolio() {
    return (
        <section className='pt-10 pb-10'>
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-sm text-[#74C69D] uppercase tracking-[8px]">Works</h1>
                <h1 className="font-bold text-2xl">Portfolio</h1>
                <p className="text-center text-gray-600 max-w-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas.
                </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 pl-[120px] pr-[120px] sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 pt-10">
                {portfolioItems.map((item) => (
                    <div
                        key={item.id}
                        className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
