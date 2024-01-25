import { setupWorker } from 'msw/browser';
import { http, HttpResponse /*delay*/ } from 'msw';
import countries from '../mocks/mock_countries.json';
import data_load from '../mocks/mock_data_load.json';

export const worker = setupWorker(
  http.get('api/countries', async () => {
    /* await delay(2000); */
    return HttpResponse.json(countries);
  }),
  http.get('api/data', async () => {
    /* await delay(2000); */
    return HttpResponse.json(data_load);
  })
);
