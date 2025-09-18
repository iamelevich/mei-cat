import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";
import { AttrEditSchema, AttrTransSchema } from "./";

/**
 * Logical domain attributes for metaMark.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metaMark.log.html
 */
export const AttrMetaMarkLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
	...AttrEditSchema.entries,
	...AttrTransSchema.entries,
});

export type AttrMetaMarkLogData = v.InferOutput<typeof AttrMetaMarkLogSchema>;
