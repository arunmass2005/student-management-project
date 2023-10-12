function useLoginError(isError, field) {
  const errorfield = document.getElementById(`${field}-underline`);
  const errordiv = document.getElementsByClassName(`${field}-outer`);
  const erroricon = document.getElementById(`${field}-icon`);
  const errormsg = document.getElementById(`${field}-errormsg`);

  if (isError) {
    errormsg.classList.add("showerror");
    errordiv[0].classList.add("errorouter");
    errorfield.classList.add("errorfield");
    erroricon.style.color = "rgb(217,48,37)";
  } else {
    errordiv[0].classList.remove("errorouter");
    errormsg.classList.remove("showerror");
    errorfield.classList.remove("errorfield");
    erroricon.style.color = "grey";
  }
}
function useFieldError(isError, field, msg) {
  const inputField = document.querySelector(field);
  if (isError) {
    inputField.classList.add("errorInputField");
    inputField.scrollIntoView({ behavior: "smooth" });
  } else {
    inputField.classList.remove("errorInputField");
  }
}
export { useLoginError, useFieldError };
