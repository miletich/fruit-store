import { setupWorker } from 'msw/browser';
import { http, HttpResponse } from 'msw';
import countries from '../mocks/mock_countries.json';
import data_load from '../mocks/mock_data_load.json';

export const worker = setupWorker(
  http.get('api/countries', () => {
    return HttpResponse.json(countries);
  }),
  http.get('api/data', () => {
    return HttpResponse.json(data_load);
  })
);
