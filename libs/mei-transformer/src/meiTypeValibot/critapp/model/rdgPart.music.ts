import * as v from "valibot";
import { ControlEventLikeCmnSchema } from "../../cmn";
import { VerseLikeSchema, VoltaSchema } from "../../lyrics";
import { ControlEventLikeSchema, LayerLikeSchema } from "../../shared";

const RdgPartMusicBaseSchema = v.intersect([
	ControlEventLikeSchema,
	ControlEventLikeCmnSchema,
	LayerLikeSchema,
	VerseLikeSchema,
]);

type RdgPartMusicBaseData = v.InferOutput<typeof RdgPartMusicBaseSchema>;

/**
 * Groups elements that represent reading parts in music.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rdgPart.music.html
 */
export const RdgPartMusicSchema = v.intersect([
	ControlEventLikeSchema,
	ControlEventLikeCmnSchema,
	LayerLikeSchema,
	VerseLikeSchema,
	v.object({
		/**
		 * Alternative ending for a repeated passage of music; i.e., prima volta, seconda volta, etc.
		 * @see https://music-encoding.org/guidelines/v5/elements/volta.html
		 */
		volta: v.optional(
			v.union([v.lazy(() => VoltaSchema), v.array(v.lazy(() => VoltaSchema))]),
		),
	}),
]);

export type RdgPartMusicData = v.InferOutput<typeof RdgPartMusicSchema>;
