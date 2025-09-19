import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	ModelBiblLikeSchema,
	ModelHeadLikeSchema,
} from "../../shared";
import {
	AttrComponentTypeSchema,
	LocusSchema,
	LocusGrpSchema,
} from "../../msDesc";
import { AttrRecordTypeSchema } from "..";

/**
 * Base schema with attribute, to simplify types for SourceSchema
 */
const SourceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrComponentTypeSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrRecordTypeSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * A bibliographic description of a source used in the creation of the electronic file.
 * @see https://music-encoding.org/guidelines/v5/elements/source.html
 */
export const SourceSchema = v.intersect([
	SourceBaseSchema,
	v.object({
		/**
		 * Reference to element locus
		 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
		 */
		locus: v.optional(
			v.union([v.lazy(() => LocusSchema), v.array(v.lazy(() => LocusSchema))]),
		),
		/**
		 * Reference to element locusGrp
		 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
		 */
		locusGrp: v.optional(
			v.union([
				v.lazy(() => LocusGrpSchema),
				v.array(v.lazy(() => LocusGrpSchema)),
			]),
		),
	}),
	ModelBiblLikeSchema,
	ModelHeadLikeSchema,
]);

export type SourceData = v.InferOutput<typeof SourceSchema>;
