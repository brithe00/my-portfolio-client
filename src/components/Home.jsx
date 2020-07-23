import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import Axios from 'axios';
import './Home.css'
import NavbarHome from './NavbarHome'

function Home(props) {

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8000/posts_visible/`)
      .then((response) => {
        setProjectsData(response.data);
      })
  }, []);

  return (
    <>
      <NavbarHome />
      <div className="card-container">
        {projectsData.map((projectData) => (
          <div>
            <Card>
              <CardImg top width="100%" src={projectData.media} alt={projectData.title} />
              <CardBody>
                <CardTitle className="project-title"><h1>{projectData.title}</h1></CardTitle>
                <CardText className="project-description"><p>{projectData.description}</p></CardText>
                <a href={projectData.link} target="_blank" rel="noopener noreferrer">Go to website</a>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;