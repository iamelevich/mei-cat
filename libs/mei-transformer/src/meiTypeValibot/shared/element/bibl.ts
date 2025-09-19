import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrPointingSchema } from "../attr/pointing";
import { ModelBiblPartSchema } from "../model/biblPart";
import { ModelImprintPartSchema } from "../model/imprintPart";
import { ModelTextPhraseLikeSchema } from "../model/textPhraseLike";

/**
 * Base schema with attribute, to simplify types for BiblSchema
 */
const BiblBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrPointingSchema.entries,
});

/**
 * Provides a loosely-structured bibliographic citation in which the sub-components may or may not be explicitly marked.
 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
 */
export const BiblSchema = v.lazy(() =>
	v.intersect([
		BiblBaseSchema,
		ModelBiblPartSchema,
		ModelImprintPartSchema,
		ModelTextPhraseLikeSchema,
	]),
);

export type BiblData = v.InferOutput<typeof BiblSchema>;
