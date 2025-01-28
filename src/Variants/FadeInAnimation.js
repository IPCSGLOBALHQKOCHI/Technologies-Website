export const parentVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};

export const childVariant = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      delay: 1,
      // ease: "easeOut"
    },
  },
};
