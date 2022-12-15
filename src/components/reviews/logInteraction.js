import axios from 'axios';

const serverRoute = `http://localhost:${process.env.PORT}`;

export default function logInteraction(elementId, dataArr) {
  axios.post(`${serverRoute}/interactions`, {
    element: `${elementId}: ${dataArr.join(', ')}`,
    widget: 'Ratings and Reviews',
    time: new Date().toTimeString(),
  })
    .catch((err) => console.log(err));
}
