import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../attr/common";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { type MusicData, MusicSchema } from "./music";

/**
 * Base schema with attribute, to simplify types for GroupSchema
 */
const GroupBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

type GroupBaseData = v.InferOutput<typeof GroupBaseSchema>;

/**
 * Contains a composite musical text, grouping together a sequence of distinct musical texts (or groups of such musical texts) which are regarded as a unit for some purpose, for example, the collected works of a composer.
 * @see https://music-encoding.org/guidelines/v5/elements/group.html
 */
export const GroupSchema: v.GenericSchema<GroupData> = v.lazy(() =>
	v.intersect([
		GroupBaseSchema,
		v.object({
			/**
			 * Reference to element group
			 * @see https://music-encoding.org/guidelines/v5/elements/group.html
			 */
			group: v.optional(v.union([v.array(GroupSchema), GroupSchema])),
			/**
			 * Reference to element music
			 * @see https://music-encoding.org/guidelines/v5/elements/music.html
			 */
			music: v.optional(v.union([v.array(MusicSchema), MusicSchema])),
		}),
	]),
);

export type GroupData = GroupBaseData & {
	group?: GroupData | GroupData[];
	music?: MusicData | MusicData[];
};
