import * as v from "valibot";

/**
 * Used by staffDef and scoreDef to provide default values for attributes in the analytical domain that are related to key signatures..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySigDefault.anl.html
 */
export const AttrKeySigDefaultAnlSchema = v.object({
	// Direct attributes
	/**
	 * Contains an accidental for the tonic key, if one is required, <abbr>e.g.</abbr>, if <att>key.pname</att> equals <val>c</val> and <att>key.accid</att> equals <val>s</val>, then a tonic of C# is indicated.
	 */
	"@key.accid": v.optional(v.string()),
	/**
	 * Indicates major, minor, or other tonality.
	 */
	"@key.mode": v.optional(v.string()),
	/**
	 * Holds the pitch name of the tonic key, <abbr>e.g.</abbr>, <val>c</val> for the key of C.
	 */
	"@key.pname": v.optional(v.string()),
});

export type AttrKeySigDefaultAnlData = v.InferOutput<
	typeof AttrKeySigDefaultAnlSchema
>;
