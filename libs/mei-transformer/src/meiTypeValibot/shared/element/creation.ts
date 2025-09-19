import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { DedicationSchema } from "../../header";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDatableSchema,
	AttrLangSchema,
	ModelHeadLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for CreationSchema
 */
const CreationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Non-bibliographic details of the creation of an intellectual entity, in narrative form, such as the date, place, and circumstances of its composition. More detailed information may be captured within the history element.
 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
 */
export const CreationSchema = v.intersect([
	CreationBaseSchema,
	v.object({
		/**
		 * Reference to element dedication
		 * @see https://music-encoding.org/guidelines/v5/elements/dedication.html
		 */
		dedication: v.optional(
			v.union([
				v.lazy(() => DedicationSchema),
				v.array(v.lazy(() => DedicationSchema)),
			]),
		),
	}),
	ModelHeadLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type CreationData = v.InferOutput<typeof CreationSchema>;
