const addEngagement = (engagement, list) => {
    const item = document.createElement("li");
    item.innerHTML = `
        ${engagement.title}
    `;
    list.appendChild(item);
};

const addEngagements = () => {
    const highlightedList = document.getElementById("engagements-highlighted");
    const moreList = document.getElementById("engagements-more");

    engagements.map(engagement => {
        if (engagement.highlight) {
            addEngagement(engagement, highlightedList);
        } else {
            addEngagement(engagement, moreList);
        }
    });
};

addEngagements();
