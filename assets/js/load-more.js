const loadBtn = document.querySelector(".load-more button");
const grid = document.querySelector(".grid");
let loaded = false;

loadBtn.addEventListener("click", () => {
  if (loaded) return;

  fetch("./data/posts.json")
    .then((res) => res.json())
    .then((posts) => {
      posts.forEach((post) => {
        const card = document.createElement("div");
        card.className = "post-card";
        card.innerHTML = `
          <img src="${post.image}" alt="${post.title}" />
          <div class="post-content">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <a href="${post.link}">Read More →</a>
          </div>
        `;
        grid.appendChild(card);
      });

      loadBtn.textContent = "No More Posts";
      loadBtn.disabled = true;
      loaded = true;
    })
    .catch((err) => {
      console.error("Failed to load more posts:", err);
      loadBtn.textContent = "Error Loading";
    });
});