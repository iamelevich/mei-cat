import * as v from "valibot";
import { AttrStrophicusAnlSchema } from "../../analytical/attr/strophicus.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrStrophicusGesSchema } from "../../gestural/attr/strophicus.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrStrophicusVisSchema } from "../../visual/attr/strophicus.vis";
import { AttrStrophicusLogSchema } from "../attr/strophicus.log";

/**
 * Base schema with attribute, to simplify types for StrophicusSchema
 */
const StrophicusBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrStrophicusAnlSchema.entries,
	...AttrStrophicusGesSchema.entries,
	...AttrStrophicusLogSchema.entries,
	...AttrStrophicusVisSchema.entries,
});

/**
 * Strophicus.
 * @see https://music-encoding.org/guidelines/v5/elements/strophicus.html
 */
export const StrophicusSchema = v.lazy(() =>
	v.intersect([StrophicusBaseSchema]),
);

export type StrophicusData = v.InferOutput<typeof StrophicusSchema>;
