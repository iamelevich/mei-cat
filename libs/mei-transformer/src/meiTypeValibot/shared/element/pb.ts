import * as v from "valibot";
import { AttrPbAnlSchema } from "../../analytical/attr/pb.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrPbGesSchema } from "../../gestural/attr/pb.ges";
import { AttrPbVisSchema } from "../../visual/attr/pb.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrPbLogSchema } from "../attr/pb.log";
import { AttrPointingSchema } from "../attr/pointing";
import { AttrSourceSchema } from "../attr/source";
import { MacroMetaLikePageSchema } from "../macro/metaLike.page";

/**
 * Base schema with attribute, to simplify types for PbSchema
 */
const PbBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPbAnlSchema.entries,
	...AttrPbGesSchema.entries,
	...AttrPbLogSchema.entries,
	...AttrPbVisSchema.entries,
	...AttrPointingSchema.entries,
	...AttrSourceSchema.entries,
});

/**
 * An empty formatting element that forces text to begin on a new page.
 * @see https://music-encoding.org/guidelines/v5/elements/pb.html
 */
export const PbSchema = v.lazy(() =>
	v.intersect([PbBaseSchema, MacroMetaLikePageSchema]),
);

export type PbData = v.InferOutput<typeof PbSchema>;
