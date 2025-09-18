import * as v from "valibot";
import { AttrEventSchema } from "../../shared";
import { AttrNumberedSchema } from "./numbered";

/**
 * Attributes for multiRpt.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRpt.log.html
 */
export const AttrMultiRptLogSchema = v.object({
	...AttrEventSchema.entries,
	...AttrNumberedSchema.entries,
});

export type AttrMultiRptLogData = v.InferOutput<typeof AttrMultiRptLogSchema>;
