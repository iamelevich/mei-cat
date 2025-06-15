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

export const AttrBasicSchema = Type.Object(
	{
		/**
		 * Provides a base URI reference with which applications can resolve relative URI references into absolute URI references.
		 * Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
		 */
		"@xml:base": Type.Optional(Type.String()),
		...AttrIdSchema.properties,
	},
	{ additionalProperties: false },
);

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
export type AttrLabeled = {
	/**
	 * Captures text to be used to generate a label for the element to which it's attached, a "tool tip" or prefatory text, for example.
	 * Should not be used to record document content. Value is plain text.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.labeled.html
	 */
	"@label"?: string;
};

/**
 * Attributes used to supply a bibliographic reference to an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bibl.html
 */
export type AttrBibl = {
	/**
	 * Contains a reference to a field or element in another descriptive encoding system to which this MEI element is comparable. Value is plain text.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bibl.html
	 */
	"@analog"?: string;
};

/**
 * Attributes that specify element-to-element relationships.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
 */
export type AttrLinking = {
	/**
	 * Points to an element of which the current element is a copy. Value conforms to data.URI.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	"@copyof"?: string;
	/**
	 * Used to point to other elements that correspond to this one in a generic fashion. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	"@corresp"?: string;
	/**
	 * points to one or more events in a user-defined collection that are known to be predecessors of the current element. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	"@follows"?: string;
	/**
	 * Used to point to the next event(s) in a user-defined collection. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	"@next"?: string;
	/**
	 * Points to one or more events in a user-defined collection that are known to be successors of the current element. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	"@precedes"?: string;
	/**
	 * Points to the previous event(s) in a user-defined collection. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	"@prev"?: string;
	/**
	 * Points to an element that is the same as the current element but is not a literal copy of the current element. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	"@sameas"?: string;
	/**
	 * Points to elements that are synchronous with the current element. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	"@synch"?: string;
};

/**
 * Attributes used to supply a number-like designation for an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nNumberLike.html
 */
export type AttrNNumberLike = {
	/**
	 * Provides a number-like designation that indicates an element's position in a sequence of similar elements. May not contain space characters. Value conforms to data.WORD.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nNumberLike.html
	 */
	"@n"?: string;
};

/**
 * Attributes which can be used to classify features.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.classed.html
 */
export type AttrClassed = {
	/**
	 * Contains one or more URIs which denote classification terms that apply to the entity bearing this attribute.
	 * One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.classed.html
	 */
	"@class"?: string;
};

/**
 * Attributes which can be used to classify features.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.typed.html
 */
export type AttrTyped = {
	/**
	 * Designation which characterizes the element in some sense, using any convenient classification scheme or typology that employs single-token labels.
	 * One or more values of datatype NMTOKEN, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.typed.html
	 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
	 */
	"@type"?: string;
} & AttrClassed;

/**
 * Attributes common to many elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.common.html
 */
export type AttrCommon = AttrBasic &
	AttrLabeled &
	AttrLinking &
	AttrNNumberLike &
	AttrResponsibility &
	AttrTyped &
	AttrBibl;

/**
 * Attributes that can be used to associate a representation such as a name or title with canonical information about the object being named or referenced.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.canonical.html
 */
export type AttrCanonical = {
	/**
	 * A value that represents or identifies other data.
	 * Often, it is a primary key in the database or a unique value in the coded list identified by the auth or auth.uri attributes.
	 * One or more values of datatype NMTOKEN, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.canonical.html
	 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
	 */
	"@codedval"?: string;
};

/**
 * Attributes that describe the source of a controlled value.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
 */
export type AttrAuthorized = {
	/**
	 * A name or label associated with a controlled vocabulary or other authoritative source for this element or its content. Value is plain text.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
	 */
	"@auth"?: string;
	/**
	 * A web-accessible location of the controlled vocabulary or other authoritative source of identification or definition for this element or its content.
	 * This attribute may contain a complete URI or a partial URI which is completed by the value of the codedval attribute.
	 * Value conforms to data.URI.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
	 */
	"@auth.uri"?: string;
} & AttrCanonical;

/**
 * Attributes that associate a feature corresponding with all or part of an image.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.facsimile.html
 */
export type AttrFacsimile = {
	/**
	 * Points to one or more images, portions of an image, or surfaces which correspond to the current element. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.facsimile.html
	 */
	"@facs"?: string;
};

/**
 * Attributes that deal with string filing characteristics.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.filing.html
 */
export type AttrFiling = {
	/**
	 * Holds the number of initial characters (such as those constituting an article or preposition) that should not be used for sorting a title or name.
	 * Value is a positive integer.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.filing.html
	 */
	"@nonfiling"?: number;
};

/**
 * Attributes that record the number of dots of augmentation.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.augmentDots.html
 */
export type AttrAugmentDots = {
	/**
	 * Records the number of augmentation dots required by a written dotted duration. Value conforms to data.AUGMENTDOT
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.augmentDots.html
	 * @see https://music-encoding.org/guidelines/v5/data-types/data.AUGMENTDOT.html
	 */
	"@dots"?: string;
};

/**
 * Attributes that provide information about a measure's conformance to the prevailing meter.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
 */
export type AttrMeterConformanceBar = {
	/**
	 * Indicates the relationship between the content of a measure and the prevailing meter.
	 * Value conforms to data.BOOLEAN.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
	 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
	 */
	"@metcon"?: boolean;
	/**
	 * Indicates whether or not a bar line is "controlling"; that is, if it indicates a point of alignment across all the parts.
	 * Bar lines within a score are usually controlling; that is, they "line up".
	 * Bar lines within parts may or may not be controlling.
	 * When applied to measure, this attribute indicates the nature of the right bar line but not the left.
	 * Value conforms to data.BOOLEAN.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
	 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
	 */
	"@control"?: boolean;
};

/**
 * Attributes for bar lines.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.log.html
 */
export type AttrBarLineLog = {
	/**
	 * Records the appearance and usually the function of the bar line. Value conforms to data.BARRENDITION.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barLine.log.html
	 * @see https://music-encoding.org/guidelines/v5/data-types/data.BARRENDITION.html
	 */
	"@form"?: string;
} & AttrMeterConformanceBar;
