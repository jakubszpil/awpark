import Footer from '../Footer/Footer';
import Header from '../Header';

function Layout({children}: any) {
    return (
        <div>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}

export default Layout;
