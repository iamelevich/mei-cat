import * as v from "valibot";
import { AttrVoltaAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import { ModelEditLikeSchema } from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrVoltaGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	AttrLangSchema,
	DirSchema,
	DynamSchema,
	ModelLbLikeSchema,
	ModelSylLikeSchema,
	SpaceSchema,
	TempoSchema,
} from "../../shared";
import { AttrVoltaVisSchema } from "../../visual";
import { AttrVoltaLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for VoltaSchema
 */
const VoltaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrVoltaAnlSchema.entries,
	...AttrVoltaGesSchema.entries,
	...AttrVoltaLogSchema.entries,
	...AttrVoltaVisSchema.entries,
});

/**
 * Sung text for a specific iteration of a repeated section of music.
 * @see https://music-encoding.org/guidelines/v5/elements/volta.html
 */
export const VoltaSchema = v.intersect([
	VoltaBaseSchema,
	v.object({
		/**
		 * Reference to element dir
		 * @see https://music-encoding.org/guidelines/v5/elements/dir.html
		 */
		dir: v.optional(
			v.union([v.lazy(() => DirSchema), v.array(v.lazy(() => DirSchema))]),
		),
		/**
		 * Reference to element dynam
		 * @see https://music-encoding.org/guidelines/v5/elements/dynam.html
		 */
		dynam: v.optional(
			v.union([v.lazy(() => DynamSchema), v.array(v.lazy(() => DynamSchema))]),
		),
		/**
		 * Reference to element space
		 * @see https://music-encoding.org/guidelines/v5/elements/space.html
		 */
		space: v.optional(
			v.union([v.lazy(() => SpaceSchema), v.array(v.lazy(() => SpaceSchema))]),
		),
		/**
		 * Reference to element tempo
		 * @see https://music-encoding.org/guidelines/v5/elements/tempo.html
		 */
		tempo: v.optional(
			v.union([v.lazy(() => TempoSchema), v.array(v.lazy(() => TempoSchema))]),
		),
	}),
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelLbLikeSchema,
	ModelSylLikeSchema,
]);

export type VoltaData = v.InferOutput<typeof VoltaSchema>;
