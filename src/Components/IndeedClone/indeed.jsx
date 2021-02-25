import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import indeedStyles from '../IndeedClone/indeed.module.css';
import Navigation from '../Navigation/Navigation';

const IndeedClone = () => {
    return (
        <body>
            <div>
                <div className={indeedStyles["container"]}>
                    <p className={indeedStyles["headerTitle"]}>Indeed</p>
                    <nav>
                        <Link to="#" className={indeedStyles["styleLinks"]}>Find Jobs</Link>
                        <Link to="#" className={indeedStyles["styleLinks"]}>Company Reviews</Link>
                        <Link to="#" className={indeedStyles["styleLinks"]}>Find Salaries</Link>
                        <Link to="#" className={indeedStyles["styleLinks"]}>Upload your resume</Link>
                        <Link to="#" className={indeedStyles["styleLinks"]}>Sign in</Link>
                        <Link to="#" className={indeedStyles["styleLinks"]}>Employers / Post Job</Link>

                    </nav>
                    <Navigation className={indeedStyles["styleLinks"]} />
                </div>

                <section>
                    <form>
                        <input type="text" autocomplete="off" placeholder="What" />
                        <input type="text" autocomplete="off" placeholder="Where" />
                        <input type="submit" value="Find Jobs" />
                    </form>
                </section>

                <section>
                    <p className={indeedStyles["post-resume-text"]}>Post your resume - It only takes a few seconds</p>
                </section>

                <section>
                    <p className={indeedStyles["employers-text"]}>Employers: get started - post a job, search resumes, and more</p>
                </section>
            </div >
        </body >
    );
}

export default IndeedClone;