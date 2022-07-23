import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = (props) => {
const[enteredUserName, setEnteredUserName] = useState('');
const[enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUserName, enteredAge);
    }
    const userNameChangeHandler = (e) => {
        setEnteredUserName(e.target.value)
    }
    const userAgeChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type="text" onChange={userNameChangeHandler}/>

                <label htmlFor='userAge'>Age (Years)</label>
                <input id='userAge' type="number" onChange={userAgeChangeHandler}/>

                <Button type='submit'>Add User</Button>
            </form>
        </Card>


    )


}

export default AddUser;