import * as v from "valibot";
import { AttrEventSchema } from "../../shared";
import { AttrNumberedSchema } from "./numbered";

/**
 * Attributes for mRpt2.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt2.log.html
 */
export const AttrMRpt2LogSchema = v.object({
	...AttrEventSchema.entries,
	...AttrNumberedSchema.entries,
});

export type AttrMRpt2LogData = v.InferOutput<typeof AttrMRpt2LogSchema>;
