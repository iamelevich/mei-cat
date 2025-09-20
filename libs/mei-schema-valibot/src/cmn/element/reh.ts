import * as v from "valibot";
import { AttrRehAnlSchema } from "../../analytical/attr/reh.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrRehGesSchema } from "../../gestural/attr/reh.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelLbLikeSchema } from "../../shared/model/lbLike";
import { ModelRendLikeSchema } from "../../shared/model/rendLike";
import { AttrRehVisSchema } from "../../visual/attr/reh.vis";
import { AttrRehLogSchema } from "../attr/reh.log";

/**
 * Base schema with attribute, to simplify types for RehSchema
 */
const RehBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrRehAnlSchema.entries,
	...AttrRehGesSchema.entries,
	...AttrRehLogSchema.entries,
	...AttrRehVisSchema.entries,
});

/**
 * In an orchestral score and its corresponding parts, a mark indicating a convenient point from which to resume rehearsal after a break.
 * @see https://music-encoding.org/guidelines/v5/elements/reh.html
 */
export const RehSchema = v.lazy(() =>
	v.intersect([RehBaseSchema, ModelLbLikeSchema, ModelRendLikeSchema]),
);

export type RehData = v.InferOutput<typeof RehSchema>;
