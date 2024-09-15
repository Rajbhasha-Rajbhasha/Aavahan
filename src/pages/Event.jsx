import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Event.css";
import nukkadimage from "../assets/events/nukkad.png";
import andhamod from "../assets/events/images.png";
import treasurehunt from "../assets/events/treasure.jpeg";
import vaachan from "../assets/events/vaachan.jpg";

function Event() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleMouseMove = (e) => {
    const textbox = e.currentTarget.querySelector(".textbox");
    const rect = textbox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    textbox.style.setProperty("--rotateX", `${rotateX}deg`);
    textbox.style.setProperty("--rotateY", `${rotateY}deg`);
    textbox.classList.add("tilt");
  };

  const handleMouseLeave = (e) => {
    const textbox = e.currentTarget.querySelector(".textbox");
    textbox.classList.remove("tilt");
  };

  const handleClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <>
      <div className="main">
        <h1>Events</h1>
        {/* <h1>शब्दांगन</h1> */}
        <h1>शब्दांगन</h1>

        <div className="eventline">
          <div
            className="container left-container"
            onClick={() => handleClick("nukkad")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={nukkadimage} alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">फ़ॉर्म लिंक</button>
                  <button className="event-btn">और पढ़ें</button>
                </div>
              </div>

              <p>
                कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो
                भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है।
              </p>
              <div className="bottom">
                <div className="venue">स्थान</div>
              </div>
              <div className="name">विक्रम साराभाई हॉल</div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div
            className="container right-container"
            onClick={() => handleClick("andha")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={andhamod} alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">फ़ॉर्म लिंक</button>
                  <button className="event-btn">और पढ़ें</button>
                </div>
              </div>

              <p>
                कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो
                भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है।
              </p>
              <div className="bottom">
                <div className="venue">स्थान</div>
              </div>
              <div className="name">विक्रम साराभाई हॉल</div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div
            className="container left-container"
            onClick={() => handleClick("treasure")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={treasurehunt} alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">फ़ॉर्म लिंक</button>
                  <button className="event-btn">और पढ़ें</button>
                </div>
              </div>

              <p>
                कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो
                भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है।
              </p>
              <div className="bottom">
                <div className="venue">स्थान</div>
              </div>
              <div className="name">विक्रम साराभाई हॉल</div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd head---------------- */}
      <div className="main">
        <h1>अभिव्यक्ति</h1>

        <div className="eventline">
          <div
            className="container left-container"
            onClick={() => handleClick("nukkad")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={nukkadimage} alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">फ़ॉर्म लिंक</button>
                  <button className="event-btn">और पढ़ें</button>
                </div>
              </div>

              <p>
                कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो
                भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है।
              </p>
              <div className="bottom">
                <div className="venue">स्थान</div>
              </div>
              <div className="name">विक्रम साराभाई हॉल</div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div
            className="container right-container"
            onClick={() => handleClick("andha")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={andhamod} alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">फ़ॉर्म लिंक</button>
                  <button className="event-btn">और पढ़ें</button>
                </div>
              </div>

              <p>
                कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो
                भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है।
              </p>
              <div className="bottom">
                <div className="venue">स्थान</div>
              </div>
              <div className="name">विक्रम साराभाई हॉल</div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div
            className="container left-container"
            onClick={() => handleClick("treasure")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={treasurehunt} alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">फ़ॉर्म लिंक</button>
                  <button className="event-btn">और पढ़ें</button>
                </div>
              </div>

              <p>
                कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो
                भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है।
              </p>
              <div className="bottom">
                <div className="venue">स्थान</div>
              </div>
              <div className="name">विक्रम साराभाई हॉल</div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd head---------------- */}

      <div className="main">
        <h1>चक्रव्यूह</h1>

        <div className="eventline">
          <div
            className="container left-container"
            onClick={() => handleClick("nukkad")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={nukkadimage} alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">फ़ॉर्म लिंक</button>
                  <button className="event-btn">और पढ़ें</button>
                </div>
              </div>

              <p>
                कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो
                भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है।
              </p>
              <div className="bottom">
                <div className="venue">स्थान</div>
              </div>
              <div className="name">विक्रम साराभाई हॉल</div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div
            className="container right-container"
            onClick={() => handleClick("andha")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={andhamod} alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">फ़ॉर्म लिंक</button>
                  <button className="event-btn">और पढ़ें</button>
                </div>
              </div>

              <p>
                कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो
                भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है।
              </p>
              <div className="bottom">
                <div className="venue">स्थान</div>
              </div>
              <div className="name">विक्रम साराभाई हॉल</div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div
            className="container left-container"
            onClick={() => handleClick("treasure")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={treasurehunt} alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">फ़ॉर्म लिंक</button>
                  <button className="event-btn">और पढ़ें</button>
                </div>
              </div>

              <p>
                कविता वाचन में कवि अपनी कविता को आवाज़ देकर प्रस्तुत करता है, जो
                भावनाओं और विचारों को श्रोताओं तक पहुँचाने का प्रभावी तरीका है।
              </p>
              <div className="bottom">
                <div className="venue">स्थान</div>
              </div>
              <div className="name">विक्रम साराभाई हॉल</div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
