import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faAngular, faPython, faJs, faGitAlt, faCss3Alt, } from '@fortawesome/free-brands-svg-icons';

import mapache from "../../assets/images/mapachehover.jpg";
import centrode from "../../assets/images/proyecto1.jpg"; 
import './Home.css';

const Home = () => {
    const [nameVisible, setNameVisible] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);
  
    useEffect(() => {
      
      setTimeout(() => setNameVisible(true), 500);
      setTimeout(() => setTitleVisible(true), 1500);
    }, []);

    

    const getCurrentGreeting = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            return "¡Hola, Buenos días, linda mañana!";
        } else if (hour >= 12 && hour < 18) {
            return "¡Buenas tardes, ¿Fue un Buen Aterrizaje?!";
        } else if (hour >= 18 && hour < 22) {
            return "¡Hola, Que esta noche sea el cierre perfecto para un día exitoso. !";
        } else {
            return "Uy, es de madrugada!, ten un buen rato aquí";
        }
    };

    const proyectosData = [
        {
            id: 3,
            titulo: "Software de agendamiento de citas para centro de estética",
            año: "2024",
            descripcion: "Desarrollo completo de un sistema de agendamiento de citas para un centro de estética facial. Manejando la lógica de agendamiento, bloqueo de horas, gestión de usuarios y servicios. Además, trabajé en equipo utilizando metodologías ágiles, colaborando con otros desarrolladores para integrar funcionalidades y asegurar la calidad del software.",
            imagen: "centrode", 
            tecnologias: ["React", "Node.js", "Supabase"]
        },
    ];    

    return (
        <div className='contenedor_home'>
            <div className="profile-container">
      <div className="saludo_home glow-text">
        <h1>{getCurrentGreeting()}</h1>
      </div>

      <div className="contenedor_tituloyimagen">
        <div className="titulo_home">
          <h1 className={`typing-name ${nameVisible ? 'visible' : ''}`}>
            Nathalia Salguero
          </h1>
          <h2 className={`typing-title ${titleVisible ? 'visible' : ''}`}>
            Desarrollador de Software
          </h2>
        </div>
        <div className="imagen_contenedor_home">
          <img src={mapache} alt="Mapache" className="profile-image" />
        </div>
      </div>

      <div className="titulo_contenedor_home">
        <div className="welcome-text">
          {/* <h2 className="glow-text">Este es mi Curriculum</h2>
          <h2 className="glow-text">Bienvenido a mi sitio personal</h2> */}
        </div>
      </div>

      <div className="acercade_home">
        <h1 className="glow-text">Acerca de Mi</h1>
        <p className="about-text">
          Soy una persona adaptable con una gran capacidad para integrarme en 
          diversos entornos, siempre aportando lo mejor de mí. Me caracterizo 
          por mi facilidad para el trabajo en equipo y por mi entusiasmo por 
          aprender y desarrollar nuevas habilidades. Actualmente busco una 
          oportunidad laboral que me permita adquirir más experiencia y seguir 
          creciendo profesionalmente.
        </p>
      </div>
      

            <div className='habilidades'>
                <h1>Habilidades</h1>
                <ul>
                    <li>Desarrollo de aplicaciones web</li>
                    <li>Programación</li>
                    <li>Diseño de interfaces de usuario (UI) y experiencia de usuario (UX)</li>
                    <li>Manejo de bases de datos (SQL, Supabase)</li>
                    <li>Optimización y mejora de rendimiento de software</li>
                    <li>Control de versiones (Git)</li>
                    <li>Metodologías ágiles (Scrum)</li>
                    <li>Conocimientos en APIs</li>
                    <li>Habilidad para prototipado y diseño gráfico (Adobe XD, Figma, Photoshop)</li>
                </ul>
            </div>
            <div className='proyectos'
            >
    <h1>Proyectos</h1>
    <div className='proyectos-grid'>
    {proyectosData.map((proyecto, index) => (
            <div className='proyecto-card' key={proyecto.id}>
                <div className='proyecto-imagen'>
                <img src={proyecto.imagen} alt={proyecto.titulo} />
                    <div className='proyecto-overlay'>
                        <span className='proyecto-año'>{proyecto.año}</span>
                    </div>
                </div>

                <div className='proyecto-content'>
                    <h2>{proyecto.titulo}</h2>
                    <p className='proyecto-descripcion'>{proyecto.descripcion}</p>
                    <div className='proyecto-tecnologias'>
                        {proyecto.tecnologias.map((tech, i) => (
                            <span key={i} className='tech-tag'>{tech}</span>
                        ))}
                    </div>
                    </div>
            </div>
        ))}
            </div>
            </div>

            <div className="estudios">
                <h1>Estudios</h1>
                <div className="contenido_estudios">
                <div className="estudio">
                    <h2>Técnico en Diseño Gráfico (2020 - 2022)</h2>
                    <p>Estudios en diseño visual enfocados en herramientas como Adobe Photoshop e Illustrator. Formación en fotografía, video, publicidad, marketing y diseño UX/UI para aplicaciones digitales.</p>
                    </div>
                    <div className="estudio">
                        <h2>Tecnólogo en Análisis y Desarrollo de Software (2023-2024)</h2>
                        <p>Formación en desarrollo de aplicaciones web y móviles, con enfoque en lenguajes como JavaScript, React y Node.js. Capacitación en bases de datos como SQL y metodologías ágiles como SCRUM.</p>
                        </div>
                        </div>
                        </div>


            <div className="skills-container">
      <h1 className="skills-title">Tecnologias</h1>
      <div className="skills-grid">
        <div className="skill-card">
          <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
          <p className="skill-name">Html</p>
          <div className="skill-glow"></div>
        </div>
        <div className="skill-card">
        <FontAwesomeIcon icon={faCss3Alt}  className="skill-icon" />
          <p className="skill-name">Css</p>
          <div className="skill-glow"></div>
        </div>

        <div className="skill-card">
          <FontAwesomeIcon icon={faReact} className="skill-icon" />
          <p className="skill-name">React</p>
          <div className="skill-glow"></div>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faAngular} className="skill-icon" />
          <p className="skill-name">Angular</p>
          <div className="skill-glow"></div>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faPython} className="skill-icon" />
          <p className="skill-name">Python</p>
          <div className="skill-glow"></div>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faJs} className="skill-icon" />
          <p className="skill-name">Javascript</p>
          <div className="skill-glow"></div>
        </div>
        <div className="skill-card">
          <FontAwesomeIcon icon={faGitAlt} className="skill-icon" />
          <p className="skill-name">Git</p>
          <div className="skill-glow"></div>
        </div>
        {/* <div className="skill-card">
        <FontAwesomeIcon icon={faDatabase}  className="skill-icon" />
          <p className="skill-name">Database</p>
          <div className="skill-glow"></div>
        </div> */}
        {/* <div className="skill-card">
        <FontAwesomeIcon icon={faDatabase}  className="skill-icon" />
          <p className="skill-name">Database</p>
          <div className="skill-glow"></div>
        </div> */}
      </div>
    </div>
    </div>
    </div>
    
            
      
    );
};

export default Home;
