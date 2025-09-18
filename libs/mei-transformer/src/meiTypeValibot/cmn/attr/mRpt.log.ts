import * as v from "valibot";
import { AttrEventSchema } from "../../shared";
import { AttrNumberedSchema } from "./numbered";

/**
 * Attributes for mRpt.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt.log.html
 */
export const AttrMRptLogSchema = v.object({
	...AttrEventSchema.entries,
	...AttrNumberedSchema.entries,
});

export type AttrMRptLogData = v.InferOutput<typeof AttrMRptLogSchema>;
