(() => {
  const gallery = document.getElementById("gallery-grid");
  if (!gallery) return;

  const placeholders = [
    {
      src: "https://placehold.co/600x400?text=Add+Photo+1",
      alt: "Placeholder image: replace with descriptive alt text for photo 1",
      caption: "Add caption: who/what/where, plus why this moment matters."
    },
    {
      src: "https://placehold.co/600x400?text=Add+Photo+2",
      alt: "Placeholder image: replace with descriptive alt text for photo 2",
      caption: "Add caption: event context and participants."
    },
    {
      src: "https://placehold.co/600x400?text=Add+Photo+3",
      alt: "Placeholder image: replace with descriptive alt text for photo 3",
      caption: "Add caption: project demo or teamwork moment."
    },
    {
      src: "https://placehold.co/600x400?text=Add+Photo+4",
      alt: "Placeholder image: replace with descriptive alt text for photo 4",
      caption: "Add caption: mentor session, workshop, or showcase."
    }
  ];

  gallery.innerHTML = placeholders
    .map(
      (item) => `
      <figure class="gallery-item">
        <img loading="lazy" src="${item.src}" alt="${item.alt}" />
        <figcaption>${item.caption}</figcaption>
      </figure>
    `
    )
    .join("");
})();
