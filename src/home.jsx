import React, { useEffect } from 'react';
import homeStyles from './home.module.css';
import Navigation from './Components/Navigation/Navigation';
import navStyles from './Components/Navigation/NavStyle.module.css';

const Home = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#000"
        document.body.style.position = "relative"
    })

    return (
        <>
            <div className={homeStyles["homepage-netflix-clone"]}>
                <div className={homeStyles["style-background"]}>
                    <div className={homeStyles["container"]}>
                        <p className={homeStyles["header-title"]}>Only Clones</p>
                        <Navigation className={navStyles["style-links"]} />

                        <button className={homeStyles["btn-signin"]}>Sign In</button>

                    </div>

                    <section className={homeStyles["hero-container"]}>
                        <div>
                            <h1 className={homeStyles["subtitle"]}>Improve Frontend Knowledge By Cloning Sites</h1>
                            <h2 className={homeStyles["subtitle"]}>Code Available On <a href="https://github.com/thisislink/onlyclones" target="_blank">GitHub</a></h2>
                        </div>

                        <h3 className={homeStyles["subtitle-email-text"]}>I recreate websites to improve my frontend skills. Enter your email and I'll send you a site clone idea every Tuesday.</h3>
                        <form className="form-container">
                            <div className="align-form">
                                <input className={homeStyles["style-email-input"]} type="email" autocomplete="off" placeholder=" " />
                                <button className={homeStyles["style-submit"]} type="submit">Get Started</button>
                                <label className={homeStyles["placeholder-label"]}>Email address</label>
                            </div>

                        </form>
                    </section>

                </div>
            </div>
        </>
    );
}

export default Home;