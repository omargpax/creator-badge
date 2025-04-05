'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram, FaTwitch, FaTiktok, FaArrowAltCircleRight } from "react-icons/fa";
import { GRADIENTS } from '@/data/gradients';
import { FaXTwitter, FaRegCopy } from "react-icons/fa6";

const PreviewBadge = ({ badgeData }) => {
  const socials = [
    { icon: <FaGithub />, path: badgeData.ghid && `https://github.com/${badgeData.ghid}` },
    { icon: <FaLinkedinIn />, path: badgeData.lnid && `https://www.linkedin.com/in/${badgeData.lnid}` },
    { icon: <FaYoutube />, path: badgeData.ybid && `https://www.youtube.com/@${badgeData.ybid}` },
    { icon: <FaXTwitter />, path: badgeData.xid && `https://x.com/${badgeData.xid}` },
    { icon: <FaInstagram />, path: badgeData.igid && `https://www.instagram.com/${badgeData.igid}` },
    { icon: <FaTwitch />, path: badgeData.twid && `https://www.twitch.tv/${badgeData.twid}` },
    { icon: <FaTiktok />, path: badgeData.ttid && `https://www.tiktok.com/@${badgeData.ttid}` },
  ];

  const gradientClass = GRADIENTS[badgeData.bgc] || GRADIENTS['blue-purple'];

  return (
    <div className={`flex sm:min-w-[400px] sm:min-h-[150px] sm:w-fit w-fit h-fit items-start p-4 rounded-lg overflow-hidden ${gradientClass}`}>
      <img
        src={badgeData.img}
        alt="Perfil"
        className="sm:w-40 sm:h-40 h-30 w-30% rounded-md mr-4 object-cover"
      />
      <div>
        <h2 className="sm:text-2xl text-xl font-semibold capitalize">{badgeData.username}</h2>
        <p className="sm:text-lg text-sm italic capitalize mt-[-5] sm:mt-0">{badgeData.rol}</p>
        <div className="flex flex-row items-center gap-2 sm:mt-4 mt-1">
          {socials.map((item, index) => (
            item.path && (
              <a
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:w-9 sm:h-9 w-7 h-7 border border-white rounded-full flex justify-center items-center text-white text-sm sm:text-base hover:bg-white hover:text-gray-900 hover:transition-all duration-500"
              >
                {item.icon}
              </a>
            )
          ))}
        </div>
        <div className="flex items-center justify-between rounded-md p-2 mt-2 bg-gray-900/20 w-full">
          <span className="text-sm mr-2 text-gray-100">{badgeData.site}</span>
          <button
            onClick={() => window.open(`https://${badgeData.site}`, '_blank')}
            className="text-white/50 transition-colors ease-in-out duration-300 hover:text-white cursor-pointer"
          >
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente para el formulario de configuración
const BadgeForm = ({ badgeData, handleInputChange }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md order-2 md:order-1">
    <h2 className="text-xl font-semibold mb-4 text-gray-200">Configure your badge</h2>
    <div className="space-y-4">
      <InputField label="Image URL" name="img" value={badgeData.img} onChange={handleInputChange} placeholder="https://ejemplo.com/avatar.jpg" />
      <InputField label="Creator Username" name="username" value={badgeData.username} onChange={handleInputChange} />
      <InputField label="Role" name="rol" value={badgeData.rol} onChange={handleInputChange} />
      <InputField label="Website" name="site" value={badgeData.site} onChange={handleInputChange} placeholder="ejemplo.com" />
      <SelectField label="Background" name="bgc" value={badgeData.bgc} onChange={handleInputChange} options={Object.keys(GRADIENTS)} />
      <SocialMediaFields badgeData={badgeData} handleInputChange={handleInputChange} />
    </div>
  </div>
);

// Componente para un campo de entrada genérico
const InputField = ({ label, name, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300/20 rounded-md"
      placeholder={placeholder}
    />
  </div>
);

// Componente para un campo de selección
const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300/20 rounded-md"
    >
      {options.map((option) => (
        <option key={option} value={option}>{option.replace('-', ' ')}</option>
      ))}
    </select>
  </div>
);

// Componente para los campos de redes sociales
const SocialMediaFields = ({ badgeData, handleInputChange }) => {
  const socialPlatforms = [
    { label: 'GitHub', name: 'ghid', prefix: 'github.com/' },
    { label: 'LinkedIn', name: 'lnid', prefix: 'linkedin.com/in/' },
    { label: 'YouTube', name: 'ybid', prefix: 'youtube.com/@' },
    { label: 'X (twitter)', name: 'xid', prefix: 'x.com/' },
    { label: 'Instagram', name: 'igid', prefix: 'instagram.com/' },
    { label: 'Twitch', name: 'twid', prefix: 'twitch.tv/' },
    { label: 'TikTok', name: 'ttid', prefix: 'tiktok.com/@' },
  ];

  return (
    <div className="pt-4 border-t border-gray-200/20">
      <h3 className="text-lg font-medium mb-3">Social media</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialPlatforms.map(({ label, name, prefix }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
            <div className="flex">
              <span className="bg-gray-600 inline-flex items-center px-3 rounded-l-md text-gray-50 text-sm">
                {prefix}
              </span>
              <input
                type="text"
                name={name}
                value={badgeData[name]}
                onChange={handleInputChange}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300/20"
                placeholder="username"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [badgeData, setBadgeData] = useState({
    img: '/avatar.jpg',
    username: 'Omargpax',
    site: 'omargpax.vercel.app',
    rol: 'Software Engineer',
    bgc: 'blue-purple',
    ghid: '',
    lnid: '',
    ybid: '',
    xid: '',
    igid: '',
    twid: '',
    ttid: ''
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBadgeData((prev) => ({ ...prev, [name]: value }));
  };

  const generateBadgeUrl = () => {
    if (!isMounted) return '';
    const params = new URLSearchParams();
    Object.entries(badgeData).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    return `${window.location.origin}/badge?${params.toString()}`;
  };

  //TODO: using /api/route.js or /svg to create an SVG badge to be inserted into a markdown
  const generateBadgeUrlSVG = () => {
    if (!isMounted) return '';
    const params = new URLSearchParams();
    Object.entries(badgeData).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    return `${window.location.origin}/api/svg?${params.toString()}`;
  };

  const BadgeCode = `<iframe src="${generateBadgeUrl()}" width="400" height="170" frameborder="0"></iframe>`;

  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-[0_0_10px_#ec4899] cursor-default">
          CREATOR BADGE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BadgeForm badgeData={badgeData} handleInputChange={handleInputChange} />
          <div className="bg-gray-800 p-6 rounded-lg shadow-md order-1 md:order-2">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <div className="flex justify-center mb-6">
              <PreviewBadge badgeData={badgeData} />
            </div>
            {isMounted && (
              <>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">Insert badge</h3>
                  <p className="text-sm text-gray-400 mb-3">Copy this code to embed the badge on your website:</p>
                  <div className="bg-gray-900 rounded-md p-4 overflow-x-auto relative">
                    <pre className="text-sm text-gray-100">{BadgeCode}</pre>
                    <button onClick={() => {
                      navigator.clipboard.writeText(BadgeCode);
                      // Aquí puedes agregar feedback visual si lo deseas
                    }}
                      className="absolute right-0 bg-gray-900 h-full bottom-0 px-2 text-gray-400 hover:text-white transition-colors cursor-copy"
                      title="Copy to clipboard">
                      <FaRegCopy />
                    </button>
                  </div>
                </div>
                <div className="mt-4 mb-6">
                  <h3 className="text-lg font-medium">Badge URL</h3>
                  <p className="text-sm text-gray-400 mb-3">You can also use this URL directly:</p>
                  <div className="bg-gray-900 rounded-md p-4 overflow-x-auto relative">
                    <p className="text-sm text-gray-100 break-all">{generateBadgeUrl()}</p>
                    <button onClick={() => {
                      navigator.clipboard.writeText(generateBadgeUrl());
                      // Aquí puedes agregar feedback visual si lo deseas
                    }}
                      className="absolute right-2 bottom-2 p-1 text-gray-400 hover:text-white transition-colors cursor-copy"
                      title="Copy to clipboard">
                      <FaRegCopy />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">Tock, tock</h3>
                  <div className="inline-flex items-center gap-2">
                    <p className="text-sm text-gray-400 mb-3">Thank you for your <b>support</b> </p>
                    <div className="animate-bounce">
                      <sup>🤍</sup> 
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="max-w-[200px]">
              <a href="https://www.buymeacoffee.com/omargpax" target="_blank">
                <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" width={210} height={60} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-6 text-center mt-auto">
        <Link
          href="https://omargpax.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Developed by</span>
          <Image alt="omargpax" src="/start.png" width={20} height={20} />
          <span className="font-medium">omargpax</span>
        </Link>
      </footer>
    </div>
  );
}