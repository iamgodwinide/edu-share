import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './read.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Read = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const { id } = useParams();

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );

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
            <div className='read-wrap'>
                <div className='read-container'>
                    <div className='buttons-wrap'>
                        <button onClick={goToPrevPage}>
                            <i className="fas fa-chevron-left"></i>
                            Prev</button>
                        <button onClick={goToNextPage}>Next
                            <i className="fas fa-chevron-right"></i>
                        </button>
                        <a download href={require(`../assets/pdf/${id}`)}>
                            <button className="download-btn">
                                <i className="fas fa-file-download"></i>{" "}
                                Download PDF</button>
                        </a>
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                    </div>

                    <div className='pdf-wrap'>
                        <Document
                            file={require(`../assets/pdf/${id}`)}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Read;