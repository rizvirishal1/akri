import React from "react";
import "./features.scss"


function features(props){
    return(
        <div className="feat_box container">
            <div class=" row flex-lg-row-reverse align-items-center  ">
                  <div class="col-10 col-sm-8 col-lg-6">
            <img src={props.image} class="d-block mx-lg-auto img-fluid" width="300" loading="lazy"/>
                  </div>
                  <div class="text_box col-lg-6">
            <h1 class="feat_title display-5 fw-bold text-body-emphasis lh-1 mb-3">{props.title}</h1>
            <p class="lead">{props.description}</p>
                  </div>
                </div>
        </div>
    )
}

export default features