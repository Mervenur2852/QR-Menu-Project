const elements = {
  menuList: document.querySelector("#menu-list"),
};

const renderCards = (data) => {
  // data dizisini dön ve herbir eleman için bir html oluştur
  const cardsHtml = data
    .map(
      (
        item
      ) => ` <div class="d-flex flex-column flex-md-row text-dark gap-3" id="card">
        <img
          class="rounded img-fluid shadow"
          src="${item.img}"
        />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}₺</p>
          </div>
          <p class="lead">
             ${item.desc}.
          </p>
        </div>
      </div>`
    )
    .join("");

  // oluşturulan html i menu list içerisine at
  elements.menuList.innerHTML = cardsHtml;
};

export { renderCards };
