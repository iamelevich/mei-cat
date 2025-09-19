import * as v from "valibot";
import { AttrStrophicusAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrStrophicusGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrStrophicusVisSchema } from "../../visual";
import { AttrStrophicusLogSchema } from "..";

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
export const StrophicusSchema = v.intersect([StrophicusBaseSchema]);

export type StrophicusData = v.InferOutput<typeof StrophicusSchema>;
