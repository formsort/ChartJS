import Chart from "chart.js/auto";
import {
	getAnswerValue,
	setAnswerValue,
	setAutoHeight
} from "@formsort/custom-question-api";

// Need a function that can transform: current weight, weight loss time horizon into a data object
const allAnswers = getAnswerValue();

(async function () {
	const ctx = document.getElementById("data");

	const data = [
		{ month: "Jan", weight: 250 },
		{ month: "Feb", weight: 250 },
		{ month: "Jun", weight: 200 }
	];

	new Chart(ctx, {
		type: "line",
		options: {
			pointStyle: false,
			fill: true,
			backgroundColor: "rgb(229,229,229,0.8)",
			borderColor: "#00000",
			borderWidth: 3,
			scales: {
				x: {
					type: "category",
					max: 2,
					labels: ["January", "February", "March", "April", "May"],
					// min: "February",
					grid: {
						display: false
					}
				},
				y: {
					grid: {
						display: false
					},
					ticks: {
						count: 2
					}
				}
			},
			plugins: {
				legend: {
					display: false
				}
			}
		},
		data: {
			datasets: [
				{
					data: data.map((row) => row.weight)
				}
			]
		}
	});
})();
