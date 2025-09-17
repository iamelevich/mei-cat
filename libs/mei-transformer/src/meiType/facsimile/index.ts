import Type from "typebox";
import { ZoneSchema } from "./zone";

export const FacsimileModule = Type.Module({
	zone: ZoneSchema,
});
