import React from "react";
import { items } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  id: number;
  title: string;
  description: string;
  date: string;
  detail: {
    description: string;
    date: string;
  }[];
};

function Item({ id, title, description, date, detail }: Props) {
  return (
    <motion.li layoutId={`item-container-${id}`}>
      <Link to={`${id}`} className="content">
        <motion.div>
          <motion.div className="top" layoutId={`title-content-${id}`}>
            <span className="title">{title}</span>
            <span className="location">{date}</span>
          </motion.div>
          <motion.p className="description" layoutId={`description-${id}`}>
            {description}
          </motion.p>
          <p className="more">{`${detail.length}건 더보기`}</p>
        </motion.div>
      </Link>
    </motion.li>
  );
}

export function List() {
  return (
    <ul>
      {items.map((card) => (
        <Item key={card.id} {...card} />
      ))}
    </ul>
  );
}
