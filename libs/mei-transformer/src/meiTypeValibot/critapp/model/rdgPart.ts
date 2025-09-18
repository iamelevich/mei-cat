import * as v from "valibot";
import { SylLikeSchema } from "../../shared";
import { RdgPartMusicSchema } from "./rdgPart.music";
import { RdgPartTextSchema } from "./rdgPart.text";

/**
 * Groups elements that represent reading parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rdgPart.html
 */
export const RdgPartSchema = v.intersect([
	RdgPartMusicSchema,
	RdgPartTextSchema,
	SylLikeSchema,
]);

export type RdgPartData = v.InferOutput<typeof RdgPartSchema>;
