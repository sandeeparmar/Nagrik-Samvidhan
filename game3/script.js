
document.getElementById('legislature-btn').addEventListener('click', function() {
    showMapPage('Legislature');
});
document.getElementById('executive-btn').addEventListener('click', function() {
    showMapPage('Executive');
});
document.getElementById('judiciary-btn').addEventListener('click', function() {
    showMapPage('Judiciary');
});
function showMapPage(domain) {
    // Hide the domain selection section
    document.querySelector('.domain-selection').style.display = 'none';

    // Show the map container
    const mapContainer = document.getElementById('map-container');
    mapContainer.style.display = 'block';

    // Pass the selected domain to the map if needed
    const mapFrame = document.getElementById('india-map');
    mapFrame.contentWindow.postMessage(domain, '*');
}


function showScenarioPage(state) {
    document.body.innerHTML = `
        <div class="scenario-page">
            <h1>Scenario in ${state}</h1>
            <p>The government of ${state} is facing a constitutional challenge...</p>
            <div class="decision-buttons">
                <button id="choice-1">Choice 1</button>
                <button id="choice-2">Choice 2</button>
            </div>
        </div>
    `;

    document.getElementById('choice-1').addEventListener('click', function() {
        showFeedback('correct');
    });
    document.getElementById('choice-2').addEventListener('click', function() {
        showFeedback('wrong');
    });
}

function showFeedback(result) {
    let message;
    if (result === 'correct') {
        message = "Your choice aligns with the Constitution!";
    } else {
        message = "Your choice does not align with the Constitution. Here's why...";
    }
    document.body.innerHTML = `
        <div class="feedback-page">
            <h1>${message}</h1>
            <button id="restart-btn">Restart</button>
        </div>
    `;
    document.getElementById('restart-btn').addEventListener('click', function() {
        location.reload(); // Restart the game
    });
}

