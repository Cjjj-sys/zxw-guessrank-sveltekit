import type { Actions } from './$types';

export const actions: Actions = {
	default: async (request) => {
		const data = await request.formData();
		const score = await data.get('score');
		const exam = await data.get('exam');
		return { rank: 114514 };
	}
};
