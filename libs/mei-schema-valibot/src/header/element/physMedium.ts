import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for PhysMediumSchema
 */
const PhysMediumBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Records the physical materials used in the source, such as ink and paper.
 * @see https://music-encoding.org/guidelines/v5/elements/physMedium.html
 */
export const PhysMediumSchema = v.lazy(() =>
	v.intersect([PhysMediumBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type PhysMediumData = v.InferOutput<typeof PhysMediumSchema>;
