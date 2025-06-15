/**
 * Attributes that uniquely identify an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.id.html
 */
export type AttrId = {
	/**
	 * Regularizes the naming of an element and thus facilitates building links between it and other resources.
	 * Each id attribute within a document must have a unique value. Value is a valid xml:id.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.id.html
	 */
	"xml:id"?: string;
};

/**
 * Attributes that form the basis of the att.common class.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
 */
export type AttrBasic = {
	/**
	 * Provides a base URI reference with which applications can resolve relative URI references into absolute URI references.
	 * Value conforms to data.URI.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
	 */
	"xml:base"?: string;
} & AttrId;

/**
 * Attributes used to specify the version of MEI used.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meiVersion.html
 */
export type AttrMeiVersion = {
	/**
	 * Specifies a generic MEI version label. Allowed values are: "5.1" (Version of MEI), "5.1+anyStart" (Version of MEI all_anyStart customization),
	 * "5.1+basic" (Version of MEI basic customization), "5.1+CMN" (Version of MEI cmn customization),
	 * "5.1+Mensural" (Version of MEI mensural customization), "5.1+Neumes" (Version of MEI neumes customization)
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meiVersion.html
	 */
	meiversion?: string;
};

/**
 * Attributes capturing information regarding responsibility for some aspect of the text's creation, transcription, editing, or encoding.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.responsibility.html
 */
export type AttrResponsibility = {
	/**
	 * Indicates the agent(s) responsible for some aspect of the text's transcription, editing, or encoding.
	 * Its value must point to one or more identifiers declared in the document header. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.responsibility.html
	 */
	resp?: string;
};

/**
 * Attributes used to specify the language of the element's content.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
 */
export type AttrLang = {
	/**
	 * Specifies the language of the element's content. The value must be a valid xml:lang.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
	 */
	"xml:lang"?: string;
	/**
	 * Specifies the transliteration technique used. Value is a NMTOKEN.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lang.html
	 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
	 */
	translit?: string;
};

/**
 * Attributes used to supply a label for an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.labeled.html
 */
export type AttrLabeled = {
	/**
	 * Captures text to be used to generate a label for the element to which it’s attached, a "tool tip" or prefatory text, for example.
	 * Should not be used to record document content. Value is plain text.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.labeled.html
	 */
	label?: string;
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
	analog?: string;
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
	copyof?: string;
	/**
	 * Used to point to other elements that correspond to this one in a generic fashion. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	corresp?: string;
	/**
	 * points to one or more events in a user-defined collection that are known to be predecessors of the current element. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	follows?: string;
	/**
	 * Used to point to the next event(s) in a user-defined collection. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	next?: string;
	/**
	 * Points to one or more events in a user-defined collection that are known to be successors of the current element. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	precedes?: string;
	/**
	 * Points to the previous event(s) in a user-defined collection. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	prev?: string;
	/**
	 * Points to an element that is the same as the current element but is not a literal copy of the current element. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	sameas?: string;
	/**
	 * Points to elements that are synchronous with the current element. One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
	 */
	synch?: string;
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
	n?: string;
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
	class?: string;
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
	type?: string;
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
	codedval?: string;
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
	auth?: string;
	/**
	 * A web-accessible location of the controlled vocabulary or other authoritative source of identification or definition for this element or its content.
	 * This attribute may contain a complete URI or a partial URI which is completed by the value of the codedval attribute.
	 * Value conforms to data.URI.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
	 */
	"auth.uri"?: string;
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
	facs?: string;
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
	nonfiling?: number;
};
