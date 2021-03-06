const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Address Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Address_Input',
	description: 'Base StructureDefinition for Address Type',
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
		_use: {
			type: require('./element.input.js'),
			description: 'The purpose of this address.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/address-use
		use: {
			type: CodeScalar,
			description: 'The purpose of this address.',
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/address-type
		type: {
			type: CodeScalar,
			description:
				'Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.',
		},
		_text: {
			type: require('./element.input.js'),
			description: 'A full text representation of the address.',
		},
		text: {
			type: GraphQLString,
			description: 'A full text representation of the address.',
		},
		_line: {
			type: require('./element.input.js'),
			description:
				'This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.',
		},
		line: {
			type: new GraphQLList(GraphQLString),
			description:
				'This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.',
		},
		_city: {
			type: require('./element.input.js'),
			description:
				'The name of the city, town, village or other community or delivery center.',
		},
		city: {
			type: GraphQLString,
			description:
				'The name of the city, town, village or other community or delivery center.',
		},
		_district: {
			type: require('./element.input.js'),
			description: 'The name of the administrative area (county).',
		},
		district: {
			type: GraphQLString,
			description: 'The name of the administrative area (county).',
		},
		_state: {
			type: require('./element.input.js'),
			description:
				'Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).',
		},
		state: {
			type: GraphQLString,
			description:
				'Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).',
		},
		_postalCode: {
			type: require('./element.input.js'),
			description:
				'A postal code designating a region defined by the postal service.',
		},
		postalCode: {
			type: GraphQLString,
			description:
				'A postal code designating a region defined by the postal service.',
		},
		_country: {
			type: require('./element.input.js'),
			description:
				'Country - a nation as commonly understood or generally accepted.',
		},
		country: {
			type: GraphQLString,
			description:
				'Country - a nation as commonly understood or generally accepted.',
		},
		period: {
			type: require('./period.input.js'),
			description: 'Time period when address was/is in use.',
		},
	}),
});
