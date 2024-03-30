import React from "react";
import "./signup.scss"


function Sign_up(){
    return(
        <body className="background-gradient">
            <div class="signup_cont container">
                    <h1 className="signup_title">Sign Up</h1>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Name</label>
                  <input  class="form-control" id="exampleFormControlInput1" placeholder="First_name Last_name "/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">House name / number</label>
                  <input  class="form-control" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Locality / street</label>
                  <input  class="form-control" id="exampleFormControlInput1" placeholder="example road"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">City</label>
                  <input  class="form-control" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">District</label>
                  <input  class="form-control" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">State</label>
                  <input  class="form-control" id="exampleFormControlInput1" placeholder=""/>
                </div>
            </div>
            
        </body>
    )
}

export default Sign_up