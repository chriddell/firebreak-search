<script lang="ts">
	import Search from '$lib/search.svelte';
	import Results from '$lib/results.svelte';

	export let form;
</script>

<h1>Search</h1>
<Search />
<Results />

{#if form?.response}
	<pre>
    {JSON.stringify(form?.response, undefined, 2)}
  </pre>
{/if}

<style>
	pre {
		display: block;
		padding: 16px;
		background-color: green;
		color: white;
		position: sticky;
		bottom: 8px;
		max-height: 33vh;
		overflow: scroll;
	}
</style>
