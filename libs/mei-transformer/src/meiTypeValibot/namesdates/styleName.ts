import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for styleName element.
 * @see https://music-encoding.org/guidelines/v5/elements/styleName.html
 */
export const StyleNameSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type StyleNameData = v.InferOutput<typeof StyleNameSchema>;
