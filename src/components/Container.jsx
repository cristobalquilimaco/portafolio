import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import images from "../assets/images";
import "./Container.css";

const Container = () => {
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    skillset: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const skillAboutMe = document.querySelector('.skill_about_me');
      const containerInformation = document.querySelector('.container_information');
      const scrollPosition = window.scrollY + window.innerHeight;

      if (skillAboutMe && scrollPosition > skillAboutMe.offsetTop) {
        setVisibleSections((prevState) => ({
          ...prevState,
          about: true,
        }));
      } else {
        setVisibleSections((prevState) => ({
          ...prevState,
          about: false,
        }));
      }

      if (containerInformation && scrollPosition > containerInformation.offsetTop) {
        setVisibleSections((prevState) => ({
          ...prevState,
          skillset: true,
        }));
      } else {
        setVisibleSections((prevState) => ({
          ...prevState,
          skillset: false,
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="principal__container" id="home">
      {/* ------------------------------------BANNER---------------- */}
      <div className="info_banner">
        <div className="presentation_img">
          <img className="banner__img" src={images.banner} alt="" />
        </div>
        <div className="information__me">
          <h1 className='presentation'>Cristobal Quilimaco <span className='prenstation_border'>Desarrollador Front-End</span>Bogotá</h1>
        </div>
      </div>

      {/* --------------INFOMATION  ---------------*/}
      <div className={`skill_about_me ${visibleSections.about ? 'scroll-effect' : ''}`} id="about">
        <div className="img_information_me">
          <img className="banner__img2" src={images.information} alt="" />
        </div>
        <div className="about">
          <p className="about_me">Estoy comprometido con el aprendizaje constante y la mejora continua. Me encanta pensar fuera de la caja y encontrar soluciones creativas a los problemas de desarrollo web. Considero que mi pasión por la tecnología y mi ética de trabajo me convierten en un candidato ideal para cualquier proyecto de desarrollo web.</p>
        </div>
      </div>

      <div className={`container_information ${visibleSections.skillset ? 'scroll-effect' : ''}`}>
        <div className="skillsets_int">
          <h1>Skillset</h1>
          <p className="description_skill">Estos son los lenguajes y aplicaciones adicionales que uso como desarrollador web</p>
        </div>
        <div className="skillsets">
          <div className="my_skills">
            <i className='bx bxs-extension'></i>
            <p className="skillsets__Information">Frameworks</p>
            <p className="p_skils">React</p>
            <p className="p_skils">Wordpress</p>
            <p className="p_skils">Bootstrap</p>
          </div>

          <div className="my_skills">
            <i className='bx bxs-extension'></i>
            <p className="skillsets__Information">Source Control</p>
            <p className="p_skils">Git</p>
            <p className="p_skils">GitHub</p>
          </div>

          <div className="my_skills">
            <i className='bx bxs-extension'></i>
            <p className="skillsets__Information">Lenguajes</p>
            <p className="p_skils">React</p>
            <p className="p_skils">HTML</p>
            <p className="p_skils">CSS</p>
            <p className="p_skils">JavaScript</p>
          </div>

          <div className="my_skills">
            <i className='bx bxs-extension'></i>
            <p className="skillsets__Information">UX/UI</p>
            <p className="p_skils">Adobe Suite</p>
            <p className="p_skils">Elementor</p>
          </div>
        </div>
      </div>

      <div className='container_proyects' id="portafolio">
        <div className="cards_project">
          <div className='information_proyect'>
            <p className="title_projects">Mis proyectos</p>
            <p>Estos son algunos de los proyectos en los que he trabajado</p>
          </div>
          <div className="card__proyect">
            <img className="proyect__img" src={images.img1} alt="" />
            <p>Descripción</p>
            <div className="logos_description">
              <p className="logo_skill js">Javascript</p>
              <p className="logo_skill html">HTML5</p>
              <p className="logo_skill css">CSS</p>
            </div>
          </div>
          <div className="card__proyect">
            <img className="proyect__img" src={images.img2} alt="" />
            <p>Description</p>
            <div className="logos_description">
              <p className="logo_skill js">Javascript</p>
              <p className="logo_skill html">HTML5</p>
              <p className="logo_skill css">CSS</p>
              <p className="logo_skill react1">React</p>
            </div>
          </div>
          <div className="card__proyect">
            <img className="proyect__img" src={images.img3} alt="" />
            <p>Description</p>
            <div className="logos_description">
              <p className="logo_skill js">Javascript</p>
              <p className="logo_skill html">HTML5</p>
              <p className="logo_skill css">CSS</p>
              <p className="logo_skill react1">React</p>
            </div>
          </div>
          <div className="card__proyect">
            <img className="proyect__img" src={images.img4} alt="" />
            <p>Description</p>
            <div className="logos_description">
              <p className="logo_skill js">Javascript</p>
              <p className="logo_skill html">HTML5</p>
              <p className="logo_skill css">CSS</p>
              <p className="logo_skill react1">React</p>
            </div>
          </div>
        </div>
      </div>

      <div className='aditionals' id="contact">
        <form className="form__contact">
          <p>Let's talk business</p>
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
  );
};

export default Container;