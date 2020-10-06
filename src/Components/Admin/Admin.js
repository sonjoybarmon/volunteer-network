import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Admin.css'

    const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    });

    function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
    }

    const rows = [
        1
        //data show koranor jonno eta ke map kora hoice

    ];

const Admin = () => {

    const classes = useStyles();

    return (
        <>
            <div 
            style={{width:'100%', height:'auto' , padding : '10px 0', background:'#E5E5E5'}}>
                <div className="container">
                    <div className='d-flex'>
                        <Link to='/home'>
                            <img style={{ height:'70px', lineHeight:'20px'}} src={logo} alt="logo"/>
                        </Link>
                        <h4 style={{lineHeight:'60px', marginLeft:'50px'}}>Volunteer register list</h4>
                    </div>
                </div>
                <div>
                    <div style={{width:'20%', float: 'left',
                        background:'#E5E5E5' , height:'100vh', marginTop:'10px',}}>
                        <div style={{marginLeft:'20%', marginTop:'30px'}}>
                            <NavLink className="nav_list1" activeClassName='text-primary' to='/admin'>
                                Volunteer register list 
                            </NavLink> <br/><br/>
                            <NavLink className="nav_list1" activeClassName='text-primary' to='/addEvent'>
                               Add event 
                            </NavLink>
                        </div>
                    </div>

                    <div style={{width:'70%', float: 'left', background:'#ffffff',  marginTop:'50px',marginLeft:'20px'}}>
                        
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Email Id</TableCell>
                                <TableCell align="right">Registating date</TableCell>
                                <TableCell align="right">Volunteer list</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                Sufi Ahmed Hamim
                                </TableCell>
                                <TableCell align="right">sufi@gmail.com</TableCell>
                                <TableCell align="right">22-10-2020</TableCell>
                                <TableCell align="right">Organize books at the library.</TableCell>
                                <TableCell align="right"
                                 className="text-danger" style={{cursor:'pointer'}}
                                 >Delete</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>

                    </div>


                </div>
            </div>
        </>
    );
};

export default Admin;