<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'; // <--
	import '../app.postcss';
	import Header from './Header.svelte';
	import '@skeletonlabs/skeleton/styles/all.css';
	import './styles.css';
	import { Modal } from '@skeletonlabs/skeleton';
</script>

<div class="app">
	<Header />
	<Modal />
	<main>
		<slot />
	</main>

	<footer>
		<p>Powered by <a href="https://kit.svelte.dev">SvelteKit</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
