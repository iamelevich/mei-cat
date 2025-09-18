import * as v from "valibot";

/**
 * Attributes for trill.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.trill.log.html
 */
export const AttrTrillLogSchema = v.object({
	// TODO: Add trill.log attributes
});

export type AttrTrillLogData = v.InferOutput<typeof AttrTrillLogSchema>;
