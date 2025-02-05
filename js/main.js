import fetchMenu from "./api.js";
import { renderCards } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  // sayfa yüklendiğinde api isteğini at ve gelen veriyi dataya aktar
  const data = await fetchMenu();

  renderCards(data);
});
