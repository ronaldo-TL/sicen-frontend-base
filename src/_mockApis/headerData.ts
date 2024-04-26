// project imports
// import mock from './mockAdapter';

import type {   notificacionType, perfilType, lenguajeType, buscarType } from '@/types/HeaderTypes'
// 
// Notification
// 
import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import user5 from '@/assets/images/profile/user-5.jpg';

// const notifications:notificacionType[] = [
//     {
//         avatar: user1,
//         titulo: 'Roman Joined the Team!',
//         subtitulo: 'Congratulate him'
//     }
// ];

// 
// Profile 
// 
import proUser1 from '@/assets/images/svgs/icon-account.svg';
import proUser2 from '@/assets/images/svgs/icon-inbox.svg';
import proUser3 from '@/assets/images/svgs/icon-tasks.svg';
const DDPerfil : perfilType[] = [
    {
        avatar: proUser1,
        titulo: 'Mi perfil',
        subtitulo: 'Ingresar al perfil',
        href: '/about'
    },
    // {
    //     avatar: proUser2,
    //     titulo: 'Cerrar Sesión',
    //     subtitulo: '',
    //     href: '/about'
    // },
];

import flag1 from '@/assets/images/flag/icon-flag-en.svg';
import flag2 from '@/assets/images/flag/icon-flag-es.svg';

const DDLenguaje: lenguajeType[] = [
    { titulo: 'Español', subtexto: 'ES', valor: 'es', avatar: flag2 },
    { titulo: 'English', subtexto: 'EN', valor: 'en', avatar: flag1 },

];

const buscarSugerencia: buscarType[] = [
    {
        titulo: 'Index',
        href: '/about'
    },
];

export { DDPerfil, DDLenguaje, buscarSugerencia };

