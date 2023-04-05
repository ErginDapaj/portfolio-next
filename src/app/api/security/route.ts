import type { NextApiRequest, NextApiResponse } from 'next';

import { IconName } from '@fortawesome/fontawesome-svg-core';
import { faReact, faNodeJs, faCss3Alt, faJsSquare, faHtml5, faJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Security {
    name: string;
    description: string;
    link: string;
    icon: IconName;
    image: string;
}

const securityData: Security[] = [
    {
        name: "Bots On Discord",
        description: "Permission issue when replying.",
        link: "https://bots.ondiscord.xyz/",
        icon: "vuejs",
        image: "https://media.discordapp.net/attachments/510561488369614848/1090236017350553670/image.png",
    },
    {
        name: "Infinity Bots",
        description: "Permission to delete any review.",
        link: "https://infinitybots.gg/",
        icon: "react",
        image: "https://media.discordapp.net/attachments/510561488369614848/1090236226377887834/image.png",
    },
    {
        name: "Button Bot",
        description: "Permission issue",
        link: "https://button.cubeedge.xyz/",
        icon: "react",
        image: "https://media.discordapp.net/attachments/510561488369614848/1092856596125732955/image.png",
    },
    {
        name: "Appy Bot",
        description: "Premium bypassed",
        link: "https://appybot.xyz/",
        icon: "js",
        image: "https://media.discordapp.net/attachments/510561488369614848/1092859437691183124/image.png",
    }
];
import { NextResponse } from 'next/server';
export async function GET(request: Request) {

    return NextResponse.json(securityData)
}