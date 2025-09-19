import * as v from "valibot";
import { AttrKeySigAnlSchema } from "../../analytical/attr/keySig.anl";
import { StandardTagSchema } from "../../common";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrKeySigGesSchema } from "../../gestural/attr/keySig.ges";
import { AttrKeySigVisSchema } from "../../visual/attr/keySig.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrKeySigLogSchema } from "../attr/keySig.log";
import { ModelKeyAccidLikeSchema } from "../model/keyAccidLike";

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
export const KeySigSchema = v.lazy(() =>
	v.intersect([
		KeySigBaseSchema,
		ModelKeyAccidLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type KeySigData = v.InferOutput<typeof KeySigSchema>;
