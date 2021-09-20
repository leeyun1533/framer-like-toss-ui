export const expandedVariants = {
  active: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const contentBlockVariants = {
  inactive: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

export const overlayVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.5,
    },
  },
};
