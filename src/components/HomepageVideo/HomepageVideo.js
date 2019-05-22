import React, { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { settings } from "carbon-components";
import { breakpoints } from "@carbon/layout/es";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20";
import VideoInternal from "../VideoInternal/";

const { prefix } = settings;

class HomepageVideo extends Component {
  state = {
    loop: true
  };

  static defaultProps = {
    poster: "images/hero-video-poster.jpg",
    src: "videos/hero-video.mp4"
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const { loop } = this.state;

    if (window.matchMedia(`(max-width: ${breakpoints.md.width})`).matches) {
      if (loop) {
        this.setState({
          loop: false
        });
      }
    } else {
      if (!loop) {
        this.setState({
          loop: true
        });
      }
    }
  };

  render() {
    const { loop } = this.state;
    const { src, poster } = this.props;

    return (
      <div className={`${prefix}--homepage-video-container`}>
        <div className={`${prefix}--homepage-video-wrapper`}>
          <VideoInternal
            loop={loop}
            poster={poster}
            src={src}
            overlay={true}
            cornerPlayButton={true}>
          </VideoInternal>
        </div>
      </div>
    );
  }
}

HomepageVideo.propTypes = {
  // url to video
  src: PropTypes.string,

  // url to poster
  poster: PropTypes.string
};

export default HomepageVideo;