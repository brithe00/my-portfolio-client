import React from 'react';
import './EditForm.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Navbar from './Navbar'
import GoBack from './GoBack';

import { connect } from 'react-redux';

class EditFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            media: '',
            link: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitForm(e) {
        e.preventDefault();
        const url = `http://localhost:8000/posts/${this.props.dataProjectId}`
        Axios.put(url, this.state, { headers: { Authorization: `Bearer ${this.props.token}` } })
            .then((res) => res.data)
            .then((res) => {
                alert(`Post modifié !`);
            })
            .catch((e) => {
                console.error(e);
                alert(`Une erreur est survenue !`)
            })
    }

    render() {
        return (
            <>
                <Navbar />
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/dashboard'>
                    <GoBack />
                </Link>
                <div className="form-container">
                    <Form className="post-form">
                        <FormGroup>
                            <Label for="title">Title :</Label>
                            <Input type="text" name="title" id="title" placeholder="" onChange={this.onChange} value={this.state.title} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="media">Image (URL) :</Label>
                            <Input type="text" name="media" id="media" placeholder="" onChange={this.onChange} value={this.state.media} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="link">Redirect to (URL) :</Label>
                            <Input type="text" name="link" id="link" placeholder="" onChange={this.onChange} value={this.state.link} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="description">Description :</Label>
                            <Input type="textarea" name="description" id="description" onChange={this.onChange} value={this.state.description} />
                        </FormGroup>

                        <Button onClick={this.submitForm}>Submit</Button>
                    </Form>
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.reducer.token,
    dataProjectId: state.reducer.dataProjectId
});

const EditForm = connect(mapStateToProps)(EditFormContainer);
export default EditForm;