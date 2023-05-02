import images from "../assets/images";

import "./Container.css";


const Container = () => {



  return (
    <div className="principal__container">
        <div className='banner'>
        <div className='information__me'>
        <img className="banner__img" src={images.banner} alt="" />
            <h1 className='presentation'>My name is Cristobal<span className='prenstation_border'>A fronted developer</span>I live in Bogota</h1>
            </div>

            <p className="information_cut">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea modi minus eaque tenetur consequuntur, voluptatum reiciendis! Praesentium quidem quasi odio enim repellendus omnis officiis expedita error perspiciatis. Ut, quam.</p>

        </div>
        <div className='skills'>
            <div className='description__work'>
            <p className="work__experience">Work experiences</p>
            <h2 className="work_information">Companies Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, autem minima, iure corporis </h2>
            </div>
                    <div className="skills__cards">
            <div className='description__skills'>
            <p className='number_writer'>01</p>
            <p className="react">React</p>
            <p>Companies Lorem, ipum dolor sit amet consectetur adipisicing elit. Quae, autem minima, iure corporis </p>
            </div>

            <div className='description__skills'>
            <p className='number_writer'>02</p>
            <p className="javascript">JavaScript</p>
            <p>Companies Lorem, ipum dolor sit amet consectetur adipisicing elit. Quae, autem minima, iure corporis </p>
            </div>


            <div className='description__skills'>
            <p className='number_writer'>03</p>
            <p className="html__css">HTML CSS</p>
            <p>Companies Lorem, ipum dolor sit amet consectetur adipisicing elit. Quae, autem minima, iure corporis </p>
            
            </div>
                    </div>
            
        </div>
        <div className='more_about_me'>
            <h3>More about me</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil temporibus maxime saepe porro voluptates delectus corrupti odit officia reprehenderit, aliquid, perferendis sit? Corrupti error, obcaecati nemo adipisci cumque praesentium voluptates.</p>
            <a  className="check_linkeding" href="#">Check my linkedin</a>
        </div>
        <div className='container_information'>
            <h1>Skillset</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae qui velit, cupiditate explicabo omnis? Et eaque vitae, nemo incidunt expedita illo praesentium explicabo debitis. Sit veritatis facere nulla eligendi?</p>
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
        <div className='container_proyects'>
        <div className='iformation_proyect'>
            <p>My proyects</p>
            <p>Work that i ve done for pasta 8 years</p>
            </div>
            <div className="card__proyect">
            <img className="proyect__img" src={images.img1} alt="" />
                <p>description</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cum qui voluptatem nisi nobis labore eum, nostrum corrupti maxime exercitationem neque voluptatibus reiciendis officiis expedita provident dolor natus quia iste?</p>
                </div>
                <div className="card__proyect">
             <img className="proyect__img" src={images.img2} alt="" />
                <p>description</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cum qui voluptatem nisi nobis labore eum, nostrum corrupti maxime exercitationem neque voluptatibus reiciendis officiis expedita provident dolor natus quia iste?</p>
                </div> 
                <div className="card__proyect">
            <img className="proyect__img" src={images.img3} alt="" />
                <p>description</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cum qui voluptatem nisi nobis labore eum, nostrum corrupti maxime exercitationem neque voluptatibus reiciendis officiis expedita provident dolor natus quia iste?</p>
                </div> 
                <div className="card__proyect">
             <img className="proyect__img" src={images.img4} alt="" />
                <p>description</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cum qui voluptatem nisi nobis labore eum, nostrum corrupti maxime exercitationem neque voluptatibus reiciendis officiis expedita provident dolor natus quia iste?</p>
                </div>    

        </div>


        <div className='portfolios'>
            <h4>Behance</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sint temporibus dolorem quo consectetur, id culpa dolor officiis, aperiam laudantium, rerum unde aut ipsam quam. Totam ipsa ad temporibus reiciendis!</p>
            <p>follow in my </p>
        </div>
        <div className='aditionals'>
            <div>
            <img src="" alt="" />
            <h5>Proyect</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga molestiae dolore ut nobis voluptas consequatur autem velit, odit laudantium atque earum nihil eveniet laborum. Quasi sed nisi ullam autem voluptate?</p>
            <p>Click more</p>
            </div>
            <form className="form__contact" action="">
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