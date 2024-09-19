const constitutionText = document.getElementById("constitution-text");
const caseText = document.getElementById("case-text");
const outcome = document.getElementById("outcome");
const countdownText = document.getElementById("countdown-text"); // For countdown

const cases = [
    {//p1
        text: "The government has passed a law ensuring social, economic, and political justice for all citizens.",
        relatedArticle: "Justice – social, economic, and political",
        decision: "uphold"
    },
    {//p2
        text: "The government has passed a law mandating equal employment opportunities for all citizens.",
        relatedArticle: "Equality of opportunity",
        decision: "uphold"
    },
    {//p3
        text: "The government has passed a law ensuring free and fair elections.",
        relatedArticle: "Democratic Republic.",
        decision: "uphold"
    },
    {//p4
        text: "The government has passed a law ensuring the freedom to form political associations.",
        relatedArticle: "Liberty of thought, expression, belief, faith, and worship.",
        decision: "uphold"
    },
    {//p5
        text: "The government has passed a law declaring that citizens of a specific region must carry identity cards.",
        relatedArticle: "Fraternity, assuring dignity of the individual.",
        decision: "strike"
    },
    //rights
    {//r1
        text: "The government has passed a law restricting the freedom to assemble in public spaces.",
        relatedArticle: "Article 19: Freedom of speech and expression; Right to assemble peacefully without arms.",
        decision: "strike"
    },
    {//r2
        text:"The government has passed a law that allows religious groups to manage their educational institutions",
        relatedArticle:"Article 30: Rights of minorities to establish and administer educational institutions.",
        decision:"uphold"
    },
    {//r3
        text:"The government has passed a law seizing property without compensation.",
        relatedArticle:"Article 300A: Right to property (though no longer a fundamental right, it’s still protected)",
        decision:"strike"
    },
    {//r4
        text:"The government has passed a law banning media from criticizing the government.",
        relatedArticle:"Article 19(1)(a): Freedom of speech and expression.",
        decision:"strike"
    },
    {//r5
        text:"The government has passed a law providing reservation to economically weaker sections.",
        relatedArticle:"Article 15: Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.",
        decision:"uphold"
    },
    {//d1
        text:"The government has passed a law ensuring maternity leave for women in both public and private sectors.",
        relatedArticle:"Article 42: Provision for just and humane conditions of work and maternity relief.",
        decision:"uphold"
    },
    {//d2
        text:"The government has passed a law banning child labor in hazardous industries.",
        relatedArticle:"Article 39(e): The State shall direct its policy towards securing that children are not forced by economic necessity to enter vocations unsuited to their age.",
        decision:"uphold"
    },{//d3
        text:"The government has passed a law promoting village panchayats for local governance.",
        relatedArticle:"Article 40: Organization of village panchayats.",
        decision:"uphold"
    },{//d4
        text:"The government has passed a law mandating free legal aid for the poor.",
        relatedArticle:"Article 39A: Equal justice and free legal aid.",
        decision:"uphold"
    },
    {//d5
        text:"The government has passed a law implementing minimum wages for all workers.",
        relatedArticle:"Article 43: Living wage, etc., for workers.",
        decision:"uphold"
    },
    {//fd1
        text:"The government has passed a law mandating citizens to plant trees on public holidays.",
        relatedArticle:"Article 51A(g): To protect and improve the natural environment.",
        decision:"uphold"
    },{//fd2
        text:"The government has passed a law encouraging citizens to adopt scientific temper and promote education.",
        relatedArticle:"Article 51A(h): To develop scientific temper, humanism, and the spirit of inquiry and reform.",
        decision:"uphold"
    },{//fd3
        text:"The government has passed a law making it mandatory to respect the National Flag and National Anthem.",
        relatedArticle:"Article 51A(a): To abide by the Constitution and respect its ideals and institutions, the National Flag, and the National Anthem.",
        decision:"uphold"
    },{//fd4
        text:"The government has passed a law imposing severe fines on citizens who neglect their parents.",
        relatedArticle:"Article 51A(e): To promote harmony and the spirit of common brotherhood among all the people of India.",
        decision:"uphold"
    },{//fd5
        text:"The government has passed a law to prevent destruction of public property during protests.",
        relatedArticle:"Article 51A(i): To safeguard public property and to abjure violence.",
        decision:"uphold"
    },
];

let currentCaseIndex = 0; // Track the current case
let score = 0; // Track the user's score
let selectedCases = [];

// Function to shuffle an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Select 5 random cases
const selectRandomCases = () => {
    const shuffledCases = shuffleArray(cases); // Shuffle all cases
    selectedCases = shuffledCases.slice(0, 5); // Take first 5 cases from shuffled array
};

const updateCase = (caseIndex) => {
    caseText.textContent = selectedCases[caseIndex].text;
    constitutionText.textContent = selectedCases[caseIndex].relatedArticle;
    outcome.textContent = ""; // Clear outcome when switching cases
    countdownText.textContent = ""; // Clear countdown text
    currentCaseIndex = caseIndex; // Update the current case index
};

const startCountdown = (callback) => {
    let countdown = 3;
    countdownText.textContent = `Next question in ${countdown}...`; // Start with 3

    const interval = setInterval(() => {
        countdown -= 1;
        if (countdown > 0) {
            countdownText.textContent = `Next question in ${countdown}...`;
        } else {
            clearInterval(interval);
            countdownText.textContent = ""; // Clear countdown after it finishes
            callback(); // Call the callback to move to the next question
        }
    }, 1000); // Update every 1 second
};

const handleDecision = (decision) => {
    const correctDecision = selectedCases[currentCaseIndex].decision;
    if (decision === correctDecision) {
        outcome.textContent = "Your decision is correct!";
        outcome.style.color = "green";
        score++; // Increment score if the decision is correct
    } else {
        outcome.textContent = "Your decision is incorrect!";
        outcome.style.color = "red";
    }

    // Check if there are more cases
    if (currentCaseIndex < selectedCases.length - 1) {
        // Start countdown and move to next case after countdown finishes
        startCountdown(() => {
            updateCase(currentCaseIndex + 1); // Move to the next case
        });
    } else {
        // No more cases, show the score and final message
        setTimeout(() => {
            outcome.textContent = `No more cases! Your score: ${score}/${selectedCases.length}`;
            outcome.style.color = "blue";
            countdownText.textContent = ""; // Clear countdown in case it's still showing
        }, 3000); // Delay message by 3 seconds for consistency
    }
};

document.getElementById("uphold-btn").addEventListener("click", () => {
    handleDecision("uphold");
});

document.getElementById("strike-down-btn").addEventListener("click", () => {
    handleDecision("strike");
});

// Initialize with 5 random cases
selectRandomCases();
updateCase(0); // Start with the first case
