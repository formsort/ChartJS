import {
	Chart,
	LineController,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
	Filler,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, LineController, Filler);

import { getAllAnswerValues } from "@formsort/custom-question-api";

async function loadClientConfig() {
	const urlParams = new URLSearchParams(window.location.search);
	const answerLabel = urlParams.get("answerLabel");

	const answers = await getAllAnswerValues();

	return answers[answerLabel] || {};
}

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
	try {
		const result = await loadClientConfig();

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
	} catch {
		const body = document.querySelector("body");
		const message = document.createElement("p");
		message.classList.add("error");
		message.innerHTML = "Please run this page in a formsort flow.";
		body.prepend(message);
	}
})();
