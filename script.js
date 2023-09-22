const appendSpansToDiv = () => {
  const div1 = document.getElementsByClassName("background")[0];

  for (let i = 1; i < 100; i++) {
    const span = document.createElement("span");
    div1.appendChild(span);
  }
};

// Call the function to append the spans to the div
appendSpansToDiv();
