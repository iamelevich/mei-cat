import * as v from "valibot";

/**
 * Logical domain attributes. The n attribute should be used for repetition numbers. Numbers need not be consecutive; they may also be expressed as ranges, <abbr>e.g.</abbr>, 2-3,6..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.volta.log.html
 */
export const AttrVoltaLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrVoltaLogData = v.InferOutput<typeof AttrVoltaLogSchema>;
