import { isVisible } from '@testing-library/user-event/dist/utils';
import React,{Fragment,useState} from 'react';
import CountUp from 'react-countup'
import VisibilitySensor from "react-visibility-sensor"
import "../css/Counter.css"

const Counter = ({className, ...rest}) => {
    const [viewPortEntered, setViewPortEntered] = useState(false)
    return (
        <Fragment>
            <div className="counter">
                <div className="counter-container">
                    <div className="counter-row">

                       {/*column 1*/} 
                        <div className="counter-column">
                            <strong>
                                <CountUp {...rest} start ={viewPortEntered ? null : 0} end = {305}>
                                {({countUpRef})=>{
                                    return(
                                        <VisibilitySensor
                                        active = {!viewPortEntered}
                                        onChange = {isVisible =>{
                                            if(isVisible){
                                                setViewPortEntered(true)
                                            }
                                        }}
                                        delayedCall
                                        >
                                        <span className='counter-number' ref={countUpRef}></span>

                                        </VisibilitySensor>
                                    )

                                }}
                                </CountUp>
                            </strong>
                            <span>Area <br /> population</span>
                        </div>

                        {/*column 2 */}
                        <div className="counter-column">
                            <strong>
                                <CountUp {...rest} start ={viewPortEntered ? null : 0} end = {1024}>
                                {({countUpRef})=>{
                                    return(
                                        <VisibilitySensor
                                        active = {!viewPortEntered}
                                        onChange = {isVisible =>{
                                            if(isVisible){
                                                setViewPortEntered(true)
                                            }
                                        }}
                                        delayedCall
                                        >
                                        <span className='counter-number' ref={countUpRef}></span>

                                        </VisibilitySensor>
                                    )

                                }}
                                </CountUp>
                            </strong>
                            <span>Total <br /> Properties</span>
                        </div>

                        {/*column 3*/}
                        <div className="counter-column">
                            <strong>
                                <CountUp {...rest} start ={viewPortEntered ? null : 0} end = {206}>
                                {({countUpRef})=>{
                                    return(
                                        <VisibilitySensor
                                        active = {!viewPortEntered}
                                        onChange = {isVisible =>{
                                            if(isVisible){
                                                setViewPortEntered(true)
                                            }
                                        }}
                                        delayedCall
                                        >
                                        <span className='counter-number' ref={countUpRef}></span>

                                        </VisibilitySensor>
                                    )

                                }}
                                </CountUp>
                            </strong>
                            <span>Average<br /> House</span>
                        </div>

                        {/*column 4*/}
                        <div className="counter-column">
                            <strong>
                                <CountUp {...rest} start ={viewPortEntered ? null : 0} end = {27}>
                                {({countUpRef})=>{
                                    return(
                                        <VisibilitySensor
                                        active = {!viewPortEntered}
                                        onChange = {isVisible =>{
                                            if(isVisible){
                                                setViewPortEntered(true)
                                            }
                                        }}
                                        delayedCall
                                        >
                                        <span className='counter-number' ref={countUpRef}></span>

                                        </VisibilitySensor>
                                    )

                                }}
                                </CountUp>
                            </strong>
                            <span>Total<br /> Branches</span>
                        </div>



                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Counter;