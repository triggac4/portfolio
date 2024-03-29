import ResumeBody from "../component/resume-body";

const Resume = (props) => {
  let render = props.background ? (
    <section className="resume resume--background"></section>
  ) : (
    <section id="resume" className="resume">
      <h2 className="heading__2 section__heading margin-bottom-small">
        resume
      </h2>
      <div className="resume__grid">
        <ResumeBody heading="summary">
          <h4 className="heading__4 margin-bottom-small">
            Offokansi Kenechukwu
          </h4>
          <p>
            innovative deadline and goal driven software developer with 3 years
            experience developing mobile applications with flutter and a 2 years
            experience in front end web development able to see through a
            project from start to finish.
          </p>
        </ResumeBody>

        <div className="resume__professional-experience">
          <ResumeBody heading="professional experience">
            <h4 className="heading__4 margin-bottom-small">
              School Internship
            </h4>
            <h3 className="heading__4 heading__4--resume">2013-2014</h3>
            <p className="margin-bottom-mini">
              6 months internship served in Digital Bridge Institute F.C.T abuja
            </p>
            <ul style={{ padding: "0 0 1rem 0" }}>
              <li>
                made sure staffs software where up to date and fixed software
                errors and change system hardware when the need arises
              </li>
              <li>
                Ensured all equipments used for training of customers where
                available and each lecture went on smoothly and customers needs
                were met
              </li>
            </ul>
          </ResumeBody>
          <ResumeBody>
            <h4 className="heading__4 margin-bottom-small">HNG</h4>
            <h3 className="heading__4 heading__4--resume">2021</h3>
            <p style={{ padding: "0 0 1rem 0" }}>
              participated in HNG internship which started with 12000 candidate
              and ended with 312 people in which i was privilege to be part of
              the finalist
            </p>
          </ResumeBody>
          <ResumeBody>
            <h4 className="heading__4 margin-bottom-small">El Academy</h4>
            <h3 className="heading__4 heading__4--resume">2021-2022</h3>
            <p style={{ padding: "0 0 1rem 0" }}>
              Python and Javascript resources person tutored students on python
              language and javascript and guided them into a technology career
            </p>
          </ResumeBody>
          <ResumeBody>
            <h4 className="heading__4 margin-bottom-small">ThriveAgric</h4>
            <h3 className="heading__4 heading__4--resume">2022-Present</h3>
            <p style={{ padding: "0 0 1rem 0" }}>
              Software developer in thriveagric part of the team to create there
              company website and also manage and create new technology for the
              company which is being used by over 500,000 farmers
            </p>
          </ResumeBody>
          <ResumeBody>
            <h4 className="heading__4 margin-bottom-small">Freelancer</h4>
            <h3 className="heading__4 heading__4--resume">2020-present</h3>
            <p>
              freelance projects to build up experience and put what i've learnt
              to work
            </p>
          </ResumeBody>
        </div>
        <ResumeBody heading="education">
          <h4 className="heading__4 margin-bottom-small">
            Bachelor of science: computer Science
          </h4>
          <h4 className="heading__4 heading__4--resume">2015-2020</h4>
          <p>
            studied computer science in Federal University Oye-ekiti with second
            class honours lower division
          </p>
        </ResumeBody>
      </div>
    </section>
  );

  return render;
};
export default Resume;
