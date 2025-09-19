import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrExtSymAuthSchema } from "../../externalsymbols/attr/extSym.auth";
import { AttrColorSchema } from "../attr/color";
import { AttrCommonSchema } from "../attr/common";
import { AttrHorizontalAlignSchema } from "../attr/horizontalAlign";
import { AttrLangSchema } from "../attr/lang";
import { AttrTextRenditionSchema } from "../attr/textRendition";
import { AttrTypographySchema } from "../attr/typography";
import { AttrVerticalAlignSchema } from "../attr/verticalAlign";
import { AttrWhitespaceSchema } from "../attr/whitespace";
import { ModelTextPhraseLikeSchema } from "../model/textPhraseLike";

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
export const RendSchema = v.lazy(() =>
	v.intersect([
		RendBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type RendData = v.InferOutput<typeof RendSchema>;
