import * as v from "valibot";
import { AttrProportAnlSchema } from "../../analytical/attr/proport.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrProportGesSchema } from "../../gestural/attr/proport.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrProportVisSchema } from "../../visual/attr/proport.vis";
import { AttrProportLogSchema } from "../attr/proport.log";

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
export const ProportSchema = v.lazy(() => v.intersect([ProportBaseSchema]));

export type ProportData = v.InferOutput<typeof ProportSchema>;
