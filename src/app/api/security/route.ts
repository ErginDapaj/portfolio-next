import type { NextApiRequest, NextApiResponse } from 'next';

import { IconName } from '@fortawesome/fontawesome-svg-core';
import { faReact, faNodeJs, faCss3Alt, faJsSquare, faHtml5, faJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Security {
    name: string;
    description: string;
    link: string;
    severity: string;
    icon: IconName;
    image: string;
}

const securityData: Security[] = [
    {
        name: "Bots On Discord",
        description: "Permission issue when replying.",
        link: "https://bots.ondiscord.xyz/",
        icon: "vuejs",
        severity: "Medium",
        image: "https://media.discordapp.net/attachments/510561488369614848/1090236017350553670/image.png",
    },
    {
        name: "Infinity Bots",
        description: "Permission to delete any review.",
        link: "https://infinitybots.gg/",
        icon: "react",
        severity: "Medium",
        image: "https://media.discordapp.net/attachments/510561488369614848/1090236226377887834/image.png",
    },
    {
        name: "Button Bot",
        description: "Permission issue.",
        link: "https://button.cubeedge.xyz/",
        icon: "react",
        severity: "High",
        image: "https://media.discordapp.net/attachments/510561488369614848/1092856596125732955/image.png",
    },
    {
        name: "Appy Bot",
        description: "Premium bypassed.",
        link: "https://appybot.xyz/",
        icon: "js",
        severity: "High",
        image: "https://media.discordapp.net/attachments/510561488369614848/1092859437691183124/image.png",
    },
    {
        name: "discord-botlist.eu",
        description: "Confidential Data.",
        link: "https://discord-botlist.eu/",
        icon: "react",
        severity: "High",
        image: "https://media.discordapp.net/attachments/1084430040252563546/1101987028717027391/image.png"
    },
    {
        name: "DCR",
        description: "Authorization Vulnerability.",
        link: "https://chat-reviver.com/",
        icon: "js",
        severity: "High",
        image: "https://media.discordapp.net/attachments/1084430040252563546/1101988197254299658/image.png"
    },
    {
        name: "Syfali",
        description: "Confidential Data.",
        link: "https://syfa.li/",
        icon: "react",
        severity: "High",
        image: "https://media.discordapp.net/attachments/1084430040252563546/1101988880456089710/image.png"
    },
    {
        name: "Dank Memer",
        description: "Critical Vulnerability.",
        link: "https://dankmemer.lol/changelog/2023-17-0",
        icon: "react",
        severity: "High",
        image: "https://media.discordapp.net/attachments/1084430040252563546/1101989773536657438/image.png"
    }
];
import { NextResponse } from 'next/server';
export async function GET(request: Request) {

    return NextResponse.json(securityData)
}