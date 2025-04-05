import { NextResponse } from 'next/server';

const icons = {
    github: `<svg style="width: 15px; height: 15px;" class="text-gray-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
    </svg>`,
    linkedin: `<svg style="width: 15px; height: 15px;" class="text-gray-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
    </svg>`,
    youtube: `<svg style="width: 15px; height: 15px;" class="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
    </svg>`,
    instagram: `<svg style="width: 15px; height: 15px;" class="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
    </svg>`,
    x: `<svg style="width: 15px; height: 15px;" class="text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
    </svg>`,
    twitch: `<svg style="width: 15px; height: 15px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitch" viewBox="0 0 16 16">
    <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z"/>
    <path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z"/>
    </svg>`,
    tiktok: `<svg style="width: 15px; height: 15px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
    </svg>`,

};

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const img = searchParams.get('img') || '/avatar.jpg';
    const username = searchParams.get('username') || 'Omargpax';
    const rol = searchParams.get('rol') || 'Software Engineer';
    const site = searchParams.get('site') || 'omargpax.vercel.app';
    const bgc = searchParams.get('bgc') || 'blue-purple';
    //custom colors
    const colors = bgc.split('-');
    const fromColor = colors[0] || '#1e40af';
    const toColor = colors[1] || '#7c3aed';

    // bg colors
    const getBackgroundStyle = (bgc) => {
        const gradients = {
            'blue-purple': 'linear-gradient(to right, #1e40af, #a855f7)',
            'green-blue': 'linear-gradient(to right, #059669, #2563eb)',
            'pink-red': 'linear-gradient(to right, #db2777, #dc2626)',
            'yellow-orange': 'linear-gradient(to right, #eab308, #f97316)',
            'indigo-purple': 'linear-gradient(to right, #4f46e5, #9333ea)',
            'pink-orange': 'linear-gradient(to right, #ec4899, #f97316)',
            'teal-indigo': 'linear-gradient(to right, #0d9488, #4f46e5)',
            'red-yellow': 'linear-gradient(to right, #dc2626, #d97706)'
        };
        return gradients[bgc] || `linear-gradient(to right, ${fromColor}, ${toColor})`;
    };
    const background = getBackgroundStyle(bgc);

    //socials
    const socials = [
        { icon: icons.github, show: searchParams.get('ghid') !== null },
        { icon: icons.linkedin, show: searchParams.get('lnid') !== null },
        { icon: icons.youtube, show: searchParams.get('ybid') !== null },
        { icon: icons.twitch, show: searchParams.get('twid') !== null },
        { icon: icons.instagram, show: searchParams.get('igid') !== null },
        { icon: icons.x, show: searchParams.get('xid') !== null },
        { icon: icons.tiktok, show: searchParams.get('ttid') !== null }
    ].filter(item => item.show);

    //svg content
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="fit-content">
            <foreignObject x="0" y="0" width="400" height="200">
                <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; flex-direction: row; align-items: start; padding: 16px; border-radius: 8px; overflow: hidden; color: white; background: ${background}; font-family: Verdana, Arial, sans-serif;">
                    <img src="${img}" alt="Perfil" style="width: 140px; height: 140px; border-radius: 8px; object-fit: cover; margin-right: 16px;" />
                    <div>
                        <h2 style="font-size: 20px; font-weight: bold; margin: 2px 0px; ">${username}</h2>
                        <p style="font-size: 14px; font-style: italic; margin-bottom: 8px; margin-top:0px; padding-top:0px;">${rol}</p>
                        <div style="display: flex; flexDirection: row; alignItems: center; gap: 8px;  margin-top: 14px; margin-bottom:4px;">
                            ${socials.map(social => `
                                <div style="
                                width: 30px; 
                                height: 30px; 
                                border: 1px solid white; 
                                border-radius: 50%; 
                                display: flex; 
                                justify-content: center; 
                                align-items: center;
                                ">
                                ${social.icon}
                                </div>
                            `).join('')}
                        </div>
                        <p style="display: inline-block; margin-top: 8px; padding: 8px 16px; background: rgba(0, 0, 0, 0.2); border-radius: 6px; color: white; text-decoration: none;">${site}</p>
                    </div>
                </div>
            </foreignObject>
        </svg>
    `;

    return new NextResponse(svg, {
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'no-cache',
        },
    });
}