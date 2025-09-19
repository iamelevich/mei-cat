import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrExtentSchema } from "../../shared/attr/extent";
import { AttrHandIdentSchema } from "../../shared/attr/handIdent";
import { AttrEditSchema } from "../attr/edit";
import { AttrReasonIdentSchema } from "../attr/reasonIdent";

/**
 * Base schema with attribute, to simplify types for GapSchema
 */
const GapBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrHandIdentSchema.entries,
	...AttrReasonIdentSchema.entries,
});

/**
 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
 */
export const GapSchema = v.lazy(() => v.intersect([GapBaseSchema]));

export type GapData = v.InferOutput<typeof GapSchema>;
