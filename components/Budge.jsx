'use client';

import { useSearchParams } from 'next/navigation';

const badge = () => {
    const searchParams = useSearchParams();
    const imageUrl = searchParams.get('imageUrl') || 'https://omargpax.pages.dev/assets/img/omargpax-avatar.jpg';
    const username = searchParams.get('username') || 'Omargpax';
    const code = searchParams.get('code') || '4TU7-A73-2DA6-0A40-GH1KP';
    const rol = searchParams.get('rol') || 'Software Engineer';
    const backgroundColor = searchParams.get('backgroundColor') || 'bg-gradient-to-r from-blue-800 to-purple-500';

    return (
        <div className={`flex min-w-[500px] min-h-[150px] items-start p-4 rounded-lg ${backgroundColor}`}>
            <img src={imageUrl} alt="Perfil" className="w-40 h-40 rounded-md mr-4" />
            <div>
                <h2 className="text-2xl font-semibold">{username}</h2>
                <p className="text-bs">{rol}</p>
                <div className="flex items-center bg-gray-200 rounded-md p-2 mt-2 bg-gray-900/20 w-full">
                    <span className="text-sm mr-2 text-gray-100 ">{code}</span>
                    <button
                        onClick={() => navigator.clipboard.writeText(code)}
                        className="text-blue-500 hover:text-blue-700 cursor-copy"
                    >
                        📃
                    </button>
                </div>
            </div>
        </div>
    );
};

export default badge;