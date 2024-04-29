import { useEffect, useState } from 'react';

function Home() {
    document.title = "Welcome";

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const user = localStorage.getItem("user");
        fetch("api/SecureWebsite/home/" + user, {
            method: "GET",
            credentials: "include"
        }).then(response => response.json()).then(data => {
            setUserInfo(data.userInfo);
            console.log("user info: ", data.userInfo);
        }).catch(error => {
            console.log("Error home page : ", error);
        });
    }, []);

    return (
        <section className='page' >
            <header>
                <h1>STUDENT FEEDBACK MANAGEMENT SYSTEM</h1>
            </header>
            <div className="content">
                <div className="login-register-buttons">
                    <button className="login-button" onClick={() => { window.location.href = "/login" }}>LOGIN</button>
                    <button className="register-button" onClick={() => { window.location.href = "/register" }}>REGISTER</button>
                </div>
            </div>
        </section>
    );
}

export default Home;
