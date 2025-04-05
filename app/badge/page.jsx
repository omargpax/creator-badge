'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import { 
    FaGithub, FaLinkedinIn, FaYoutube, FaDeviantart, 
    FaArrowAltCircleRight, FaInstagram, FaTwitch, FaTiktok 
} from "react-icons/fa";

// Common styles
const styles = {
    socialLink: "sm:w-9 sm:h-9 w-7 h-7 border border-white rounded-full flex justify-center items-center text-white text-sm sm:text-base hover:bg-white hover:text-gray-900 hover:transition-all duration-500",
    websiteButton: "flex items-center justify-between rounded-md p-2 mt-2 bg-gray-900/20 w-full",
    websiteButtonText: "text-sm mr-2 text-gray-100",
    websiteButtonIcon: "text-white/50 transition-colors ease-in-out duration-300 hover:text-white cursor-pointer",
    badgeContainer: "flex sm:min-w-[400px] sm:min-h-[150px] sm:w-fit w-fit h-fit items-start p-4 rounded-lg overflow-hidden",
    profileImage: "sm:w-40 sm:h-40 h-30 w-30% rounded-md mr-4 object-cover",
    username: "sm:text-2xl text-xl font-semibold capitalize",
    role: "sm:text-lg text-sm italic capitalize mt-[-5] sm:mt-0",
    socialLinksContainer: "flex flex-row items-center gap-2 sm:mt-4 mt-1 ",
};

const SocialLink = ({ icon, path }) => {
    if (!path) return null;
    return (
        <Link href={path} className={styles.socialLink}>
            {icon}
        </Link>
    );
};

const WebsiteButton = ({ site }) => (
    <div className={styles.websiteButton}>
        <span className={styles.websiteButtonText}>{site}</span>
        <button
            onClick={() => window.open('https://' + site, '_blank')}
            className={styles.websiteButtonIcon}
        >
            <FaArrowAltCircleRight />
        </button>
    </div>
);

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
        <div className={`${styles.badgeContainer} ${backgroundColor}`}>
            <img src={img} alt="Perfil" className={styles.profileImage} />
            <div>
                <h2 className={styles.username}>{username}</h2>
                <p className={styles.role}>{rol}</p>
                <div className={styles.socialLinksContainer}>
                    {socials.map((item, index) => (
                        <SocialLink key={index} icon={item.icon} path={item.path} />
                    ))}
                </div>
                <WebsiteButton site={site} />
            </div>
        </div>
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