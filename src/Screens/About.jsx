import React from 'react'
import Footer from "../Components/Footer"
// import Abhi from "../Assets/img2p.jpg"
import Coreteam from "../Assets/img1.jpg"
import Aboutus from "../Assets/img4.jpg"
import Events from "../Assets/img5.jpg"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
  useEffect(()=>{
    Aos.init({duration: 1800});
},[]);
  return (
    <>
    {/* <div>
    <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right">
              <h1>
                MY VISON 
              </h1>
              <h5 style={{ inlineHeight: "0.5" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
              <img src={Abhi} alt="" className="img-fluid animated"  id='Abt-img' data-aos="fade-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>
    </div>
    <div>
    <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-left">
              <h1>
                OUR AIM
              </h1>
              <h5 style={{ inlineHeight: "0.5" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 header-img pt-4 py-5" data-aos="fade-right" >
              <img src={Abhi} alt="" className="img-fluid animated"  id='Abt-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  <div>
  <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right">
              <h1>
                MY VISON 
              </h1>
              <h5 style={{ inlineHeight: "0.5" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
              <img src={Abhi} alt="" className="img-fluid animated"  id='Abt-img' data-aos="fade-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div> */}
  <>
   <div className='abouttotal'>
   <br></br>
   <br></br>
   <div >
    <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right">
              <h1>
              About us
              </h1>
              <h5 style={{ inlineHeight: "0.5" }}>
              ACM Student Chapter is the International Association for Computing Machinery's student society which is the world's largest educational and scientific computing society. ACM is dedicated to advancing the field of computing and information technology. It provides opportunities for students for networking and sharing their knowledge. Its focus is on building and developing members' passion for computer science. 

              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
              <img src={Aboutus} alt="" className="img-fluid animated"  id='Abt-img' data-aos="fade-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>
    </div>
    <br></br>
    <br></br>
    

    <div className='midabout'>
    <br></br>
    <br></br>
    <section id="Header" className="d-flex align-items-center">
      <br></br>
      <br></br>
      <br></br>
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-left">
              <h1>
              CORE TEAM
              </h1>
              <h5 style={{ inlineHeight: "0.5" }}>
              ACM-W Student Chapter is a community of individuals and organizations working to improve the representation of women in computing fields worldwide. The mission of ACM-W is to support, celebrate, and advocate for women in computing. It aims to create a welcoming and inclusive computing culture that encourages women's full participation in computing fields.
             
                 </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 header-img pt-4 py-5" data-aos="fade-right" >
              <img src={Coreteam} alt="" className="img-fluid animated"  id='Abt-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br></br>
  <br></br>
  </div>
  <div>
    <br></br>
    <br></br>
  <section id="Header" className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-5">
          <div className="row">
            <div className="col-md-6 pb-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-right">
              <h1>
              EVENTS
              </h1>
              <h5 style={{ inlineHeight: "0.5",}}>
              ACM SIST Student Chapter is a student-led organization affiliated with ACM. The chapter aims to promote the advancement of computing and technology among students, faculty, and researchers in the institution and the surrounding communities.
We provide a platform for students to engage in various activities such as technical sessions, hackathons, coding contests, seminars, social events, etc. 
The mission of the ACM SIST Student Chapter is to foster the growth of computing and technology in the area by developing a vibrant community of students and researchers who are passionate about these fields.
              </h5>
            </div>
            <div id='img-abt' className="col-lg-6 order1 order-lg-2 header-img pt-4 py-5">
              <img src={Events} alt="" className="img-fluid animated"  id='Abt-img' data-aos="fade-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</div>
   </>
  <Footer/>
  </>
  )
}

export default About