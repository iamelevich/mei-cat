import * as v from "valibot";
import { AttrEventSchema } from "../../shared";
import { AttrNumberedSchema } from "./numbered";

/**
 * Attributes for multiRest.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRest.log.html
 */
export const AttrMultiRestLogSchema = v.object({
	...AttrEventSchema.entries,
	...AttrNumberedSchema.entries,
});

export type AttrMultiRestLogData = v.InferOutput<typeof AttrMultiRestLogSchema>;
