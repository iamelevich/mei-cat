import * as v from "valibot";
import { StandardTagSchema } from "../common";
import {
	AttrCommonSchema,
	AttrExtentSchema,
	AttrHandIdentSchema,
} from "../shared";
import { AttrEditSchema } from "./attr/edit";
import { AttrReasonIdentSchema } from "./attr/reasonIdent";

/**
 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
 */
export const GapSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrHandIdentSchema.entries,
	...AttrReasonIdentSchema.entries,
});

export type GapData = v.InferOutput<typeof GapSchema>;
