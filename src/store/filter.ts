import { writable } from 'svelte/store';

function createFilterQuery() {
    const store = writable('', () => {
        console.log('has subscriber');

        return () => {
            console.log('subscribers was lost');
        };
    });

    return {
        ...store,
        reset: () => store.set('')
    };
}

export const filterQuery = createFilterQuery();
