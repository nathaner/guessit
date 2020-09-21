import React from "react";
import Layout from "./Layout";
import Sets from "./common/Sets";
import CategoryHeading from "./common/CategoryHeading";

const questions = [
  { _id: 1, title: "English basics", author: "Sarah", href: "/questions/1" },
  { _id: 2, title: "Verbs", author: "Sarah", href: "/questions/1" },
  { _id: 3, title: "Animals", author: "Didier", href: "/questions/1" },
  { _id: 4, title: "Computers", author: "Sarah", href: "/questions/1" },
  { _id: 5, title: "Social networks", author: "Nathan", href: "/questions/1" },
  { _id: 6, title: "School", author: "Mathilde", href: "/questions/1" },
  { _id: 7, title: "Food", author: "Sarah", href: "/questions/1" },
];

export default function Questions() {
  return (
    <Layout>
      <CategoryHeading newHref="/questions/new">Questions</CategoryHeading>
      <Sets data={questions} />
    </Layout>
  );
}
