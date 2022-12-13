import axios from 'axios';

const serverRoute = 'http://localhost:3001';

export default function logInteraction(elementId, dataArr) {
  axios.post(`${serverRoute}/interactions`, {
    element: `${elementId}: ${dataArr.join(', ')}`,
    widget: 'Ratings and Reviews',
    time: new Date().toTimeString(),
  })
    .catch((err) => console.log(err));
}
