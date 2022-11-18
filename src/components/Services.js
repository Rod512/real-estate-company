import React,{Fragment,useState,useEffect} from 'react';
import ServicesDetails from '../Detail/ServicesDetail';
import "aos/dist/aos.css"
import '../css/Services.css'
import Aos from 'aos';


const Services = () => {
    const [detail,setDetail] = useState(ServicesDetails)

    useEffect(()=>{
        Aos.init({duration:2000, once:true, easing:"ease"})

    },[])
    return (
       <Fragment>
       <section data-aos= "fade-up" className="services">
        <div className="heading">
            <span>Our Services</span>
            <h2>The smartest way to buy a home</h2>
        </div>

        <div className='services-row'>

        {
            detail.map((detail)=>{
                return(
                    <div className="services-card">
                        <div className="services-column">
                            <div className="content">
                                <div className="services-icon">
                                    <img src={detail.Image} alt="" />
                                </div>
                                <div className='services-content'>
                                <h3>{detail.heading}</h3>
                                <p>{detail.info}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
            
        </div>

       </section>
       </Fragment>
    );
};

export default Services;