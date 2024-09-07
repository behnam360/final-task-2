import React, { Component } from "react";
import axios from "axios";
import { Card, Spin } from "antd";
import img1 from "../img/01.jpg";
import img2 from "../img/02.jpg";
import img3 from "../img/03.jpg";
import img4 from "../img/04.jpg";
const { Meta } = Card;

class App extends Component {
  state = {
    data: null,
    loading: true,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => {
        setTimeout(() => {
          this.setState({ data: response.data, loading: false });
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { data, loading } = this.state;
    const images = [img1, img2, img3, img4];

    if (loading) {
      return <Spin tip="Loading..." />;
    }

    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {images.map((img, index) => (
          <Card
            key={index}
            hoverable
            style={{
              width: 300,
              margin: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
            cover={<img style={{ height: "200px" }} alt={`example-${index}`} src={img} />}
          >
            <Meta title={data.title} description={data.body} />
          </Card>
        ))}
      </div>
    );
  }
}

export default App;
