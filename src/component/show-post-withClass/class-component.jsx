import React, { Component } from "react";
import { List, Card, Typography, Image } from "antd";
import img1 from "../../img/01.jpg";
import img2 from "../../img/02.jpg";
import img3 from "../../img/03.jpg";
import img4 from "../../img/04.jpg";

const { Title, Paragraph } = Typography;

const posts = [
  {
    id: 1,
    title: "Butterfly",
    content:
      "Butterflies are beautiful insects with large, often brightly colored wings.",
    image: img1,
  },
  {
    id: 2,
    title: "Beach",
    content:
      "Beaches are natural landforms along the shoreline of an ocean, sea, lake, or river.",
    image: img2,
  },
  {
    id: 3,
    title: "Flower",
    content:
      "Flowers are nature's delicate gems, blooming in vibrant hues and spreading joy with their sweet fragrance.",
    image: img3,
  },
  {
    id: 4,
    title: "Eagle",
    content:
      "Eagles are large birds of prey with powerful beaks and keen eyesight.",
    image: img4,
  },
];

class PostList extends Component {
  render() {
    const { onSelectPost } = this.props;
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={posts}
        renderItem={(post) => (
          <List.Item>
            <Card hoverable onClick={() => onSelectPost(post)}>
              <Card.Meta title={post.title} />
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

class PostDetails extends Component {
  render() {
    const { post } = this.props;
    return (
      <Card className="post-wrapper" style={{ marginTop: 16 }}>
        <Image style={{ width: "300px" }} src={post.image} alt={post.title} />
        <Title level={3} className="text-center">
          {post.title}
        </Title>
        <Paragraph className="text-center">{post.content}</Paragraph>
        <div className="comments-wrap">
          <Paragraph className="comment">
            Flowers are more than just blooms; they are nature's exquisite
            artwork, painting the world with vibrant hues and delicate beauty.
          </Paragraph>
          <Paragraph className="comment">
            The enchanting fragrance of a flower not only pleases the senses but
            also uplifts the spirit, filling the heart with joy and serenity.
          </Paragraph>
          <Paragraph className="comment">
            Each petal of a flower tells a story of resilience and grace,
            standing as a testament to the wonders of nature's creation.
          </Paragraph>
        </div>
      </Card>
    );
  }
}

class App extends Component {
  state = {
    selectedPost: null,
  };

  setSelectedPost = (post) => {
    this.setState({ selectedPost: post });
  };

  render() {
    const { selectedPost } = this.state;
    return (
      <div className="container">
        <PostList onSelectPost={this.setSelectedPost} />
        {selectedPost && <PostDetails post={selectedPost} />}
      </div>
    );
  }
}

export default App;
