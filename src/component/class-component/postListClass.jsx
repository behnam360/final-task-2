import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  BookOutlined,
} from "@ant-design/icons";

const posts = [
  { name: "Lily Thompson", title: "UX/UI Designer" },
  { name: "William Johnson", title: "Data Scientist" },
  { name: "Olivia White", title: "Cybersecurity Analyst" },
  { name: "Ethan Carter", title: "Full Stack Developer" },
];

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: posts,
    };
  }

  render() {
    const { postList } = this.state;

    return (
      <div className="content p-4 mt-2" style={{ color: "#fff" }}>
        <section id="normal2" className="container">
          <Row justify="center" gutter={[16, 16]}>
            {postList.map((post, index) => (
              <Col key={index} xs={24} md={12} lg={6} className="my-2">
                <Card
                  className="person rounded-2"
                  style={{
                    backgroundColor: "#444",
                    color: "#fff",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  <h4 className="title">
                    <UserOutlined
                      className="icon mx-2 fs-5"
                      aria-hidden="true"
                    />
                    {post.name}
                  </h4>
                  <p className="description mb-0 mt-2">
                    <InfoCircleOutlined
                      className="icon mx-2 fs-5"
                      aria-hidden="true"
                    />
                    my name is {post.name}
                  </p>
                  <p className="job mb-0 mt-2">
                    <BookOutlined
                      className="icon mx-2 fs-5"
                      aria-hidden="true"
                    />
                    {post.title}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    );
  }
}

export default PostList;
