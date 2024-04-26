

import type { tarjetasSuperiores } from '@/types/components/dashboard/principalTypes'

import card_icon1 from "@/assets/images/svgs/icon-user-male.svg"
import card_icon2 from "@/assets/images/svgs/icon-briefcase.svg"
import card_icon3 from "@/assets/images/svgs/icon-mailbox.svg"
import card_icon4 from "@/assets/images/svgs/icon-favorites.svg"
import card_icon5 from "@/assets/images/svgs/icon-speech-bubble.svg"
import card_icon6 from "@/assets/images/svgs/icon-connect.svg"

const tarjetasSuperioresData: tarjetasSuperiores[] = [
    {
        img: card_icon1,
        titulo: "Usuarios",
        numero: "???",
        bgcolor: "lightprimary",
        textcolor: "primary"
    },
    {
        img: card_icon2,
        titulo: "Sistemas",
        numero: "???",
        bgcolor: "lightwarning",
        textcolor: "warning"
    },
    {
        img: card_icon3,
        titulo: "Documentos",
        numero: "????",
        bgcolor: "lightsecondary",
        textcolor: "secondary"
    },
    {
        img: card_icon6,
        titulo: "Reportes",
        numero: "???",
        bgcolor: "lightprimary",
        textcolor: "primary"
    },
    {
        img: card_icon4,
        titulo: "Test",
        numero: "???",
        bgcolor: "lighterror",
        textcolor: "error"
    },
    {
        img: card_icon5,
        titulo: "Prod",
        numero: "???",
        bgcolor: "lightsuccess",
        textcolor: "success"
    }
]

export { tarjetasSuperioresData }