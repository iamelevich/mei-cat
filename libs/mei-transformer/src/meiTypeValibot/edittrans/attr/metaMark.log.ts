import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";
import { AttrEditSchema, AttrTransSchema } from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metaMark.log.html
 */
export const AttrMetaMarkLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrEditSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,
	...AttrTransSchema.entries,
});

export type AttrMetaMarkLogData = v.InferOutput<typeof AttrMetaMarkLogSchema>;
