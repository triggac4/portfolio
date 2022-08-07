import SkillBar from "../component/skillBar";

const skill = (props) => {
  let render = props.background ? (
    <section className="skill skill--background"></section>
  ) : (
    <section id="skill" className="skill skill--content">
      <h2 className="section__heading heading__2 ">skills</h2>
      <div data-aos={"fade-left"} className="skill__skillBar">
        <SkillBar name="html" percentage={80} />
        <SkillBar name="css" percentage={85} />
        <SkillBar name="javascript" percentage={90} />
        <SkillBar name="dart" percentage={75} />
        <SkillBar name="flutter" percentage={75} />
        <SkillBar name="firebase" percentage={55} />
        <SkillBar name="react" percentage={85} />
        <SkillBar name="redux" percentage={90} />
        <SkillBar name="express" percentage={80} />
        <SkillBar name="node" percentage={75} />
        <SkillBar name="mongoDb" percentage={65} />

        <SkillBar name="team player" percentage={95} />
      </div>
    </section>
  );

  return render;
};

export default skill;
