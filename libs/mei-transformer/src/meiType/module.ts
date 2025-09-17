import { Type } from "typebox";
import { AddSchema } from "./edittrans/add";
import { AppSchema } from "./edittrans/app";
import { ChoiceSchema } from "./edittrans/choice";
import { CorrSchema } from "./edittrans/corr";
import { DamageSchema } from "./edittrans/damage";
import { DelSchema } from "./edittrans/del";
import { ExpanSchema } from "./edittrans/expan";
import { GapSchema } from "./edittrans/gap";
import { HandShiftSchema } from "./edittrans/handShift";
import { LemSchema } from "./edittrans/lem";
import { OrigSchema } from "./edittrans/orig";
import { RdgSchema } from "./edittrans/rdg";
import { RegSchema } from "./edittrans/reg";
import { RestoreSchema } from "./edittrans/restore";
import { SicSchema } from "./edittrans/sic";
import { SubstSchema } from "./edittrans/subst";
import { SuppliedSchema } from "./edittrans/supplied";
import { UnclearSchema } from "./edittrans/unclear";
import { ZoneSchema } from "./facsimile/zone";
import { FigSchema } from "./figtable/fig";
import { FigDescSchema } from "./figtable/figDesc";
import { GraphicSchema } from "./figtable/graphic";
import { TableSchema } from "./figtable/table";
import { TdSchema } from "./figtable/td";
import { ThSchema } from "./figtable/th";
import { TrSchema } from "./figtable/tr";
import { ExpressionSchema } from "./frbr/expression";
import { ExpressionListSchema } from "./frbr/expressionList";
import { ItemSchema } from "./frbr/item";
import { ManifestationSchema } from "./frbr/manifistation";
import { AccessRestrictSchema } from "./header/accessRestrict";
import { AcquisitionSchema } from "./header/acquisition";
import { AltIdSchema } from "./header/altId";
import { AppInfoSchema } from "./header/appInfo";
import { ApplicationSchema } from "./header/application";
import { AttUsageSchema } from "./header/attUsage";
import { AudienceSchema } from "./header/audience";
import { AvailabilitySchema } from "./header/availability";
import { BifoliumSchema } from "./header/bifolium";
import { BylineSchema } from "./header/byline";
import { CaptureModeSchema } from "./header/captureMode";
import { CarrierFormSchema } from "./header/carrierForm";
import { CategorySchema } from "./header/category";
import { CatRelSchema } from "./header/catRel";
import { ChangeSchema } from "./header/change";
import { ChangeDescSchema } from "./header/changeDesc";
import { ClassDeclsSchema } from "./header/classDecls";
import { ClassificationSchema } from "./header/classification";
import { ComponentListSchema } from "./header/componentList";
import { ConditionSchema } from "./header/condition";
import { ContentItemSchema } from "./header/contentItem";
import { ContentsSchema as ContentsHeaderSchema } from "./header/contents";
import { ContextSchema } from "./header/context";
import { CorrectionSchema } from "./header/correction";
import { CutoutSchema } from "./header/cutout";
import { DedicationSchema } from "./header/dedication";
import { DomainsDeclSchema } from "./header/domainsDecl";
import { EditionStmtSchema } from "./header/editionStmt";
import { EditorialDeclSchema } from "./header/editorialDecl";
import { EncodingDescSchema } from "./header/encodingDesc";
import { ExhibHistSchema } from "./header/exhibHist";
import { ExtMetaSchema } from "./header/extMeta";
import { FileCharSchema } from "./header/fileChar";
import { FileDescSchema } from "./header/fileDesc";
import { FoliaDescSchema } from "./header/foliaDesc";
import { FoliumSchema } from "./header/folium";
import { HandSchema } from "./header/hand";
import { HandListSchema } from "./header/handList";
import { HistorySchema } from "./header/history";
import { IncipCodeSchema } from "./header/incipCode";
import { IncipTextSchema } from "./header/incipText";
import { InscriptionSchema } from "./header/inscription";
import { InterpretationSchema } from "./header/interpretation";
import { KeySchema } from "./header/key";
import { LangUsageSchema } from "./header/langUsage";
import { LanguageSchema } from "./header/language";
import { ManifestationListSchema } from "./header/manifestationList";
import { MeiHeadSchema } from "./header/meiHead";
import { MensurationSchema } from "./header/mensuration";
import { MeterSchema } from "./header/meter";
import { NamespaceSchema } from "./header/namespace";
import { NormalizationSchema } from "./header/normalization";
import { NotesStmtSchema } from "./header/notesStmt";
import { OtherCharSchema as OtherCharHeaderSchema } from "./header/otherChar";
import { PatchSchema } from "./header/patch";
import { PerfDurationSchema } from "./header/perfDuration";
import { PerfMediumSchema } from "./header/perfMedium";
import { PerfResSchema as PerfResHeaderSchema } from "./header/perfRes";
import { PerfResListSchema } from "./header/perfResList";
import { PhysDescSchema } from "./header/physDesc";
import { PhysMediumSchema } from "./header/physMedium";
import { PlateNumSchema } from "./header/plateNum";
import { PlayingSpeedSchema } from "./header/playingSpeed";
import { PriceSchema } from "./header/price";
import { ProjectDescSchema } from "./header/projectDesc";
import { ProvenanceSchema } from "./header/provenance";
import { PubStmtSchema } from "./header/pubStmt";
import { RevisionDescSchema } from "./header/revisionDesc";
import { SamplingDeclSchema } from "./header/samplingDecl";
import { ScoreFormatSchema } from "./header/scoreFormat";
import { SegmentationSchema } from "./header/segmentation";
import { SeriesStmtSchema } from "./header/seriesStmt";
import { SoundChanSchema } from "./header/soundChan";
import { SourceSchema as SourceHeaderSchema } from "./header/source";
import { SourceDescSchema } from "./header/sourceDesc";
import { SpecReproSchema } from "./header/specRepro";
import { StdValsSchema } from "./header/stdVals";
import { SysReqSchema } from "./header/sysReq";
import { TagsDeclSchema } from "./header/tagsDecl";
import { TagUsageSchema } from "./header/tagUsage";
import { TaxonomySchema } from "./header/taxonomy";
import { TermListSchema as TermListHeaderSchema } from "./header/termList";
import { TitleStmtSchema } from "./header/titleStmt";
import { TrackConfigSchema } from "./header/trackConfig";
import { TreatHistSchema } from "./header/treatHist";
import { TreatSchedSchema } from "./header/treatSched";
import { UnpubSchema } from "./header/unpub";
import { UseRestrictSchema } from "./header/useRestrict";
import { WatermarkSchema } from "./header/watermark";
import { WorkSchema } from "./header/work";
import { WorkListSchema } from "./header/workList";
import { SecFolioSchema } from "./msDesc/secFolio";
import { SignaturesSchema } from "./msDesc/signatures";
import { StampSchema } from "./msDesc/stamp";
import { BlocSchema } from "./namesdates/bloc";
import { CatchwordsSchema } from "./namesdates/catchwords";
import { CorpNameSchema } from "./namesdates/corpName";
import { CountrySchema } from "./namesdates/country";
import { DistrictSchema } from "./namesdates/district";
import { GeogFeatSchema } from "./namesdates/geogFeat";
import { GeogNameSchema } from "./namesdates/geogName";
import { HeraldrySchema } from "./namesdates/heraldry";
import { LocusSchema } from "./namesdates/locus";
import { LocusGrpSchema } from "./namesdates/locusGrp";
import { PeriodNameSchema } from "./namesdates/periodName";
import { PersNameSchema } from "./namesdates/persName";
import { PostBoxSchema } from "./namesdates/postBox";
import { PostCodeSchema } from "./namesdates/postCode";
import { RegionSchema } from "./namesdates/region";
import { SettlementSchema } from "./namesdates/settlement";
import { StreetSchema } from "./namesdates/street";
import { StyleNameSchema } from "./namesdates/styleName";
import { PtrSchema } from "./ptrref/ptr";
import { RefSchema } from "./ptrref/ref";
import { AbbrSchema } from "./shared/abbr";
import { AddressSchema } from "./shared/address";
import { AnnotSchema } from "./shared/annot";
import { ArrangerSchema } from "./shared/arranger";
import { AuthorSchema } from "./shared/author";
import { BiblSchema } from "./shared/bibl";
import { BiblListSchema } from "./shared/biblList";
import { BiblScopeSchema } from "./shared/biblScope";
import { BiblStructSchema } from "./shared/biblStruct";
import { CaptionSchema } from "./shared/caption";
import { CastListSchema } from "./shared/castList";
import { ComposerSchema } from "./shared/composer";
import { ContentsSchema } from "./shared/contents";
import { ContributorSchema } from "./shared/contributor";
import { CreationSchema } from "./shared/creation";
import { DateSchema } from "./shared/date";
import { DedicSchema } from "./shared/dedic";
import { DedicateeSchema } from "./shared/dedicatee";
import { DepthSchema } from "./shared/depth";
import { DescSchema } from "./shared/desc";
import { DimSchema } from "./shared/dim";
import { DimensionsSchema } from "./shared/dimensions";
import { DistributorSchema } from "./shared/distributor";
import { DivSchema } from "./shared/div";
import { EditionSchema } from "./shared/edition";
import { EditorSchema } from "./shared/editor";
import { EventListSchema } from "./shared/eventList";
import { ExtentSchema } from "./shared/extent";
import { FunderSchema } from "./shared/funder";
import { HeadSchema } from "./shared/head";
import { HeightSchema } from "./shared/height";
import { IdentifierSchema } from "./shared/identifier";
import { LabelSchema } from "./shared/label";
import { LbSchema } from "./shared/lb";
import { LgSchema } from "./shared/lg";
import { LibrettistSchema } from "./shared/librettist";
import { ListSchema } from "./shared/list";
import { LyricistSchema } from "./shared/lyricist";
import { MeiSchema } from "./shared/mei";
import { MusicSchema } from "./shared/music";
import { NameSchema } from "./shared/name";
import { NumSchema } from "./shared/num";
import { OtherCharSchema } from "./shared/otherChar";
import { PSchema } from "./shared/p";
import { PbSchema } from "./shared/pb";
import { PerfResSchema } from "./shared/perfRes";
import { PhysLocSchema } from "./shared/physLoc";
import { PtrSchema as PtrSharedSchema } from "./shared/ptr";
import { QuoteSchema } from "./shared/quote";
import { RefSchema as RefSharedSchema } from "./shared/ref";
import { RelationSchema } from "./shared/relation";
import { RelationListSchema } from "./shared/relationList";
import { RendSchema } from "./shared/rend";
import { RepositorySchema } from "./shared/repository";
import { RespStmtSchema } from "./shared/respStmt";
import { ScoreSchema } from "./shared/score";
import { SourceSchema } from "./shared/source";
import { SponsorSchema } from "./shared/sponsor";
import { StackSchema } from "./shared/stack";
import { SymbolSchema } from "./shared/symbol";
import { TermSchema } from "./shared/term";
import { TermListSchema } from "./shared/termList";
import { TitleSchema } from "./shared/title";
import { TitlePartSchema } from "./shared/titlePart";
import { WidthSchema } from "./shared/width";
import { QSchema } from "./text/q";
import { SegSchema } from "./text/seg";
import { SylSchema } from "./text/syl";

export const { mei } = Type.Module(
	{
		mei: MeiSchema,
		// edittrans elements
		app: AppSchema,
		add: AddSchema,
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
		// namesdates elements
		bloc: BlocSchema,
		catchwords: CatchwordsSchema,
		corpName: CorpNameSchema,
		country: CountrySchema,
		district: DistrictSchema,
		geogFeat: GeogFeatSchema,
		geogName: GeogNameSchema,
		heraldry: HeraldrySchema,
		locus: LocusSchema,
		locusGrp: LocusGrpSchema,
		periodName: PeriodNameSchema,
		persName: PersNameSchema,
		postBox: PostBoxSchema,
		postCode: PostCodeSchema,
		region: RegionSchema,
		settlement: SettlementSchema,
		street: StreetSchema,
		styleName: StyleNameSchema,
		// text elements
		q: QSchema,
		seg: SegSchema,
		syl: SylSchema,
		// msDesc elements
		secFolio: SecFolioSchema,
		signatures: SignaturesSchema,
		stamp: StampSchema,
		// facsimile elements
		zone: ZoneSchema,
		// figtable elements
		fig: FigSchema,
		figDesc: FigDescSchema,
		graphic: GraphicSchema,
		table: TableSchema,
		td: TdSchema,
		th: ThSchema,
		tr: TrSchema,
		// frbr elements
		expression: ExpressionSchema,
		expressionList: ExpressionListSchema,
		item: ItemSchema,
		manifestation: ManifestationSchema,
		// ptrref elements
		ptr: PtrSchema,
		ref: RefSchema,
		// shared elements
		abbr: AbbrSchema,
		address: AddressSchema,
		annot: AnnotSchema,
		arranger: ArrangerSchema,
		author: AuthorSchema,
		bibl: BiblSchema,
		biblList: BiblListSchema,
		biblScope: BiblScopeSchema,
		biblStruct: BiblStructSchema,
		caption: CaptionSchema,
		castList: CastListSchema,
		composer: ComposerSchema,
		contents: ContentsSchema,
		contributor: ContributorSchema,
		creation: CreationSchema,
		date: DateSchema,
		dedic: DedicSchema,
		dedicatee: DedicateeSchema,
		depth: DepthSchema,
		desc: DescSchema,
		dim: DimSchema,
		dimensions: DimensionsSchema,
		distributor: DistributorSchema,
		div: DivSchema,
		edition: EditionSchema,
		editor: EditorSchema,
		eventList: EventListSchema,
		extent: ExtentSchema,
		funder: FunderSchema,
		head: HeadSchema,
		height: HeightSchema,
		identifier: IdentifierSchema,
		label: LabelSchema,
		lb: LbSchema,
		lg: LgSchema,
		librettist: LibrettistSchema,
		list: ListSchema,
		lyricist: LyricistSchema,
		music: MusicSchema,
		name: NameSchema,
		num: NumSchema,
		otherChar: OtherCharSchema,
		p: PSchema,
		pb: PbSchema,
		perfRes: PerfResSchema,
		physLoc: PhysLocSchema,
		ptrShared: PtrSharedSchema,
		quote: QuoteSchema,
		refShared: RefSharedSchema,
		relation: RelationSchema,
		relationList: RelationListSchema,
		rend: RendSchema,
		repository: RepositorySchema,
		respStmt: RespStmtSchema,
		score: ScoreSchema,
		source: SourceSchema,
		sponsor: SponsorSchema,
		stack: StackSchema,
		symbol: SymbolSchema,
		term: TermSchema,
		termList: TermListSchema,
		title: TitleSchema,
		titlePart: TitlePartSchema,
		width: WidthSchema,
		// header elements
		accessRestrict: AccessRestrictSchema,
		acquisition: AcquisitionSchema,
		altId: AltIdSchema,
		appInfo: AppInfoSchema,
		application: ApplicationSchema,
		attUsage: AttUsageSchema,
		audience: AudienceSchema,
		availability: AvailabilitySchema,
		bifolium: BifoliumSchema,
		byline: BylineSchema,
		captureMode: CaptureModeSchema,
		carrierForm: CarrierFormSchema,
		category: CategorySchema,
		catRel: CatRelSchema,
		change: ChangeSchema,
		changeDesc: ChangeDescSchema,
		classDecls: ClassDeclsSchema,
		classification: ClassificationSchema,
		componentList: ComponentListSchema,
		condition: ConditionSchema,
		contentItem: ContentItemSchema,
		contentsHeader: ContentsHeaderSchema,
		context: ContextSchema,
		correction: CorrectionSchema,
		cutout: CutoutSchema,
		dedication: DedicationSchema,
		domainsDecl: DomainsDeclSchema,
		editionStmt: EditionStmtSchema,
		editorialDecl: EditorialDeclSchema,
		encodingDesc: EncodingDescSchema,
		exhibHist: ExhibHistSchema,
		extMeta: ExtMetaSchema,
		fileChar: FileCharSchema,
		fileDesc: FileDescSchema,
		foliaDesc: FoliaDescSchema,
		folium: FoliumSchema,
		hand: HandSchema,
		handList: HandListSchema,
		history: HistorySchema,
		incipCode: IncipCodeSchema,
		incipText: IncipTextSchema,
		inscription: InscriptionSchema,
		interpretation: InterpretationSchema,
		key: KeySchema,
		language: LanguageSchema,
		langUsage: LangUsageSchema,
		manifestationList: ManifestationListSchema,
		meiHead: MeiHeadSchema,
		mensuration: MensurationSchema,
		meter: MeterSchema,
		namespace: NamespaceSchema,
		normalization: NormalizationSchema,
		notesStmt: NotesStmtSchema,
		otherCharHeader: OtherCharHeaderSchema,
		patch: PatchSchema,
		perfDuration: PerfDurationSchema,
		perfMedium: PerfMediumSchema,
		perfResHeader: PerfResHeaderSchema,
		perfResList: PerfResListSchema,
		physDesc: PhysDescSchema,
		physMedium: PhysMediumSchema,
		plateNum: PlateNumSchema,
		playingSpeed: PlayingSpeedSchema,
		price: PriceSchema,
		projectDesc: ProjectDescSchema,
		provenance: ProvenanceSchema,
		pubStmt: PubStmtSchema,
		revisionDesc: RevisionDescSchema,
		samplingDecl: SamplingDeclSchema,
		scoreFormat: ScoreFormatSchema,
		segmentation: SegmentationSchema,
		seriesStmt: SeriesStmtSchema,
		soundChan: SoundChanSchema,
		sourceHeader: SourceHeaderSchema,
		sourceDesc: SourceDescSchema,
		specRepro: SpecReproSchema,
		stdVals: StdValsSchema,
		sysReq: SysReqSchema,
		tagsDecl: TagsDeclSchema,
		tagUsage: TagUsageSchema,
		taxonomy: TaxonomySchema,
		termListHeader: TermListHeaderSchema,
		titleStmt: TitleStmtSchema,
		trackConfig: TrackConfigSchema,
		treatHist: TreatHistSchema,
		treatSched: TreatSchedSchema,
		unpub: UnpubSchema,
		useRestrict: UseRestrictSchema,
		watermark: WatermarkSchema,
		work: WorkSchema,
		workList: WorkListSchema,
	}
);
