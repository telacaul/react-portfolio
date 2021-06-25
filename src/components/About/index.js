import React from 'react';


function About() {

    return (
        <>
            <section className="columns text-center" id="about">
                <div className="row justify-content-center">
                    <div className="column col-6">
                        <img src="./assets/img/classroom.jpg" className="img-fluid rounded" alt="Teacher"></img>
                        <p>My classroom at Making Waves Academy in Richmond, CA.</p>
                    </div>
                    <div className="column col-6">
                        <h4 class="title" id="about-me">About Me</h4>
                        <p class="subtitle">Welcome! My name is Tela Caul and I am a passionate high school educator with a love for educational technology and its relationship to equity, access and differentiation in the classroom.</p>
                    </div>
                </div>
            </section>
            <section className="columns text-center" id="passions">
                <div className="row justify-content-center">
                    <div className="column col-6">
                        <h4 class="title" id="love">What I love</h4>
                        <p class="subtitle">In my free time, I enjoy traveling and spending time in nature with my two Miniature Australian Shepards and my partner Jack.
                        </p>
                    </div>
                    <div className="column col-6">
                        <img src="./assets/img/oregon.jpg" className="img-fluid rounded" alt="CraterLake"></img>
                        <p>Crater Lake</p>
                    </div>
                </div>
            </section>

        </>
    )
}


export default About;