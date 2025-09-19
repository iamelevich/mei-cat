import * as v from "valibot";
import { AttrLyricsAnlSchema } from "../../analytical/attr/lyrics.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrLyricsGesSchema } from "../../gestural/attr/lyrics.ges";
import { AttrLyricsLogSchema } from "../../lyrics/attr/lyrics.log";
import { ModelLgLikeSchema } from "../../text/model/lgLike";
import { ModelLLikeSchema } from "../../text/model/lLike";
import { AttrLyricsVisSchema } from "../../visual/attr/lyrics.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrXySchema } from "../attr/xy";
import { ModelHeadLikeSchema } from "../model/headLike";

/**
 * Base schema with attribute, to simplify types for LgSchema
 */
const LgBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrLyricsAnlSchema.entries,
	...AttrLyricsGesSchema.entries,
	...AttrLyricsLogSchema.entries,
	...AttrLyricsVisSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrXySchema.entries,
});

/**
 * May be used for any section of text that is organized as a group of lines; however, it is most often used for a group of verse lines functioning as a formal unit, <abbr>e.g.</abbr>, a stanza, refrain, verse paragraph, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/lg.html
 */
export const LgSchema = v.lazy(() =>
	v.intersect([
		LgBaseSchema,
		ModelHeadLikeSchema,
		ModelLgLikeSchema,
		ModelLLikeSchema,
	]),
);

export type LgData = v.InferOutput<typeof LgSchema>;
