'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    FaGithub, FaLinkedinIn, FaYoutube, FaDeviantart,
    FaInstagram, FaTwitch, FaTiktok, FaArrowAltCircleRight
} from "react-icons/fa";

// Common styles
const styles = {
    badgeContainer: "flex flex-row items-start p-4 rounded-lg overflow-hidden text-white ",
    profileImage: "w-35 h-35 rounded-md object-cover mr-4",
    websiteButton: "flex items-center justify-between rounded-md p-2 mt-2 bg-gray-900/20 w-full mt-4",
    websiteButtonText: "text-sm mr-2 text-gray-100",
    websiteButtonIcon: "text-white/50 transition-colors ease-in-out duration-300 cursor-pointer",
    username: "text-xl font-semibold capitalize mb-0",
    role: "text-sm italic capitalize mb-2",
    socialLinksContainer: "flex flex-row items-center gap-4",
    socialIcon: "w-7 h-7 border border-white rounded-full flex justify-center items-center text-white text-sm",
};

const getBackgroundColor = (bgc) => {
    const defaultColors = ['blue', 'purple'];
    const colors = bgc ? bgc.split('-') : defaultColors;

    if (colors.length !== 2) {
        return `bg-gradient-to-r from-${defaultColors[0]}-800 to-${defaultColors[1]}-500`;
    }

    return `bg-gradient-to-r from-${colors[0]}-800 to-${colors[1]}-500`;
};

const BadgeContent = () => {
    const searchParams = useSearchParams();
    const img = searchParams.get('img') || '/avatar.jpg';
    const username = searchParams.get('username') || 'Omargpax';
    const rol = searchParams.get('rol') || 'Software Engineer';
    const site = searchParams.get('site') || 'omargpax.vercel.app';
    const bgc = searchParams.get('bgc');

    const backgroundColor = getBackgroundColor(bgc);

    const socials = [
        { icon: <FaGithub />, show: searchParams.get('ghid') === 'true' },
        { icon: <FaLinkedinIn />, show: searchParams.get('lnid') === 'true' },
        { icon: <FaYoutube />, show: searchParams.get('ybid') === 'true' },
        { icon: <FaDeviantart />, show: searchParams.get('dtid') === 'true' },
        { icon: <FaInstagram />, show: searchParams.get('igid') === 'true' },
        { icon: <FaTwitch />, show: searchParams.get('twid') === 'true' },
        { icon: <FaTiktok />, show: searchParams.get('ttid') === 'true' },
    ];

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 200"
            className="w-[600px] h-auto"
        >
            <foreignObject x="0" y="0" width="400" height="200">
                <div className={`${styles.badgeContainer} ${backgroundColor}`}>
                    <img src={img} alt="Perfil" className={styles.profileImage} />
                    <div>
                        <h2 className={styles.username}>{username}</h2>
                        <p className={styles.role}>{rol}</p>
                        <div className={styles.socialLinksContainer}>
                            {socials.map((item, index) =>
                                item.show ? (
                                    <div key={index} className={styles.socialIcon}>
                                        {item.icon}
                                    </div>
                                ) : null
                            )}
                        </div>
                        <div className={styles.websiteButton}>
                            <span className={styles.websiteButtonText}>{site}</span>
                            <button
                                onClick={() => window.open('https://' + site, '_blank')}
                                className={styles.websiteButtonIcon}
                            >
                                <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </div>
                </div>
            </foreignObject>
        </svg>
    );
};

const Page = () => {
    return (
        <Suspense fallback={<div>Loading badge...</div>}>
            <BadgeContent />
        </Suspense>
    );
};

export default Page;