const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the documentreference query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/clinical-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.masterIdentifier',
		description:
			'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.subject',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.type',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): The type of the referral  * [DocumentManifest](documentmanifest.html): Kind of document set  * [DocumentReference](documentreference.html): Kind of document (LOINC if possible)  * [Encounter](encounter.html): Specific type of encounter  * [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)  * [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management  * [Composition](composition.html): Kind of composition (LOINC if possible)  ',
	},
	// http://hl7.org/fhir/SearchParameter/clinical-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.context.encounter',
		description:
			'Multiple Resources:     * [DocumentReference](documentreference.html): Context of the document  content  * [RiskAssessment](riskassessment.html): Where was assessment performed?  * [DeviceRequest](devicerequest.html): Encounter or Episode during which request was created  * [Procedure](procedure.html): Search by encounter  * [List](list.html): Context in which list created  * [VisionPrescription](visionprescription.html): Return prescriptions with this encounter identifier  * [ProcedureRequest](procedurerequest.html): An encounter in which this request is made  * [Flag](flag.html): Alert relevant during encounter  * [Observation](observation.html): Encounter related to the observation  * [DiagnosticReport](diagnosticreport.html): The Encounter when the order was made  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this encounter identifier  * [Composition](composition.html): Context of the Composition  ',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-authenticator
	authenticator: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.authenticator',
		description: 'Who/what authenticated the document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.author',
		description: 'Who and/or what authored the document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-class
	class: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.class',
		description: 'Categorization of document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DocumentReference.created',
		description: 'Document creation time',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-custodian
	custodian: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.custodian',
		description: 'Organization which maintains the document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'DocumentReference.description',
		description: 'Human-readable description (title)',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-event
	event: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.context.event',
		description: 'Main clinical acts documented',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-facility
	facility: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.context.facilityType',
		description: 'Kind of facility where patient was seen',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-format
	format: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.content.format',
		description: 'Format/content rules for the document',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-indexed
	indexed: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DocumentReference.indexed',
		description: 'When this document reference was created',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-language
	language: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.content.attachment.language',
		description: 'Human language of the content (BCP-47)',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-location
	location: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'DocumentReference.content.attachment.url',
		description: 'Uri where the data can be found',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-period
	period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DocumentReference.context.period',
		description: 'Time of service that is being documented',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-related-id
	related_id: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.context.related.identifier',
		description: 'Identifier of related objects or events',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-related-ref
	related_ref: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.context.related.ref',
		description: 'Related Resource',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-relatesto
	relatesto: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.relatesTo.target',
		description: 'Target of the relationship',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-relation
	relation: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.relatesTo.code',
		description: 'replaces | transforms | signs | appends',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-relationship
	relationship: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'Combination of relation and relatesTo',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-securitylabel
	securitylabel: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.securityLabel',
		description: 'Document security-tags',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-setting
	setting: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.context.practiceSetting',
		description:
			'Additional details about where the content was created (e.g. clinical specialty)',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DocumentReference.status',
		description: 'current | superseded | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/DocumentReference-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DocumentReference.subject',
		description: 'Who/what is the subject of the document',
	},
};
