// Layout
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <>
        <Navbar/>
            <div style={{height:'80vh',display:'flex',flexDirection:'column',backgroundColor:'#292929'}}>{props.children}</div>
        <Footer/>
        </>
    );
    }