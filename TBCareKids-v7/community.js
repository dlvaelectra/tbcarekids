const postContainer = document.getElementById("community-posts");
const searchBox = document.getElementById("community-search");
const emptyState = document.getElementById("community-empty");
const filterButtons = document.querySelectorAll(".community-topic");
let activeFilter = "all";

function filterCommunity() {
  const term = (searchBox.value || "").trim().toLowerCase();
  let visible = 0;
  postContainer.querySelectorAll(".community-post").forEach(post => {
    const matchesCategory = activeFilter === "all" || post.dataset.category === activeFilter;
    const matchesSearch = post.textContent.toLowerCase().includes(term);
    const show = matchesCategory && matchesSearch;
    post.style.display = show ? "" : "none";
    if (show) visible++;
  });
  emptyState.style.display = visible ? "none" : "block";
  document.getElementById("post-total").textContent = `${visible} diskusi ditampilkan`;
}
filterButtons.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle("active", item === button));
  filterCommunity();
}));
searchBox.addEventListener("input", filterCommunity);

postContainer.addEventListener("click", event => {
  const like = event.target.closest(".like-button");
  const reply = event.target.closest(".reply-button");
  if (like) {
    like.classList.toggle("liked");
    like.querySelector("span").textContent = like.classList.contains("liked") ? "Diberi apresiasi" : "Apresiasi";
  }
  if (reply) {
    const composer = reply.closest(".community-post").querySelector(".reply-composer");
    composer.classList.toggle("hidden");
    if (!composer.classList.contains("hidden")) {
      const textarea = composer.querySelector("textarea");
      if (textarea) textarea.focus();
    }
  }
});

postContainer.addEventListener("submit", event => {
  if (!event.target.matches('.reply-composer')) return;
  event.preventDefault();
  const form = event.target;
  const textarea = form.querySelector('textarea');
  const value = textarea.value.trim();
  if (!value) return;
  const list = form.previousElementSibling;
  const bubble = document.createElement('div');
  bubble.className = 'reply-bubble';
  bubble.textContent = value;
  list.appendChild(bubble);
  form.reset();
  form.classList.add('hidden');
});

document.getElementById("post-form").addEventListener("submit", event => {
  event.preventDefault();
  const title = document.getElementById("post-title").value.trim();
  const body = document.getElementById("post-body").value.trim();
  if (!title || !body) return;
  const post = document.createElement("article");
  post.className = "community-post";
  post.dataset.category = "pengalaman";
  const meta = document.createElement("div");
  meta.className = "post-meta";
  meta.innerHTML = '<div class="community-avatar">K</div><div class="post-meta-text"><strong>Kontributor • Nama samaran</strong><span>Baru saja • Cerita orang tua</span></div>';
  const tag = document.createElement("span");
  tag.className = "post-tag";
  tag.textContent = "CERITA ORANG TUA";
  const heading = document.createElement("h3");
  heading.textContent = title;
  const paragraph = document.createElement("p");
  paragraph.textContent = body;
  const actions = document.createElement("div");
  actions.className = "post-actions";
  actions.innerHTML = '<button class="post-action like-button" type="button">♡ <span>Apresiasi</span></button><button class="post-action reply-button" type="button">↩ Reply</button>';
  const replyList = document.createElement("div");
  replyList.className = "post-replies";
  const composer = document.createElement("form");
  composer.className = "reply-composer hidden";
  composer.innerHTML = '<textarea placeholder="Tulis balasan yang suportif..."></textarea><button class="reply-submit" type="submit">Kirim reply</button>';
  post.append(meta, tag, heading, paragraph, actions, replyList, composer);
  postContainer.prepend(post);
  event.target.reset();
  activeFilter = "all";
  filterButtons.forEach(item => item.classList.toggle("active", item.dataset.filter === "all"));
  searchBox.value = "";
  filterCommunity();
  post.scrollIntoView({ behavior: "smooth", block: "center" });
});
filterCommunity();
