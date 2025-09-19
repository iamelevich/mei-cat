import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for ConditionSchema
 */
const ConditionBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * The physical condition of an item, particularly any variances between the physical make-up of the item and that of other copies of the same item (<abbr>e.g.</abbr>, missing pages or plates, brittleness, faded images, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/condition.html
 */
export const ConditionSchema = v.intersect([
	ConditionBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type ConditionData = v.InferOutput<typeof ConditionSchema>;
