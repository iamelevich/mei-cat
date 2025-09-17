import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for projectDesc element.
 * @see https://music-encoding.org/guidelines/v5/elements/projectDesc.html
 */
export const ProjectDescSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ProjectDescData = v.InferOutput<typeof ProjectDescSchema>;
