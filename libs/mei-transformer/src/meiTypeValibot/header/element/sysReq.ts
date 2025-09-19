import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for SysReqSchema
 */
const SysReqBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * System requirements for using the electronic item.
 * @see https://music-encoding.org/guidelines/v5/elements/sysReq.html
 */
export const SysReqSchema = v.lazy(() =>
	v.intersect([SysReqBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type SysReqData = v.InferOutput<typeof SysReqSchema>;
