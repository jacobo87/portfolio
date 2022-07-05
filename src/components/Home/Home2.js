import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              Since I was a kid, I have loved the military, which I have been in
              for 16 years, and computer science, my current job.
              <br />
              <br />I have learned programming languages including
              <i>
                <b className="purple"> JavaScript</b>
              </i>
              , and SQL dialects including
              <i>
                <b className="purple">
                  {' '}
                  SQL Server, Oracle PL/SQL, PostgreSQL, and MySQL
                </b>
                .
              </i>
              <br />
              <br />I am currently a{' '}
              <i>
                <b className="purple">SQL Server Administrator</b>, but I also
                love web development, especially with{' '}
                <b className="purple">React</b>.
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jacobo87"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jacobo-azmani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
