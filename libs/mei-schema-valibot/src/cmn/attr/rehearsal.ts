import * as v from "valibot";

/**
 * Attributes used by scoreDef and staffDef to provide default information about rehearsal numbers/letters..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rehearsal.html
 */
export const AttrRehearsalSchema = v.object({
	// Direct attributes
	/**
	 * Describes the enclosing shape for rehearsal marks.
	 */
	"@reh.enclose": v.optional(v.string()),
});

export type AttrRehearsalData = v.InferOutput<typeof AttrRehearsalSchema>;
