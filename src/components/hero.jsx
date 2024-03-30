import React from "react";
import "./hero.scss"
import arrow from "../images/arrow.png"
import { Link } from 'react-router-dom';

function hero(){
    return(
        <div className="gradient-background">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5 ">
                <div class="row align-items-center g-lg-5 py-5">
                      <div class="anc col-lg-7 text-center text-lg-start">
                <h3 class=" fw-bold lh-1 text-body-emphasis mb-3">
            Let's work together to create a sustainable future! 💪 sign up &
            come aboard to join us in the journey.</h3><br></br>
                <p class="col-lg-10 fs-4"><img class="arrow" src={arrow}></img> </p>
                      </div>
                      <div class="col-md-10 mx-auto col-lg-5">
                <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                  </div>
                  <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                  <hr class="my-4"/>
                  <small class="text-body-secondary">Don't have an account? <Link to="/signup"><button  type="button" class="signup btn btn-outline-success btn-sm">Sign Up</button></Link> </small>
                </form>
                
                      </div>
                    </div>
            </div>
        </div>
    )
}

export default hero