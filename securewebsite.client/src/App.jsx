import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import './App.css';
import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';
import Register from './components/Register';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route element={<ProtectedRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element= {<Home />}/>
        </Route>
    )
);

function App() {
    const isLogged = localStorage.getItem("user");
    const logout = async () => {
        const response = await fetch("/api/securewebsite/logout", {
            method: "GET",
            credentials: "include"
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.removeItem("user");

            alert(data.message);

            document.location = "/login";
        } else {
            console.log("could not logout: ", response);
        }
    };

    return (
        <div>
            <nav className='top-nav'>
                <div className='item-holder'>
                    <a href="/">Home</a>
                    {isLogged && <a href="/admin">Admin</a>}
                </div>
                <div className='item-holder'>
                    {isLogged ? <span onClick={logout}>Log Out</span> : <a href="/login">Login</a>}
                    {/* {!isLogged && <a href="/register">Register</a>} */}
                </div>
            </nav>

            <section className="main-content">
                <RouterProvider router={router} />
            </section>

            <footer className="footer">
                <p>&copy; Student Feedback Management System</p>
            </footer>
        </div>
    );
}

export default App;
