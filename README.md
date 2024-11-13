## How to test

1. create a calculated variable `my_data` in variant

2. have labels and data in there e.g.

```js
{
  labels: ['January', 'February', 'March', 'April', 'May'],
  data: {
    datasets: [
      {
        data: [300, 300, 200]
      }
    ]
  }
}
```

3. add iframe question with `answerLabel` parameter
e.g. `https://iframe_address.com?answerLabel=my_data`
