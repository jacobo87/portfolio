import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
// import BlogCard from "./BlogsCards";
import Particle from '../Particle';

const webHelp =
  'https://user-images.githubusercontent.com/58173221/146309485-83fe8219-c54b-4242-8ab9-16ec2e46ded2.png';
const webCinema =
  'https://github.com/jacobo87/firts-project-ga/raw/main/assets/images/caratula.png';

const webPictograms =
  'https://github.com/Lyanna666/proyecto-final-GA/blob/main/Pictogramas/public/Resources/1.Home.jpg?raw=true';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webHelp}
              //isBlog={false}
              title="Project ASIR"
              description="The project I want to present focuses on a Helpdesk support website. My objective is to apply the knowledge acquired throughout the course by implementing the different infrastructures necessary to set up the services required for a technical support website. My interest in this type of website comes from my own work experience as a Helpdesk, in which I have been able to work with ticketing and customer support systems. I have used AWS and dockers."
              link="https://github.com/jacobo87/Proyecto_ASIR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webPictograms}
              //isBlog={false}
              title="Final Project Pictograms"
              description="Final project of the front-end developer course, where we created a website for people with speech difficulties. "
              link="https://github.com/Lyanna666/proyecto-final-GA/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webCinema}
              //isBlog={false}
              title="firts project GA"
              description="Web application for cinema, made with HTML, CSS and SASS."
              link="https://github.com/jacobo87/firts-project-ga"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
