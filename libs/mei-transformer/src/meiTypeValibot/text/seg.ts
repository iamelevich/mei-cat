import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Represents any segmentation of text below the "text component" level.
 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
 */
export const SegSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

export type SegData = v.InferOutput<typeof SegSchema>;
