$(document).ready(function () {
	// Calendar variables
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth();

	// Initialize calendar
	updateCalendar();

	// Event listeners for prev/next buttons
	$("#prevMonthBtn").on("click", function () {
		currentMonth--;
		if (currentMonth < 0) {
			currentMonth = 11;
			currentYear--;
		}
		updateCalendar();
	});

	$("#nextMonthBtn").on("click", function () {
		currentMonth++;
		if (currentMonth > 11) {
			currentMonth = 0;
			currentYear++;
		}
		updateCalendar();
	});

	// Function to update the calendar
	function updateCalendar() {
		$("#currentMonth").text(
			new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(new Date(currentYear, currentMonth))
		);

		// Clear previous calendar
		$("#calendar-body").empty();

		// Calculate days in the month
		var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

		// Calculate the first day of the month
		var firstDay = new Date(currentYear, currentMonth, 1).getDay();

		// Create calendar cells
		var dayCounter = 1;
		for (var i = 0; i < 6; i++) {
			var row = $("<tr></tr>");
			for (var j = 0; j < 7; j++) {
				var cell = $("<td></td>");
				if (i === 0 && j < firstDay) {
					// Empty cells before the first day
					cell.text("");
				} else if (dayCounter <= daysInMonth) {
					// Fill in the days
					cell.text(dayCounter);
					dayCounter++;
				}
				row.append(cell);
			}
			$("#calendar-body").append(row);
		}
	}
});