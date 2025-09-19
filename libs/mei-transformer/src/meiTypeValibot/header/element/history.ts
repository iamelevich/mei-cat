import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	ModelHeadLikeSchema,
	ModelTextComponentLikeSchema,
} from "../../shared";
import {
	AcquisitionSchema,
	ExhibHistSchema,
	ProvenanceSchema,
	TreatHistSchema,
	TreatSchedSchema,
} from ".";
import { ModelDivLikeSchema } from "../../text";

/**
 * Base schema with attribute, to simplify types for HistorySchema
 */
const HistoryBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Provides a container for information about the history of a resource other than the circumstances of its creation.
 * @see https://music-encoding.org/guidelines/v5/elements/history.html
 */
export const HistorySchema = v.intersect([
	HistoryBaseSchema,
	v.object({
		/**
		 * Reference to element acquisition
		 * @see https://music-encoding.org/guidelines/v5/elements/acquisition.html
		 */
		acquisition: v.optional(
			v.union([
				v.lazy(() => AcquisitionSchema),
				v.array(v.lazy(() => AcquisitionSchema)),
			]),
		),
		/**
		 * Reference to element exhibHist
		 * @see https://music-encoding.org/guidelines/v5/elements/exhibHist.html
		 */
		exhibHist: v.optional(
			v.union([
				v.lazy(() => ExhibHistSchema),
				v.array(v.lazy(() => ExhibHistSchema)),
			]),
		),
		/**
		 * Reference to element provenance
		 * @see https://music-encoding.org/guidelines/v5/elements/provenance.html
		 */
		provenance: v.optional(
			v.union([
				v.lazy(() => ProvenanceSchema),
				v.array(v.lazy(() => ProvenanceSchema)),
			]),
		),
		/**
		 * Reference to element treatHist
		 * @see https://music-encoding.org/guidelines/v5/elements/treatHist.html
		 */
		treatHist: v.optional(
			v.union([
				v.lazy(() => TreatHistSchema),
				v.array(v.lazy(() => TreatHistSchema)),
			]),
		),
		/**
		 * Reference to element treatSched
		 * @see https://music-encoding.org/guidelines/v5/elements/treatSched.html
		 */
		treatSched: v.optional(
			v.union([
				v.lazy(() => TreatSchedSchema),
				v.array(v.lazy(() => TreatSchedSchema)),
			]),
		),
	}),
	ModelDivLikeSchema,
	ModelHeadLikeSchema,
	ModelTextComponentLikeSchema,
]);

export type HistoryData = v.InferOutput<typeof HistorySchema>;
