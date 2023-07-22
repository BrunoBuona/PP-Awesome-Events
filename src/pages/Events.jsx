export default function Events() {
    const data=[
        {
            id: 1,
            title: "Tango Eterno",
            date: "2028-10-23",
            time: "22:00",
            location: "La Boca, Buenos Aires, Argentina.",
            image: "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2400/xyi2f9rihrzrooufkyu7.jpg",
        },
            {
            id: 2,
            title: "Muestra de arte",
            date: "2028-08-11",
            time: "15:30",
            location: "Museo de arte de Avellaneda, Buenos Aires, Argentina.",
            image: "https://www.macba.com.ar/wp-content/uploads/2023/07/museos-de-arte-2.jpg",
        },
            {
            id: 3,
            title: "Feria de emprendedores",
            date: "2028-05-15",
            time: "19:00",
            location: "Plaza Alsina, Buenos Aires, Argentina.",
            image: "https://buenosaires.gob.ar/sites/default/files/2023-03/feria-emprendedores-1.jpg",
        },
            {
            id: 4,
            title: "Día de la primavera",
            date: "2028-09-21",
            time: "13:00",
            location: "Parque Saveedra de La Plata, Buenos Aires, Argentina.",
            image: "https://1.bp.blogspot.com/-gez6Ihb_Znc/YTVjlU44MDI/AAAAAAAACAc/Bfbfg9CwV3A9m1RtEldn468CxlQI4_coACLcBGAsYHQ/s2588/saav%2Bporta%2Bslide.jpg",
        },
            {
            id: 5,
            title: "Show de stand up",
            date: "2028-04-30",
            time: "20:00",
            location: "Teatro Roma, Buenos Aires, Argentina.",
            image: "https://zonales.com/wp-content/uploads/2021/09/Teatro-Roma-Avellaneda-2.jpg",
        },
            {
            id: 6,
            title: "Avellaneda corre",
            date: "2021-01-01",
            time: "17:00",
            location: "Avellaneda, Buenos Aires, Argentina.",
            image: "https://www.mda.gob.ar/wp-content/uploads/2022/06/FUfny3yWIAc9_IN.jpg",
        },
        {
            id: 7,
            title: "Recital de rock",
            date: "2019-07-22",
            time: "23:00",
            location: "Estadio Único de La Plata, Buenos Aires, Argentina.",
            image: "https://indiehoy.com/wp-content/uploads/2020/03/lollapalooza-argentina.jpg",
        },
        {
            id: 8,
            title: "Cine al aire libre",
            date: "2020-01-15",
            time: "21:30",
            location: "Campo de Correa, Buenos Aires, Argentina.",
            image: "https://cloudfront-us-east-1.images.arcpublishing.com/artear/7ONOGDRIPZHHFNFW2WRNTPGQV4.jpg",
        },
        {
            id: 9,
            title: "Carrera de autos",
            date: "2018-12-10",
            time: "08:00",
            location: "Recoleta, Buenos Aires, Argentina.",
            image: "https://p1.pxfuel.com/preview/504/500/936/nascar-racetrack-auto-racing-speed.jpg",
        },
        {
            id: 10,
            title: "Almagro Pintado",
            date: "2015-08-04",
            time: "11:20",
            location: "Almagro, Buenos Aires, Argentina.",
            image: "https://lh3.googleusercontent.com/p/AF1QipNPJs4MX1djDNzquGRbVWdrjkw82VG2vMdS4hEh=s680-w680-h510",
        },
    ]
    return (
        <div style={{display:'flex',flexDirection:'column',flexGrow:'1',width:'200px', justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}} >
        <h1 style={{color:'white',fontSize:'2.5rem',textTransform:'uppercase',marginTop:'2rem'}}>Nuestros Eventos</h1>
        <div style={{display:'flex',flexDirection:'row',flexGrow:'1',gap:'2rem',margin:'2rem',flexWrap:'wrap'}}>
        {data.map((event) => {
            return (
                <div style={{backgroundColor:'#f0f1f1',height:'250px',padding:'5px',width:'200px'}} key={event.id}>
                    <div style={{height:'80px',width:'100%'}}>
                    <img style={{width:'100%',height:'100%'}}src={event.image} alt={event.title}/>
                    </div>
                    <h2>{event.title}</h2>
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.location}</p>

                </div>
            )
        })}
        </div>
        </div>
    );
    }