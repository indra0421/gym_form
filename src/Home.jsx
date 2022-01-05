import React from 'react'
import { NavLink } from 'react-router-dom'
import index from './index.css'
import Menu from './Menu'
const Home = () => {
    return (
        <>
            

            <div className="container">
                <h1>Join The best gym of Kolkata now</h1>

                <form action="reaction.php">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Enter your Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="" placeholder="Enter your Age" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="" placeholder="Enter your Gender" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="" placeholder="Enter your Locality" />
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Home;