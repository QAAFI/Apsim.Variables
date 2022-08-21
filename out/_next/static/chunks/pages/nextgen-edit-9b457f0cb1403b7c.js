(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{3373:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nextgen-edit",function(){return c(8637)}])},8637:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return j}});var d=c(5893),e=c(9008),f=c.n(e),g=c(7294),h=JSON.parse('[{"name":"Biomass","description":"Total above-ground biomass","units":"kg/ha","source":"   [Description(\\"Total above-ground biomass\\")]    [Units(\\"kg/ha\\")] public Double Biomass {      get {return Variable(\\"Biomass\\").ToDouble();}}"},{"name":"biomass_n","description":"N above ground biomass including grain","units":"g/m^2","source":"   [Description(\\"N above ground biomass including grain\\")]    [Units(\\"g/m^2\\")] public Double biomass_n {      get {return Variable(\\"biomass_n\\").ToDouble();}}"},{"name":"biomass_p","description":"Phosphorus in Biomass","units":"g/m2","source":"   [Description(\\"Phosphorus in Biomass\\")]    [Units(\\"g/m2\\")] public Double biomass_p {      get {return Variable(\\"biomass_p\\").ToDouble();}}"},{"name":"biomass_wt","description":"Total above-ground biomass","units":"g/m2","source":"   [Description(\\"Total above-ground biomass\\")]    [Units(\\"g/m2\\")] public Single biomass_wt {      get {return Variable(\\"biomass_wt\\").ToSingle();}}"},{"name":"calculatedTillers","description":"Number of Tillers Calculated","units":"()","source":"   [Description(\\"Number of Tillers Calculated\\")]    [Units(\\"()\\")] public Double calculatedTillers {      get {return Variable(\\"calculatedTillers\\").ToDouble();}}"},{"name":"cep","description":"Accumulative water uptake from the whole profile","units":"mm","source":"   [Description(\\"Accumulative water uptake from the whole profile\\")]    [Units(\\"mm\\")] public Double cep {      get {return Variable(\\"cep\\").ToDouble();}}"},{"name":"cover_green","description":"Green cover","units":null,"source":"   [Description(\\"Green cover\\")]  public Single cover_green {      get {return Variable(\\"cover_green\\").ToSingle();}}"},{"name":"cover_tot","description":"Total cover","units":null,"source":"   [Description(\\"Total cover\\")]  public Single cover_tot {      get {return Variable(\\"cover_tot\\").ToSingle();}}"},{"name":"CurrentLeaf","description":"Current Leaf","units":null,"source":"   [Description(\\"Current Leaf\\")]  public Double CurrentLeaf {      get {return Variable(\\"CurrentLeaf\\").ToDouble();}}"},{"name":"DaysAfterSowing","description":"Days after sowing","units":"days","source":"   [Description(\\"Days after sowing\\")]    [Units(\\"days\\")] public Int32 DaysAfterSowing {      get {return Variable(\\"DaysAfterSowing\\").ToInt32();}}"},{"name":"DeltaGreenN","description":"Daily N increase in live plant parts","units":"g/m^2","source":"   [Description(\\"Daily N increase in live plant parts\\")]    [Units(\\"g/m^2\\")] public Single[] DeltaGreenN {      get {return Variable(\\"DeltaGreenN\\").ToSingleArray();}}"},{"name":"DeltaGreenWt","description":"Daily biomass production","units":"g/m^2","source":"   [Description(\\"Daily biomass production\\")]    [Units(\\"g/m^2\\")] public Double DeltaGreenWt {      get {return Variable(\\"DeltaGreenWt\\").ToDouble();}}"},{"name":"DeltaLAI","description":"Leaf area growth rate","units":"m2/m2","source":"   [Description(\\"Leaf area growth rate\\")]    [Units(\\"m2/m2\\")] public Double DeltaLAI {      get {return Variable(\\"DeltaLAI\\").ToDouble();}}"},{"name":"DeltaLeafGreenN","description":"Daily N increase in leaves","units":"g/m^2","source":"   [Description(\\"Daily N increase in leaves\\")]    [Units(\\"g/m^2\\")] public Double DeltaLeafGreenN {      get {return Variable(\\"DeltaLeafGreenN\\").ToDouble();}}"},{"name":"DeltaLeafNo","description":"Fraction of oldest leaf expanded","units":"lvs/d","source":"   [Description(\\"Fraction of oldest leaf expanded\\")]    [Units(\\"lvs/d\\")] public Double DeltaLeafNo {      get {return Variable(\\"DeltaLeafNo\\").ToDouble();}}"},{"name":"DeltaSLAI","description":"Leaf area senescence rate","units":"m2/m2","source":"   [Description(\\"Leaf area senescence rate\\")]    [Units(\\"m2/m2\\")] public Double DeltaSLAI {      get {return Variable(\\"DeltaSLAI\\").ToDouble();}}"},{"name":"DeltaStage","description":"Change in stage number","units":null,"source":"   [Description(\\"Change in stage number\\")]  public Double DeltaStage {      get {return Variable(\\"DeltaStage\\").ToDouble();}}"},{"name":"DeltaStemGreenN","description":"Today\'s N increase in stem","units":"g/m^2","source":"   [Description(\\"Today\'s N increase in stem\\")]    [Units(\\"g/m^2\\")] public Double DeltaStemGreenN {      get {return Variable(\\"DeltaStemGreenN\\").ToDouble();}}"},{"name":"DeltaTT","description":"Daily thermal time","units":"oCd","source":"   [Description(\\"Daily thermal time\\")]    [Units(\\"oCd\\")] public Double DeltaTT {      get {return Variable(\\"DeltaTT\\").ToDouble();}}"},{"name":"DeltaTTfm","description":"Daily thermal time between flowering and maturity","units":"oCd","source":"   [Description(\\"Daily thermal time between flowering and maturity\\")]    [Units(\\"oCd\\")] public Double DeltaTTfm {      get {return Variable(\\"DeltaTTfm\\").ToDouble();}}"},{"name":"Demand","description":"Tiller Supply factor","units":"()","source":"   [Description(\\"Tiller Supply factor\\")]    [Units(\\"()\\")] public Double Demand {      get {return Variable(\\"Demand\\").ToDouble();}}"},{"name":"diffusion_supply_tot","description":"Accumulative total of crop N supply by diffusion","units":"g/m^2","source":"   [Description(\\"Accumulative total of crop N supply by diffusion\\")]    [Units(\\"g/m^2\\")] public Double diffusion_supply_tot {      get {return Variable(\\"diffusion_supply_tot\\").ToDouble();}}"},{"name":"dlt_dm_detached","description":"Plant biomass detached from each part","units":"g/m^2","source":"   [Description(\\"Plant biomass detached from each part\\")]    [Units(\\"g/m^2\\")] public Single[] dlt_dm_detached {      get {return Variable(\\"dlt_dm_detached\\").ToSingleArray();}}"},{"name":"dlt_dm_green","description":"Plant biomass growth in each part","units":"g/m^2","source":"   [Description(\\"Plant biomass growth in each part\\")]    [Units(\\"g/m^2\\")] public Single dlt_dm_green {      get {return Variable(\\"dlt_dm_green\\").ToSingle();}}"},{"name":"dlt_dm_green_retrans","description":"Plant biomass retranslocated from each part","units":"g/m^2","source":"   [Description(\\"Plant biomass retranslocated from each part\\")]    [Units(\\"g/m^2\\")] public Single[] dlt_dm_green_retrans {      get {return Variable(\\"dlt_dm_green_retrans\\").ToSingleArray();}}"},{"name":"dlt_n_retrans","description":"N retranslocated from plant parts to grain","units":"g/m^2","source":"   [Description(\\"N retranslocated from plant parts to grain\\")]    [Units(\\"g/m^2\\")] public Single[] dlt_n_retrans {      get {return Variable(\\"dlt_n_retrans\\").ToSingleArray();}}"},{"name":"dlt_p_detached","description":"Actual P loss with detached plant","units":"g/m2","source":"   [Description(\\"Actual P loss with detached plant\\")]    [Units(\\"g/m2\\")] public Single[] dlt_p_detached {      get {return Variable(\\"dlt_p_detached\\").ToSingleArray();}}"},{"name":"dlt_p_green","description":"Daily P increase in live plant parts","units":"g/m2","source":"   [Description(\\"Daily P increase in live plant parts\\")]    [Units(\\"g/m2\\")] public Single[] dlt_p_green {      get {return Variable(\\"dlt_p_green\\").ToSingleArray();}}"},{"name":"dlt_p_retrans","description":"P retranslocated from plant parts to grain","units":"g/m2","source":"   [Description(\\"P retranslocated from plant parts to grain\\")]    [Units(\\"g/m2\\")] public Single[] dlt_p_retrans {      get {return Variable(\\"dlt_p_retrans\\").ToSingleArray();}}"},{"name":"DltDMGrainDemand","description":"Delta DM Grain Demand","units":"g/m^2","source":"   [Description(\\"Delta DM Grain Demand\\")]    [Units(\\"g/m^2\\")] public Double DltDMGrainDemand {      get {return Variable(\\"DltDMGrainDemand\\").ToDouble();}}"},{"name":"EnvType","description":"Environment type","units":null,"source":"   [Description(\\"Environment type\\")]  public Int32 EnvType {      get {return Variable(\\"EnvType\\").ToInt32();}}"},{"name":"ep","description":"Water uptake from the whole profile","units":null,"source":"   [Description(\\"Water uptake from the whole profile\\")]  public Double ep {      get {return Variable(\\"ep\\").ToDouble();}}"},{"name":"esw_layer","description":"Plant extractable soil water in each layer","units":"mm","source":"   [Description(\\"Plant extractable soil water in each layer\\")]    [Units(\\"mm\\")] public Single[] esw_layer {      get {return Variable(\\"esw_layer\\").ToSingleArray();}}"},{"name":"esw_profile","description":"Plant extractable water over the whole profile","units":null,"source":"   [Description(\\"Plant extractable water over the whole profile\\")]  public Double esw_profile {      get {return Variable(\\"esw_profile\\").ToDouble();}}"},{"name":"ExtinctionCoef","description":"Light Extinction coefficient","units":"()","source":"   [Description(\\"Light Extinction coefficient\\")]    [Units(\\"()\\")] public Double ExtinctionCoef {      get {return Variable(\\"ExtinctionCoef\\").ToDouble();}}"},{"name":"FloweringDAS","description":"Days to flowering","units":"das","source":"   [Description(\\"Days to flowering\\")]    [Units(\\"das\\")] public Int32 FloweringDAS {      get {return Variable(\\"FloweringDAS\\").ToInt32();}}"},{"name":"GPLA","description":"Green plant leaf area","units":"m2","source":"   [Description(\\"Green plant leaf area\\")]    [Units(\\"m2\\")] public Double GPLA {      get {return Variable(\\"GPLA\\").ToDouble();}}"},{"name":"GrainGreenN","description":"N in grain","units":"g/m^2","source":"   [Description(\\"N in grain\\")]    [Units(\\"g/m^2\\")] public Double GrainGreenN {      get {return Variable(\\"GrainGreenN\\").ToDouble();}}"},{"name":"GrainGreenNConc","description":"N concentration in grain","units":"%","source":"   [Description(\\"N concentration in grain\\")]    [Units(\\"%\\")] public Double GrainGreenNConc {      get {return Variable(\\"GrainGreenNConc\\").ToDouble();}}"},{"name":"GrainGreenP","description":"P in live Grain","units":"g/m^2","source":"   [Description(\\"P in live Grain\\")]    [Units(\\"g/m^2\\")] public Double GrainGreenP {      get {return Variable(\\"GrainGreenP\\").ToDouble();}}"},{"name":"GrainGreenWt","description":"Live grain dry weight","units":"g/m^2","source":"   [Description(\\"Live grain dry weight\\")]    [Units(\\"g/m^2\\")] public Double GrainGreenWt {      get {return Variable(\\"GrainGreenWt\\").ToDouble();}}"},{"name":"GrainNo","description":"Grain number","units":"grains/m^2","source":"   [Description(\\"Grain number\\")]    [Units(\\"grains/m^2\\")] public Double GrainNo {      get {return Variable(\\"GrainNo\\").ToDouble();}}"},{"name":"GrainSize","description":"1000 grain weight","units":"g/1000grain","source":"   [Description(\\"1000 grain weight\\")]    [Units(\\"g/1000grain\\")] public Double GrainSize {      get {return Variable(\\"GrainSize\\").ToDouble();}}"},{"name":"GrainTempFactor","description":"Stress on Grain Number","units":"()","source":"   [Description(\\"Stress on Grain Number\\")]    [Units(\\"()\\")] public Double GrainTempFactor {      get {return Variable(\\"GrainTempFactor\\").ToDouble();}}"},{"name":"green_biomass_n","description":"N in live above ground biomass including grain","units":"g/m^2","source":"   [Description(\\"N in live above ground biomass including grain\\")]    [Units(\\"g/m^2\\")] public Double green_biomass_n {      get {return Variable(\\"green_biomass_n\\").ToDouble();}}"},{"name":"GreenN","description":"N content of live plant parts","units":"g/m^2","source":"   [Description(\\"N content of live plant parts\\")]    [Units(\\"g/m^2\\")] public Single GreenN {      get {return Variable(\\"GreenN\\").ToSingle();}}"},{"name":"GreenP","description":"P content of live plant parts","units":"g/m2","source":"   [Description(\\"P content of live plant parts\\")]    [Units(\\"g/m2\\")] public Single GreenP {      get {return Variable(\\"GreenP\\").ToSingle();}}"},{"name":"GreenWt","description":"Live plant dry weight","units":"g/m^2","source":"   [Description(\\"Live plant dry weight\\")]    [Units(\\"g/m^2\\")] public Double GreenWt {      get {return Variable(\\"GreenWt\\").ToDouble();}}"},{"name":"height","description":"Height of crop","units":"mm","source":"   [Description(\\"Height of crop\\")]    [Units(\\"mm\\")] public Single height {      get {return Variable(\\"height\\").ToSingle();}}"},{"name":"HI","description":"Harvest index","units":"()","source":"   [Description(\\"Harvest index\\")]    [Units(\\"()\\")] public Double HI {      get {return Variable(\\"HI\\").ToDouble();}}"},{"name":"LAI","description":"Live plant green LAI","units":"m2/m2","source":"   [Description(\\"Live plant green LAI\\")]    [Units(\\"m2/m2\\")] public Double LAI {      get {return Variable(\\"LAI\\").ToDouble();}}"},{"name":"LeafGreenN","description":"N in green leaf","units":"g/m^2","source":"   [Description(\\"N in green leaf\\")]    [Units(\\"g/m^2\\")] public Double LeafGreenN {      get {return Variable(\\"LeafGreenN\\").ToDouble();}}"},{"name":"LeafGreenNConc","description":"Live leaf N concentration","units":"%","source":"   [Description(\\"Live leaf N concentration\\")]    [Units(\\"%\\")] public Double LeafGreenNConc {      get {return Variable(\\"LeafGreenNConc\\").ToDouble();}}"},{"name":"LeafGreenP","description":"P in live leaf","units":"g/m^2","source":"   [Description(\\"P in live leaf\\")]    [Units(\\"g/m^2\\")] public Double LeafGreenP {      get {return Variable(\\"LeafGreenP\\").ToDouble();}}"},{"name":"LeafGreenWt","description":"Live leaf dry weight","units":"g/m^2","source":"   [Description(\\"Live leaf dry weight\\")]    [Units(\\"g/m^2\\")] public Double LeafGreenWt {      get {return Variable(\\"LeafGreenWt\\").ToDouble();}}"},{"name":"LeafNDemand","description":"Today\'s N demand from leaves","units":"g/m^2","source":"   [Description(\\"Today\'s N demand from leaves\\")]    [Units(\\"g/m^2\\")] public Double LeafNDemand {      get {return Variable(\\"LeafNDemand\\").ToDouble();}}"},{"name":"LeafNo","description":"Number of fully expanded leaves","units":"leaves","source":"   [Description(\\"Number of fully expanded leaves\\")]    [Units(\\"leaves\\")] public Double LeafNo {      get {return Variable(\\"LeafNo\\").ToDouble();}}"},{"name":"LeafSenescedN","description":"N in senesced leaf","units":"g/m^2","source":"   [Description(\\"N in senesced leaf\\")]    [Units(\\"g/m^2\\")] public Double LeafSenescedN {      get {return Variable(\\"LeafSenescedN\\").ToDouble();}}"},{"name":"LeafSenescedWt","description":"Senesced leaf dry weight","units":"g/m^2","source":"   [Description(\\"Senesced leaf dry weight\\")]    [Units(\\"g/m^2\\")] public Double LeafSenescedWt {      get {return Variable(\\"LeafSenescedWt\\").ToDouble();}}"},{"name":"LeafSizesMain","description":"Size of each leaf on the main culm","units":"mm2","source":"   [Description(\\"Size of each leaf on the main culm\\")]    [Units(\\"mm2\\")] public Single[] LeafSizesMain {      get {return Variable(\\"LeafSizesMain\\").ToSingleArray();}}"},{"name":"LeafSizesTiller","description":"Size of each leaf on the main culm","units":"mm2","source":"   [Description(\\"Size of each leaf on the main culm\\")]    [Units(\\"mm2\\")] public Single[] LeafSizesTiller {      get {return Variable(\\"LeafSizesTiller\\").ToSingleArray();}}"},{"name":"ll_dep","description":"Crop lower limit","units":"mm","source":"   [Description(\\"Crop lower limit\\")]    [Units(\\"mm\\")] public Single[] ll_dep {      get {return Variable(\\"ll_dep\\").ToSingleArray();}}"},{"name":"MaturityDAS","description":"Days to maturity","units":"das","source":"   [Description(\\"Days to maturity\\")]    [Units(\\"das\\")] public Int32 MaturityDAS {      get {return Variable(\\"MaturityDAS\\").ToInt32();}}"},{"name":"MaxLAI","description":"Maximum LAI reached","units":"m2/m2","source":"   [Description(\\"Maximum LAI reached\\")]    [Units(\\"m2/m2\\")] public Double MaxLAI {      get {return Variable(\\"MaxLAI\\").ToDouble();}}"},{"name":"maxSLA","description":"Maximum Specific Leaf Area","units":"cm2/g","source":"   [Description(\\"Maximum Specific Leaf Area\\")]    [Units(\\"cm2/g\\")] public Double maxSLA {      get {return Variable(\\"maxSLA\\").ToDouble();}}"},{"name":"n_cum_uptake","description":"Cumulative N Uptake","units":"g/m^2","source":"   [Description(\\"Cumulative N Uptake\\")]    [Units(\\"g/m^2\\")] public Double n_cum_uptake {      get {return Variable(\\"n_cum_uptake\\").ToDouble();}}"},{"name":"n_diffusion_uptake","description":"Today\'s N uptake by diffusion from soil profile","units":"g/m^2","source":"   [Description(\\"Today\'s N uptake by diffusion from soil profile\\")]    [Units(\\"g/m^2\\")] public Double n_diffusion_uptake {      get {return Variable(\\"n_diffusion_uptake\\").ToDouble();}}"},{"name":"n_massflow_uptake","description":"Today\'s N uptake by massflow from soil profile","units":"g/m^2","source":"   [Description(\\"Today\'s N uptake by massflow from soil profile\\")]    [Units(\\"g/m^2\\")] public Double n_massflow_uptake {      get {return Variable(\\"n_massflow_uptake\\").ToDouble();}}"},{"name":"n_Plant","description":"Total Nitrogen in the plant including roots","units":"g/m^2","source":"   [Description(\\"Total Nitrogen in the plant including roots\\")]    [Units(\\"g/m^2\\")] public Double n_Plant {      get {return Variable(\\"n_Plant\\").ToDouble();}}"},{"name":"n_sd_ratio","description":"Nitrogen supply/demand ratio","units":"()","source":"   [Description(\\"Nitrogen supply/demand ratio\\")]    [Units(\\"()\\")] public Double n_sd_ratio {      get {return Variable(\\"n_sd_ratio\\").ToDouble();}}"},{"name":"n_supply_soil","description":"Today\'s total N supply from soil profile","units":"g/m^2","source":"   [Description(\\"Today\'s total N supply from soil profile\\")]    [Units(\\"g/m^2\\")] public Double n_supply_soil {      get {return Variable(\\"n_supply_soil\\").ToDouble();}}"},{"name":"n_total_uptake","description":"Today\'s N uptake by mass flow and diffusion","units":"g/m^2","source":"   [Description(\\"Today\'s N uptake by mass flow and diffusion\\")]    [Units(\\"g/m^2\\")] public Double n_total_uptake {      get {return Variable(\\"n_total_uptake\\").ToDouble();}}"},{"name":"nfact_expan","description":"Nitrogen stress factor for leaf expansion","units":"()","source":"   [Description(\\"Nitrogen stress factor for leaf expansion\\")]    [Units(\\"()\\")] public Double nfact_expan {      get {return Variable(\\"nfact_expan\\").ToDouble();}}"},{"name":"nfact_pheno","description":"Nitrogen stress factor for phenology","units":"()","source":"   [Description(\\"Nitrogen stress factor for phenology\\")]    [Units(\\"()\\")] public Double nfact_pheno {      get {return Variable(\\"nfact_pheno\\").ToDouble();}}"},{"name":"nfact_photo","description":"Nitrogen stress factor for photosynthesis","units":"()","source":"   [Description(\\"Nitrogen stress factor for photosynthesis\\")]    [Units(\\"()\\")] public Double nfact_photo {      get {return Variable(\\"nfact_photo\\").ToDouble();}}"},{"name":"no3_demand","description":"Today\'s total crop N demand","units":"g/m^2","source":"   [Description(\\"Today\'s total crop N demand\\")]    [Units(\\"g/m^2\\")] public Double no3_demand {      get {return Variable(\\"no3_demand\\").ToDouble();}}"},{"name":"p_demand","description":"P demand of plant parts","units":"kg/ha","source":"   [Description(\\"P demand of plant parts\\")]    [Units(\\"kg/ha\\")] public Single p_demand {      get {return Variable(\\"p_demand\\").ToSingle();}}"},{"name":"p_total_uptake","description":"Today\'s P uptake","units":"g/m2","source":"   [Description(\\"Today\'s P uptake\\")]    [Units(\\"g/m2\\")] public Double p_total_uptake {      get {return Variable(\\"p_total_uptake\\").ToDouble();}}"},{"name":"pfact_expansion","description":"Phosphorus stress factor for leaf expansion","units":null,"source":"   [Description(\\"Phosphorus stress factor for leaf expansion\\")]  public Double pfact_expansion {      get {return Variable(\\"pfact_expansion\\").ToDouble();}}"},{"name":"pfact_grain","description":"Phosphorus stress factor for grain","units":null,"source":"   [Description(\\"Phosphorus stress factor for grain\\")]  public Double pfact_grain {      get {return Variable(\\"pfact_grain\\").ToDouble();}}"},{"name":"pfact_pheno","description":"Phosphorus stress factor for phenology","units":null,"source":"   [Description(\\"Phosphorus stress factor for phenology\\")]  public Double pfact_pheno {      get {return Variable(\\"pfact_pheno\\").ToDouble();}}"},{"name":"pfact_photo","description":"Phosphorus stress factor for photosynthesis","units":null,"source":"   [Description(\\"Phosphorus stress factor for photosynthesis\\")]  public Double pfact_photo {      get {return Variable(\\"pfact_photo\\").ToDouble();}}"},{"name":"PhaseTT","description":"Cumulative growing degree days required for each stage","units":"oCd","source":"   [Description(\\"Cumulative growing degree days required for each stage\\")]    [Units(\\"oCd\\")] public Single[] PhaseTT {      get {return Variable(\\"PhaseTT\\").ToSingleArray();}}"},{"name":"plant_status","description":"Status of crop","units":null,"source":"   [Description(\\"Status of crop\\")]  public String plant_status {      get {return Variable(\\"plant_status\\").ToString();}}"},{"name":"plants","description":"Plant density","units":"plants/m2","source":"   [Description(\\"Plant density\\")]    [Units(\\"plants/m2\\")] public Single plants {      get {return Variable(\\"plants\\").ToSingle();}}"},{"name":"PotGrainFillRate","description":"Potential Grain Fill Rate","units":"mg/grain/oCd","source":"   [Description(\\"Potential Grain Fill Rate\\")]    [Units(\\"mg/grain/oCd\\")] public Double PotGrainFillRate {      get {return Variable(\\"PotGrainFillRate\\").ToDouble();}}"},{"name":"RachisGreenN","description":"N in rachis","units":"g/m^2","source":"   [Description(\\"N in rachis\\")]    [Units(\\"g/m^2\\")] public Double RachisGreenN {      get {return Variable(\\"RachisGreenN\\").ToDouble();}}"},{"name":"RachisGreenNConc","description":"Flower N concentration","units":"%","source":"   [Description(\\"Flower N concentration\\")]    [Units(\\"%\\")] public Double RachisGreenNConc {      get {return Variable(\\"RachisGreenNConc\\").ToDouble();}}"},{"name":"RachisGreenP","description":"P in live rachis","units":"g/m^2","source":"   [Description(\\"P in live rachis\\")]    [Units(\\"g/m^2\\")] public Double RachisGreenP {      get {return Variable(\\"RachisGreenP\\").ToDouble();}}"},{"name":"RachisGreenWt","description":"Live rachis dry weight","units":"g/m^2","source":"   [Description(\\"Live rachis dry weight\\")]    [Units(\\"g/m^2\\")] public Double RachisGreenWt {      get {return Variable(\\"RachisGreenWt\\").ToDouble();}}"},{"name":"radn_int","description":null,"units":null,"source":"  public Double radn_int {      get {return Variable(\\"radn_int\\").ToDouble();}}"},{"name":"RLV","description":"Root length volume in layers","units":"mm/mm3","source":"   [Description(\\"Root length volume in layers\\")]    [Units(\\"mm/mm3\\")] public Double[] RLV {      get {return Variable(\\"RLV\\").ToDoubleArray();}}"},{"name":"root_depth","description":"Depth of roots","units":"mm","source":"   [Description(\\"Depth of roots\\")]    [Units(\\"mm\\")] public Double root_depth {      get {return Variable(\\"root_depth\\").ToDouble();}}"},{"name":"RootDepth","description":"Depth of roots","units":"mm","source":"   [Description(\\"Depth of roots\\")]    [Units(\\"mm\\")] public Double RootDepth {      get {return Variable(\\"RootDepth\\").ToDouble();}}"},{"name":"RootFront","description":"Depth of root front","units":"mm","source":"   [Description(\\"Depth of root front\\")]    [Units(\\"mm\\")] public Double RootFront {      get {return Variable(\\"RootFront\\").ToDouble();}}"},{"name":"RootGreenN","description":"N in live root","units":"g/m^2","source":"   [Description(\\"N in live root\\")]    [Units(\\"g/m^2\\")] public Double RootGreenN {      get {return Variable(\\"RootGreenN\\").ToDouble();}}"},{"name":"RootGreenNConc","description":"Live root N concentration","units":"%","source":"   [Description(\\"Live root N concentration\\")]    [Units(\\"%\\")] public Double RootGreenNConc {      get {return Variable(\\"RootGreenNConc\\").ToDouble();}}"},{"name":"RootGreenP","description":"P in live root","units":"g/m^2","source":"   [Description(\\"P in live root\\")]    [Units(\\"g/m^2\\")] public Double RootGreenP {      get {return Variable(\\"RootGreenP\\").ToDouble();}}"},{"name":"RootGreenWt","description":"Green root dry weight","units":"g/m^2","source":"   [Description(\\"Green root dry weight\\")]    [Units(\\"g/m^2\\")] public Double RootGreenWt {      get {return Variable(\\"RootGreenWt\\").ToDouble();}}"},{"name":"RootLength","description":"Root length","units":"mm/mm2","source":"   [Description(\\"Root length\\")]    [Units(\\"mm/mm2\\")] public Double[] RootLength {      get {return Variable(\\"RootLength\\").ToDoubleArray();}}"},{"name":"RootNDemand","description":"Today\'s N demand from roots","units":"g/m^2","source":"   [Description(\\"Today\'s N demand from roots\\")]    [Units(\\"g/m^2\\")] public Double RootNDemand {      get {return Variable(\\"RootNDemand\\").ToDouble();}}"},{"name":"RootProportion","description":"Root proportion in layers","units":"0-1","source":"   [Description(\\"Root proportion in layers\\")]    [Units(\\"0-1\\")] public Single[] RootProportion {      get {return Variable(\\"RootProportion\\").ToSingleArray();}}"},{"name":"RootSenescedN","description":"Senesced root dry weight","units":"g/m^2","source":"   [Description(\\"Senesced root dry weight\\")]    [Units(\\"g/m^2\\")] public Double RootSenescedN {      get {return Variable(\\"RootSenescedN\\").ToDouble();}}"},{"name":"RootSenescedWt","description":"Senesced root dry weight","units":"g/m^2","source":"   [Description(\\"Senesced root dry weight\\")]    [Units(\\"g/m^2\\")] public Double RootSenescedWt {      get {return Variable(\\"RootSenescedWt\\").ToDouble();}}"},{"name":"RootSpread","description":"Lateral root distance","units":"mm","source":"   [Description(\\"Lateral root distance\\")]    [Units(\\"mm\\")] public Double RootSpread {      get {return Variable(\\"RootSpread\\").ToDouble();}}"},{"name":"SenescedN","description":"N content of senesced plant parts","units":"g/m^2","source":"   [Description(\\"N content of senesced plant parts\\")]    [Units(\\"g/m^2\\")] public Single SenescedN {      get {return Variable(\\"SenescedN\\").ToSingle();}}"},{"name":"SenescedP","description":"P content of senesced plant parts","units":"g/m2","source":"   [Description(\\"P content of senesced plant parts\\")]    [Units(\\"g/m2\\")] public Single SenescedP {      get {return Variable(\\"SenescedP\\").ToSingle();}}"},{"name":"SenescedWt","description":"Senesced plant dry weight","units":"g/m^2","source":"   [Description(\\"Senesced plant dry weight\\")]    [Units(\\"g/m^2\\")] public Single SenescedWt {      get {return Variable(\\"SenescedWt\\").ToSingle();}}"},{"name":"SLA","description":"Specific Leaf Area","units":"cm2/g","source":"   [Description(\\"Specific Leaf Area\\")]    [Units(\\"cm2/g\\")] public Double SLA {      get {return Variable(\\"SLA\\").ToDouble();}}"},{"name":"SLAI","description":"Senesced plant LAI","units":"m2/m2","source":"   [Description(\\"Senesced plant LAI\\")]    [Units(\\"m2/m2\\")] public Double SLAI {      get {return Variable(\\"SLAI\\").ToDouble();}}"},{"name":"SLN","description":"Specific Leaf Nitrogen","units":"g(N)/m2","source":"   [Description(\\"Specific Leaf Nitrogen\\")]    [Units(\\"g(N)/m2\\")] public Double SLN {      get {return Variable(\\"SLN\\").ToDouble();}}"},{"name":"SPLA","description":"Senesced plant leaf area","units":"m2","source":"   [Description(\\"Senesced plant leaf area\\")]    [Units(\\"m2\\")] public Double SPLA {      get {return Variable(\\"SPLA\\").ToDouble();}}"},{"name":"Stage","description":"Phenological stage number","units":"()","source":"   [Description(\\"Phenological stage number\\")]    [Units(\\"()\\")] public Double Stage {      get {return Variable(\\"Stage\\").ToDouble();}}"},{"name":"stage_name","description":"Phenological stage ","units":"()","source":"   [Description(\\"Phenological stage \\")]    [Units(\\"()\\")] public String stage_name {      get {return Variable(\\"stage_name\\").ToString();}}"},{"name":"StageName","description":"Phenological stage ","units":"()","source":"   [Description(\\"Phenological stage \\")]    [Units(\\"()\\")] public String StageName {      get {return Variable(\\"StageName\\").ToString();}}"},{"name":"StageTT","description":"The sum of growing degree days for the current stage","units":"oCd","source":"   [Description(\\"The sum of growing degree days for the current stage\\")]    [Units(\\"oCd\\")] public Double StageTT {      get {return Variable(\\"StageTT\\").ToDouble();}}"},{"name":"StemGreenN","description":"N in stem","units":"g/m^2","source":"   [Description(\\"N in stem\\")]    [Units(\\"g/m^2\\")] public Double StemGreenN {      get {return Variable(\\"StemGreenN\\").ToDouble();}}"},{"name":"StemGreenNConc","description":"Live stem N concentration","units":"%","source":"   [Description(\\"Live stem N concentration\\")]    [Units(\\"%\\")] public Double StemGreenNConc {      get {return Variable(\\"StemGreenNConc\\").ToDouble();}}"},{"name":"StemGreenP","description":"P in live Stem","units":"g/m^2","source":"   [Description(\\"P in live Stem\\")]    [Units(\\"g/m^2\\")] public Double StemGreenP {      get {return Variable(\\"StemGreenP\\").ToDouble();}}"},{"name":"StemGreenWt","description":"Stem dry weight","units":"g/m^2","source":"   [Description(\\"Stem dry weight\\")]    [Units(\\"g/m^2\\")] public Double StemGreenWt {      get {return Variable(\\"StemGreenWt\\").ToDouble();}}"},{"name":"stover_n","description":"N above ground biomass excluding grain","units":"g/m^2","source":"   [Description(\\"N above ground biomass excluding grain\\")]    [Units(\\"g/m^2\\")] public Double stover_n {      get {return Variable(\\"stover_n\\").ToDouble();}}"},{"name":"StressTrace","description":"Water Stress values","units":null,"source":"   [Description(\\"Water Stress values\\")]  public Double[] StressTrace {      get {return Variable(\\"StressTrace\\").ToDoubleArray();}}"},{"name":"Supply","description":"Tiller Supply factor","units":"()","source":"   [Description(\\"Tiller Supply factor\\")]    [Units(\\"()\\")] public Double Supply {      get {return Variable(\\"Supply\\").ToDouble();}}"},{"name":"sw_deficit","description":"Soil water deficit below dul (dul - sw)","units":"mm","source":"   [Description(\\"Soil water deficit below dul (dul - sw)\\")]    [Units(\\"mm\\")] public Single[] sw_deficit {      get {return Variable(\\"sw_deficit\\").ToSingleArray();}}"},{"name":"sw_demand","description":"Total crop demand for water","units":"mm","source":"   [Description(\\"Total crop demand for water\\")]    [Units(\\"mm\\")] public Double sw_demand {      get {return Variable(\\"sw_demand\\").ToDouble();}}"},{"name":"sw_supply","description":"Daily soil water supply over the profile","units":"mm","source":"   [Description(\\"Daily soil water supply over the profile\\")]    [Units(\\"mm\\")] public Double sw_supply {      get {return Variable(\\"sw_supply\\").ToDouble();}}"},{"name":"sw_supply_sum","description":"Accumulative soil water supply over the profile","units":"mm","source":"   [Description(\\"Accumulative soil water supply over the profile\\")]    [Units(\\"mm\\")] public Double sw_supply_sum {      get {return Variable(\\"sw_supply_sum\\").ToDouble();}}"},{"name":"sw_uptake","description":"Daily water uptake in each different rooted layers","units":"mm","source":"   [Description(\\"Daily water uptake in each different rooted layers\\")]    [Units(\\"mm\\")] public Single[] sw_uptake {      get {return Variable(\\"sw_uptake\\").ToSingleArray();}}"},{"name":"swdef_expan","description":"Water stress factor for leaf expansion growth","units":null,"source":"   [Description(\\"Water stress factor for leaf expansion growth\\")]  public Double swdef_expan {      get {return Variable(\\"swdef_expan\\").ToDouble();}}"},{"name":"swdef_pheno","description":"Water stress factor for phenology","units":null,"source":"   [Description(\\"Water stress factor for phenology\\")]  public Double swdef_pheno {      get {return Variable(\\"swdef_pheno\\").ToDouble();}}"},{"name":"swdef_photo","description":"Water stress factor for photosynthesis","units":null,"source":"   [Description(\\"Water stress factor for photosynthesis\\")]  public Double swdef_photo {      get {return Variable(\\"swdef_photo\\").ToDouble();}}"},{"name":"temp_stress","description":null,"units":null,"source":"  public Double temp_stress {      get {return Variable(\\"temp_stress\\").ToDouble();}}"},{"name":"TillerNo","description":"No of tillers on main stem","units":"tillers/plant","source":"   [Description(\\"No of tillers on main stem\\")]    [Units(\\"tillers/plant\\")] public Double TillerNo {      get {return Variable(\\"TillerNo\\").ToDouble();}}"},{"name":"TillerNoFertile","description":"No of tillers that produce a head","units":"tillers/plant","source":"   [Description(\\"No of tillers that produce a head\\")]    [Units(\\"tillers/plant\\")] public Double TillerNoFertile {      get {return Variable(\\"TillerNoFertile\\").ToDouble();}}"},{"name":"tillers","description":"Number of Tillers Currently","units":"()","source":"   [Description(\\"Number of Tillers Currently\\")]    [Units(\\"()\\")] public Double tillers {      get {return Variable(\\"tillers\\").ToDouble();}}"},{"name":"tillersAdded","description":"Number of Tillers Added","units":"()","source":"   [Description(\\"Number of Tillers Added\\")]    [Units(\\"()\\")] public Double tillersAdded {      get {return Variable(\\"tillersAdded\\").ToDouble();}}"},{"name":"TotalTT","description":"Growing degree days from sowing by stage","units":"oCd","source":"   [Description(\\"Growing degree days from sowing by stage\\")]    [Units(\\"oCd\\")] public Single[] TotalTT {      get {return Variable(\\"TotalTT\\").ToSingleArray();}}"},{"name":"TPLA","description":"Total plant leaf area","units":"m2","source":"   [Description(\\"Total plant leaf area\\")]    [Units(\\"m2\\")] public Double TPLA {      get {return Variable(\\"TPLA\\").ToDouble();}}"},{"name":"transp_eff","description":"Transpiration efficiency","units":"g/m2","source":"   [Description(\\"Transpiration efficiency\\")]    [Units(\\"g/m2\\")] public Double transp_eff {      get {return Variable(\\"transp_eff\\").ToDouble();}}"},{"name":"transpiration","description":"Daily water uptake from all rooted soil layers","units":"mm","source":"   [Description(\\"Daily water uptake from all rooted soil layers\\")]    [Units(\\"mm\\")] public Double transpiration {      get {return Variable(\\"transpiration\\").ToDouble();}}"},{"name":"transpiration_tot","description":"Accumulative water uptake from the whole profile","units":"mm","source":"   [Description(\\"Accumulative water uptake from the whole profile\\")]    [Units(\\"mm\\")] public Double transpiration_tot {      get {return Variable(\\"transpiration_tot\\").ToDouble();}}"},{"name":"vpd","description":"Vapour pressure deficit","units":null,"source":"   [Description(\\"Vapour pressure deficit\\")]  public Double vpd {      get {return Variable(\\"vpd\\").ToDouble();}}"},{"name":"WaterSD","description":"Water Supply/Demand ratio","units":"()","source":"   [Description(\\"Water Supply/Demand ratio\\")]    [Units(\\"()\\")] public Double WaterSD {      get {return Variable(\\"WaterSD\\").ToDouble();}}"},{"name":"Yield","description":"Grain yield","units":"kg/ha","source":"   [Description(\\"Grain yield\\")]    [Units(\\"kg/ha\\")] public Double Yield {      get {return Variable(\\"Yield\\").ToDouble();}}"}]'),i=function(){var a=(0,g.useState)("Paste text here");a[0],a[1];var b=(0,g.useState)([]),c=b[0],e=b[1],i=(0,g.useState)(""),j=i[0],k=i[1];(0,g.useEffect)(function(){e(h)},[h]);var l=function(a){var b=a.data,c=a.fileName,d=a.fileType,e=new Blob([b],{type:d}),f=document.createElement("a");f.download=c,f.href=window.URL.createObjectURL(e);var g=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});f.dispatchEvent(g),f.remove()},m=function(a){a.preventDefault(),l({data:JSON.stringify(c),fileName:"sorghum.json",fileType:"text/json"})},n=function(a){k(a)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"Parse Apsim classic variables"}),(0,d.jsx)("meta",{name:"description",content:"Generated by create-t3-app"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsxs)("main",{className:"container mx-auto flex flex-col items-center justify-center min-h-screen p-4",children:[(0,d.jsx)("h1",{className:"md:text-[2rem] leading-normal font-bold text-gray-700",children:"Edit Apsim Classic Variables"}),(0,d.jsx)("button",{type:"button",onClick:m,className:"ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Export to JSON"}),(0,d.jsx)("div",{className:"mt-4 w-full",children:(0,d.jsx)("input",{type:"text",name:"nextgen",id:"nextgen",className:"w-full mt-2 p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border rounded-md",value:j,onChange:function(a){return n(a.target.value)},placeholder:"Search for variable name"})}),(0,d.jsx)("ul",{className:"w-full pt-2 container mx-auto flex flex-col ",children:null==c?void 0:c.map(function(a,b){return a.name&&a.name.toLowerCase().includes(j.toLowerCase())?(0,d.jsx)("li",{className:"p-2 relative border flex-row",children:a.name&&(0,d.jsxs)("div",{className:"flex flex-col",children:[(0,d.jsxs)("div",{className:"flex flex-row",children:[(0,d.jsxs)("div",{className:"flex-col w-1/4",children:[(0,d.jsx)("div",{className:"p-1 font-semibold",children:a.name}),(0,d.jsxs)("div",{className:"p-1 italic l-4 text-gray-400",children:[" ",a.units?a.units:null]})]}),(0,d.jsxs)("div",{className:"w-3/4 flex-col",children:[(0,d.jsx)("label",{htmlFor:"nextgen",className:"p-1 block",children:"Apsim NextGen Reference"}),(0,d.jsx)("input",{type:"text",name:"nextgen",id:"nextgen",className:"w-full p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border rounded-md",value:a.nextgen,onChange:function(b){a.nextgen=b.target.value}})]})]}),(0,d.jsx)("div",{className:"basis-1/2 p-1 text-gray-600",children:a.description?a.description:null})]})},b):!j&&(0,d.jsx)("li",{className:"p-2 relative border flex-row",children:(0,d.jsx)("div",{className:"p-1 italic",children:a.source})},b)})})]})]})},j=i},9008:function(a,b,c){a.exports=c(5443)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=3373)}),_N_E=a.O()}])