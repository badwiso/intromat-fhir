const {
	EpisodeOfCareCreateMutation,
	EpisodeOfCareUpdateMutation,
	EpisodeOfCareRemoveMutation,
} = require('./mutation');

const {
	EpisodeOfCareQuery,
	EpisodeOfCareListQuery,
	EpisodeOfCareInstanceQuery,
} = require('./query');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	 * Define Query Schema's here
	 * Each profile will need to define the two queries it supports
	 * and these keys must be unique across the entire application, like routes
	 */
	query: {
		EpisodeOfCare: EpisodeOfCareQuery,
		EpisodeOfCareList: EpisodeOfCareListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		EpisodeOfCareCreate: EpisodeOfCareCreateMutation,
		EpisodeOfCareUpdate: EpisodeOfCareUpdateMutation,
		EpisodeOfCareRemove: EpisodeOfCareRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'EpisodeOfCare',
		path: '/3_0_1/EpisodeOfCare/:id',
		query: EpisodeOfCareInstanceQuery,
	},
};
