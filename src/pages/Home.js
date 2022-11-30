import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import './home.css'
import materials from '../constants/materials.json'
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'

function Home() {
    const [dept, setDept] = useState("cit");
    const [level, setLevel] = useState("100");
    const [semester, setSemester] = useState("1");

    const navigate = useNavigate();

    const handleSearch = () => {
        if (dept && level && semester) {
            navigate(`/search/${dept}/${level}/${semester}`);
        }
    }

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
            <main>
                <div className="content">
                    <div className="hero">
                        <h1>EDU-SHARE</h1>
                        <h3>Read and Download Educational materials for free</h3>

                        <div className="form-wrap">
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Department:
                                    </Label>
                                    <br />
                                    <Input
                                        className="mb-3"
                                        type="select"
                                        value={dept}
                                        onInput={e => setDept(e.target.value)}
                                    >
                                        <option value={"cit"}>
                                            Curriculumn And Instructional Technology(CIT)
                                        </option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Level:
                                    </Label>
                                    <br />
                                    <Input
                                        className="mb-3"
                                        type="select"
                                        value={level}
                                        onInput={e => setLevel(e.target.value)}
                                    >
                                        <option>
                                            100
                                        </option>
                                        <option>
                                            200
                                        </option>
                                        <option>
                                            300
                                        </option>
                                        <option>
                                            400
                                        </option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Semester:
                                    </Label>
                                    <br />
                                    <Input
                                        className="mb-3"
                                        type="select"
                                        value={semester}
                                        onInput={e => setSemester(e.target.value)}
                                    >
                                        <option value={1}>
                                            1st Semester
                                        </option>
                                        <option value={2}>
                                            2nd Semester
                                        </option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Button
                                        color="primary"
                                        type="button"
                                        onClick={handleSearch}
                                    >
                                        GET MATERIALS
                                    </Button>
                                </FormGroup>
                            </Form>
                        </div>

                    </div>

                    <div className="sidebar">
                        <h3>Recently Added</h3>
                        <hr />
                        <br />
                        <ul>
                            {
                                materials.map(m => (
                                    <li>
                                        <i class="fas fa-file-pdf"></i>
                                        <Link to={`/read/${m.pdf}`}>
                                            {m.title}
                                        </Link>
                                        <i class="fas fa-chevron-right"></i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
