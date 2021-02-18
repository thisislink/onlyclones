import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import indeedStyles from '../Clones/indeed.module.css';

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
                        <Link to="/">Home</Link>
                        <button type="button">Sign In</button>
                    </nav>
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