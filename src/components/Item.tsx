import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { items } from "../data";
import {
  contentBlockVariants,
  expandedVariants,
  overlayVariants,
} from "../variants";

type Props = {
  id: number;
};

export function Item({ id }: Props) {
  const selectedItem = items.find((item) => item.id === id);

  const AnimatedContentBlock = ({
    id,
    children,
  }: {
    id: number;
    children: JSX.Element[];
  }) => (
    <motion.li key={`expaned-${id}`} variants={contentBlockVariants}>
      {children}
    </motion.li>
  );
  return (
    <>
      <motion.div
        variants={overlayVariants}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="item-content-container open">
        <motion.div
          className="item-content content"
          layoutId={`item-container-${id}`}
          variants={expandedVariants}
          animate="active"
          initial="inactive"
          exit="exit"
        >
          <motion.ul animate>
            <motion.li>
              <motion.div className="top" layoutId={`title-content-${id}`}>
                <span className="title">{selectedItem?.title}</span>
                <span className="location">{selectedItem?.date}</span>
              </motion.div>
              <motion.p className="description" layoutId={`description-${id}`}>
                {selectedItem?.description}
              </motion.p>
            </motion.li>
            {selectedItem?.detail.map((item, index) => {
              return (
                <AnimatedContentBlock
                  id={selectedItem.id}
                  key={`${item.description}-${index}`}
                >
                  <motion.div className="top">
                    <span className="title">{selectedItem.title}</span>
                    <span className="location">{item.date}</span>
                  </motion.div>
                  <p className="description">{item.description}</p>
                </AnimatedContentBlock>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </>
  );
}
