import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "DSA",
    description:
      "The term Data Structure refers to the storage and organization of data. The efficiency of software development depends on the choice of an appropriate data structure and algorithm.",
  },
  {
    _id: uuid(),
    categoryName: "Frontend Development",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
  },
  {
    _id: uuid(),
    categoryName: "Backend Development",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  }
];
