const filters = document.querySelectorAll(".category-pill");
const cards = document.querySelectorAll(".article-card");
filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(item => item.classList.toggle("active", item === filter));
    cards.forEach(card => {
      card.hidden = filter.dataset.filter !== "all" && card.dataset.category !== filter.dataset.filter;
    });
  });
});
