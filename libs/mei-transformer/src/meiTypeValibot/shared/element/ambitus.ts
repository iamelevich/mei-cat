import * as v from "valibot";
import { AttrAmbitusAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrAmbitusGesSchema } from "../../gestural";
import { AttrAmbitusVisSchema } from "../../visual";
import {
	AttrAmbitusLogSchema,
	AttrCommonSchema,
	AttrMetadataPointingSchema,
} from "..";
import { AmbNoteSchema } from ".";

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
export const AmbitusSchema = v.intersect([
	AmbitusBaseSchema,
	v.object({
		/**
		 * Reference to element ambNote
		 * @see https://music-encoding.org/guidelines/v5/elements/ambNote.html
		 */
		ambNote: v.optional(v.lazy(() => AmbNoteSchema)),
	}),
]);

export type AmbitusData = v.InferOutput<typeof AmbitusSchema>;
