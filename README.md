## How to test

1. Calculated variable `chart_data` in variant sends Results array
   link to variant: `https://studio.formsort.com/client/erictest/flow/custom-question/variant/main/variables/calculated_inline`

2. Labels and data from `chart_data` are sent as:

```js
Result: [
	{ labels: 0, data: 300 },
	{ labels: 1, data: 300 },
	{ labels: 2, data: 283 },
	{ labels: 3, data: 266 },
	{ labels: 4, data: 250 },
	{ labels: 5, data: 233 },
	{ labels: 6, data: 216 },
	{ labels: 7, data: 200 }
];
```

3. iframe question with `answerLabel` parameter sends `chart_data` label (NOT the templated `chart_data` variable)
   e.g. `https://iframe_address.com?answerLabel=chart_data`
