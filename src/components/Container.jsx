import images from "../assets/images";

import "./Container.css";


const Container = () => {



  return (
    <div className="principal__container" id="home">
        <div className='banner'>
        <div className='information__me'>
        <img className="banner__img" src={images.banner} alt="" />
            <h1 className='presentation'>Hello! I'm Cristóbal Quilimaco <span className='prenstation_border'>A fronted developer</span>I live in Bogota</h1>
            </div>

            <p className="information_cut">I am committed to constant learning and continuous improvement. I love thinking outside the box and finding creative solutions to web development problems. I believe that my passion for technology and my work ethic make me an ideal candidate for any web development project.</p>

        </div>
        <div className='skills'>
            <div className='description__work'>
            <p className="work__experience">Applied studies</p>
            <h2 className="work_information">Some recent learnings</h2>
            </div>
                    <div className="skills__cards">
            <div className='description__skills'>
            <p className='number_writer'>01</p>
            <p className="react">React</p>
            <p>I learned React through a combination of research Through Academlo, practice, and participation in developer communities.</p>
            </div>

            <div className='description__skills'>
            <p className='number_writer'>02</p>
            <p className="javascript">JavaScript</p>
            <p>Aprendí nuevos conocimientos y técnicas a través de cursos, documentación oficial y de la práctica constante. </p>
            </div>


            <div className='description__skills'>
            <p className='number_writer'>03</p>
            <p className="html__css">HTML CSS</p>
            <p>In terms of practice, I worked on increasingly complex projects, using HTML and CSS to design and develop websites and web applications. </p>
            
            </div>
                    </div>
            
        </div>
        <div className='more_about_me' id="about">
            <h3>More about me</h3>
            <p>Despite my self-taught background, I have always known that I needed a formal education to consolidate my knowledge and take my career to the next level. Therefore, I am currently studying at Academlo, a recognized educational institution in the field of web development and digital technology.</p>
            <a  className="check_linkeding" href="#">Check my linkedin</a>
        </div>
        <div className='container_information'>
            <h1>Skillset</h1>
            <p>These are the additional languages ​​and applications that I use as a web developer</p>
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
            <p>My proyects</p>
            <p>These are some of the projects I've worked on</p>
            </div>
            <div className="card__proyect">
            <img className="proyect__img" src={images.img1} alt="" />
                <p>Description</p>
                <p>The e-commerce project was a valuable experience to improve skills in web development using JavaScript, HTML and CSS. A functional and visually attractive website was implemented, with a satisfactory user experience.</p>
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