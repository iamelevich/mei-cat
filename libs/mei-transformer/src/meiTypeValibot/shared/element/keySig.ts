import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrKeySigLogSchema,
	ModelKeyAccidLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrKeySigAnlSchema } from "../../analytical";
import { AttrKeySigGesSchema } from "../../gestural";
import { AttrKeySigVisSchema } from "../../visual";
import { ModelTranscriptionLikeSchema } from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for KeySigSchema
 */
const KeySigBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrKeySigAnlSchema.entries,
	...AttrKeySigGesSchema.entries,
	...AttrKeySigLogSchema.entries,
	...AttrKeySigVisSchema.entries,
});

/**
 * Written key signature.
 * @see https://music-encoding.org/guidelines/v5/elements/keySig.html
 */
export const KeySigSchema = v.intersect([
	KeySigBaseSchema,
	ModelKeyAccidLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type KeySigData = v.InferOutput<typeof KeySigSchema>;
