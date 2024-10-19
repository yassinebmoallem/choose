function calculatePercentage(choice) {
    let percentage = Math.floor(Math.random() * 101); // Random percentage from 0 to 100
    document.getElementById('result').innerHTML = `${choice} was chosen with a ${percentage}% chance!`;
}
