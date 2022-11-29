import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ArticleTeaser({ article }) {
  const navigate = useNavigate();

  return (
    <div className="articleTeaser">
      <div
        onClick={() => {
          navigate(`/article/${article.id}`);
        }}
      >
        <Card style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Title>{article.id}. {article.title}</Card.Title>
            <Card.Text>
              {article.createdDate}
            </Card.Text>
            <Button variant="primary">View Article Page</Button>
          </Card.Body>
        </Card>

        {/* <Link to={`/article/${article.id}`}></Link> */}
      </div>
    </div>
  );
}
