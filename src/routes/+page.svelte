<script lang='ts'>
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

	let score = "";
	let exam = "最近一次物理考试";

function triggerAlert(): void {
	const alert = {
		type: 'alert',
		title: '还没做好捏！',
		body: '有没有可能后端一行都没写？<br>' +
		'你的分数是: ' + score + '<br>' +
		'你选择的考试是: ' + exam,
	};
	modalStore.trigger(alert);
}
</script>

<svelte:head>
	<title>估算你的年级排名</title>
	<meta name="description" content="估算你的年级排名" />
</svelte:head>

<section>
	<h1>
		估算你的年级排名
	</h1>
	<h2>
		仅供参考，不对准确性作任何保障。
	</h2>
	<div>
	<form action="/getRank" method="post">
		<label for="score">
			<span>分数</span>
			<input type="number" id="score" bind:value={score} minlength="2" required>
		</label>
		<label for="exam">
		<span>考试</span>
			<select name="exam" id="color" bind:value={exam}>
				<option value="latestPhysicsExam">最近一次物理考试</option>
				<option value="latestMathExam">最近一次数学考试</option>
			</select>
		</label>
		<button class="btn bg-primary-500 btn-base text-white submit" >测试查询</button>
		</form>
		<button class="btn bg-primary-500 btn-base text-white submit" on:click='{triggerAlert}'>查询</button>
		<!-- <pre>queue: {JSON.stringify($modalStore, null, 2)}</pre> -->
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	section div {
		padding: 1em;
	}

	.submit {
		text-align: center;
		margin-top: 1em;
	}

	h1 {
		width: 100%;
	}
</style>
