import * as v from "valibot";
import { AttrControlEventSchema } from "../../shared/attr/controlEvent";
import { AttrStartEndIdSchema } from "../../shared/attr/startEndId";
import { AttrTimestamp2LogSchema } from "../../shared/attr/timestamp2.log";
import { AttrEditSchema } from "../attr/edit";
import { AttrTransSchema } from "../attr/trans";

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
