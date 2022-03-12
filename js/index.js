const itemLista = document.querySelectorAll(".info-list");

itemLista.forEach((item) =>
  item.addEventListener("click", function (event) {
    itemLista.forEach((i) => i.classList.remove("ativo"));
    item.classList.add("ativo");
    ver(this, () => {
      this.classList.remove("ativo");
    });
  }),
);

function ver(element, callback) {
  //   console.log('mama')
  const html = document.documentElement;

  if (element.classList.contains("ativo")) {
    html.addEventListener("click", teste);
  }

  function teste(event) {
    if (!element.contains(event.target)) {
      callback();
      html.removeEventListener("click", teste);
    }
    // console.log(element.contains(event.target));
  }
}
