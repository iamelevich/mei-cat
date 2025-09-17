import { Type } from "typebox";
import { ExpressionSchema } from "./expression";
import { ExpressionListSchema } from "./expressionList";
import { ItemSchema } from "./item";
import { ManifestationSchema } from "./manifistation";

export const FrbrModule = Type.Module({
	expression: ExpressionSchema,
	expressionList: ExpressionListSchema,
	item: ItemSchema,
	manifestation: ManifestationSchema,
});
