import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Reading",
    description: ""
  },
  {
    _id: uuid(),
    categoryName: "Writing",
    description:
      "",
  },
  {
    _id: uuid(),
    categoryName: "Speaking",
    description:
      "",
  },
  {
    _id: uuid(),
    categoryName: "Listening",
    description:
      "",
  }
];
