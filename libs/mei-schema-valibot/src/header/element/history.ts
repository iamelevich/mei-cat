import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelTextComponentLikeSchema } from "../../shared/model/textComponentLike";
import { ModelDivLikeSchema } from "../../text/model/divLike";
import { AcquisitionSchema } from "./acquisition";
import { ExhibHistSchema } from "./exhibHist";
import { ProvenanceSchema } from "./provenance";
import { TreatHistSchema } from "./treatHist";
import { TreatSchedSchema } from "./treatSched";

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
export const HistorySchema = v.lazy(() =>
	v.intersect([
		HistoryBaseSchema,
		v.object({
			/**
			 * Reference to element acquisition
			 * @see https://music-encoding.org/guidelines/v5/elements/acquisition.html
			 */
			acquisition: v.optional(
				v.union([v.array(AcquisitionSchema), AcquisitionSchema]),
			),
			/**
			 * Reference to element exhibHist
			 * @see https://music-encoding.org/guidelines/v5/elements/exhibHist.html
			 */
			exhibHist: v.optional(
				v.union([v.array(ExhibHistSchema), ExhibHistSchema]),
			),
			/**
			 * Reference to element provenance
			 * @see https://music-encoding.org/guidelines/v5/elements/provenance.html
			 */
			provenance: v.optional(
				v.union([v.array(ProvenanceSchema), ProvenanceSchema]),
			),
			/**
			 * Reference to element treatHist
			 * @see https://music-encoding.org/guidelines/v5/elements/treatHist.html
			 */
			treatHist: v.optional(
				v.union([v.array(TreatHistSchema), TreatHistSchema]),
			),
			/**
			 * Reference to element treatSched
			 * @see https://music-encoding.org/guidelines/v5/elements/treatSched.html
			 */
			treatSched: v.optional(
				v.union([v.array(TreatSchedSchema), TreatSchedSchema]),
			),
		}),
		ModelDivLikeSchema,
		ModelHeadLikeSchema,
		ModelTextComponentLikeSchema,
	]),
);

export type HistoryData = v.InferOutput<typeof HistorySchema>;
