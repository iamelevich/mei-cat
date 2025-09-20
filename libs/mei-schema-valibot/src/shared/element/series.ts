import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ModelLocrefLikeSchema } from "../../ptrref/model/locrefLike";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { ModelIdentifierLikeSchema } from "../model/identifierLike";
import { ModelMilestoneLikeTextSchema } from "../model/milestoneLike.text";
import { ModelTitleLikeSchema } from "../model/titleLike";
import { EditorSchema } from "./editor";
import { ExtentSchema } from "./extent";
import { RespStmtSchema } from "./respStmt";
import { TextLangSchema } from "./textLang";

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
export const SeriesSchema = v.lazy(() =>
	v.intersect([
		SeriesBaseSchema,
		v.object({
			/**
			 * Reference to element editor
			 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
			 */
			editor: v.optional(v.union([v.array(EditorSchema), EditorSchema])),
			/**
			 * Reference to element extent
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: v.optional(v.union([v.array(ExtentSchema), ExtentSchema])),
			/**
			 * Reference to element respStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: v.optional(v.union([v.array(RespStmtSchema), RespStmtSchema])),
			/**
			 * Reference to element textLang
			 * @see https://music-encoding.org/guidelines/v5/elements/textLang.html
			 */
			textLang: v.optional(v.union([v.array(TextLangSchema), TextLangSchema])),
		}),
		ModelIdentifierLikeSchema,
		ModelLocrefLikeSchema,
		ModelMilestoneLikeTextSchema,
		ModelTitleLikeSchema,
	]),
);

export type SeriesData = v.InferOutput<typeof SeriesSchema>;
