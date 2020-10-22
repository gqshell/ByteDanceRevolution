import React from "react";
import "./AllSongs.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class AllSongs extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }
  handlePlay(song) {
    console.log("song", song);
    let audio = document.getElementById(song);
    audio.play();
  }
  handleStop(song) {
    let audio = document.getElementById(song);
    audio.pause();
  }
  handleDance() {}
  render() {
    return (
      <div>
        <div className="all-songs">
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/61J54iWIHpL.jpg" />
            <h4>So Fresh!</h4>
            <button
              className="button-play"
              onClick={() => this.handlePlay("soFresh")}
            >
              Play Audio
            </button>
            <button
              className="button-pause"
              onClick={() => this.handleStop("soFresh")}
            >
              Pause Audio
            </button>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/en/6/62/This_Is_America_%28single_cover%29_2018.jpg" />
            <h4>This is America</h4>
            <button
              className="button-play"
              onClick={() => this.handlePlay("gambino")}
            >
              Play Audio
            </button>
            <button
              className="button-pause"
              onClick={() => this.handleStop("gambino")}
            >
              Pause Audio
            </button>
          </div>
          <div>
            <img src="https://i.pinimg.com/736x/94/35/ab/9435ab48eaaeba714574564a554fb5e4.jpg" />
            <h4>It’s Britney!</h4>
            <button
              className="button-play"
              onClick={() => this.handlePlay("itsBritney")}
            >
              Play Audio
            </button>
            <button
              className="button-pause"
              onClick={() => this.handleStop("itsBritney")}
            >
              Pause Audio
            </button>
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/23/2b/78/232b78fc67d8477780dad69137d7a650.jpg" />
            <h4>Black Pink</h4>
            <button
              className="button-play"
              onClick={() => this.handlePlay("blackPink")}
            >
              Play Audio
            </button>
            <button
              className="button-pause"
              onClick={() => this.handleStop("blackPink")}
            >
              Pause Audio
            </button>
          </div>
        </div>
        <div>
          <button className="webcam-button">
            <Link to={ROUTES.WEBCAM}>Dance</Link>
          </button>
        </div>
      </div>
    );
  }
}
export default AllSongs;