import { RiMovie2Line } from "react-icons/ri";
import { RiNetflixLine } from "react-icons/ri";
import { RiGamepadLine } from "react-icons/ri";
import { RiMusic2Line } from "react-icons/ri";

// eslint-disable-next-line no-unused-vars
function MediaCard({ title, description, Icon }) {
  return (
    <div className={`media-card ${title.toLowerCase()}`}>
      <Icon className={`media-icon ${title.toLowerCase()}-icon`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="gradient-bg">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
      </div>

      <div className="hero-content">
        <h1>Cultura.app</h1>
        <p>
          Log your watched movies, series, played games, and listened music all in one place. Discover new content and
          track your progress.
        </p>

        <div className="cta-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>

        <div className="media-cards">
          <MediaCard title="Movies" description="Log and rate what you watch" Icon={RiMovie2Line} />
          <MediaCard title="Series" description="Track episodes and seasons" Icon={RiNetflixLine} />
          <MediaCard title="Games" description="Record your gaming sessions" Icon={RiGamepadLine} />
          <MediaCard title="Music" description="Save your favorite tracks" Icon={RiMusic2Line} />
        </div>
      </div>
    </section>
  );
}
