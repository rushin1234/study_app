import React, { useState, useEffect } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../../appwrite'
import { ToastContainer, toast } from 'react-toastify'

const Home = () => {

    const sem1 = ['Problem Solving Using Computer and C Programming', 'DATABASE MANAGEMENT SYSTEMS', 'Matrix Algebra', 'Discrete Mathematics', 'Semiconductor Devices and Basic Electronic Systems', 'Principles of Digital Electronics', 'Descriptive Statistics(Paper - 1)', 'Mathematical Statistics(Paper - 2)']
    const sem2 = ['ADVANCED C PROGRAMMING', 'Relational Database Management Systems', 'Linear Algebra', 'Graph Thoery', 'Instrumentation Systems', 'Basics of Computer Organisation', 'METHODS OF APPLIED STATISTICS', 'Continuous Probability Distribution and Testing of Hypothesis']
    const sem3 = ['DATA STRUCTURES AND ALGORITHMS - 1', 'SOFTWARE ENGINNERING', 'Groups and Coding Theory', 'NUMERICAL TECHNIQUES', 'Microcontroller Architecture and Programming', 'Digital Communication and Networking', 'LAUNGUAGE COMMUNICATION - 1']
    const sem4 = ['Data Structures and Algorithms - 2', 'Computer Networks - 1', 'Computational Geometry', 'Operations Research', 'Embedded System Design', 'Wireless Communication and Internet of Things', 'Launguage Communication - 2']
    const sem5 = ['Operating Syatem - 1', 'COMPUTER NETWORKS - 2', 'Web Technologies - 1', 'Foundation of Data Science', 'Object Oriented Programming using Java - 1', 'Therotical Computer Science', 'Python Programming', 'Blockchain Technology']
    const sem6 = ['OPERATING SYSTEM - 2', 'SOFTWARE TESTING', 'Web Technologies - 2', 'Data Analytics', 'Object Oriented Programming using Java - 2', 'Compiler Construction', 'Software Testing and Tools']

    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setIsloading] = useState(false)

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const response = await account.get();
                setIsLoggedIn(true);
                setUser(response); // Store user data if needed
            } catch (error) {
                // toast.error('Error checking login:', error);
                // Handle cases where the user is not logged in (e.g., redirect to login page)
            }
        };
        checkLogin();
    },);

    const handleLogout = async () => {
        setIsloading(true)
        try {
            await account.deleteSession('current'); // Use 'current' to delete the current device session
            location.reload()
            toast('Successfully logged out!');
        } catch (error) {
            toast.error(error.message);
        }
        setIsloading(false)
    };

    return (
        <div className="home">

            {user ?
                <h2>Hi {user.email}</h2> :
                <></>}

                {loading?<p className='loading-text'>Please wait...</p>:<></>}
            {isLoggedIn ?
                <button disabled={loading} onClick={handleLogout}>Logout</button> :
                <button onClick={() => navigate('/login')}>Login</button>}

            <h3>SEM 1</h3>
            <ul>
                {sem1.map((sub) => {
                    return <li><Link to={`PYQ/${sub}`}>{sub}</Link></li>
                })}
            </ul>

            <h3>SEM 2</h3>
            <ul>
                {sem2.map((sub) => {
                    return <li><Link to={`PYQ/${sub}`}>{sub}</Link></li>
                })}
            </ul>

            <h3>SEM 3</h3>
            <ul>
                {sem3.map((sub) => {
                    return <li><Link to={`PYQ/${sub}`}>{sub}</Link></li>
                })}
            </ul>

            <h3>SEM 4</h3>
            <ul>
                {sem4.map((sub) => {
                    return <li><Link to={`PYQ/${sub}`}>{sub}</Link></li>
                })}
            </ul>

            <h3>SEM 5</h3>
            <ul>
                {sem5.map((sub) => {
                    return <li><Link to={`PYQ/${sub}`}>{sub}</Link></li>
                })}
            </ul>

            <h3>SEM 6</h3>
            <ul>
                {sem6.map((sub) => {
                    return <li><Link to={`PYQ/${sub}`}>{sub}</Link></li>
                })}
            </ul>

            <ToastContainer />
        </div>
    )
}

export default Home