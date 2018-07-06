const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary CapabilityStatementimplementation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatementimplementation_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'Information about the specific installation that this capability statement relates to.',
		},
		description: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Information about the specific installation that this capability statement relates to.',
		},
		_url: {
			type: require('./element.input.js'),
			description:
				'An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.',
		},
	}),
});
