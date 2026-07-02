import "./Hero.css";
import portada from "../assets/imagen/PORTADA.jpg";

function Hero() {
    return (
        <section className="hero">
            <h1 className="titulo">Las Florencio</h1>

            <figure className="portada">
                <img src={portada} alt="Portada Las Florencio" />           
            </figure>
        </section>
    )
}

export default Hero;