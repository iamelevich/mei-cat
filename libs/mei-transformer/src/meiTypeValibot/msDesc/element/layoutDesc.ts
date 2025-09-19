import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { HeadSchema } from "../../shared/element/head";
import { PSchema } from "../../shared/element/p";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { LayoutSchema } from "../element/layout";

/**
 * Base schema with attribute, to simplify types for LayoutDescSchema
 */
const LayoutDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Collects layout descriptions.
 * @see https://music-encoding.org/guidelines/v5/elements/layoutDesc.html
 */
export const LayoutDescSchema = v.lazy(() =>
	v.intersect([
		LayoutDescBaseSchema,
		v.object({
			/**
			 * Reference to element head
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: v.optional(v.union([HeadSchema, v.array(HeadSchema)])),
			/**
			 * Reference to element layout
			 * @see https://music-encoding.org/guidelines/v5/elements/layout.html
			 */
			layout: v.optional(v.union([LayoutSchema, v.array(LayoutSchema)])),
			/**
			 * Reference to element p
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: v.optional(v.union([PSchema, v.array(PSchema)])),
		}),
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type LayoutDescData = v.InferOutput<typeof LayoutDescSchema>;
