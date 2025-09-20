import * as v from "valibot";
import { AttrAmbitusAnlSchema } from "../../analytical/attr/ambitus.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrAmbitusGesSchema } from "../../gestural/attr/ambitus.ges";
import { AttrAmbitusVisSchema } from "../../visual/attr/ambitus.vis";
import { AttrAmbitusLogSchema } from "../attr/ambitus.log";
import { AttrCommonSchema } from "../attr/common";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AmbNoteSchema } from "./ambNote";

/**
 * Base schema with attribute, to simplify types for AmbitusSchema
 */
const AmbitusBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAmbitusAnlSchema.entries,
	...AttrAmbitusGesSchema.entries,
	...AttrAmbitusLogSchema.entries,
	...AttrAmbitusVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Range of a voice, instrument or piece.
 * @see https://music-encoding.org/guidelines/v5/elements/ambitus.html
 */
export const AmbitusSchema = v.lazy(() =>
	v.intersect([
		AmbitusBaseSchema,
		v.object({
			/**
			 * Reference to element ambNote
			 * @see https://music-encoding.org/guidelines/v5/elements/ambNote.html
			 */
			ambNote: v.optional(AmbNoteSchema),
		}),
	]),
);

export type AmbitusData = v.InferOutput<typeof AmbitusSchema>;
