<script>
	import { page } from '$app/stores';
</script>

{#if $page.form?.results}
	{#if $page.form.results.length === 0}
		<p>No results found</p>
	{/if}
	<ul>
		{#each $page.form.results as item}
			<li>
				<h2>{item.title}</h2>
				<dl>
					<span>
						<dt>Artist:</dt>
						<dd>{item.artist}</dd>
					</span>
					<span>
						<dt>Album:</dt>
						<dd>{item.album}</dd>
					</span>
				</dl>
			</li>
		{/each}
	</ul>
{/if}

<style>
	h2 {
		margin-top: 0;
	}

	span {
		display: flex;
		margin-bottom: 8px;
	}

	dd {
		margin-left: 4px;
	}

	dt,
	dd {
		display: inline-block;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		border: 1px solid gray;
		margin-bottom: 8px;
		padding: 8px 16px;
	}
</style>
