'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import { 
    FaGithub, FaLinkedinIn, FaYoutube, FaDeviantart, 
    FaArrowAltCircleRight, FaInstagram, FaTwitch, FaTiktok 
} from "react-icons/fa";

const SocialLink = ({ icon, path }) => {
    if (!path) return null;
    return (
        <Link 
            href={path} 
            className="w-9 h-9 border border-white rounded-full flex justify-center items-center text-white text-base hover:bg-white hover:text-gray-900 hover:transition-all duration-500"
        >
            {icon}
        </Link>
    );
};

const WebsiteButton = ({ site }) => (
    <div className="flex items-center justify-between bg-gray-200 rounded-md p-2 mt-2 bg-gray-900/20 w-full">
        <span className="text-sm mr-2 text-gray-100">{site}</span>
        <button
            onClick={() => window.open('https://' + site, '_blank')}
            className="text-white/50 transition-colors ease-in-out duration-300 hover:text-white cursor-pointer"
        >
            <FaArrowAltCircleRight />
        </button>
    </div>
);

// Moved the main logic into a separate component to use Suspense
const BadgeContent = () => {
    const searchParams = useSearchParams();
    const img = searchParams.get('img') || '/avatar.jpg';
    const username = searchParams.get('username') || 'Omargpax';
    const site = searchParams.get('site') || 'omargpax.vercel.app';
    const rol = searchParams.get('rol') || 'Software Engineer';
    const bgc = searchParams.get('bgc') || 'blue-purple';

    const [color1, color2] = bgc.split('-');
    const backgroundColor = `bg-gradient-to-r from-${color1}-800 to-${color2}-500`;

    const socials = [
        { icon: <FaGithub />, path: searchParams.get('ghid') ? `https://github.com/${searchParams.get('ghid')}` : null },
        { icon: <FaLinkedinIn />, path: searchParams.get('lnid') ? `https://www.linkedin.com/in/${searchParams.get('lnid')}` : null },
        { icon: <FaYoutube />, path: searchParams.get('ybid') ? `https://www.youtube.com/@${searchParams.get('ybid')}` : null },
        { icon: <FaDeviantart />, path: searchParams.get('dtid') ? `https://www.deviantart.com/${searchParams.get('dtid')}` : null },
        { icon: <FaInstagram />, path: searchParams.get('igid') ? `https://www.instagram.com/${searchParams.get('igid')}` : null },
        { icon: <FaTwitch />, path: searchParams.get('twid') ? `https://www.twitch.tv/${searchParams.get('twid')}` : null },
        { icon: <FaTiktok />, path: searchParams.get('ttid') ? `https://www.tiktok.com/@${searchParams.get('ttid')}` : null },
    ];

    return (
        <div className={`flex min-w-[400px] min-h-fit max-w-[600px] w-fit items-start p-4 rounded-lg ${backgroundColor}`}>
            <img src={img} alt="Perfil" className="w-40 h-40 rounded-md mr-4 object-cover" />
            <div>
                <h2 className="text-2xl font-semibold capitalize">{username}</h2>
                <p className="text-lg italic capitalize">{rol}</p>
                <div className="flex flex-row items-center gap-2 mt-2">
                    {socials.map((item, index) => (
                        <SocialLink key={index} icon={item.icon} path={item.path} />
                    ))}
                </div>
                <WebsiteButton site={site} />
            </div>
        </div>
    );
};

// The main page component now wraps BadgeContent in Suspense
const Page = () => {
    return (
        <Suspense fallback={<div>Loading badge...</div>}>
            <BadgeContent />
        </Suspense>
    );
};

export default Page;