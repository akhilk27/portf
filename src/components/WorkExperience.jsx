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
    id: 3,
    date: 'Aug 2019 - Jul 2022',
    title: 'Software Engineer',
    company: 'Smart-M Technovations Pvt Ltd, Bangalore, India',
    description: [
    "Collaborated with clients and stakeholders to gather detailed project requirements and defined the scope of work.",
    "Developed a feature-rich web application with an intuitive UI/UX design, allowing users to register/login, browse the website, and utilize functionalities based on their access privileges.",
    "Crafted dynamic and interactive web pages using ReactJS and VueJS, enhancing user experience and engagement while ensuring cross-browser compatibility and responsiveness.",
    "Made extensive use of JavaScript libraries/frameworks, including ReactJS, Bootstrap, and Ajax, to build single page apps (SPA) and scalable, reusable web components.",
    "Developed scalable RESTful APIs using Node.js, handling over 10,000 monthly users and ensuring efficient data processing.",
    "Implemented AJAX calls for asynchronous communication, improving the responsiveness of the application.",
    "Utilized JSON for data interchange between client and server, ensuring seamless data validation and display.",
    "Integrated front-end components with back-end services like AWS Lambda and third-party APIs, including payment gateways and social media logins, ensuring smooth data flow and enhanced application functionality.",
    "Demonstrated deep understanding of JavaScript concepts and libraries, including Objects, Closures, Callbacks, and DOM manipulation, contributing to efficient and optimized code development.",
    "Performed unit testing on code components using Jest and Mocha, leveraging Jest's efficient snapshot testing and Mocha's flexible, feature-rich test framework to ensure reliable and optimized code performance.",
    "Implemented CI/CD pipelines with GitHub Actions to automate testing and deployment, reducing manual intervention and accelerating release cycles.",
    "Fixed bugs and resolved issues reported by users or identified during testing, constantly improving the application.",
    "Utilized Git for maintaining code versions and consistently maintained coding standards to ensure compliance with software development processes.",
    "Gathered and reflected on user feedback through surveys, using analytics and insights to drive better results."
    ],
    tools: [
      'Python', 'Scikit-Learn', 'Numpy', 'Pandas', 'SQL', 'S3', 'GIT', 'MySQL', 'SQL Server Management Studio', 'Tableau', 'V7', 'SuperAnnotate'
    ]
  },
  {
    id: 4,
    date: 'Aug 2016 - Jul 2019',
    title: 'Junior Software Engineer',
    company: 'Smart-M Technovations Pvt Ltd, Bangalore, India',
    description: [
  "Associated with clients to learn and define project scope that aligns with the business objectives.",
  "Developed and maintained dynamic user interfaces using ReactJS, employing React hooks for state management and component lifecycle management, generating better user engagement.",
  "Implemented multiple screens for the client project that makes use of ReactJS, along with predefined components from NPM and Redux libraries to enhance the functionalities of the application.",
  "Utilized HTML, CSS, AJAX controls, and JSON for web page design and development, handling REST API calls with AJAX and processing JSON data responses to ensure seamless data display and validation.",
  "Added TypeScript to React components and implemented unit tests to decrease potential bugs, contributing to improved code quality and reliability.",
  "Utilized MongoDB for database management and optimized database transactions to improve application performance.",
  "Created and maintained stored procedures and views, improving query efficiency.",
  "Leveraged Java for backend development and utilized Object-Oriented Programming (OOP) concepts to develop reusable UI components, improving development efficiency and code maintainability.",
  "Collaborated with Quality Analysts to fix bugs during Quality Assurance and User Acceptance Testing, ensuring the delivery of high-quality software products.",
  "Integrated front-end and back-end systems using Jenkins for continuous integration and deployment, ensuring smooth integration and automated deployment processes.",
  "Actively participated in an Agile (Scrum) Development Team, following best practices such as code modularization, unit testing, UI validations, and peer reviews, ensuring project success and timely delivery.",
  "Demonstrated expertise in bug tracking tool JIRA and code integration/deployment tool Jenkins, ensuring efficient project management and streamlined development processes."
    ],
    tools: [
      "Java", "HTML", "Spring Boot", "Redux", "ReactJS", "MongoDB", "GitHub", "Jenkins", "JIRA"
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
