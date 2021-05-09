<script lang="ts">
    import list from 'src/data/list.json';
    import { filterQuery } from 'src/store';
</script>

<ul>
    {$filterQuery}
    {#each list.data as { name, description = '' } (name)}
        {#if name.toLocaleLowerCase().includes($filterQuery.toLocaleLowerCase())}
            <li>
                <p><b>{name}</b></p>
                {#if description}
                    <p>{description}</p>
                {/if}
            </li>
        {/if}
    {/each}
</ul>

<style lang="scss">
    ul,
    li {
        text-align: left;
        list-style-type: none;

        margin: 0;
        padding: 0;
    }

    li {
        margin-bottom: 0;
        border-bottom: 1px solid #ccc;
        padding: 10px 15px;

        &:last-child {
            border: none;
        }
    }
</style>
