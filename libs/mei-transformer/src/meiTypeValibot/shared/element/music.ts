import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../attr/common";
import { AttrMeiVersionSchema } from "../attr/meiVersion";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { MacroMusicPartSchema } from "../macro/musicPart";
import { ModelResourceLikeSchema } from "../model/resourceLike";

/**
 * Base schema with attribute, to simplify types for MusicSchema
 */
const MusicBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMeiVersionSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Contains a single musical text of any kind, whether unitary or composite, for example, an etude, opera, song cycle, symphony, or anthology of piano solos.
 * @see https://music-encoding.org/guidelines/v5/elements/music.html
 */
export const MusicSchema = v.lazy(() =>
	v.intersect([MusicBaseSchema, MacroMusicPartSchema, ModelResourceLikeSchema]),
);

export type MusicData = v.InferOutput<typeof MusicSchema>;
