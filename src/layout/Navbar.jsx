// Estilos
import '../styles/Navbar.css'

// Importaciones Node
import { Link } from 'react-router-dom'

export default function Navbar() {

    const linkStyle = {
        textDecoration: 'none',
        color: 'yellow',
        transition: 'color 0.3s ease',
        fontSize: '1.2rem',
        fontWeight: '400',
        textTransform: 'uppercase',
    };

    const hoverStyle = {
        color: 'orange'
    };

    return (
        <>
            <header style={{ height: '10vh', display: 'flex', flexDirection: 'row', backgroundColor: '#1a1a1a' }}>
                <picture>
                    <img style={{ height: '100%', width: '100%' }} src="https://www.awesomeeventsph.co/uploads/1/2/6/2/12627440/published/aeheader.png?1545106361" alt="Logotipo de Awesome Events" />
                </picture>
                <nav style={{ display: 'flex', justifyContent: 'end', flexGrow: '1', gap: '1.4rem', alignItems: 'center', marginRight: '2rem' }}>
                    <Link style={linkStyle}
                        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
                        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)} to="/">Inicio</Link>
                    <Link style={linkStyle}
                        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
                        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)} to="/about-us">Sobre Nosotros</Link>
                    <Link style={linkStyle}
                        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
                        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)} to="/events">Eventos</Link>
                    <Link style={linkStyle}
                        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
                        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)} to="/contact">Contacto</Link>
                </nav>
            </header>
        </>
    )
}