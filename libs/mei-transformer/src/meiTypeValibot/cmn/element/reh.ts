import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelLbLikeSchema,
	ModelRendLikeSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrRehAnlSchema } from "../../analytical";
import { AttrRehGesSchema } from "../../gestural";
import { AttrRehLogSchema } from "..";
import { AttrRehVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for RehSchema
 */
const RehBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrRehAnlSchema.entries,
	...AttrRehGesSchema.entries,
	...AttrRehLogSchema.entries,
	...AttrRehVisSchema.entries,
});

/**
 * In an orchestral score and its corresponding parts, a mark indicating a convenient point from which to resume rehearsal after a break.
 * @see https://music-encoding.org/guidelines/v5/elements/reh.html
 */
export const RehSchema = v.intersect([
	RehBaseSchema,
	ModelLbLikeSchema,
	ModelRendLikeSchema,
]);

export type RehData = v.InferOutput<typeof RehSchema>;
