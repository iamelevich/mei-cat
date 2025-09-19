import * as v from "valibot";
import { AttrLineAnlSchema } from "../../analytical/attr/line.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrLineGesSchema } from "../../gestural/attr/line.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { AttrLineVisSchema } from "../../visual/attr/line.vis";
import { AttrLineLogSchema } from "../attr/line.log";

/**
 * Base schema with attribute, to simplify types for LineSchema
 */
const LineBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLineAnlSchema.entries,
	...AttrLineGesSchema.entries,
	...AttrLineLogSchema.entries,
	...AttrLineVisSchema.entries,
});

/**
 * A visual line that cannot be represented by a more specific; <abbr>i.e.</abbr>, semantic, element.
 * @see https://music-encoding.org/guidelines/v5/elements/line.html
 */
export const LineSchema = v.lazy(() =>
	v.intersect([LineBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type LineData = v.InferOutput<typeof LineSchema>;
