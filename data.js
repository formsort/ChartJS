import Chart from "chart.js/auto";
import {
	getAnswerValue,
	setAnswerValue,
	setAutoHeight
} from "@formsort/custom-question-api";

const allAnswers = getAnswerValue();

(async function () {
	const data = [
		{ month: "Jan", weight: 250 },
		{ month: "Feb", weight: 250 },
		{ month: "Mar", weight: 200 },
		{ month: "Apr", weight: 150 },
		{ month: "May", weight: 50 },
		{ month: "Jun", weight: 0 }
	];

	new Chart(document.getElementById("data"), {
		type: "line",
		options: {
			pointStyle: false,
			pointRadius: 5,
			fill: true,
			backgroundColor: "rgb(254,250,224,0.8)",
			borderColor: "rgb(188,108,37,0.8 )",
			borderWidth: 3,
			legend: { display: false },
			scales: {
				x: {
					grid: {
						display: false
					}
				},
				y: {
					grid: {
						display: false
					}
				}
			}
		},
		data: {
			labels: data.map((row) => row.month),
			datasets: [
				{
					label: "Weight loss prediction",
					plugins: {
						font: {
							size: 5
						}
					},
					data: data.map((row) => row.weight)
				}
			]
		}
	});
})();
