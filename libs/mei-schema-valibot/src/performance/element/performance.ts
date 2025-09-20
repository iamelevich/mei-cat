import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { RecordingSchema } from "./recording";

/**
 * Base schema with attribute, to simplify types for PerformanceSchema
 */
const PerformanceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * A presentation of one or more musical works.
 * @see https://music-encoding.org/guidelines/v5/elements/performance.html
 */
export const PerformanceSchema = v.lazy(() =>
	v.intersect([
		PerformanceBaseSchema,
		v.object({
			/**
			 * Reference to element recording
			 * @see https://music-encoding.org/guidelines/v5/elements/recording.html
			 */
			recording: v.optional(
				v.union([v.array(RecordingSchema), RecordingSchema]),
			),
		}),
	]),
);

export type PerformanceData = v.InferOutput<typeof PerformanceSchema>;
