import * as v from "valibot";
import { AttrKeySigDefaultAnlSchema } from "../attr/keySigDefault.anl";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.anl.html
 */
export const AttrScoreDefAnlSchema = v.object({
	// Inherited attribute classes
	...AttrKeySigDefaultAnlSchema.entries,
});

export type AttrScoreDefAnlData = v.InferOutput<typeof AttrScoreDefAnlSchema>;
