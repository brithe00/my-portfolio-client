import React, { useState } from 'react';
import './Login.css';
import Axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { changeToken } from '../redux/Reducer';
import Navbar from './Navbar'

const LoginContainer = ({ dispatch }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onChangeUsername = (e) => {
        setUsername(
            e.target.value,
        );
    }

    const onChangePassword = (e) => {
        setPassword(
            e.target.value,
        );
    }

    function submitForm(e) {
        e.preventDefault();
        Axios.post('http://localhost:8000/users/login', {
            username,
            password,
        })
            .then((res) => res.data)
            .then((res) => {
                dispatch(changeToken(res.token));
                Axios.get('http://localhost:8000/', { headers: { Authorization: `Bearer ${res.token}` } })
                    .then((res) => res.data)
                    .then((res) => {
                        history.push('/dashboard');
                    });
            });
    };

    return (
        <>
            <Navbar />
            <div className="form-container">
                <Form className="login-form">
                    <FormGroup>
                        <Label for="username">Username :</Label>
                        <Input type="text" name="username" id="username" placeholder="" onChange={onChangeUsername} value={username} required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password :</Label>
                        <Input type="password" name="password" id="password" placeholder="" onChange={onChangePassword} value={password} required />
                    </FormGroup>

                    <Button color="primary" onClick={submitForm}>Login</Button>
                </Form>
            </div>
        </>
    );
};

const Login = connect()(LoginContainer)
export default Login;