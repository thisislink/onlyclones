import React, { useEffect } from 'react';
import homeStyles from './home.module.css';
import Navigation from './Components/Navigation/Navigation';

const Home = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#000"
        document.body.style.position = "relative"
    })

    return (
        <body>
            <div className={homeStyles["style-background"]}>
                <div className={homeStyles["container"]}>
                    <Navigation />
                    <div>
                        <button type="button" className={homeStyles["btn-nx-clone"]}>Sign In</button>
                    </div>
                </div>

                <section className={homeStyles["hero-container"]}>
                    <div>
                        <h1 className={homeStyles["subtitle subtitle-h1"]}>Improve Frontend Knowledge By Cloning Sites</h1>
                        <h2 className={homeStyles["subtitle"]}>Code Available On <a href="https://github.com/thisislink/onlyclones" target="_blank">GitHub</a></h2>
                    </div>

                    <h3 className={homeStyles["subtitle-email-text"]}>I recreate websites to improve my frontend skills. Enter your email and I'll send you a site clone idea every Tuesday.</h3>
                    <form>
                        <input className={homeStyles["style-email-input"]} type="text" autocomplete="off" placeholder=" " />
                        <button className={homeStyles["style-submit"]} type="submit">Get Started</button>
                        <label className={homeStyles["placeholder-label"]}>Email address</label>
                    </form>
                </section>

            </div>
        </body >
    );
}

export default Home;