import * as v from "valibot";

/**
 * Used by staffDef and scoreDef to provide default values for attributes in the logical domain that are related to key signatures..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySigDefault.log.html
 */
export const AttrKeySigDefaultLogSchema = v.object({
	// Direct attributes
	/**
	 * Written key signature.
	 */
	"@keysig": v.optional(v.string()),
});

export type AttrKeySigDefaultLogData = v.InferOutput<
	typeof AttrKeySigDefaultLogSchema
>;
