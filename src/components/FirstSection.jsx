import sectionImage from "../assets/mobile/image-interactive.jpg";

const FirstSection = () => {
  return (
    <section className="first-section container">
      <img src={sectionImage} alt="section image" />
      <div className="first-section-text">
        <h2>the leader in interactive vr</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
