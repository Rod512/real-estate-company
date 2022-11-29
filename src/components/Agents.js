import React,{Fragment,useState}from 'react';
import AgentsDetails from '../Detail/AgentsDetail';
import '../css/Agents.css'

const Agents = () => {
    const[detail,setDetail] = useState(AgentsDetails)
    return (
        <Fragment>
            <section className="agents">
                <div className="agents-heading">
                    <span>Agents</span>
                    <h2>Our Agents</h2>
                </div>
                <div className="agents-row">
                    {
                        detail.map((detail)=>{
                            return(
                                <div className="agents-column">
                                    <div className="agents-card">
                                        <div className="agents-thumb">
                                            <img src={detail.Image} alt="" />
                                            <div className="social-link">
                                                <ul>
                                                    <li>
                                                        <a href="/"><i className='fa-brands fa-facebook'></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><i className='fa-brands fa-twitter'></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><i className='fa-brands fa-instagram'></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="agent-info">
                                            <h3>{detail.name}</h3>
                                            <p>{detail.info}</p>
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

export default Agents;