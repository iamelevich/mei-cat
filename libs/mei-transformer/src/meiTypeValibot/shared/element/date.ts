import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrEditSchema } from "../../edittrans/attr/edit";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCalendaredSchema } from "../attr/calendared";
import { AttrCommonSchema } from "../attr/common";
import { AttrDatableSchema } from "../attr/datable";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextPhraseLikeSchema } from "../model/textPhraseLike";

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
export const DateSchema = v.lazy(() =>
	v.intersect([DateBaseSchema, ModelTextPhraseLikeSchema]),
);

export type DateData = v.InferOutput<typeof DateSchema>;
