import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

const Nav = () => {
  const router = useRouter();

  const navData = [
    { name: 'Casa', path: '/', icon: <HiHome /> },
    { name: 'Sobre', path: '/about', icon: <HiUser /> },
    { name: 'Serviços', path: '/services', icon: <HiRectangleGroup /> },
    { name: 'Trabalhos', path: '/work', icon: <HiViewColumns /> },
    {
      name: 'Testemunhos',
      path: '/testimonials',
      icon: <HiChatBubbleBottomCenterText />,
    },
    {
      name: 'contato',
      path: '/contact',
      icon: <HiEnvelope />,
    },
  ];

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-10 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        <div>
          <span></span>
        </div>
        {navData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
          >
            {/*tooltip*/}
            <div className='relative flex items-center group hover:text-accent transition-all duration-300'>
              {link.icon}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>{link.name}</div>
                  {/*triangle*/}
                  <div className='border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
