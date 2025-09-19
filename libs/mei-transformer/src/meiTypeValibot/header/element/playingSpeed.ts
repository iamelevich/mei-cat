import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for PlayingSpeedSchema
 */
const PlayingSpeedBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Playing speed for a sound recording is the speed at which the carrier must be operated to produce the sound intended (<abbr>e.g.</abbr>, 33 1/3 rpm, 19 cm/s, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/playingSpeed.html
 */
export const PlayingSpeedSchema = v.lazy(() =>
	v.intersect([PlayingSpeedBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type PlayingSpeedData = v.InferOutput<typeof PlayingSpeedSchema>;
