import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for revisionDesc element.
 * @see https://music-encoding.org/guidelines/v5/elements/revisionDesc.html
 */
export const RevisionDescSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type RevisionDescData = v.InferOutput<typeof RevisionDescSchema>;
