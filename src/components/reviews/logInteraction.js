import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

export default function logInteraction(elementId, dataArr) {
  console.log(elementId, dataArr.join(', '));
  axios.put(`${serverRoute}/interactions`, {
    element: `${elementId}: ${dataArr.join(', ')}`,
    widget: 'Ratings and Reviews',
    time: new Date().toTimeString(),
  })
    .catch((err) => console.log(err));
}
