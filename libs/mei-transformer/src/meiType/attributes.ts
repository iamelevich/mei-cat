import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes that uniquely identify an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.id.html
 */
export const AttrIdSchema = Type.Object(
	{
		/**
		 * Regularizes the naming of an element and thus facilitates building links between it and other resources.
		 * Each id attribute within a document must have a unique value. Value is a valid xml:id.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.id.html
		 */
		"@xml:id": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

/**
 * Attributes that uniquely identify an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.id.html
 */
export type AttrId = Static<typeof AttrIdSchema>;

export const AttrBasicSchema = Type.Composite([
	Type.Object(
		{
			/**
			 * Provides a base URI reference with which applications can resolve relative URI references into absolute URI references.
			 * Value conforms to data.URI.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
			 */
			"@xml:base": Type.Optional(Type.String()),
		},
		{ additionalProperties: false },
	),
	AttrIdSchema,
]);

/**
 * Attributes that form the basis of the att.common class.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
 */
export type AttrBasic = Static<typeof AttrBasicSchema>;

/**
 * Attributes used to specify the version of MEI used.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meiVersion.html
 */
export const AttrMeiVersionSchema = Type.Object(
	{
		/**
		 * Specifies a generic MEI version label. Allowed values are: "5.1" (Version of MEI), "5.1+anyStart" (Version of MEI all_anyStart customization),
		 * "5.1+basic" (Version of MEI basic customization), "5.1+CMN" (Version of MEI cmn customization),
		 * "5.1+Mensural" (Version of MEI mensural customization), "5.1+Neumes" (Version of MEI neumes customization)
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meiVersion.html
		 */
		"@meiversion": Type.String(),
	},
	{ additionalProperties: false },
);

/**
 * Attributes used to specify the version of MEI used.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meiVersion.html
 */
export type AttrMeiVersion = Static<typeof AttrMeiVersionSchema>;

/**
 * Attributes capturing information regarding responsibility for some aspect of the text's creation, transcription, editing, or encoding.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.responsibility.html
 */
export const AttrResponsibilitySchema = Type.Object(
	{
		/**
		 * Indicates the agent(s) responsible for some aspect of the text's transcription, editing, or encoding.
		 * Its value must point to one or more identifiers declared in the document header.
		 * One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.responsibility.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.URI.html
		 */
		"@resp": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

/**
 * Attributes capturing information regarding responsibility for some aspect of the text's creation, transcription, editing, or encoding.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.responsibility.html
 */
export type AttrResponsibility = Static<typeof AttrResponsibilitySchema>;

/**
 * Attributes used to specify the language of the element's content.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
 */
export const AttrLangSchema = Type.Object(
	{
		/**
		 * Identifies the language of the element's content.
		 * The values for this attribute are language 'tags' as defined in BCP 47.
		 * All language tags that make use of private use sub-tags must be documented in a corresponding language element in the
		 * MEI header whose id attribute is the same as the language tag's value.
		 * Value is a language.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
		 * @see https://www.w3.org/TR/xmlschema11-2/#language
		 */
		"@xml:lang": Type.Optional(
			Type.String({
				pattern: "^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$",
			}),
		),

		/**
		 * Specifies the transliteration technique used. Value is a NMTOKEN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
		 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
		 */
		"@translit": Type.Optional(
			Type.String({
				pattern: "^\\c+$",
			}),
		),
	},
	{ additionalProperties: false },
);

/**
 * Attributes used to specify the language of the element's content.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
 */
export type AttrLang = Static<typeof AttrLangSchema>;

/**
 * Attributes used to supply a label for an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.labeled.html
 */
export const AttrLabeledSchema = Type.Object(
	{
		/**
		 * Captures text to be used to generate a label for the element to which it's attached, a "tool tip" or prefatory text, for example.
		 * Should not be used to record document content. Value is plain text.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.labeled.html
		 */
		"@label": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrLabeled = Static<typeof AttrLabeledSchema>;

/**
 * Attributes used to supply a bibliographic reference to an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bibl.html
 */
export const AttrBiblSchema = Type.Object(
	{
		/**
		 * Contains a reference to a field or element in another descriptive encoding system to which this MEI element is comparable. Value is plain text.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bibl.html
		 */
		"@analog": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrBibl = Static<typeof AttrBiblSchema>;

/**
 * Attributes that specify element-to-element relationships.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
 */
export const AttrLinkingSchema = Type.Object(
	{
		/**
		 * Points to an element of which the current element is a copy. Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@copyof": Type.Optional(Type.String()),
		/**
		 * Used to point to other elements that correspond to this one in a generic fashion. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@corresp": Type.Optional(Type.String()),
		/**
		 * points to one or more events in a user-defined collection that are known to be predecessors of the current element. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@follows": Type.Optional(Type.String()),
		/**
		 * Used to point to the next event(s) in a user-defined collection. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@next": Type.Optional(Type.String()),
		/**
		 * Points to one or more events in a user-defined collection that are known to be successors of the current element. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@precedes": Type.Optional(Type.String()),
		/**
		 * Points to the previous event(s) in a user-defined collection. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@prev": Type.Optional(Type.String()),
		/**
		 * Points to an element that is the same as the current element but is not a literal copy of the current element. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@sameas": Type.Optional(Type.String()),
		/**
		 * Points to elements that are synchronous with the current element. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@synch": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrLinking = Static<typeof AttrLinkingSchema>;

/**
 * Attributes used to supply a number-like designation for an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nNumberLike.html
 */
export const AttrNNumberLikeSchema = Type.Object(
	{
		/**
		 * Provides a number-like designation that indicates an element's position in a sequence of similar elements. May not contain space characters. Value conforms to data.WORD.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nNumberLike.html
		 */
		"@n": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrNNumberLike = Static<typeof AttrNNumberLikeSchema>;

/**
 * Attributes which can be used to classify features.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.classed.html
 */
export const AttrClassedSchema = Type.Object(
	{
		/**
		 * Contains one or more URIs which denote classification terms that apply to the entity bearing this attribute.
		 * One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.classed.html
		 */
		"@class": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrClassed = Static<typeof AttrClassedSchema>;

/**
 * Attributes which can be used to classify features.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.typed.html
 */
export const AttrTypedSchema = Type.Intersect([
	Type.Object(
		{
			/**
			 * Designation which characterizes the element in some sense, using any convenient classification scheme or typology that employs single-token labels.
			 * One or more values of datatype NMTOKEN, separated by spaces.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.typed.html
			 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
			 */
			"@type": Type.Optional(Type.String()),
		},
		{ additionalProperties: false },
	),
	AttrClassedSchema,
]);

export type AttrTyped = Static<typeof AttrTypedSchema>;

/**
 * Attributes common to many elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.common.html
 */
export const AttrCommonSchema = Type.Composite([
	AttrBasicSchema,
	AttrLabeledSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
	AttrTypedSchema,
	AttrBiblSchema,
]);

export type AttrCommon = Static<typeof AttrCommonSchema>;

/**
 * Attributes that can be used to associate a representation such as a name or title with canonical information about the object being named or referenced.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.canonical.html
 */
export const AttrCanonicalSchema = Type.Object(
	{
		/**
		 * A value that represents or identifies other data.
		 * Often, it is a primary key in the database or a unique value in the coded list identified by the auth or auth.uri attributes.
		 * One or more values of datatype NMTOKEN, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.canonical.html
		 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
		 */
		"@codedval": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrCanonical = Static<typeof AttrCanonicalSchema>;

/**
 * Attributes that describe the source of a controlled value.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
 */
export const AttrAuthorizedSchema = Type.Composite([
	Type.Object(
		{
			/**
			 * A name or label associated with a controlled vocabulary or other authoritative source for this element or its content. Value is plain text.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
			 */
			"@auth": Type.Optional(Type.String()),
			/**
			 * A web-accessible location of the controlled vocabulary or other authoritative source of identification or definition for this element or its content.
			 * This attribute may contain a complete URI or a partial URI which is completed by the value of the codedval attribute.
			 * Value conforms to data.URI.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
			 */
			"@auth.uri": Type.Optional(Type.String()),
		},
		{ additionalProperties: false },
	),
	AttrCanonicalSchema,
]);

export type AttrAuthorized = Static<typeof AttrAuthorizedSchema>;

/**
 * Attributes that associate a feature corresponding with all or part of an image.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.facsimile.html
 */
export const AttrFacsimileSchema = Type.Object(
	{
		/**
		 * Points to one or more images, portions of an image, or surfaces which correspond to the current element. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.facsimile.html
		 */
		"@facs": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrFacsimile = Static<typeof AttrFacsimileSchema>;

/**
 * Attributes that deal with string filing characteristics.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.filing.html
 */
export const AttrFilingSchema = Type.Object(
	{
		/**
		 * Holds the number of initial characters (such as those constituting an article or preposition) that should not be used for sorting a title or name.
		 * Value is a positive integer.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.filing.html
		 */
		"@nonfiling": Type.Optional(Type.Number()),
	},
	{ additionalProperties: false },
);

export type AttrFiling = Static<typeof AttrFilingSchema>;

/**
 * Attributes that record the number of dots of augmentation.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.augmentDots.html
 */
export const AttrAugmentDotsSchema = Type.Object(
	{
		/**
		 * Records the number of augmentation dots required by a written dotted duration. Value conforms to data.AUGMENTDOT
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.augmentDots.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.AUGMENTDOT.html
		 */
		"@dots": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrAugmentDots = Static<typeof AttrAugmentDotsSchema>;

/**
 * Attributes that provide information about a measure's conformance to the prevailing meter.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
 */
export const AttrMeterConformanceBarSchema = Type.Object(
	{
		/**
		 * Indicates the relationship between the content of a measure and the prevailing meter.
		 * Value conforms to data.BOOLEAN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
		 */
		"@metcon": Type.Optional(Type.Boolean()),
		/**
		 * Indicates whether or not a bar line is "controlling"; that is, if it indicates a point of alignment across all the parts.
		 * Bar lines within a score are usually controlling; that is, they "line up".
		 * Bar lines within parts may or may not be controlling.
		 * When applied to measure, this attribute indicates the nature of the right bar line but not the left.
		 * Value conforms to data.BOOLEAN.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
		 */
		"@control": Type.Optional(Type.Boolean()),
	},
	{ additionalProperties: false },
);

export type AttrMeterConformanceBar = Static<
	typeof AttrMeterConformanceBarSchema
>;

/**
 * Attributes for bar lines.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.log.html
 */
export const AttrBarLineLogSchema = Type.Composite([
	Type.Object(
		{
			/**
			 * Records the appearance and usually the function of the bar line. Value conforms to data.BARRENDITION.
			 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.log.html
			 * @see https://music-encoding.org/guidelines/v5/data-types/data.BARRENDITION.html
			 */
			"@form": Type.Optional(Type.String()),
		},
		{ additionalProperties: false },
	),
	AttrMeterConformanceBarSchema,
]);

export type AttrBarLineLog = Static<typeof AttrBarLineLogSchema>;
