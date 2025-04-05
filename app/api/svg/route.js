import { NextResponse } from 'next/server';

const icons = {
    github: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
    </svg>`,
    linkedin: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
    </svg>`,
    youtube: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
    </svg>`,
    instagram: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
    </svg>`,
    x: `<svg transform="translate(1, 1)" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.452-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"/>
    </svg>`,
    twitch: `<svg transform="translate(1, 1)" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" d="M4.654 2 2 6.692v12.923h4.615V22l2.654-2.385h2.115L20.077 12V2H4.654Zm13.846 9.231-2.654 2.654h-2.115l-2.077 2.077v-2.077H6.692V3.692h11.808v7.539Z"/>
    <path fill="currentColor" d="M15.923 6.692H14.23v4.154h1.692V6.692Zm-4.154 0H10.077v4.154h1.692V6.692Z"/>
    </svg>`,
    tiktok: `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" d="M17.072 5.925a4.88 4.88 0 0 1-1.768-.645 4.92 4.92 0 0 1-1.534-1.38V15.4a4.56 4.56 0 0 1-1.318 3.237A4.482 4.482 0 0 1 9.215 20a4.482 4.482 0 0 1-3.237-1.363A4.56 4.56 0 0 1 4.66 15.4c0-1.203.466-2.333 1.318-3.182A4.482 4.482 0 0 1 9.215 10.8c.306 0 .62.034.92.09v2.943a1.6 1.6 0 0 0-.92-.29 1.626 1.626 0 0 0-1.156.473 1.62 1.62 0 0 0-.473 1.156c0 .434.17.85.473 1.156a1.626 1.626 0 0 0 1.156.473 1.6 1.6 0 0 0 1.156-.473c.304-.305.473-.72.473-1.156V2.667h2.756a4.58 4.58 0 0 0 .09 4.615 4.56 4.56 0 0 0 3.182 1.318l.92-.09V5.925Z"/>
    </svg>`,

};

function getGradientColors(bgc) {
    const colors = bgc.split('-');
    let fromColor, toColor;

    switch (bgc) {
        case 'blue-purple':
            fromColor = '#1e40af';
            toColor = '#a855f7';
            break;
        case 'green-blue':
            fromColor = '#059669';
            toColor = '#2563eb';
            break;
        case 'pink-red':
            fromColor = '#db2777';
            toColor = '#dc2626';
            break;
        case 'yellow-orange':
            fromColor = '#eab308';
            toColor = '#f97316';
            break;
        case 'indigo-purple':
            fromColor = '#4f46e5';
            toColor = '#9333ea';
            break;
        case 'pink-orange':
            fromColor = '#ec4899';
            toColor = '#f97316';
            break;
        case 'teal-indigo':
            fromColor = '#0d9488';
            toColor = '#4f46e5';
            break;
        case 'red-yellow':
            fromColor = '#dc2626';
            toColor = '#d97706';
            break;
        default:
            // Si no coincide con ningún caso, usa los valores por defecto o los proporcionados en el split
            fromColor = colors[0] || '#1e40af';
            toColor = colors[1] || '#7c3aed';
    }

    return { fromColor, toColor };
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const img = searchParams.get('img') || 'https://creator-badge.vercel.app/avatar.jpg';
    const username = searchParams.get('username') || 'Omargpax';
    const rol = searchParams.get('rol') || 'Software Engineer';
    const site = searchParams.get('site') || 'omargpax.vercel.app';
    const bgc = searchParams.get('bgc') || 'blue-purple';
    const { fromColor, toColor } = getGradientColors(bgc);

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
    <svg xmlns="http://www.w3.org/2000/svg" width="450" height="185" viewBox="0 0 450 185" role="img" aria-label="CREATOR BADGE">
        <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="${fromColor}" />
                <stop offset="100%" stop-color="${toColor}" />
            </linearGradient>
            <clipPath id="roundedImage">
                <rect x="16" y="20" width="145" height="145" rx="8" ry="8" />
            </clipPath>
        </defs>
        <rect width="450" height="185" fill="url(#gradient)" rx="8"></rect>
        <image x="16" y="20" width="145" height="145" href="${img}" clip-path="url(#roundedImage)" />
        <text x="175" y="45" font-size="20" font-weight="bold" font-family="Verdana, Arial, sans-serif" fill="white">${username}</text>
        <text x="175" y="65" font-size="14" font-style="italic" font-family="Verdana, Arial, sans-serif" fill="white">${rol}</text>
        <g transform="translate(175, 85)">
            ${socials.map((social, index) => `
                <g transform="translate(${index * 40}, 0)">
                    <circle cx="15" cy="15" r="15" fill="none" stroke="#ddd" stroke-width="1" />
                    <g transform="translate(4, 4)" color="white">
                        ${social.icon}
                    </g>
                </g>
            `).join('')}
        </g>
        <!-- Background rectangle for the site text -->
        <rect x="170" y="130" width="${site.length * 8 + 16}" height="28" fill="rgba(0, 0, 0, 0.3)" rx="6" ry="6"></rect>
        <!-- Site text -->
        <text x="175" y="144" font-size="12" font-family="Verdana, Arial, sans-serif" fill="white" dominant-baseline="middle">${site}</text>
    </svg>`;

    return new NextResponse(svg, {
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'no-cache',
        },
    });
}