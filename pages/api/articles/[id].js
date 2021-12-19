import { articles } from "../../../data";
export default function handler({ query: { id } }, res) {
  const filter = articles.filter((article) => id === article.id);

  if (filter.length > 0) {
    res.status(200).json(filter[0]);
  } else {
    res
      .status(400)
      .json({ message: `article with the id of ${id} is not found` });
  }
}
