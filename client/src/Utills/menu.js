import { FcHome, FcAbout } from 'react-icons/fc';
import { MdDeveloperMode } from 'react-icons/md';
import { FaLaptopCode, FaEnvelope } from 'react-icons/fa';
export const menu = [
  {
    icon: <FcHome size={20} />,
    name: 'Home',
    render: '/',
  },
  {
    icon: <FcAbout size={20} />,
    name: 'About',
    render: '/about',
  },
  {
    icon: <MdDeveloperMode size={20} />,
    name: 'Skills',
    render: '/skills',
  },
  {
    icon: <FaLaptopCode size={20} />,
    name: 'Projects',
    render: '/projects',
  },
  {
    icon: <FaEnvelope size={20} />,
    name: 'Contact',
    render: '/contact',
  },
];
