export const parentVariant ={
  hidden: {
    opacity: 0,
    y: 500, 
  },
  show: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 2,
    },
  },
}
export const childVariant = {
  hidden: { opacity: 0, y: 300 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};
