import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dahab Shakeel </span>
            <br />I am a Senior Cloud Engineer at{" "}
            <span className="purple">Sibel Health</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Card Tricks
            </li>
            <li className="about-activity">
              <ImPointRight /> Going On Long Walks
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Work so hard that one day your signature will be called an
            autograph."{" "}
          </p>
          <footer className="blockquote-footer">Narendra Singh Dhami</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
