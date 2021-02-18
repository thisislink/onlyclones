import React, { useEffect } from 'react';
import homeStyles from './home.module.css';

const Home = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#000"
        document.body.style.position = "relative"
    })

    return (
        <body>
            <div className={homeStyles["style-background"]}>
                <div className={homeStyles["container"]}>
                    <p className={homeStyles["header-title"]}>Only Clones</p>
                    <div>
                        <button type="button" className={homeStyles["btn-nx-clone"]}>Sign In</button>
                    </div>
                </div>

                <section className={homeStyles["hero-container"]}>
                    <div>
                        <h1 className={homeStyles["subtitle subtitle-h1"]}>Improve Frontend Knowledge By Cloning Sites</h1>
                        <h2 className={homeStyles["subtitle"]}>Code Available On <a href="https://github.com/thisislink/onlyclones" target="_blank">GitHub</a></h2>
                    </div>
                    <h3 className={homeStyles["subtitle subtitle-email-text"]}>I recreate known websites to improve my frontend skills. Enter your email and I'll send you a site clone idea every Tuesday.</h3>
                    <div className={homeStyles["sub-hero-container"]}>
                        <form className={homeStyles["align-form"]}>
                            <input className={homeStyles["style-email-input"]} type="text" autocomplete="off" placeholder=" " />
                            <label className={homeStyles["placeholder-label"]}>Email address</label>
                            <input className={homeStyles["style-submit"]} type="submit" value="Get Started" />
                        </form>
                    </div>
                </section>
            </div>
        </body>
    );
}

export default Home;