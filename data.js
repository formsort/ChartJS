import {
	Chart,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale
} from "chart.js/auto";
import {
	getAllAnswerValues,
	setAutoHeight
} from "@formsort/custom-question-api";

async function loadClientConfig() {
	const urlParams = new URLSearchParams(window.location.search);
	const answerLabel = urlParams.get("answerLabel");

	const answers = await getAllAnswerValues();

	return answers[answerLabel] || {};
}

/**
 * we expect people to pass an answer that includes labels field and data field
 * {
 *  labels: ['January', 'February', 'March', 'April', 'May'],
 *  data: {
datasets: [
  {
    data: [300, 300, 200]
    }
    ]
		}
    * }
    */

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
				count: 2,
				crossAlign: "near",
				font: {
					size: 16
				}
			}
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}
};

// Default values are handled in the chart_data variable
// const defaultData = {
// 	datasets: [
// 		{
// 			data: [1, 10]
// 		}
// 	]
// };

(async function () {
	const result = await loadClientConfig();

	const res = await getAllAnswerValues();
	const clientConfig = await loadClientConfig();

	console.log(res);
	console.log(clientConfig);

	// chart_data will have labels hard-coded in
	// if (labels) {
	// 	options.scales.x.labels = labels;
	// }

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
