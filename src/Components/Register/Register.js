import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import home from '../../images/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../../App';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400 ,
    },
  }));


const Register = () => {
    const history = useHistory()
    const {key} = useParams();
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [eventId , setEvent] = useState();

    const [input ,setInput] = useState({
        date: '',
        description : ''
    })

    useEffect(() => {
        inputData()
    },[key])

    const inputData = async () => {
        await fetch('https://agile-island-04725.herokuapp.com/register/' + key)
        .then(res => res.json())
        .then(data => setEvent(data))
    }
    const {name ,img} = eventId ? eventId[0] : []
    

    //form handle.
        const handleSubmit = (e) => {
            const userInfo = {...loggedInUser}
            userInfo.date = input.date;
            userInfo.description = input.description;
            userInfo.img = img;
            
            setLoggedInUser(userInfo);

            fetch('https://agile-island-04725.herokuapp.com/addVolunteer', {
                method :'POST',
                headers :{
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(userInfo)
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    history.push('/RegEvent')
                } 
            })
            e.preventDefault() 
        }
    
    //input change handle.
    const handleChange = (e) => {
        const inputValue = {...input}
        if(e.target.name === 'date'){
            inputValue.date = e.target.value
        }
        if(e.target.name === 'description'){
            inputValue.description = e.target.value
        }
        setInput(inputValue);
    }
    //button handle.
    // const addData = () => {
        
    // }
    

    const formStyle = {
        width:'450px',
        height:'480px',
        background:'#ffffff',
        padding:'15px',
        margin:'auto',
        borderRadius:'15px'
    }
    const classes = useStyles();
    
    return (
        <div style={{background:'#E5E5E5', height:'120vh',}}>
            <div className="d-flex justify-content-center" style={{paddingTop:'50px',marginBottom:'30px'}}>
                <Link to='/home'><img width='300px' src={home} alt="home"/></Link>
            </div>
            <div style={formStyle}>
                <form action="" onSubmit={handleSubmit}>
                    <h2>Register as a Volunteer</h2>
                    <input type="text" placeholder="Full Name"
                    className='form-control my-4' value={loggedInUser.name} disabled/>
                    <input type="text" placeholder="Username or Email"
                     className='form-control my-4' value={loggedInUser.email} disabled/>
                    <TextField
                        id="date"
                        type="date"
                        name= 'date'
                        defaultValue={new Date()}
                        className={classes.textField}
                        onBlur={handleChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <input type="text"
                    name='description'
                     placeholder="Description"
                    onBlur={handleChange}
                     className='form-control my-4'/>
                    <input type="text" placeholder="Organize books at the library."
                    value={name}
                     className='form-control my-4' disabled/>
                    <div className='d-flex justify-content-center'>
                        
                        <input style={{width: '400px', marginTop :'20px',}} type="submit" value="Registration"/>
                            {/* <button style={{width: '400px', marginTop :'20px',}} 
                            onClick={addData}
                            className='btn btn-info'>Registration</button> */}
                        
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;

