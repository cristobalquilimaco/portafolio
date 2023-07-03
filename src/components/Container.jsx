import images from "../assets/images";

import "./Container.css";


const Container = () => {



  return (
    <div className="principal__container" id="home">
        <div className='banner'>
        <div className='information__me'>
        <img className="banner__img" src={images.banner} alt="" />
            <h1 className='presentation'>Cristobal Quilimaco <span className='prenstation_border'>Desarrollador Front-End</span>Bogotá</h1>
            </div>

        </div>
        <div className='skill_about_me'>
        <img className="banner__img2" src={images.banner} alt="" />
        <p className="about_me">Estoy comprometido con el aprendizaje constante y la mejora continua. Me encanta pensar fuera de la caja y encontrar soluciones creativas a los problemas de desarrollo web. Considero que mi pasión por la tecnología y mi ética de trabajo me convierten en un candidato ideal para cualquier proyecto de desarrollo web.</p>
            
        </div>

        <div className='container_information'>
            <h1>Skillset</h1>
            <p>Estos son los lenguajes y aplicaciones adicionales que uso como desarrollador web</p>
            <div className="bx_skill">
                <div>
            <i className='bx bxs-extension'></i>
            <p className="skillsets__Information">Frameworks</p> 
            <p className="p_skils">React</p>
            <p className="p_skils">Wordpress</p>
            <p className="p_skils">Bootstrap</p>
                </div>
        
            <div>
            <i className='bx bxs-extension'></i>
            <p className="skillsets__Information">Source Control</p>
            <p className="p_skils">Git</p>
            <p className="p_skils">GitHub</p> 
            </div>
            
            <div>
            <i className='bx bxs-extension'></i> 
            <p className="skillsets__Information">lenguajes</p>
            <p className="p_skils">React</p>
            <p className="p_skils">HTML</p>
            <p className="p_skils">CSS</p>
            <p className="p_skils">JavaScript</p>
            </div>

<div>
<i className='bx bxs-extension'></i> 
            <p className="skillsets__Information"></p>
            <p className="p_skils">UX/UI</p>
            <p className="p_skils">Adove Suite</p>
            <p className="p_skils">Elementor</p>
</div>


            </div>
            
            <div className='more_skill_table'>

            </div>

        </div>
        <div className='container_proyects' id="portafolio">
        <div className='iformation_proyect'>
            <p>Mis proyectos</p>
            <p>Estos son algunos de los proyectos en los que he trabajado</p>
            </div>
            <div className="card__proyect">
            <img className="proyect__img" src={images.img1} alt="" />
                <p>Descripción</p>
                <div className="logos_description">
                <img className="logo_skill" src={images.logojs} alt="" />
                <img className="logo_skill" src={images.logohtml} alt="" />
                <img className="logo_skill" src={images.logocss} alt="" />
                </div>
                </div>
                <div className="card__proyect">
             <img className="proyect__img" src={images.img2} alt="" />
                <p>Description</p>
                <p>The project includes a registration form for users to enter their personal information, such as their name, email address, and password.</p>
                </div> 
                <div className="card__proyect">
            <img className="proyect__img" src={images.img3} alt="" />
                <p>Description</p>
                <p>The weather app is a web application developed with React that allows users to check the weather forecast for any location in the world. The app uses a weather services API to get accurate data on current weather conditions</p>
                </div> 
                <div className="card__proyect">
             <img className="proyect__img" src={images.img4} alt="" />
                <p>Description</p>
                <p>The application built with React is a web application that allows users to explore the characters of the popular television series "Rick and Morty". The app uses a "Rick and Morty" character API to get character information and display it on the screen.</p>
                </div>    

        </div>



        <div className='aditionals' id="contact">

            <form className="form__contact">
                <p>Let's talk bussiness</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non error </p>
                <p>Nombre</p>
                <input className="form__name" type="text" />
                <p>Email</p>
                <input className="form__email" type="email" />
                <p>Message</p>
                <input className="form__message" type="text" />
                <button className="btn__submit">Let's get started</button>
            </form>
            


        </div>
    </div>
  )
}

export default Container