import * as v from "valibot";
import { AttrLigatureAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrLigatureGesSchema } from "../../gestural";
import { ModelEventLikeNeumesSchema } from "../../neumes";
import { AttrCommonSchema, ModelEventLikeSchema } from "../../shared";
import { AttrLigatureVisSchema } from "../../visual";
import { AttrLigatureLogSchema, ModelEventLikeMensuralSchema } from "..";

/**
 * Base schema with attribute, to simplify types for LigatureSchema
 */
const LigatureBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLigatureAnlSchema.entries,
	...AttrLigatureGesSchema.entries,
	...AttrLigatureLogSchema.entries,
	...AttrLigatureVisSchema.entries,
});

/**
 * A mensural notation symbol that combines two or more notes into a single sign.
 * @see https://music-encoding.org/guidelines/v5/elements/ligature.html
 */
export const LigatureSchema = v.intersect([
	LigatureBaseSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelEventLikeSchema,
	ModelEventLikeMensuralSchema,
	ModelEventLikeNeumesSchema,
	ModelTranscriptionLikeSchema,
]);

export type LigatureData = v.InferOutput<typeof LigatureSchema>;
