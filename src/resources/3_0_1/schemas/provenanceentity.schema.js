const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Provenanceentity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Provenanceentity',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_role: {
			type: require('./element.schema.js'),
			description: 'How the entity was used during the activity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/provenance-entity-role
		role: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'How the entity was used during the activity.',
		},
		_whatUri: {
			type: require('./element.schema.js'),
			description:
				'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
		},
		whatUri: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
		},
		whatReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ProvenanceentitywhatReference_whatReference_Union',
					description:
						'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
		},
		whatIdentifier: {
			type: new GraphQLNonNull(require('./identifier.schema.js')),
			description:
				'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
		},
	}),
});
