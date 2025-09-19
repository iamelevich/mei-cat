import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelLbLikeSchema,
	ModelRendLikeSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMNumAnlSchema } from "../../analytical";
import { AttrMNumGesSchema } from "../../gestural";
import { AttrMNumLogSchema } from "..";
import { AttrMNumVisSchema } from "../../visual";

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
export const MNumSchema = v.intersect([
	MNumBaseSchema,
	ModelLbLikeSchema,
	ModelRendLikeSchema,
]);

export type MNumData = v.InferOutput<typeof MNumSchema>;
