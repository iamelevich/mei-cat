import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrOriscusAnlSchema } from "../../analytical";
import { AttrOriscusGesSchema } from "../../gestural";
import { AttrOriscusLogSchema } from "..";
import { AttrOriscusVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for OriscusSchema
 */
const OriscusBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrOriscusAnlSchema.entries,
	...AttrOriscusGesSchema.entries,
	...AttrOriscusLogSchema.entries,
	...AttrOriscusVisSchema.entries,
});

/**
 * Oriscus.
 * @see https://music-encoding.org/guidelines/v5/elements/oriscus.html
 */
export const OriscusSchema = v.intersect([OriscusBaseSchema]);

export type OriscusData = v.InferOutput<typeof OriscusSchema>;
