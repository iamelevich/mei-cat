import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrEditSchema } from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCalendaredSchema,
	AttrCommonSchema,
	AttrDatableSchema,
	AttrLangSchema,
	ModelTextPhraseLikeSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for DateSchema
 */
const DateBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCalendaredSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * A string identifying a point in time or the time period between two such points.
 * @see https://music-encoding.org/guidelines/v5/elements/date.html
 */
export const DateSchema = v.intersect([
	DateBaseSchema,
	ModelTextPhraseLikeSchema,
]);

export type DateData = v.InferOutput<typeof DateSchema>;
