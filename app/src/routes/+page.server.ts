import type { RequestEvent } from './$types.js';

const NUM_DOCS = 628;

const pruneResponse = (response: { [key: string]: object }) => {
  return {
    ...response,
    response: {
      ...response.response,
      docs: undefined,
    }
  }
}

export const actions = {
  get: async (event: RequestEvent) => {
    const data = await event.request.formData();

    const type = data.get('searchType') ? `${data.get('searchType')}:` : '';
    const term = data.get('searchTerm');

    const query = Object.values({
      wildcard: `${type}*${term}*`,
      proximity: `${type}${term}~1`,
    }).join(' ');

    const highlightingRules = 'hl=true&hl.fl=*&hl.highlightMultiTerm=true&hl.simple.pre=<mark>&hl.simple.post=</mark>'

    const response = await fetch(`http://localhost:8899/solr/search/select?q=${encodeURIComponent(query)}&${highlightingRules}&df=title`);
    const json = await response.json();
    const results = json.response?.docs;

    return {
      results,
      response: pruneResponse(json),
      highlighting: json.highlighting,
      type: data.get('searchType'),
      term: data.get('searchTerm'),
    }
  },
  getAll: async () => {
    const response = await fetch(`http://localhost:8899/solr/search/select?q=*:*&rows=${NUM_DOCS}`);
    const json = await response.json();
    const results = json.response.docs;

    return {
      results,
      highlighting: json.highlighting,
      response: pruneResponse(json),
    }
  }
}