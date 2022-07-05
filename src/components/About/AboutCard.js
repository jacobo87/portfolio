import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi, I'm <span className="purple">Jacobo Azmani </span>
            from <span className="purple">Jaén</span>, current living in{' '}
            <span className="purple">Granada, Spain</span>.
            <br />I have studied network systems administrator in Almería and
            Front-End developer at{' '}
            <a
              href="https://generalassemb.ly/"
              target="_blank"
              rel="noreferrer"
            >
              General Assembly
            </a>
            .
            <br />
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Walking with my dog 🐕‍🦺
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
            "I've always been passionate about computers and now I can't live
            without vscode and Prettier's colours."{' '}
          </p>
          <footer className="blockquote-footer">Jacobo Azmani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
