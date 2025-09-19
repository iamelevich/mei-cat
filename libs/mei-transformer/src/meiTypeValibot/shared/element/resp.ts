import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDatableSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for RespSchema
 */
const RespBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * A phrase describing the nature of intellectual responsibility.
 * @see https://music-encoding.org/guidelines/v5/elements/resp.html
 */
export const RespSchema = v.intersect([
	RespBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type RespData = v.InferOutput<typeof RespSchema>;
