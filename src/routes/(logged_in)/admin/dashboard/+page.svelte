<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    $: ({users} = data)


</script>

<h3>Admin Dashboard</h3>

{#each users as user }
<p>{user.profile.lastName}, {user.profile.firstName} - {user.emails}</p>
    
{/each}