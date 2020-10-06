import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const RegEvent = () => {
    const [existingUser, setExistingUser] = useState([])
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://agile-island-04725.herokuapp.com/user?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setExistingUser(data)
            })
    }, [existingUser] )

        function cancelEvent(id) {
            fetch(`https://agile-island-04725.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })
        }
    return (
        <div style={{background:'#E5E5E5', height:'100vh'}}>
            <Header></Header>
            <div className='container'>   
                <div className='row' style={{marginTop:'50px'}}>

                {
                existingUser.map(user =>  
                    <div className="col-md-6" >
                            
                    <div style={{background:'#ffffff' , borderRadius:'10px',marginTop:'20px',padding:'20px'}} className='d-flex'>
                        
                        <div style={{width:'200px', float: 'left'}}>
                            <img style={{width:'194px', height:'173px'}} src={user.img} alt="img"/>
                        </div>

                        <div style={{width:'300px', float: 'left' ,paddingLeft:'15px'}} className="event_text">

                            <div className="event_content">
                                <h4>{user.description}</h4>
                                <p>{user.date}</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button  onClick={()=>cancelEvent(`${user._id}`)} className="btn btn-primary">Cancel</button>
                            </div>

                        </div>   
                    </div>
                </div>

                )}

                    

                </div>
            </div>

        </div>
    );
};

export default RegEvent;