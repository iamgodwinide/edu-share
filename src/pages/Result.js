import React, { useEffect, useState } from 'react'
import './result.css'
import { useParams } from 'react-router-dom'
import materials from '../constants/materials.json'
import { Link } from 'react-router-dom'




const Result = () => {
    const { dept, level, semester } = useParams();
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        console.log(dept, level, semester)
        const _docs = materials.filter(m => m.level == level && m.semester == semester && m.dept == dept);
        setDocs(_docs);
        console.log(_docs)
    }, [])
    return (
        <>
            <nav>
                <div className="brand-logo">
                    <Link to="/">EDU-SHARE</Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className='result-wrap'>
                <h1>EDU Materials for CIT 200L, 2nd Semester.</h1>

                <ul>
                    {
                        docs.length > 0
                            ?
                            docs.map(d => (
                                <li>
                                    <i className="fas fa-file-pdf"></i>
                                    <a href="#">
                                        {d.title}
                                    </a>
                                    <i className="fas fa-chevron-right"></i>
                                </li>
                            ))
                            : <p>Sorry no materials are available now.</p>
                    }
                </ul>
            </div>
        </>
    )
}

export default Result