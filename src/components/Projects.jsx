import React from 'react';
import Slider from 'react-slick';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Event Hub',
    description: ["Employed React to create an engaging user interface, enabling users to effortlessly create, join, and manage events.",
      "Developed a dynamic backend using Node.js and Express.js for efficient handling of multiple user interactions.",
      "Integrated PostgreSQL for data management, for swift access to information and enhanced system performance."
    ],
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js", "Npm", "SQL", "PostgreSQL", "Git"],
    image: '/p2.png',
  },
  {
    id: 2,
    title: 'Real-time Weather Report',
    description: ["Developed a user-friendly Weather Dashboard, encompassing a city search functionality and real-time weather updates.",
    "Leveraged AJAX for efficient asynchronous data fetching, ensuring seamless user interactions.",
    "Utilized weather APIs to guarantee real-time data accuracy and intuitive insights, with a strong emphasis on data clarity and user experience."
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Ajax", "REST APIs"],
    image: '/p3.png',
  },
  {
    id: 3,
    title: 'Plant Disease Detection',
    description: ["Trained a VGG-19 model with 55,000 images for classifying diseases in plant leaves with 98% accuracy.", "Built a dataset containing 42 plant diseases along with their remedies using JavaScript.", "Developed GUI using PyQt5 for allowing users to interact with the model."],
    technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-Learn", "Keras", "Matplotlib", "JavaScript", "PyQt5"],
    image: '/p3.png',
  },
  {
    id: 4,
    title: 'Real Time Face Mask Detection System',
    description: ["Trained a CNN model to perform binary classification for detecting face masks in people captured in real-time using CV2.", "Engineered and tested the model with 11,000 images to obtain an accuracy of 99%.", "Imported SMTP library for instantly sending alerts via Email."],
    technologies: ["Python", "PyTorch", "OpenCV", "Scikit-Learn", "Keras", "Matplotlib", "SMTP"],
    image: '/p3.png',
  },
  // Add more projects as needed
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className="arrow arrow-right">→</div>,
    prevArrow: <div className="arrow arrow-left">←</div>,
  };

  return (
    <div section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <Slider {...settings} className="project-carousel">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            {/* <div className="project-image-container col-lg-6 col-sm-12">
              <img src={project.image} alt={project.title} className="project-image" />
            </div> */}
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              {project.description.map((sentence, index) => (
                <p key={index}>• {sentence}</p>
              ))}
              {/* Styling for the technologies box */}
              <div className="technologies-box">
                <h6>Technologies Used:</h6>
                <ul>
                  {project.technologies.map((technology, index) => (
                  <div className="technology-item" key={index}>
                  {technology}
                </div>
              ))}
              </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
