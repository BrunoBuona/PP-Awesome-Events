// Importaciones Node
import { Link } from 'react-router-dom'

export default function Footer() {
    
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
        <footer style={{ height: '10vh',width:'100%' , display: 'flex', flexDirection: 'row', backgroundColor: '#1a1a1a',position:'absolute', bottom:'0' }}>
                <picture>
                    <img style={{ height: '100%', width: '100%' }} src="https://www.awesomeeventsph.co/uploads/1/2/6/2/12627440/published/aeheader.png?1545106361" alt="Logotipo de Awesome Events" />
                </picture>
                <nav style={{ display: 'flex', justifyContent: 'end', flexGrow: '1', gap: '1.4rem', alignItems: 'center', marginRight: '2rem' }}>
                    <Link style={linkStyle}
                        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
                        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)} to="/locations">Nuestros Salones</Link>
                    <Link style={linkStyle}
                        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
                        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)} to="/work-with-us">Trabaja con Nosotros</Link>
                    <Link style={linkStyle}
                        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
                        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)} to="/data-storage">Almacenamiento de Datos</Link>
                </nav>
            </footer>
    )
    }