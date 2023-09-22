const span = () => {
  const div1 = document.getElementsByClassName("background")[0];
  const span = document.createElement("span");
  div1.appendChild(span);
  return div1;
};
// console.log(span());
for (var i = 1; i < 100; i++) {
  return span();
}
