import Type from "typebox";
import { AddSchema } from "./add";
import { AppSchema } from "./app";
import { ChoiceSchema } from "./choice";
import { CorrSchema } from "./corr";
import { DamageSchema } from "./damage";
import { DelSchema } from "./del";
import { ExpanSchema } from "./expan";
import { GapSchema } from "./gap";
import { HandShiftSchema } from "./handShift";
import { LemSchema } from "./lem";
import { OrigSchema } from "./orig";
import { RdgSchema } from "./rdg";
import { RegSchema } from "./reg";
import { RestoreSchema } from "./restore";
import { SicSchema } from "./sic";
import { SubstSchema } from "./subst";
import { SuppliedSchema } from "./supplied";
import { UnclearSchema } from "./unclear";

export const EditTransModule = Type.Module({
	add: AddSchema,
	app: AppSchema,
	choice: ChoiceSchema,
	corr: CorrSchema,
	damage: DamageSchema,
	del: DelSchema,
	expan: ExpanSchema,
	gap: GapSchema,
	handShift: HandShiftSchema,
	lem: LemSchema,
	orig: OrigSchema,
	rdg: RdgSchema,
	reg: RegSchema,
	restore: RestoreSchema,
	sic: SicSchema,
	subst: SubstSchema,
	supplied: SuppliedSchema,
	unclear: UnclearSchema,
});
