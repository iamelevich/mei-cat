import * as v from "valibot";
import { AttrFermataAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrFermataGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrFermataVisSchema } from "../../visual";
import { AttrFermataLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for FermataSchema
 */
const FermataBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrFermataAnlSchema.entries,
	...AttrFermataGesSchema.entries,
	...AttrFermataLogSchema.entries,
	...AttrFermataVisSchema.entries,
});

/**
 * An indication placed over a note or rest to indicate that it should be held longer than its written value. May also occur over a bar line to indicate the end of a phrase or section. Sometimes called a 'hold' or 'pause'.
 * @see https://music-encoding.org/guidelines/v5/elements/fermata.html
 */
export const FermataSchema = v.intersect([FermataBaseSchema]);

export type FermataData = v.InferOutput<typeof FermataSchema>;
