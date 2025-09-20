import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrXySchema } from "../../shared/attr/xy";
import { TdSchema } from "./td";
import { ThSchema } from "./th";

/**
 * Base schema with attribute, to simplify types for TrSchema
 */
const TrBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrXySchema.entries,
});

/**
 * A formatting element that contains one or more cells (intersection of a row and a column) in a <gi scheme="MEI">table</gi>.
 * @see https://music-encoding.org/guidelines/v5/elements/tr.html
 */
export const TrSchema = v.lazy(() =>
	v.intersect([
		TrBaseSchema,
		v.object({
			/**
			 * Reference to element td
			 * @see https://music-encoding.org/guidelines/v5/elements/td.html
			 */
			td: v.optional(v.union([v.array(TdSchema), TdSchema])),
			/**
			 * Reference to element th
			 * @see https://music-encoding.org/guidelines/v5/elements/th.html
			 */
			th: v.optional(v.union([v.array(ThSchema), ThSchema])),
		}),
	]),
);

export type TrData = v.InferOutput<typeof TrSchema>;
