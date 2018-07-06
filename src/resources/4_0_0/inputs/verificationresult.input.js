const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary VerificationResult Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'VerificationResult_Input',
	description:
		'Describes validation requirements, source(s), status and dates for one or more elements.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'VerificationResult_Enum_input',
					values: { VerificationResult: { value: 'VerificationResult' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		target: {
			type: new GraphQLList(GraphQLString),
			description: 'A resource that was validated.',
		},
		_targetLocation: {
			type: require('./element.input.js'),
			description:
				'The fhirpath location(s) within the resource that was validated.',
		},
		targetLocation: {
			type: new GraphQLList(GraphQLString),
			description:
				'The fhirpath location(s) within the resource that was validated.',
		},
		need: {
			type: require('./codeableconcept.input.js'),
			description:
				'The frequency with which the target must be validated (none; initial; periodic).',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).',
		},
		_statusDate: {
			type: require('./element.input.js'),
			description: 'When the validation status was updated.',
		},
		statusDate: {
			type: DateTimeScalar,
			description: 'When the validation status was updated.',
		},
		validationType: {
			type: require('./codeableconcept.input.js'),
			description:
				'What the target is validated against (nothing; primary source; multiple sources).',
		},
		validationProcess: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).',
		},
		frequency: {
			type: require('./timing.input.js'),
			description: 'Frequency of revalidation.',
		},
		_lastPerformed: {
			type: require('./element.input.js'),
			description:
				'The date/time validation was last completed (including failed validations).',
		},
		lastPerformed: {
			type: DateTimeScalar,
			description:
				'The date/time validation was last completed (including failed validations).',
		},
		_nextScheduled: {
			type: require('./element.input.js'),
			description: 'The date when target is next validated, if appropriate.',
		},
		nextScheduled: {
			type: DateScalar,
			description: 'The date when target is next validated, if appropriate.',
		},
		failureAction: {
			type: require('./codeableconcept.input.js'),
			description:
				'The result if validation fails (fatal; warning; record only; none).',
		},
		primarySource: {
			type: new GraphQLList(
				require('./verificationresultprimarysource.input.js'),
			),
			description:
				'Information about the primary source(s) involved in validation.',
		},
		attestation: {
			type: require('./verificationresultattestation.input.js'),
			description: 'Information about the entity attesting to information.',
		},
		validator: {
			type: new GraphQLList(require('./verificationresultvalidator.input.js')),
			description: 'Information about the entity validating information.',
		},
	}),
});
