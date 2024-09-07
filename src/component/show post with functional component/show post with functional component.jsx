import React, { useState } from "react";
import { Card, Row, Col } from "antd";

const posts = [
  { name: "Lily Thompson", title: "UX/UI Designer" },
  { name: "William Johnson", title: "Data Scientist" },
  { name: "Olivia White", title: "Cybersecurity Analyst" },
  { name: "Ethan Carter", title: "Full Stack Developer" },
];

const PostList = () => {
  const [postList] = useState(posts);

  return (
    <div className="content p-4 mt-2" style={{ color: "#fff" }}>
      <section id="axios" className="container">
        <Row justify="center" gutter={[16, 16]}>
          {postList.map((post, index) => (
            <Col key={index} xs={24} md={12} lg={6} className="my-2">
              <Card
                className="item rounded-2"
                style={{
                  backgroundColor: "#444",
                  color: "#fff",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                <h4>{post.name}</h4>
                <p className="mb-0 mt-2">my name is {post.name}</p>
                <p className="mb-0 mt-2">{post.title}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default PostList;
