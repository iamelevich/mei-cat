import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelLocrefLikeSchema } from "../../ptrref";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelIdentifierLikeSchema,
	ModelMilestoneLikeTextSchema,
	ModelTitleLikeSchema,
} from "..";
import { EditorSchema, ExtentSchema, RespStmtSchema, TextLangSchema } from ".";

/**
 * Base schema with attribute, to simplify types for SeriesSchema
 */
const SeriesBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains information about the serial publication in which a bibliographic item has appeared.
 * @see https://music-encoding.org/guidelines/v5/elements/series.html
 */
export const SeriesSchema = v.intersect([
	SeriesBaseSchema,
	v.object({
		/**
		 * Reference to element editor
		 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
		 */
		editor: v.optional(
			v.union([
				v.lazy(() => EditorSchema),
				v.array(v.lazy(() => EditorSchema)),
			]),
		),
		/**
		 * Reference to element extent
		 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
		 */
		extent: v.optional(
			v.union([
				v.lazy(() => ExtentSchema),
				v.array(v.lazy(() => ExtentSchema)),
			]),
		),
		/**
		 * Reference to element respStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
		 */
		respStmt: v.optional(
			v.union([
				v.lazy(() => RespStmtSchema),
				v.array(v.lazy(() => RespStmtSchema)),
			]),
		),
		/**
		 * Reference to element textLang
		 * @see https://music-encoding.org/guidelines/v5/elements/textLang.html
		 */
		textLang: v.optional(
			v.union([
				v.lazy(() => TextLangSchema),
				v.array(v.lazy(() => TextLangSchema)),
			]),
		),
	}),
	ModelIdentifierLikeSchema,
	ModelLocrefLikeSchema,
	ModelMilestoneLikeTextSchema,
	ModelTitleLikeSchema,
]);

export type SeriesData = v.InferOutput<typeof SeriesSchema>;
