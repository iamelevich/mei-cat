import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	HeadSchema,
	ModelTextPhraseLikeLimitedSchema,
	PSchema,
} from "../../shared";
import { LayoutSchema } from ".";

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
export const LayoutDescSchema = v.intersect([
	LayoutDescBaseSchema,
	v.object({
		/**
		 * Reference to element head
		 * @see https://music-encoding.org/guidelines/v5/elements/head.html
		 */
		head: v.optional(
			v.union([v.lazy(() => HeadSchema), v.array(v.lazy(() => HeadSchema))]),
		),
		/**
		 * Reference to element layout
		 * @see https://music-encoding.org/guidelines/v5/elements/layout.html
		 */
		layout: v.optional(
			v.union([
				v.lazy(() => LayoutSchema),
				v.array(v.lazy(() => LayoutSchema)),
			]),
		),
		/**
		 * Reference to element p
		 * @see https://music-encoding.org/guidelines/v5/elements/p.html
		 */
		p: v.optional(
			v.union([v.lazy(() => PSchema), v.array(v.lazy(() => PSchema))]),
		),
	}),
	ModelTextPhraseLikeLimitedSchema,
]);

export type LayoutDescData = v.InferOutput<typeof LayoutDescSchema>;
