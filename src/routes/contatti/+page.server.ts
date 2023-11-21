import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ fetch, request }) => {
		const formData = await request.formData();

		const { name, email, subject, message } = Object.fromEntries(formData);

		if (!name || !email || !subject || !message) {
			return {
				status: 400,
			};
		}

		const response = await fetch('https://api.staticforms.xyz/submit', {
			method: 'POST',
			body: JSON.stringify({
				name,
				email,
				subject,
				message,
				replyTo: '@',
				accessKey: import.meta.env.VITE_STATICFORMS_API_KEY,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		if (data.success) {
			return {
				status: 200,
			};
		} else {
			return {
				status: 400,
			};
		}
	},
};
