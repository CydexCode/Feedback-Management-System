import { useEffect, useState } from 'react';
import axios from "axios";

function StudentCrud() {
    const [id, setId] = useState("");
    const [stname, setName] = useState("");
    const [course, setCourse] = useState("");
    const [students, setStudents] = useState([]);

    useEffect(() => {
        Load();
    }, []);

    async function Load() {
        try {
            const result = await axios.get("https://localhost:7195/api/Student/GetStudent");
            setStudents(result.data);
            console.log(result.data);
        } catch (error) {
            console.error("Error loading students:", error);
        }
    }

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("https://localhost:7195/api/Student/AddStudent", {
                stname: stname,
                course: course,
            });
            alert("Student Registration Successful");
            setId("");
            setName("");
            setCourse("");
            Load();
        } catch (err) {
            alert(err);
        }
    }

    async function editStudent(student) {
        setName(student.stname);
        setCourse(student.course);
        setId(student.id);
    }

    async function DeleteStudent(id) {
        try {
            await axios.delete("https://localhost:7195/api/Student/DeleteStudent/" + id);
            alert("Student deleted Successfully");
            setId("");
            setName("");
            setCourse("");
            Load();
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    }

    async function update(event) {
        event.preventDefault();
        try {
            await axios.patch("https://localhost:7195/api/Student/UpdateStudent/" + id, {
                id: id,
                stname: stname,
                course: course,
            });
            alert("Registration Updated");
            setId("");
            setName("");
            setCourse("");
            Load();
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <h1>Student Details</h1>
            <div className="container mt-4">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            hidden
                            value={id}
                            onChange={(event) => {
                                setId(event.target.value);
                            }}
                        />
                        <label>Student Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="stname"
                            value={stname}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Course</label>
                        <input
                            type="text"
                            className="form-control"
                            id="course"
                            value={course}
                            onChange={(event) => {
                                setCourse(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary mt-4" onClick={save}>
                            Register
                        </button>
                        <button className="btn btn-warning mt-4" onClick={update}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <br />
            <table className="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Student Id</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Course</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.stname}</td>
                            <td>{student.course}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => editStudent(student)}
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => DeleteStudent(student.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentCrud;
