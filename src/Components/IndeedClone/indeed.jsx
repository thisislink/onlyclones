import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import indeedStyles from '../IndeedClone/indeed.module.css';
import Navigation from '../Navigation/Navigation';

const IndeedClone = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#fff";
    })

    return (
        <body>
            <div>
                <div className={indeedStyles["container"]}>
                    <p className={indeedStyles["headerTitle"]}>Indeed</p>
                    <nav>
                        <Link to="#">Find Jobs</Link>
                        <Link to="#">Company Reviews</Link>
                        <Link to="#">Find Salaries</Link>
                        <Link to="#">Upload your resume</Link>
                        <Link to="#">Sign in</Link>
                        <Link to="#">Employers / Post Job</Link>

                    </nav>
                    <Navigation />
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
        </body>
    );
}

export default IndeedClone;