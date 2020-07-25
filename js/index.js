const addEngagement = (engagement, list) => {
  const item = document.createElement("li");
  item.innerHTML = `
        <div class="engagement-card">
            <img style="width: 200px;" src="${engagement.imageUrl}" />
            <div><h5>${engagement.title}</h5></div>
            <p>${engagement.description}</p>
        </div>
    `;
  list.appendChild(item);
};

const addEngagements = () => {
  const highlightedList = document.getElementById("engagements-highlighted");

  engagements.map(engagement => {
    if (engagement.highlight) {
      addEngagement(engagement, highlightedList);
    }
  });
};

addEngagements();
