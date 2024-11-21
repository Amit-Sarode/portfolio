import React from 'react';
import map from '../assets/map.png';

function Contact() {
    return (
        <div className="p-10">
            {/* Contact Header */}
            <div className="flex flex-col justify-center items-center text-center mb-10">
                <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor velit rerum quos.
                </p>
            </div>

            {/* Contact Form and Map */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pl-5 pr-5 lg:pl-[120px] lg:pr-[120px]">
                {/* Form Section */}
                <form className="w-full lg:w-1/2 flex flex-col gap-4">
                    <label htmlFor="name" className="text-lg font-medium">
                        Name
                    </label>
                    <input
                        id="name"
                        className="border border-gray-400 rounded-md p-2 focus:outline-none"
                        type="text"
                        placeholder="Your Name"
                    />

                    <label htmlFor="email" className="text-lg font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        className="border border-gray-400 rounded-md p-2 focus:outline-none"
                        type="email"
                        placeholder="Your Email"
                    />

                    <label htmlFor="message" className="text-lg font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="border border-gray-400 rounded-md p-2 focus:outline-none"
                        rows="5"
                        placeholder="Your Message"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-black text-white px-5 py-2 rounded-md focus:ring"
                    >
                        Submit
                    </button>
                </form>

                {/* Map Section */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img
                        src={map}
                        alt="Map location"
                        className="w-full h-auto rounded-md shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;
