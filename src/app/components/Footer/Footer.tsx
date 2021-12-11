import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-left'>
                <a href='#'>Team</a>
                <a href='#'>Careers</a>
                <a href='#'>Newsroom</a>
            </div>
            <div className='footer-center'>
                <h2>awPark</h2>
                <p>Copyright &copy; 2021</p>
            </div>
            <div className='footer-right'>
                <a href='#'>Log in</a>
                <a href='#'>Sign up</a>
                <a href='#'>Support</a>
            </div>
        </footer>
    )
}

export default Footer;