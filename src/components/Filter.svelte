<script lang="ts">
    import { filterQuery } from 'src/store';
</script>

<p>Filter:</p>

<input type="text" bind:value={$filterQuery} />
<button on:click={filterQuery.reset}>Clear</button>
