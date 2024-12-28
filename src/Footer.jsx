import uwcsLogo from './assets/uwcs.png'

export default function Footer() {
    return (
        <footer>
            <p>Brought to you by UWCS</p>
            <img
                className="uwcs__logo"
                src={uwcsLogo}
                alt='uwcs logo'
            />
        </footer>
    )
}