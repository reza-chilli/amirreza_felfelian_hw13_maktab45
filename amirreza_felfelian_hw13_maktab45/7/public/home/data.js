function localStore (e) {
  let car = e.id;
  localStorage.setItem("carNumber", +car.slice(3))
  return false;
}