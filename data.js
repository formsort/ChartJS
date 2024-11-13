import Chart from "chart.js/auto";
import {
	getAllAnswerValues,
	setAutoHeight
} from "@formsort/custom-question-api";

// Need a function that can transform: current weight, goal weight, and weight loss time horizon into a fields for data.datasets.data
async function getAllAnswers() {
	const answers = await getAllAnswerValues();
	const values = Object.values(answers);

	console.log(`values: ${values}`);
}
getAllAnswers();

const options = {
	pointStyle: false,
	fill: true,
	backgroundColor: "rgb(229,229,229,0.8)",
	borderColor: "#00000",
	borderWidth: 3,
	scales: {
		x: {
			// type: "time",
			max: 2,
			labels: ["January", "February", "March", "April", "May"],
			// min: "February",
			grid: {
				display: false
			},
			ticks: {
				align: "start",
				crossAlign: "far",
				count: 2
			}
		},
		y: {
			grid: {
				display: false
			},
			ticks: {
				count: 2,
				crossAlign: "near"
			}
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}
};

const data = {
	datasets: [
		{
			data: [300, 300, 200]
		}
	]
};

(async function () {
	const ctx = document.getElementById("data");

	new Chart(ctx, {
		type: "line",
		data: data,
		options: options
	});
})();
