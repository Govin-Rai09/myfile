ami = () => {
  const arrows = document.querySelectorAll(`.fa-arrow-down`);
  arrows.forEach(arrow => {
    arrow.addEventListener(`click`, () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const next = parent.nextElementSibling;
      if (input.type === `text` && validateUser(input)) {
        nextsli(parent, next);
      } else if (input.type === `email` && validateEmail(input)) {
        nextsli(parent, next);
      } else if (input.type === `password` && validateUser(input)) {
        nextsli(parent, next);
      } else {
        parent.style.animation = `shake 0.3s ease`;
      }
    });
  });
};
validateUser = user => {
  if (user.value.length < 7) {
    error(`rgb(222,222,22)`);
  } else {
    error(`rgb(99, 66, 55)`);
    return true;
  }
};
validateEmail = email => {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error(`rgb(99, 66, 55)`);
    return true;
  } else {
    error(`rgb(222,222,22)`);
  }
};
nextsli = (parent, next) => {
  parent.classList.add(`inactive`);
  parent.classList.remove(`active`);
  next.classList.add(`active`);
};
error = color => {
  document.body.style.backgroundColor = color;
};
ami();
