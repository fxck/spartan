export default {
	dialect: 'postgresql',
	dbCredentials: {
		url: `${process.env['DATABASE_URL']}`,
	},
};
