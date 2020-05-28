import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const movie = {
  title: "Love",
  vote_average: 5.5,
  image:
    "https://cdn.collider.com/wp-content/uploads/2011/01/love-movie-poster.jpg",
  overview:
    "A man spends years alone on a space station orbiting Earth after losing communication with Houston/Earth. Time is spent on maintenance, exercise, watching old messages and reading a journal by a soldier in the American civil war 1864"
};
function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
}
//function MovieItem(props) {
//  const { data: {title, vote_average, image} } = props;
//  return (
//   <div>
//      <Image src = {image} alt = {title} />
//      <p>{title}</p>
//      <p>{vote_average}</p>

//    </div>
//  );
//}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }
  toggleOverview = () => {
    console.log("show");
    this.setState({ show: !this.state.show });
  };
  handleLike = () => {
    console.log("like");
    this.setState({ like: !this.state.like });
  };
  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn-blue" : ""}
          >
            Like
          </button>
        </div>
        {this.state.show === true ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
