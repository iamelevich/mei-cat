import * as v from "valibot";
import { AttrProportAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrProportGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrProportVisSchema } from "../../visual";
import { AttrProportLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for ProportSchema
 */
const ProportBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrProportAnlSchema.entries,
	...AttrProportGesSchema.entries,
	...AttrProportLogSchema.entries,
	...AttrProportVisSchema.entries,
});

/**
 * Description of note duration as arithmetic ratio.
 * @see https://music-encoding.org/guidelines/v5/elements/proport.html
 */
export const ProportSchema = v.intersect([ProportBaseSchema]);

export type ProportData = v.InferOutput<typeof ProportSchema>;
