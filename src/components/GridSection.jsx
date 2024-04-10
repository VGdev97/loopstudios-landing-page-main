import { gridMobileData } from "../constants/data";
import { gridDesktopData } from "../constants/data";

const GridSection = () => {
  return (
    <section className="grid-section container">
      {/* Grid Dekstop Header */}
      <div className="grid-section-header">
        <h2>our creations</h2>
        <div className="button">
          <button>see all</button>
        </div>
      </div>

      {/* Grid Mobile Header */}
      <h3 className="grid-mobile-header">our creations</h3>
      {/* Mobile */}
      <div className="grid-section-main">
        {gridMobileData.map((mobileData) => (
          <div
            key={mobileData.id}
            className="grid-item has-background"
            style={{ backgroundImage: `url(${mobileData.image})` }}
          >
            <h3>
              {mobileData.text[0]}
              <br /> {mobileData.text[1]}
            </h3>
          </div>
        ))}
        <div className="button">
          <button>see all</button>
        </div>
      </div>
      {/* Desktop */}
      <div className="grid-section-desktop">
        {gridDesktopData.map((mobileData) => (
          <div
            key={mobileData.id}
            className="grid-item has-background"
            style={{ backgroundImage: `url(${mobileData.image})` }}
          >
            <h3>
              {mobileData.text[0]}
              <br /> {mobileData.text[1]}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;
