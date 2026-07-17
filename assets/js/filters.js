(() => {
  const filtersForm = document.getElementById("outputs-filters");
  const list = document.getElementById("outputs-list");
  const count = document.getElementById("outputs-count");
  if (!filtersForm || !list || !count) return;

  const root = document.body.dataset.root || "";
  const yearSelect = document.getElementById("filter-year");
  const typeSelect = document.getElementById("filter-type");
  const topicSelect = document.getElementById("filter-topic");
  if (!yearSelect || !typeSelect || !topicSelect) return;

  const byText = (a, b) => a.localeCompare(b);

  const toOptions = (values) =>
    values
      .sort(byText)
      .map((value) => `<option value="${value}">${value}</option>`)
      .join("");

  const renderCards = (items) => {
    count.textContent = `${items.length} result${items.length === 1 ? "" : "s"}`;
    list.innerHTML = items
      .map(
        (item) => `
      <article class="card">
        <h3>${item.title}</h3>
        <p><strong>Year:</strong> ${item.year}</p>
        <p><strong>Type:</strong> ${item.type}</p>
        <p><strong>Topic:</strong> ${item.topic}</p>
        <p>${item.summary}</p>
        <p><a href="${item.link}" aria-label="Open output: ${item.title}">Open output placeholder link</a></p>
      </article>
    `
      )
      .join("");
  };

  const applyFilters = (items) => {
    const selected = {
      year: yearSelect.value,
      type: typeSelect.value,
      topic: topicSelect.value
    };

    return items.filter((item) => {
      const matchYear = selected.year === "all" || item.year === selected.year;
      const matchType = selected.type === "all" || item.type === selected.type;
      const matchTopic = selected.topic === "all" || item.topic === selected.topic;
      return matchYear && matchType && matchTopic;
    });
  };

  fetch(`${root}data/outputs.json`)
    .then((response) => response.json())
    .then((data) => {
      const items = Array.isArray(data.outputs) ? data.outputs : [];
      const years = [...new Set(items.map((item) => item.year))];
      const types = [...new Set(items.map((item) => item.type))];
      const topics = [...new Set(items.map((item) => item.topic))];
      yearSelect.insertAdjacentHTML("beforeend", toOptions(years));
      typeSelect.insertAdjacentHTML("beforeend", toOptions(types));
      topicSelect.insertAdjacentHTML("beforeend", toOptions(topics));

      const update = () => renderCards(applyFilters(items));
      filtersForm.addEventListener("change", update);
      update();
    })
    .catch(() => {
      count.textContent = "Could not load outputs data.";
      list.innerHTML = "";
    });
})();
