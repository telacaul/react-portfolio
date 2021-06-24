import React from 'react';

function Project() {

    return (
        <>
            <h2 className="justify-content-center text-center" id="projects">Projects</h2>
            <section class="col-12">
                <a href="https://salty-thicket-97397.herokuapp.com/">
                    <img src="./assets/img/brewmap.jpg" class="img-fluid rounded" alt="BrewMaps"></img>
                </a>
            </section>
            <br />
            <section class="columns">
                <div class="row justify-content-center">
                    <div class="column col-6">
                        <a href="https://github.com/telacaul/note-taker">
                            <img src="./assets/img/note-taker.jpg" class="img-fluid rounded" alt="NoteTaker"></img>
                        </a>
                    </div>
                    <div class="column col-6">
                        <a href="https://github.com/telacaul/mvc-tech-blog">
                            <img src="./assets/img/tech-blog.jpg" class="img-fluid rounded" alt="TechBlog"></img>
                        </a>
                    </div>
                </div>
            </section>
            <br />
            <section class="columns">
                <div class="row justify-content-center">
                    <div class="column col-6">
                        <a href="https://github.com/telacaul/weather_dashboard">
                            <img src="./assets/img/weather.jpg" class="img-fluid rounded" alt="WeatherDashboard"></img>
                        </a>
                    </div>
                    <div class="column col-6">
                        <a href="https://github.com/telacaul/pwa-budget-tracker">
                            <img src="./assets/img/budget-tracker.jpg" class="img-fluid rounded" alt="BudgetTracker"></img>
                        </a>
                    </div>
                </div>
            </section>
            <br />
            <section class="columns">
                <div class="row justify-content-center">
                    <div class="column col-6">
                        <a href="https://github.com/telacaul/weather_dashboard">
                            <img src="./assets/img/weather.jpg" class="img-fluid rounded" alt="WeatherDashboard"></img>
                        </a>
                    </div>
                    <div class="column col-6">
                        <a href="https://github.com/telacaul/js_password_generator">
                            <img src="./assets/img/password.jpg" class="img-fluid rounded" alt="PasswordGenerator"></img>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Project;