import React from "react";
import { Card } from "react-bootstrap";
import me from '../Asset/me.png'
import {Info} from '../resouces.js/info'



function HomePage(){
    return(
        <>
            <div className="container mt-5 mb-5 topcon" id="top-c">
                <div className="row pt-5 pb-5 ">
                     <div className="col-sm d-flex justify-content-center">
                                <img className="me" src={me} alt="me"/>
                    </div>
                    <div className="col-sm align-self-center intro">
                                <h1>Inspired by today's technology to create the future.</h1>
                                <p>Skilled and knowledgeable in <strong>HTML| CSS| Javascript| React| Axios| React-Routers| BootStrap| Martial UI| Node.js.</strong></p>
                    </div>
                </div>
            </div>
            <hr id="projects"/>
            <div   className="container mt-5 pt-5 ">
                <div className="row">
                    <div className="p1">
                        <h1>Projects</h1>
                        <p>Project I have worked on and continue to deveolp as my skills increases</p>
                        <p>I enjoy learning and applying my knowled to new Projects. For more please take a look at my gitHub.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="map">
                        {Info.map((item,id)=> {
                            return (
                                <Card className="border-0 text-center rounded-3" key={id}>
                                    <a target="_blank" rel="noopener" href={item.url}><Card.Img className=" rounded-3" src={item.img} alt="img"></Card.Img></a>
                                    <Card.Body>
                                       <p className="card-text">{item.name}</p>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
            <hr/>
         </>
    )
    
}
export default HomePage;