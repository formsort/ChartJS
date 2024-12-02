import {
	Chart,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale
} from "chart.js";

import { getAllAnswerValues } from "@formsort/custom-question-api";

async function loadClientConfig() {
	const urlParams = new URLSearchParams(window.location.search);
	const answerLabel = urlParams.get("answerLabel");

	const answers = await getAllAnswerValues();

	return answers[answerLabel] || {};
}

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
	pointStyle: false,
	fill: true,
	backgroundColor: "rgb(229,229,229,0.8)",
	borderColor: "#00000",
	borderWidth: 3,
	scales: {
		x: {
			grid: {
				display: false
			},
			ticks: {
				display: false
			}
		},
		y: {
			grid: {
				display: false
			},
			ticks: {
				count: 5,
				crossAlign: "near",
				font: {
					size: 16
				}
			}
		}
	},
	plugins: {
		tooltip: {
			enabled: false
		},
		legend: {
			display: false
		}
	}
};

(async function () {
	const result = await loadClientConfig();

	const res = await getAllAnswerValues();
	const clientConfig = await loadClientConfig();

	console.log(res);
	console.log(clientConfig);

	const ctx = document.getElementById("data");

	new Chart(ctx, {
		type: "line",
		options: options,
		data: {
			labels: result.map((item) => item.labels),
			datasets: [
				{
					data: result.map((item) => item.data)
				}
			]
		}
	});
})();
