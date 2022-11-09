<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ users } = data);
</script>

<div class="content">
	<h3>Admin Dashboard</h3>

	{#each users as user}
		<p>{user.profile.lastName}, {user.profile.firstName} - {user.emails[0].address}</p>
	{/each}
</div>

<style lang="scss">
	.content {

        flex: 1;

        text-align: center;

        h3 {
            font-size: 150%;
        }
	}
</style>
