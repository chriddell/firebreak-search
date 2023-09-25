import type { RequestEvent } from './$types.js';

const NUM_DOCS = 628;

export const actions = {
  get: async (event: RequestEvent) => {
    const data = await event.request.formData();
    const query = data.get('searchTerm');

    const response = await fetch(`http://localhost:8899/solr/search/select?q=${query}&wt=json`);
    const json = await response.json();
    const results = json.response.docs;

    return {
      response: results,
    }
  },
  getAll: async () => {
    const response = await fetch(`http://localhost:8899/solr/search/select?q=*:*&rows=${NUM_DOCS}&wt=json`);
    const json = await response.json();
    const results = json.response.docs;

    return {
      response: results,
    }
  }
}