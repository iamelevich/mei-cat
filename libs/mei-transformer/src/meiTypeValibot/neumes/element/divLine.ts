import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrExtSymSchema } from "../../externalsymbols";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBasicSchema,
	AttrClassedSchema,
	AttrColorSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
	AttrStaffLocSchema,
	AttrVisibilitySchema,
	AttrVisualOffsetHoSchema,
	AttrXySchema,
} from "../../shared";
import { AttrDivLineLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for DivLineSchema
 */
const DivLineBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrClassedSchema.entries,
	...AttrColorSchema.entries,
	...AttrDivLineLogSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrXySchema.entries,
});

/**
 * Represents a division (divisio) in neume notation. Divisions indicate short, medium, or long pauses similar to breath marks in modern notation.
 * @see https://music-encoding.org/guidelines/v5/elements/divLine.html
 */
export const DivLineSchema = v.intersect([DivLineBaseSchema]);

export type DivLineData = v.InferOutput<typeof DivLineSchema>;
