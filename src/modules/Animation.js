export const Animation = ({ items, delay, origin }) =>
  items.forEach((item, index) =>
    ScrollReveal().reveal(item, {
      delay: (index + 1) * (delay / 2),
      duration: 500,
      opacity: 0,
      distance: "30%",
      origin,
      reset: true,
    })
  );
