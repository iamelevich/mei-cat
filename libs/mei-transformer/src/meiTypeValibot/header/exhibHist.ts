import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for exhibHist element.
 * @see https://music-encoding.org/guidelines/v5/elements/exhibHist.html
 */
export const ExhibHistSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ExhibHistData = v.InferOutput<typeof ExhibHistSchema>;
