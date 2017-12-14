// Generates the number to guess.
var number = Math.floor((Math.random() * 102) + 19);

// Random values for each gemstone.
var sapphire = Math.floor((Math.random() * 12) + 1);
var ruby = Math.floor((Math.random() * 12) + 1);
var amethyst = Math.floor((Math.random() * 12) + 1);
var emerald = Math.floor((Math.random() * 12) + 1);

// Sets values to zero.
var yourScore = 0;
var wins = 0;
var losses = 0;
var currentStreak = 0;
var longestStreak = 0;

// Shows the target score to be matched.
$(".targetscore").html(number);

// Gemstone on click events.
$(".sapphire").click(function() {
	update(sapphire);
});

$(".ruby").click(function() {
	update(ruby);
});

$(".amethyst").click(function() {
	update(amethyst);
});

$(".emerald").click(function() {
	update(emerald);
});


// Reset function for after you win or lose
function reset() {
	// Generates a new number to guess.
	number = Math.floor((Math.random() * 102) + 19);
	// Displays that number on the page.
	$(".targetscore").html(number);
	// Generates new values for the crystals.
	sapphire = Math.floor((Math.random() * 12) + 1);
	ruby = Math.floor((Math.random() * 12) + 1);
	amethyst = Math.floor((Math.random() * 12) + 1);
	emerald = Math.floor((Math.random() * 12) + 1);
	// Resets the total guess to 0.
	yourScore = 0;
	// Displays the score total.
	$(".yourscore").html(yourScore);
};

// Updates the total guesses 
function update(color) {
	// Increases the total guess by the value of the chosen crystal.
	yourScore += color;
	// Removes the old total and replaces it with the new total. 
	$(".yourscore").empty();
	$(".yourscore").append(yourScore);
	// Checks to see if you win or lose.
	if (yourScore > number) {
		// Adds a loss.
		losses++;
		// Displays updated losses.
		$("#losses").html(losses);
		// Calls the reset function to reset the game.
		reset();
		// Updates longest streak if it gets broken.
		if (currentStreak > longestStreak) {
			longestStreak = currentStreak;
		};
		// Resets current streak.
		currentStreak = 0
		// Displays the updated streak information.
		$("#winningstreak").html(currentStreak);
		$("#alltimestreak").html(longestStreak);

	} else if (yourScore == number) {
		// Adds a win.
		wins++;
		// Displays the updated wins.
		$("#wins").html(wins);
		// Calls the reset function to reset the game.
		reset();
		// Adds 1 to the current streak.
		currentStreak++;
		// Displays the current streak.
		$("#winningstreak").html(currentStreak);
		// Updates longest streak if it gets broken.
		if (currentStreak > longestStreak) {
			longestStreak = currentStreak;
		};
		// Displays the updated streak information.
		$("#alltimestreak").html(longestStreak);

	};
};