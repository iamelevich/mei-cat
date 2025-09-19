import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../attr/common";
import { AttrSourceSchema } from "../attr/source";

/**
 * Base schema with attribute, to simplify types for ColLayoutSchema
 */
const ColLayoutBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrSourceSchema.entries,

	// Direct attributes
	/**
	 * Records the number of columns.
	 */
	"@cols": v.optional(v.string()),
});

/**
 * An empty formatting element that signals the start of columnar layout.
 * @see https://music-encoding.org/guidelines/v5/elements/colLayout.html
 */
export const ColLayoutSchema = v.lazy(() => v.intersect([ColLayoutBaseSchema]));

export type ColLayoutData = v.InferOutput<typeof ColLayoutSchema>;
