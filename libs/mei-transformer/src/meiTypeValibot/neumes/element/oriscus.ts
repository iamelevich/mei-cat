import * as v from "valibot";
import { AttrOriscusAnlSchema } from "../../analytical/attr/oriscus.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrOriscusGesSchema } from "../../gestural/attr/oriscus.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrOriscusVisSchema } from "../../visual/attr/oriscus.vis";
import { AttrOriscusLogSchema } from "../attr/oriscus.log";

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
export const OriscusSchema = v.lazy(() => v.intersect([OriscusBaseSchema]));

export type OriscusData = v.InferOutput<typeof OriscusSchema>;
