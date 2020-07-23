import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import Axios from 'axios';
import './DashboardTable.css'

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { dataId } from '../redux/Reducer';

import Navbar from './Navbar'

function DashboardTableContainer({ dispatch,  ...props }) {

  const [postsData, setPostsData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:8000/posts/`, { headers: { Authorization: `Bearer ${props.token}` } })
      .then((response) => {
        setPostsData(response.data);
      })
      .catch(() => {
        history.push('/admin')
      })

  }, [props.token, history]);

  const getId = (data) => {
    dispatch(dataId(data))
    history.push(`/edit/${data}`)
  };

  return (
    <>
      <Navbar />
      <div>
        <Table hover>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th><Button onClick={() => {
                history.push('/form')
              }}color="success">Add a project</Button></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>#</th>
              <th>Media</th>
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
              <th>Languages</th>
              <th>Actions</th>
            </tr>
          </thead>
          {postsData.map((postData) => (
            <tbody>
              <tr>
                <th scope="row">{postData.id}</th>
                <td className="project-description"><img src={postData.media} alt={postData.title} className="project-image" /></td>
                <td className="project-description">{postData.title}</td>
                <td className="project-description">{postData.description}</td>
                <td className="project-description">{postData.link}</td>
                <td className="project-description">{postData.name}</td>
                <td>
                  <Button onClick={(data) => {getId(postData.id)}} outline color="primary">Edit</Button>
                  <Button onClick={() => {
                    const url = `http://localhost:8000/posts/${postData.id}`
                    Axios.delete(url, { headers: { Authorization: `Bearer ${props.token}` } })
                      .then(window.location.reload(false)); // ATTENTION, A REVOIR
                  }} outline color="danger">Delete</Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  token: state.reducer.token,
});

const DashboardTable = connect(mapStateToProps)(DashboardTableContainer);
export default DashboardTable;