import React from 'react';
import './Education.css';

const educationData = [
  {
    school: 'Jawaharlal Nehru Technological University Hyderbad',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    // years: '2016 - 2020',
    gpa: '9.06/10',
    keyCourses: [
      'Algorithms and Data Structures',
      'Web Development',
      'Object-Oriented Software Engineering',
      'Database Systems',
    ],
    //description: 'Studied various aspects of computer science including algorithms, data structures, web development, and software engineering.'
  },
  {
    school: 'University of North Carolina at Charlotte',
    degree: 'Masters in Computer Science',
    // years: '2012 - 2016',
    gpa: '4.0/4.0',
    keyCourses: [
      'Software System Design and Implementation',
      'Applied Databases',
      'Big Data Analytics',
      'Survey of Programming Languages',
    ],
    description: 'Concentration in Data Science'
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="education-header p-3 pb-md-4 mx-auto text-center">
          {/* <h2 className="display-4 fw-normal">Education</h2> */}
          <h2 className="education-title">Education</h2>
        </div>
        <div className="row">
          {educationData.map((item, index) => (
            <div className="col-12 col-md-6 mb-4" key={index}>
              <div className="card education-card h-100">
                <div className="card-header py-3 education-card-header">
                  <h4 className="my-0 fw-normal">{item.school}</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.degree}</h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">{item.years}</h6> */}
                  <p className="card-text">{item.description}</p>
                  <p className="card-text"><strong>GPA:</strong> {item.gpa}</p>
                  <p className="card-text"><strong>Key Courses:</strong></p>
                  <div className="key-courses">
                    {item.keyCourses.map((course, courseIndex) => (
                      <span key={courseIndex} className="badge bg-secondary m-1 white-text">{course}</span>

                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
