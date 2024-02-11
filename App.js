// App.js
import React from 'react';
import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rukvith Reddy Lingala</h1>
        <p>Email: rukvithr85@gmail.com</p>
        <p>Email: rlingala@gmu.edu</p>
        <p>Address: 11124 Church Street, Fairfax, Virginia, 22030</p>
      </header>
      <section className="work-experience">
        <h2>Work Experience</h2>
        <div className="experience-item">
          <h3>Machine Learning Intern</h3>
          <p>Company: Codemania</p>
          <ul>
            <li>Successfully implemented tasks involving California Housing Price Prediction and the Digit Recognizer project,demonstrating strong machine learning and data science skills.</li>
            <li>Gained valuable experience working on real-world machine learning problems and developing a deep understanding of the California housing market and the field of digit recognition</li>
          </ul>
          <h3>Cybersecurity Engineering Virtual Internship</h3>
          <p>Company: SAP in collaboration with Forage</p>
          <ul>
            <li>Accomplished tasks related to key protection, phishing prevention, system strengthening, and conducting final analysis and recommendations, demonstrating cybersecurity skills</li>
            <li>Gained valuable experience working on real-world cybersecurity problems and developing a deep understanding of key protection, phishing prevention, and system-strengthening techniques.</li>
          </ul>
          <h3>Cybersecurity Management Virtual Internship</h3>
          <p>Company:ANZ in collaboration with Forage</p>
          <ul>
            <li> Applied investigative skills to social engineering and digital investigation cases, successfully resolving complex cybersecurity incidents.</li>
            <li>Gained valuable experience working on real-world cybersecurity challenges and developing expertise in social engineering and digital investigation techniques.</li>
          </ul>
        </div>
      </section>
      <section className="personal-projects">
        <h2>Personal Projects</h2>
        <div className="project-item">
          <h3>Virtual Keyboard</h3>
          <p>LED THE DEVELOPMENT OF AN INNOVATIVE AI-DRIVEN VIRTUAL KEYBOARD, LEVERAGING OPENCV AND MEDIAPIPE. THIS PROJECT AIMED TO ENHANCE USER ACCESSIBILITY AND TYPING EFFICIENCY ACROSS VARIOUS DIGITAL OUTPUT PLATFORMS.</p>
          <p>Technologies used: Python,OpenCV,Mediapipe,Pynput,Imutils,Numpy,Protobuf</p>
          <a href="https://github.com/RUKVITHREDDY-1/Virtual-Keyboard">View project</a>
          <h3>California Housing Price Prediction</h3>
          <p>DEVELOPED AND IMPLEMENTED A CUTTING-EDGE MACHINE LEARNING MODEL TO ACCURATELY PREDICT HOUSING PRICES WITHIN CALIFORNIA. THIS PROJECT AIMED TO PROVIDE VALUABLE INSIGHTS TO REAL ESTATE PROFESSIONALS AND INVESTORS, FACILITATING DATA-DRIVEN DECISION-MAKING.</p>
          <p>Technologies used: Python,Pandas,Numpy,Jupyter Notebook.</p>
          <a href="https://github.com/RUKVITHREDDY-1/California-Housing-Price-Prediction">View project</a>
        </div>
        <section className="other-projects">
         <button onClick={() => window.location.href = 'https://github.com/RUKVITHREDDY-1'}>
           View Other Projects
         </button>
        </section>
      </section>
      <section className="education">
        <h2>Education</h2>
        <p>University: George Mason University</p>
        <p>Major: Data Analytics Engineering</p>
        <p>GPA: 3.6</p>
        <p>Dates: January 2023 - Ongoing</p>

        <p>University: Jawaharlal Nehru Technological University</p>
        <p>Major: Computer Science Engineering</p>
        <p>GPA: 2.75</p>
        <p>Dates: July 2018 - August 2022</p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>R</li>
          <li>Data analysis,Processing,Visualization and Decision Making</li>
          <li>Python</li> 
          <li>JavaScript</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>MS Office</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
