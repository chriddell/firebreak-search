<script lang="ts">
  import { page } from '$app/stores';

  const types = ['artist', 'title', 'album'] as const;
</script>

<form method="POST" action="?/get">
  <fieldset>
    <legend>Search for an artist, song/album name or year</legend>
    <label>
      Type
      <select name="searchType">
        <option selected={!$page.form?.type} disabled>Select an option</option>
        {#each types as type}
          <option value={type} selected={$page.form?.type === type}>{type}</option>
        {/each}
      </select>
    </label>
    <label>
      <input name="searchTerm" id="searchTerm" type="text" value={$page.form?.term || ''} />
    </label>
  </fieldset>
  <button type="submit">Search</button>
</form>

<form method="POST" action="?/getAll">
  <button type="submit">Get all songs</button>
</form>