import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrExtSymAuthSchema } from "../../externalsymbols";
import {
	AttrColorSchema,
	AttrCommonSchema,
	AttrHorizontalAlignSchema,
	AttrLangSchema,
	AttrTextRenditionSchema,
	AttrTypographySchema,
	AttrVerticalAlignSchema,
	AttrWhitespaceSchema,
	ModelTextPhraseLikeSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for RendSchema
 */
const RendBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrColorSchema.entries,
	...AttrCommonSchema.entries,
	...AttrExtSymAuthSchema.entries,
	...AttrHorizontalAlignSchema.entries,
	...AttrLangSchema.entries,
	...AttrTextRenditionSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVerticalAlignSchema.entries,
	...AttrWhitespaceSchema.entries,

	// Direct attributes
	/**
	 * A positive value for rotation rotates the text in a counter-clockwise fashion, while negative values produce clockwise rotation.
	 */
	"@rotation": v.optional(v.string()),
});

/**
 * A formatting element indicating special visual rendering, <abbr>e.g.</abbr>, bold or italicized, of a text word or phrase.
 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
 */
export const RendSchema = v.intersect([
	RendBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type RendData = v.InferOutput<typeof RendSchema>;
