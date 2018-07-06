const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary CodeableConcept Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeableConcept_Input',
	description:
		'Base StructureDefinition for CodeableConcept Type: A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		coding: {
			type: new GraphQLList(require('./coding.input.js')),
			description: 'A reference to a code defined by a terminology system.',
		},
		_text: {
			type: require('./element.input.js'),
			description:
				'A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.',
		},
		text: {
			type: GraphQLString,
			description:
				'A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.',
		},
	}),
});
