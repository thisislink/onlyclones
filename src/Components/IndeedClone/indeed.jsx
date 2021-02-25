import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import indeedStyles from '../IndeedClone/indeed.module.css';

const IndeedClone = () => {
    return (
        <>
            <div className={indeedStyles["indeed-clone"]}>
                <div>
                    <div className={indeedStyles["navContainer"]}>
                        <p>Indeed</p>
                        <nav className={indeedStyles["styleLinks"]}>
                            <ul>
                                <li><Link to="/">Find Jobs</Link></li>
                                <li><Link to="/all-clones">Company Reviews</Link></li>
                                <li><Link to="#">Find Salaries</Link></li>
                            </ul>
                            <ul className={indeedStyles["styleTopNavRight"]}>
                                <li><Link to="#">Upload your resume</Link></li>
                                <li><Link to="#" className={indeedStyles["styleSignin"]}>Sign in</Link></li>
                                <li><Link to="#">Employers / Post Job</Link></li>
                            </ul>
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
                        <p>Post your resume - It only takes a few seconds</p>
                    </section>

                    <section>
                        <p>Employers: get started - post a job, search resumes, and more</p>
                    </section>
                </div>
            </div>
        </>
    );
}

export default IndeedClone;