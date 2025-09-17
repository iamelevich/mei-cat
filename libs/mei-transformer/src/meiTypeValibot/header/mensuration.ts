import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for mensuration element.
 * @see https://music-encoding.org/guidelines/v5/elements/mensuration.html
 */
export const MensurationSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type MensurationData = v.InferOutput<typeof MensurationSchema>;
