import reactLogo from './assets/react.svg';
import { FaGithub } from 'react-icons/fa6';

export default function Header() {
    return (
        <header>
            <img 
                src={reactLogo}
                alt='react logo'
            />
            <p className='header__title'>Ready to React</p>
            <a href='https://github.com/Astral-Lab/Ready-to-React'>
                <FaGithub size={'24px'} color='#f6f7f9'/>
            </a>
        </header>
    )
}