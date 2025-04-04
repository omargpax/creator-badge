'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube, FaDeviantart, FaInstagram, FaTwitch, FaTiktok } from "react-icons/fa";
import Image from 'next/image';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [badgeData, setBadgeData] = useState({
    img: '/avatar.jpg',
    username: 'Omargpax',
    site: 'omargpax.vercel.app',
    rol: 'Software Engineer',
    backgroundColor: 'bg-gradient-to-r from-blue-800 to-purple-500',
    ghid: '',
    lnid: '',
    ybid: '',
    dtid: '',
    igid: '',
    twid: '',
    ttid: ''
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const generateBadgeUrl = () => {
    if (!isMounted) return '';
    const params = new URLSearchParams();
    Object.entries(badgeData).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    return `${window.location.origin}/badge?${params.toString()}`;
  };

  const BadgeCode = `<iframe src="${generateBadgeUrl()}" width="400" height="200" frameborder="0"></iframe>`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBadgeData((prev) => ({ ...prev, [name]: value }));
  };

  const PreviewBadge = () => {
    const socials = [
      { icon: <FaGithub />, path: badgeData.ghid && `https://github.com/${badgeData.ghid}` },
      { icon: <FaLinkedinIn />, path: badgeData.lnid && `https://www.linkedin.com/in/${badgeData.lnid}` },
      { icon: <FaYoutube />, path: badgeData.ybid && `https://www.youtube.com/@${badgeData.ybid}` },
      { icon: <FaDeviantart />, path: badgeData.dtid && `https://www.deviantart.com/${badgeData.dtid}` },
      { icon: <FaInstagram />, path: badgeData.igid && `https://www.instagram.com/${badgeData.igid}` },
      { icon: <FaTwitch />, path: badgeData.twid && `https://www.twitch.tv/${badgeData.twid}` },
      { icon: <FaTiktok />, path: badgeData.ttid && `https://www.tiktok.com/@${badgeData.ttid}` },
    ];

    return (
      <div className={`flex md:min-w-[400px] md:min-h-[150px] max-w-[600px] w-fit items-start p-4 rounded-lg overflow-hidden ${badgeData.backgroundColor}`}>
        <img
          src={badgeData.img}
          alt="Perfil"
          className="rounded-md mr-4 w-40 h-40 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold capitalize">{badgeData.username}</h2>
          <p className="text-lg italic capitalize">{badgeData.rol}</p>
          <div className="flex flex-row items-center gap-2 mt-2">
            {socials.map((item, index) => (
              item.path && (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white rounded-full flex justify-center items-center text-white text-base hover:bg-white hover:text-gray-900 hover:transition-all duration-500"
                >
                  {item.icon}
                </a>
              )
            ))}
          </div>
          <div className="flex items-center justify-between bg-gray-200 rounded-md p-2 mt-2 bg-gray-900/20 w-full">
            <span className="text-sm mr-2 text-gray-100">{badgeData.site}</span>
            <a
              href={`https://${badgeData.site}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 transition-colors ease-in-out duration-300 hover:text-white cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 md:text-4xl 
            text-transparent bg-clip-text bg-gradient-to-r 
            from-pink-500 via-purple-500 to-blue-500 
            animate-pulse
            drop-shadow-[0_0_10px_#ec4899]
            hover:drop-shadow-[0_0_15px_#a855f7] 
            transition-all duration-750 ease-in-out">
          CREATOR BADGE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Configure your badge</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
                <input
                  type="url"
                  name="img"
                  value={badgeData.img}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300/20 rounded-md"
                  placeholder="https://ejemplo.com/avatar.jpg"
                  pattern="https?://.+"
                  title="Ingresa una URL válida (debe incluir http:// o https://)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Creator Username</label>
                <input
                  type="text"
                  name="username"
                  value={badgeData.username}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300/20 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Role</label>
                <input
                  type="text"
                  name="rol"
                  value={badgeData.rol}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300/20 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Website</label>
                <input
                  type="text"
                  name="site"
                  value={badgeData.site}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300/20 rounded-md"
                  placeholder="ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Background</label>
                <select
                  name="backgroundColor"
                  value={badgeData.backgroundColor}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300/20 rounded-md"
                >
                  <option value="bg-gradient-to-r from-blue-800 to-purple-500">Blue - Purple</option>
                  <option value="bg-gradient-to-r from-green-600 to-blue-600">Green - Blue</option>
                  <option value="bg-gradient-to-r from-pink-600 to-red-600">Pink - Red</option>
                  <option value="bg-gradient-to-r from-yellow-500 to-orange-500">Yellow - Orange</option>
                  <option value="bg-gradient-to-r from-indigo-600 to-purple-600">Indigo - Purple</option>
                </select>
              </div>

              <div className="pt-4 border-t border-gray-200/20">
                <h3 className="text-lg font-medium mb-3">Social media</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">GitHub</label>
                    <div className="flex">
                      <span className="bg-gray-600 inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-50 text-sm">
                        github.com/
                      </span>
                      <input
                        type="text"
                        name="ghid"
                        value={badgeData.ghid}
                        onChange={handleInputChange}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300/20"
                        placeholder="username"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">LinkedIn</label>
                    <div className="flex">
                      <span className="bg-gray-600 inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-50 text-sm">
                        linkedin.com/in/
                      </span>
                      <input
                        type="text"
                        name="lnid"
                        value={badgeData.lnid}
                        onChange={handleInputChange}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300/20"
                        placeholder="username"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">YouTube</label>
                    <div className="flex">
                      <span className="bg-gray-600 inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-50 text-sm">
                        youtube.com/@
                      </span>
                      <input
                        type="text"
                        name="ybid"
                        value={badgeData.ybid}
                        onChange={handleInputChange}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300/20"
                        placeholder="username"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">DeviantArt</label>
                    <div className="flex">
                      <span className="bg-gray-600 inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-50 text-sm">
                        deviantart.com/
                      </span>
                      <input
                        type="text"
                        name="dtid"
                        value={badgeData.dtid}
                        onChange={handleInputChange}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300/20"
                        placeholder="username"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Instagram</label>
                    <div className="flex">
                      <span className="bg-gray-600 inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-50 text-sm">
                        instagram.com/
                      </span>
                      <input
                        type="text"
                        name="igid"
                        value={badgeData.igid}
                        onChange={handleInputChange}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300/20"
                        placeholder="username"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Twitch</label>
                    <div className="flex">
                      <span className="bg-gray-600 inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-50 text-sm">
                        twitch.tv/
                      </span>
                      <input
                        type="text"
                        name="twid"
                        value={badgeData.twid}
                        onChange={handleInputChange}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300/20"
                        placeholder="username"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">TikTok</label>
                    <div className="flex">
                      <span className="bg-gray-600 inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-50 text-sm">
                        tiktok.com/@
                      </span>
                      <input
                        type="text"
                        name="ttid"
                        value={badgeData.ttid}
                        onChange={handleInputChange}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300/20"
                        placeholder="username"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <div className="flex justify-center mb-6">
              <PreviewBadge />
            </div>

            {isMounted && (
              <>
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-2">Incorporate</h3>
                  <p className="text-sm text-gray-400 mb-3">Copy this code to embed the badge on your website:</p>
                  <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">{BadgeCode}</pre>
                  </div>
                </div>

                <div className="mt-4 mb-6">
                  <h3 className="text-lg font-medium mb-2">Badge URL</h3>
                  <p className="text-sm text-gray-400 mb-3">You can also use this URL directly:</p>
                  <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                    <p className="text-sm text-gray-100 break-all">{generateBadgeUrl()}</p>
                  </div>
                </div>
                
                <a href="https://www.buymeacoffee.com/omargpax" target="_blank">
                  <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" width={210} height={60}/>
                </a>

              </>
            )}
          </div>
        </div>
      </div>
      {/* footer */}
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