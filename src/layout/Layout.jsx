// Layout
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <>
        <Navbar/>
            <div style={{minHeight:'90vh',height:'auto',backgroundColor:'#292929'}}>{props.children}</div>
        <Footer/>
        </>
    );
    }