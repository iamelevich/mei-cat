import * as v from "valibot";
import { ControlEventLikeCmnSchema } from "../../cmn";
import { VerseLikeSchema, VoltaSchema } from "../../lyrics";
import { ControlEventLikeSchema, LayerLikeSchema } from "../../shared";

/**
 * Groups elements that may appear as part of editorial and transcription elements in music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editTransPart.music.html
 */
export const EditTransPartMusicSchema = v.intersect([
	v.object({
		/**
		 * Alternative ending for a repeated passage of music; i.e., prima volta, seconda volta, etc.
		 * @see https://music-encoding.org/guidelines/v5/elements/volta.html
		 */
		volta: v.optional(
			v.union([v.lazy(() => VoltaSchema), v.array(v.lazy(() => VoltaSchema))]),
		),
	}),
	ControlEventLikeSchema,
	ControlEventLikeCmnSchema,
	LayerLikeSchema,
	VerseLikeSchema,
]);

export type EditTransPartMusicData = v.InferOutput<
	typeof EditTransPartMusicSchema
>;
