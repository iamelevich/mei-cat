import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for inscription element.
 * @see https://music-encoding.org/guidelines/v5/elements/inscription.html
 */
export const InscriptionSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type InscriptionData = v.InferOutput<typeof InscriptionSchema>;
