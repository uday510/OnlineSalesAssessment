
function generateOutcome(probabilities) {
    // Calculate the total probability (should be 100% or 1.0)
    const totalProbability = probabilities.reduce((total, [_, probability]) => total + probability, 0);

    // check for total probability
    if (totalProbability != 100) {
        throw new Error("Total probability should be 100%");
    }

    // Generate a random value between 0 and 100
    const random = Math.floor(Math.random() * 100) + 1;

    let cumulative = 0;

    // Determine the outcome based on the probabilities
    for (const [outcome, probability] of probabilities) {
        cumulative += probability;
        if (random <= cumulative) {
            return outcome;
        }
    }
}
function simulateDice(probabilities, occurances) {
    const outcomeCounts = {};

    // intialize every outcome with 0
    for (const [outcome] of probabilities) {
        outcomeCounts[outcome] = 0;
    }

    // generate all outcomes
    for (let i = 0; i < occurances; ++i) {
        const currOutcome = generateOutcome(probabilities);
        outcomeCounts[currOutcome]++;
    }

    return outcomeCounts;
}

const diceProbabilities = [
    [1, 10],
    [2, 30],
    [3, 15],
    [4, 15],
    [5, 30],
    [6, 0]
]

const occurances = 1000;

const outcomes = simulateDice(diceProbabilities, occurances);

for (const outcome in outcomes) {
    console.log(`${outcome}: ${outcomes[outcome]} times`);
}

