import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for sysReq element.
 * @see https://music-encoding.org/guidelines/v5/elements/sysReq.html
 */
export const SysReqSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SysReqData = v.InferOutput<typeof SysReqSchema>;
