import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrStrophicusAnlSchema } from "../../analytical";
import { AttrStrophicusGesSchema } from "../../gestural";
import { AttrStrophicusLogSchema } from "..";
import { AttrStrophicusVisSchema } from "../../visual";

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
