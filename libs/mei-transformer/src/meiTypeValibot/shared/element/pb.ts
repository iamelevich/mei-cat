import * as v from "valibot";
import { AttrPbAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrPbGesSchema } from "../../gestural";
import { AttrPbVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrPbLogSchema,
	AttrPointingSchema,
	AttrSourceSchema,
	MacroMetaLikePageSchema,
} from "..";

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
export const PbSchema = v.intersect([PbBaseSchema, MacroMetaLikePageSchema]);

export type PbData = v.InferOutput<typeof PbSchema>;
