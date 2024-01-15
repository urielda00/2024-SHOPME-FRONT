import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		define: {
			'process.env.BASE_BACK_URL': JSON.stringify(env.BASE_BACK_URL),
			'process.env.CAPTCHA_SITE_V2_KEY': JSON.stringify(env.CAPTCHA_SITE_V2_KEY),
			'process.env.CAPTCHA_SITE_V3_KEY': JSON.stringify(env.CAPTCHA_SITE_V3_KEY),
			'process.env.FRONT_URL': JSON.stringify(env.FRONT_URL),
			'process.env.MAIL_LINK': JSON.stringify(env.MAIL_LINK),
			// 'process.env': env // will export all the env - not recommended
		},
		plugins: [react()],
	};
});
