import * as v from "valibot";
import { AttrMNumAnlSchema } from "../../analytical/attr/mNum.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMNumGesSchema } from "../../gestural/attr/mNum.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelLbLikeSchema } from "../../shared/model/lbLike";
import { ModelRendLikeSchema } from "../../shared/model/rendLike";
import { AttrMNumVisSchema } from "../../visual/attr/mNum.vis";
import { AttrMNumLogSchema } from "../attr/mNum.log";

/**
 * Base schema with attribute, to simplify types for MNumSchema
 */
const MNumBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMNumAnlSchema.entries,
	...AttrMNumGesSchema.entries,
	...AttrMNumLogSchema.entries,
	...AttrMNumVisSchema.entries,
});

/**
 * Designation, name, or label for a measure, often but not always consisting of digits. Use this element when the <att>n</att> attribute on <gi scheme="MEI" >measure</gi> does not adequately capture the appearance or placement of the measure number/label.
 * @see https://music-encoding.org/guidelines/v5/elements/mNum.html
 */
export const MNumSchema = v.lazy(() =>
	v.intersect([MNumBaseSchema, ModelLbLikeSchema, ModelRendLikeSchema]),
);

export type MNumData = v.InferOutput<typeof MNumSchema>;
