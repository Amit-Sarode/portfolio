import React from 'react';
import facebook from '../assets/facebookicon.png';
import instagram from '../assets/instagramIcon.png';
import twitter from '../assets/twitter.png';
import pinterest from '../assets/pinterest.png';
import tiktok from '../assets/titktok.png';
import youtube from '../assets/youtube.png';

function Footer() {
    return (
        <footer className="h-[150px] w-full bg-[#74C69D] flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Links */}
            <ul className="flex gap-5 pl-[20px] md:pl-[120px]">
                <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" className="h-4 w-2" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className="h-4 w-4" />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" className="h-4 w-4" />
                    </a>
                </li>
                <li>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <img src={pinterest} alt="Pinterest" className="h-4 w-4" />
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <img src={tiktok} alt="TikTok" className="h-4 w-4" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="YouTube" className="h-4 w-5" />
                    </a>
                </li>
            </ul>

            {/* Footer Text */}
            <div className="text-white mt-5 md:mt-0 pr-[20px] md:pr-[120px] text-sm">
                <span>&copy; Start, 2022. All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
