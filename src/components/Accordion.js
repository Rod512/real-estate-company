import React,{Fragment,useState} from 'react';
import Collapsible from 'react-collapsible';
import pic from "../Img/person.jpg"
import Qustion from "../Detail/Accordion"
import "../css/Accordion.css"

const Accordion = () => {
    const [detail,setDetail] = useState(Qustion)
    return (
        <Fragment>
            <section className='accordion'>
                <div className="accordion-row">
                    <div className="left">
                        <h3>Frequently Ask</h3>
                        {
                            detail.map((detail)=>{
                                return(
                                    <div className='left-content'>
                                        <Collapsible
                                        className='Collapsible'
                                        trigger={[<i className='fa-solid fa-angle-down'></i>,detail.qustion]}
                                        triggerWhenOpen = {[<i className='fa-solid fa-angle-up'></i>,detail.qustion]}
                                        >

                                        <p className='content-show'>
                                        {detail.answer}
                                        </p>

                                        </Collapsible>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="right">
                        <img src={pic} alt="person" />
                    </div>
                </div>
            </section>
            
        </Fragment>
    );
};

export default Accordion;