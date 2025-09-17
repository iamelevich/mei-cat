import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrHorizontalAlignSchema } from "../shared/attr/horizontalAlign";
import { AttrVerticalAlignSchema } from "../shared/attr/verticalAlign";
import { AttrXySchema } from "../shared/attr/xy";

/**
 * Groups elements representing or containing graphic information such as an illustration or figure.
 * @see https://music-encoding.org/guidelines/v5/elements/fig.html
 */
export const FigSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHorizontalAlignSchema.entries,
	...AttrVerticalAlignSchema.entries,
	...AttrXySchema.entries,
});

export type FigData = v.InferOutput<typeof FigSchema>;
