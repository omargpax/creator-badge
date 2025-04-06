'use client';
import { useState, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import {
    FaGithub, FaLinkedinIn, FaYoutube, FaMusic,
    FaArrowAltCircleRight, FaInstagram, FaTwitch, FaTiktok
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GRADIENTS } from '@/data/gradients';

// Consolidated styles
const styles = {
    container: "overflow-hidden fixed inset-0",
    badgeContainer: "flex sm:min-h-[150px] w-full h-fit items-start p-4 rounded-lg overflow-hidden relative",
    profileImage: "sm:w-40 sm:h-40 h-33 w-30% rounded-md mr-4 object-cover",
    username: "sm:text-2xl text-xl font-semibold capitalize whitespace-nowrap",
    role: "sm:text-lg text-sm italic capitalize mt-[-5] sm:mt-0",
    socialLinksContainer: "flex flex-row items-center gap-2 sm:mt-4 mt-5",
    websiteButton: "flex items-center justify-between rounded-md p-2 mt-2 bg-gray-900/20 sm:w-full w-fit sm:mt-3",
    websiteButtonText: "text-sm mr-2 text-gray-100",
    websiteButtonIcon: "text-white/50 transition-colors ease-in-out duration-300 hover:text-white cursor-pointer",
    buttonMusic: "absolute top-2 right-2 bg-gray-900/30 p-2 rounded-full text-white hover:bg-gray-900/70 transition-all duration-300 cursor-pointer z-9",
    footerContainer: "w-full h-fit rounded-bl-md rounded-br-md relative z-[-1] mt-[-4] text-xs sm:text-xl",
    footer: "py-3 text-center mt-auto",
    footerLink: "inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
    socialLink: "sm:w-9 sm:h-9 w-7 h-7 border border-white rounded-full flex justify-center items-center text-white text-sm sm:text-base hover:bg-white hover:text-gray-900 hover:transition-all duration-500",
};

const SocialLink = ({ icon, path }) => {
    if (!path) return null;
    return (
        <Link href={path} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            {icon}
        </Link>
    );
};

const WebsiteButton = ({ site }) => {
    if (!site) return null;
    return (
        <div className={styles.websiteButton}>
            <span className={styles.websiteButtonText}>{site}</span>
            <button
                onClick={() => window.open(`https://${site}`, '_blank')}
                className={styles.websiteButtonIcon}
            >
                <FaArrowAltCircleRight />
            </button>
        </div>
    );
};

const BadgeContent = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const searchParams = useSearchParams();

    // Default values with fallback
    const img = searchParams?.get('img') || '/avatar.jpg';
    const username = searchParams?.get('username') || 'Omargpax';
    const site = searchParams?.get('site') || 'omargpax.vercel.app';
    const rol = searchParams?.get('rol') || 'Software Engineer';
    const bgc = searchParams?.get('bgc') || 'blue-purple';
    const sound = searchParams?.get('sound') || 'FYTCH';

    const gradientClass = GRADIENTS[bgc] || GRADIENTS['blue-purple'];

    const socials = [
        { icon: <FaGithub />, path: searchParams?.get('ghid') ? `https://github.com/${searchParams.get('ghid')}` : null },
        { icon: <FaLinkedinIn />, path: searchParams?.get('lnid') ? `https://www.linkedin.com/in/${searchParams.get('lnid')}` : null },
        { icon: <FaYoutube />, path: searchParams?.get('ybid') ? `https://www.youtube.com/@${searchParams.get('ybid')}` : null },
        { icon: <FaXTwitter />, path: searchParams?.get('xid') ? `https://x.com/${searchParams.get('xid')}` : null },
        { icon: <FaInstagram />, path: searchParams?.get('igid') ? `https://www.instagram.com/${searchParams.get('igid')}` : null },
        { icon: <FaTwitch />, path: searchParams?.get('twid') ? `https://www.twitch.tv/${searchParams.get('twid')}` : null },
        { icon: <FaTiktok />, path: searchParams?.get('ttid') ? `https://www.tiktok.com/@${searchParams.get('ttid')}` : null },
    ].filter(social => social.path); // Filter out null paths

    const playMusic = () => {
        const audio = document.getElementById('badge-music');
        if (audio) {
            audio.volume = 0.1; // volume 10%
            if (audio.paused) {
                audio.play().catch(err => console.error("Error playing audio:", err));
                setIsPlaying(true);
            } else {
                audio.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <section className={styles.container}>
            <div className={`${styles.badgeContainer} ${gradientClass}`}>
                <button
                    onClick={playMusic}
                    className={styles.buttonMusic}
                    title="Play Music"
                >
                    <FaMusic className={isPlaying ? 'animate-spin ease-in-out duration-1000' : ''} />
                </button>
                <audio id="badge-music" src={`/music/${sound}.mp3`} preload="auto"></audio>
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
            <div className={`${styles.footerContainer} bg-gray-900`}>
                <footer className={styles.footer}>
                    <Link
                        href="https://omargpax.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.footerLink}
                    >
                        <span>Developed by</span>
                        <Image alt="omargpax" src="/start.png" width={20} height={20} />
                        <span className="font-medium">omargpax</span>
                    </Link>
                </footer>
            </div>
        </section>
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