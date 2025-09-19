import * as v from "valibot";
import { AttrIntervalHarmonicSchema } from "..";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambitus.anl.html
 */
export const AttrAmbitusAnlSchema = v.object({
	// Inherited attribute classes
	...AttrIntervalHarmonicSchema.entries,
});

export type AttrAmbitusAnlData = v.InferOutput<typeof AttrAmbitusAnlSchema>;
