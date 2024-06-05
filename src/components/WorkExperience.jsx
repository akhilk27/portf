import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    id: 1,
    date: 'Jan 2024 - May 2024',
    title: 'Graduate Assistant',
    company: 'University of North Carolina at Charlotte',
    description: [
      'Assisted students in coursework covering machine learning algorithms, frameworks, and data analysis, providing hands-on support and guidance to enhance their understanding and application of key concepts.', 'Supported the professor in teaching and grading, including quality checking student code and projects, evaluating machine learning models, and providing detailed reports on performance and improvements needed.'
    ],
    tools: ['Python', 'Jupyter', 'Tableau', 'TensorFlow', 'Scikit-Learn', 'PyTorch', 'Keras', 'Pandas', 'NumPy']
  },
  {
    id: 2,
    date: 'Aug 2023 - Dec 2023',
    title: 'Software Engineer',
    company: 'TOPSYS IT, United States',
    description: [
      "Developed and maintained dynamic user interfaces using ReactJS, leveraging React hooks for state and lifecycle management to enhance user engagement.",
      "Implemented front-end screens and handled REST API calls with AJAX, processing JSON data responses for display and validation.",
      "Utilized MySQL for database management, working with file management and image libraries.",
      "Implemented backend Web API with Node.js and Express.js, establishing robust connectivity with MySQL.",
      "Wrote unit tests for Node.js backend services using Mocha, for reliable and optimized code performance."      
    ],
    tools: [
      "HTML5", "CSS3", "JavaScript", "ReactJS", "NodeJS", "ExpressJS", "NPM", "Redux", "REST", "AJAX", "JSON", "SQL", "MySQL", "Mocha"
    ]
  },
  {
    id: 3,
    date: 'May 2023 - Dec 2023',
    title: 'Data Science Engineer',
    company: 'Wi-Tronix, Bolingbrook, United States',
    description: [
      "Evaluated and implemented a new labeling tool, achieving a 40% reduction in data labeling time and a 20% increase in overall data processing efficiency, aligning with Wi-Tronix's business goals within established timelines",
      "Participated in design discussions for seamless data migration, architected annotation conversion, and developed migration scripts, ensuring data integrity.",
      "Engineered robust scripts for data extraction and management, significantly reducing manual data processing time and enhancing data retrieval and updates within databases using CSV sources.",
      "Assisted in training predictive models, contributing to a 15% increase in model accuracy through effective data preprocessing and feature engineering.",
      "Contributed to data cleaning and analysis efforts using Python libraries like Pandas, facilitating accurate decision-making, and created data visualizations using Tableau, leading to actionable insights and improved business strategies."
    ],
    tools: [
      'Python', 'Scikit-Learn', 'Numpy', 'Pandas', 'SQL', 'S3', 'GIT', 'MySQL', 'SQL Server Management Studio', 'Tableau', 'V7', 'SuperAnnotate'
    ]
  },
  {
    id: 4,
    date: 'Jan 2021 - Jul 2022',
    title: 'Software Engineer',
    company: 'Avco Consulting, Inc, Hyderabad, India',
    description: [
      "Crafted dynamic and interactive web pages using ReactJS and VueJS, significantly enhancing user experience and engagement while ensuring cross-browser compatibility and responsiveness.",
      "Developed a feature-rich web application with intuitive UI/UX design, integrating backend Web APIs with NodeJS and ExpressJS to build scalable RESTful services handling over 10,000 monthly users.",
      "Created RESTful microservices using Java, Spring Boot, and Spring Data JPA, ensuring efficient data processing and seamless integration.",
      "Performed unit testing on code components using Jest and Mocha, ensuring reliable and optimized code performance through efficient snapshot testing and a flexible, feature-rich test framework.",
      "Implemented CI/CD pipelines with GitHub Actions to automate testing and deployment, reducing manual intervention and accelerating release cycles."
    ],
    tools: [
      "Java", "HTML5", "CSS3", "JavaScript", "ReactJS", "React Hooks", "React Router", "VueJS", "SpringBoot", "JSON", "NPM", "Bootstrap", "Ajax", "NodeJS", "Visual Studio Code", "GIT"
    ]
  }
  // Add more experiences as needed
];

const WorkExperience = () => {
  return (
    <div section id="experience" className="work-experience-section">
      <h2 className="section-title">Work Experience</h2>
      {experiences.map((experience) => (
        <div className="work-experience-item" key={experience.id}>
          <div className="work-experience-date">
            <p>{experience.date}</p>
          </div>
          <div className="work-experience-details">
            <h3>
              {experience.title} -{' '}
              <span className="company-name">{experience.company}</span>
            </h3>
            <div className="work-experience-description">
              {experience.description.map((point, index) => (
                <p key={index}>• {point}</p>
              ))}
            </div>
            <div className="work-experience-tools">
              {experience.tools.map((tool, index) => (
                <span className="tool-badge" key={index}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
