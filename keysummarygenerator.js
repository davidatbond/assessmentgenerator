// Generate the key for an individual student based on their unique examid
var examids = [
    ['13500632', 'A1A7CVM36TA0ZXN9SCEAG2CCYY8U3G2927HH2Z2G6PB4KL'],
    ['13531700', 'ANBDHY0EN9RMUBSVSCOZM837YY8U322GU72Z8GHTB46P15'],
    ['13528197', 'ANBDHYRMSCOCN9QP40GRM8721Y4M3G2787BA9HAB6P43KL'],
    ['13508429', 'CVBDA1ZX40M3SC88N9GRM872YY8U32273R9HHTIQH1B41Z'],
    ['13414461', 'BDHYA1EOPQOCSC6TSVTTG272YY513GHTT829DD2ZWK1Z43'],
    ['13532635', 'HYCVAN01M3N9QPOCRMEAG2CC1YSQ3G27BAHTU73RB415KL'],
    ['13566197', 'VOL7A1RM0188OC406TTTM8CC1Y513G3R29T88GHTWKB4KL'],
    ['13527372', 'VOPAHY0EM3UB4001OCEAG2721Y8U3287IQR4T827B4G26P'],
    ['13533324', 'BDVCL7RMPQ0ESVM3OCEAG2CC1Y51329HHT2GIQHH15G243'],
    ['13537753', 'ANA7HY880E40UB01PQOZG2721YSQ32BAU7872ZR4B41Z6P'],
    ['13546720', 'L7CVANM3SV01UBEO0EGRG2371Y5132T887U73RQ9WK6P15'],
    ['13505608', 'ANCVBDM3PQZX01A0EOGRM872YY4M322ZU7AB9HQU1ZKL15'],
    ['13556486', 'VOA7HYM3UBRM6TA0ZXGRG2CC1Y4M322GQUIQHH2ZG26PB4'],
    ['13234397', 'VCANBDM340SVRMEO6TTTG2371Y51322Z3R9HU7QU6PB4KL'],
    ['13258711', 'VCBDCVZX01PQN9SVOCOZG237YY4M3G29HT3RQ9ZZG215KL'],
    ['13514413', 'ANCVPAZXUBRMSVEO01EAG2721Y4M3GHT3R2G8G27H1G21Z'],
    ['13528799', 'VOPAA7M3QPUB40SVSCTTM8371YSQ32HHDDZZR4BAB4KLH1'],
    ['13536844', 'CVHYVCZXRMSV40OCPQGRG2CC1YSQ3GQUABU73RQ9B4WKKL'],
    ['13549169', 'PAANBDSVEO40PQA001TTG272YY8U3G2GABQUHT3RKL6PH1'],
    ['13556790', 'VOPAA1PQA06TOCSC88TTG2721Y8U329HT8872G2Z1Z43B4'],
    ['13566362', 'CVVCHY40SVQPOC886TEAG2CCYYSQ322Z87R4QUAB1Z43B4'],
    ['13570826', 'PAHYVON9016TSC0EOCOZG237YY513GDDZZQ9HHAB1ZWKH1'],
    ['13351364', 'HYVOL70ESVEOQP6TZXOZG2371YSQ32HH2GQ987HTKL6P15'],
    ['13460529', 'A7VCPAEOSC0EQP406TTTG237YY513G3RHT27DDBAH1KL15'],
    ['13460545', 'L7A1VC40SCRMQPA00EEAM872YY513GZZ3RHH87IQKLH1WK'],
    ['13478331', 'A1CVBDPQOC01880E40EAG2721YSQ329HHTHHABDD6PKLH1'],
    ['13491558', 'BDCVA7EOPQSC88N9QPEAM8CCYYSQ3229878G3R2GB4WKH1'],
    ['13494748', 'VCCVA7RMSVEO8840ZXOZG237YY513227T8HH2Z9HKLG243'],
    ['13495301', 'VOBDL7SV01UB0EN96TGRM8CC1Y5132HH9HT8BAU743151Z'],
    ['13496757', 'VCANPAA0M3PQN96TOCGRG2371Y4M3GIQR4U72GHT15KL6P'],
    ['13501156', 'PAVOANUB0EM3OC406TTTG2CCYYSQ32QUT8R49HBAWK1ZH1'],
    ['13502942', 'ANVOL7UBSV6TA0PQOCGRG272YY4M32DD8G2ZZZU7B46PG2'],
    ['13503806', 'HYL7PA0EQPEO88SV01GRM872YY8U3G3R9HDD2Z27H1KL43'],
    ['13504524', 'A1BDVCOC01A0ZXQP6TGRM8CCYY4M3G3RT89HU787156P43'],
    ['13505611', 'VCA1BDQP40OCUBM3SCEAM8721YSQ32U72GQ93RIQWK431Z'],
    ['13506371', 'VOPAANPQEO010EUB6TOZM8CCYY8U3287Q9U7ZZBAKLG215'],
    ['13506698', 'BDL7VOUB6T88SVPQZXTTM8721YSQ3G2GDD293RHHB41543'],
    ['13506708', 'BDPAA7M3SVOC0EQPUBTTG2371Y513GQU2GT8IQDDH11ZKL'],
    ['13508623', 'ANPAVORMEOA0SC01N9EAG2CCYY4M3G272G2ZDDR4WKKL6P'],
    ['13511472', 'A1PACV4001QPSVSCRMEAM8CCYY8U3229DDAB3RHH6PWK15'],
    ['13512158', 'A7VOPAM3A0OCN940PQTTM837YYSQ32BAQUDDQ9ZZKL6PWK'],
    ['13519599', 'PAVOANOCN901SVEOQPGRM8721YSQ322G87R429IQB4H115'],
    ['13524085', 'L7PACVA0SV88SCOC40OZG272YY513GT8ZZ27DD296PG2H1'],
    ['13533324', 'BDPAVCSVOC88RMSCZXTTM8CC1YSQ32HH29879HU71ZG2H1'],
    ['13524771', 'BDL7HY8801QPPQM3SCGRM8721Y8U3G8GIQQUU7BAKLWKB4'],
    ['13525240', 'A7VCBD8801OCM36T40GRM8721Y4M3G8GT8HT27R4G2B4H1'],
    ['13526081', 'ANVCA7SV40QPUB0EOCEAM8CCYY5132DDQUIQ29ZZWKB415'],
    ['13526890', 'PABDVOUBSC01M3QPEOTTM872YYSQ3G8GQUIQR4DD156PB4'],
    ['13527521', 'ANL7VC88QPSVRMM3OCTTM837YY4M3GHTHH2G2ZDD43WK6P'],
    ['13527589', 'PAA1L70EQPM388UBZXGRG2CCYY4M32DD87R4IQBAB46P15'],
    ['13528223', 'CVA7PAOCSCZX0E01EOGRM8CC1Y4M3G87292ZBAR443WK1Z'],
    ['13528841', 'PAA7L7SVA0OCN940QPGRG272YY5132ZZ9H3RQ927G243WK'],
    ['13528883', 'L7VCCV6TSCSVUB01M3GRM8371Y4M3GDD29HH9HHTKL1Z43'],
    ['13529501', 'BDVOHY01SVRMN9QPM3GRG272YYSQ3G9HABQUR4ZZKLH1B4'],
    ['13529857', 'HYVCBDOCSCSV88A00EEAM872YY5132T82GZZ8GHTKL6PG2'],
    ['13529912', 'A1VCANN96TOCM3RMEOOZM837YY4M32DDBA29Q9U715WKB4'],
    ['13530231', 'HYVOA7OCQP88UBSC0EGRG2CCYY8U3GZZ87HH9HDDKLH143'],
    ['13530794', 'HYL7A7EO01QPSV88UBGRG2CC1Y5132R4879HDD2943H11Z'],
    ['13531690', 'L7CVVOPQSC6T0EUBEOOZM8721Y4M32U7HHABQUIQWK6P43'],
    ['13532059', 'BDHYA1N9OC6TEO01ZXTTM8CC1Y4M3G2G87HHQU2Z15KLG2'],
    ['13532570', 'A1A7HYEO6TN901UB88EAG2CCYY8U32Q9IQ2ZAB9H6PH115'],
    ['13532923', 'VOHYBDN90EOC6TM3EOTTM8CC1YSQ32ABU7DD2927H1156P'],
    ['13533418', 'VOHYA10EM3PQ88UBA0OZM872YY513227IQ879H8GKL15WK'],
    ['13533735', 'CVHYANA0SVN9QPEO6TTTM8CCYYSQ3G292Z872GBAH143KL'],
    ['13535414', 'BDVOCVRM880E6TN901OZG2371YSQ3G298G2GHHZZKLG243'],
    ['13535731', 'VOHYA70EPQRMA0SCOCGRG2721YSQ32ABDDIQ8G2GB46P15'],
    ['13535883', 'VOVCA1QPN901SVPQA0EAG2CCYY513G29HHQUHTR46PWKKL'],
    ['13536721', 'VCVOA7M3SCUBEO6TRMOZM837YYSQ3GHHU7BA29871ZKLH1'],
    ['13536776', 'HYBDCV0140OCEORM0ETTG2CCYYSQ32T88GIQBA87H1431Z'],
    ['13537096', 'VOA7L7SV88OCA00EM3TTM8371YSQ328GU7T8ABR4B4H1KL'],
    ['13537106', 'BDA1A7M3QPSV01PQ40GRG2371YSQ3229ABQUR43RB415WK'],
    ['13537915', 'PAL7A7N9A0M340016TGRM837YY5132BA9HQ9ABU7431Z15'],
    ['13539681', 'A7A1VCPQ0ERM01QPZXTTM8721Y8U32DDQU3R2GBA1Z156P'],
    ['13539746', 'VCANA1QP010EEOSVPQTTM8CCYYSQ32DD2ZQUT8ABB46PKL'],
    ['13540683', 'A1VCA7A0ZXSVSCM3EOOZM837YY8U3G2G3RBA9HU7WK43H1'],
    ['13545329', 'VOA7BD0ESCSVOCEO88TTM8CCYY8U3G3R9H29Q92Z15H1KL'],
    ['13545536', 'BDPAA7SVSC01EORM6TTTG2721YSQ3G29IQ3R8G2GB4WKG2'],
    ['13546924', 'PAANHY6T01880ESCA0OZG2721YSQ329HT8QUBA27436P1Z'],
    ['13547066', 'BDA7PA6TSV01SCQPOCEAM872YYSQ3G2ZT8DDR4BAG2WK43'],
    ['13547134', 'CVHYBDSCEON9QPSV01EAG237YY513GQ9U787ABDDG2KL15'],
    ['13547244', 'A7HYPA6TSCN9ZXUBM3GRM8CC1YSQ3G29QU2G27R41ZH16P'],
    ['13547299', 'L7PAA7RM406TZXA0OCOZG2371Y513GZZAB3RHH2G43KLH1'],
    ['13547370', 'VCA7A1SV6T40UB88A0EAM837YY8U3GHTZZT8U7Q9G26P1Z'],
    ['13548205', 'VOHYA70ESCZXEON9UBEAM8CC1Y8U3GR42787BAU7WKB415'],
    ['13548250', 'A7VCVOSCM30E40RMQPEAM8CC1Y8U32292ZHHU7R46PG2B4'],
    ['13548263', 'PACVL7OCM3SCEORMZXTTG2371YSQ3287R4QUU727KL15H1'],
    ['13548441', 'PAA7L7RMA0QP6TUBZXEAM8CCYY513GZZQ929R4T8H16P43'],
    ['13548454', 'L7VOVCZX88SCEOA0N9GRG2721YSQ32BA27Q929U7B41Z43'],
    ['13548496', 'VCVOA701M30E88EOSVTTG2CCYY8U329HR42G8GT8H1KLB4'],
    ['13549004', 'HYPAA7406TM3QPOCUBOZG2CCYY8U3GQ9HTIQABR443WK1Z'],
    ['13549075', 'HYA7ANEO880EM3A0OCTTM837YYSQ3GIQ2ZT82787B46PH1'],
    ['13549279', 'ANVOA1M3SVOCUB0EQPEAG2CC1Y513GBA9HU7QUQ9KL11Z'],
    ['13549716', 'A1A7VCUBN9A04088PQEAM8371Y513G9HT8HH3R271ZG2WK'],
    ['13549826', 'VOA1PAQPM3N901RMEOEAM8CC1YSQ3G2Z8GR429276PB4KL'],
    ['13549910', 'L7ANPA88M3OCA0RM0EGRG2CCYY4M3G3RHTQ99HZZKLH16P'],
    ['13549952', 'L7A7CVOCA00EM36TUBOZG272YY4M3GAB29QU273RKLG243'],
    ['13549981', 'BDANHYOCZXUBPQSC88OZM8371YSQ329HQU3R2927KLH1WK'],
    ['13550019', 'HYPABDSCOCN9QPZX88EAG272YY8U3GDDIQHT29HHG26PB4'],
    ['13550268', 'VCCVPAPQA08840QP0EOZG2CCYYSQ3GHTZZQUT83RWKG2KL'],
    ['13550336', 'VOVCA7SVUBEOSCPQZXTTG2721Y8U3G8GT8Q9HH87KLH1G2'],
    ['13550705', 'CVVCVOA0UBPQ40OCZXGRM8CCYY4M32ZZ8GT8U72ZG2WKKL'],
    ['13551012', 'ANL7CVN9A0SV6T0EOCEAG2CC1YSQ3GQUZZBA293RH1G2KL'],
    ['13551287', 'HYBDL7QPZXN9SV0EA0GRG237YY4M328GABT8873R6PH115'],
    ['13552222', 'BDANVO40M3A0EORMPQOZM8CCYY8U3GABHTU7R4Q943WKB4'],
    ['13552248', 'BDCVHYM3PQEOSV88N9GRM8CC1Y4M3GZZABT88G2ZKLB443'],
    ['13552507', 'CVVCPAM3RM6TSV0EUBGRM8CCYYSQ3G27R4T8HHZZWK43KL'],
    ['13552536', 'PAL7HYSCSV886TOCN9OZG2371Y8U3GT88G27HT29H1B4KL'],
    ['13552947', 'ANVOL7SCPQRMQP01A0OZG2CCYY513G87R4292Z27KLWK1Z'],
    ['13552992', 'VCANPAN9016TQPUBM3GRM8721Y4M3GHTHHQ9AB29KL6PH1'],
    ['13553018', 'PAVCL7N9OCQP88SVZXOZM8721Y4M32ZZU7QU29AB1ZH16P'],
    ['13553034', 'A7VCVOSV0E01OCA0M3OZG2CC1Y4M328G87272ZDD15H1KL'],
    ['13553050', 'CVBDPAZXN9400EPQA0OZG2CC1Y513GU727AB872G15WKH1'],
    ['13554529', 'A1CVPAOCN940M36TRMGRG2371Y513GQUHT2ZABBAH1KLWK'],
    ['13555001', 'VOBDHY6TEOPQRMSVM3OZM8CC1Y4M3G87Q9BA29HHKLB4H1'],
    ['13555289', 'CVVCBDZXA0SVSC4088OZG2371YSQ3G9HABZZ8G276P15H1'],
    ['13555742', 'CVHYVORM88ZXM3A0OCEAG2721Y513GT8HTIQ8GBAH1436P'],
    ['13555797', 'VOCVHYOC4088SVA0M3OZG2721Y8U3287R4DDZZ29H16PKL'],
    ['13555962', 'CVA7AN6TPQOCSCUBRMGRG2371Y51323RBAZZDDR443B41Z'],
    ['13556208', 'CVHYANRMA0ZXEOSV6TGRG2721YSQ3G27Q99HR4ZZ43G2B4'],
    ['13556211', 'A7VOPAUBSVA00EOCQPGRG2721YSQ329HHH872Z27WKH115'],
    ['13556787', 'A7VOBD40N90EQPUB6TOZG2CC1Y8U3GU72G8GZZ291Z15H1'],
    ['13557023', 'L7PAANOCSV0EM340EOTTG2CC1Y51329H3RHTT827KL43G2'],
    ['13557036', 'HYPABD0EUBSCA0016TGRG2CC1Y5132U7DD87T8BA43G21Z'],
    ['13557081', 'A7PACVPQ88SV0140OCEAG2CC1YSQ32T8DDIQ292Z15B4KL'],
    ['13557476', 'L7VCBD0EPQRM6T40M3OZG2721Y513GHTR4DDBA87H115KL'],
    ['13557780', 'BDVCHYPQN9SVQPEO0EGRG237YYSQ32ZZ9H87BA2GG21543'],
    ['13557984', 'PAVCBDM3QPZXOCUBSCEAM8371Y513GAB878GZZU7B4G2KL'],
    ['13558314', 'A1HYA70EM3SVN9UBRMGRM8721YSQ3GIQ9H2787BAG2KL6P'],
    ['13558699', 'PAANBDSVOC01PQEORMOZG2721Y513G8G27ZZHH9H43H16P'],
    ['13558712', 'CVHYBDA0SVUB40SCZXEAM8CC1Y513G2G8G27BAR4H115KL'],
    ['13558725', 'VCA1L7UBSV88PQ016TTTG2721Y8U32BA9HAB3R2G1ZB415'],
    ['13559061', 'PAANHYN9OCUBRMSCM3TTM8CCYY51329H8GU72Z2715KLG2'],
    ['13559168', 'ANCVBDPQOCRMSV0ESCEAM8CC1Y5132Q9U7T8IQ2GB4H115'],
    ['13559485', 'L7A7PAEOSV40A088PQTTM872YY4M32QU87BA2Z29B4436P'],
    ['13559537', 'VCCVL788ZXOCUB6T0EEAG2371YSQ3GDDT829IQ9HH16PB4'],
    ['13559838', 'CVPABDUBN9SCRMEOPQOZG2371Y5132AB279HT8BAKL431Z'],
    ['13560254', 'PAVCL7M3EORMPQOC6TOZM8721Y5132299HQU278GKLWK43'],
    ['13560364', 'BDA7CV0EQPA0SVUBOCGRG237YY8U3G8GABHH272GKL1ZH1'],
    ['13562108', 'A1PAANEOQPSV40A0RMGRG2371Y8U3G8GHTQUAB3R15B46P'],
    ['13562658', 'CVPAHY88OC016TM3QPOZM8721Y513G9HQ9T82G8GKL151Z'],
    ['13562674', 'VCVOBDUB40A0QP0EM3EAG237YYSQ32HTQUR4ZZAB1Z15G2'],
    ['13563185', 'VOL7BDA0M3N940PQEOGRG237YYSQ3GR42GBAHHQUB4H1KL'],
    ['13563415', 'A1BDPASCEO01UBOCN9GRM837YYSQ3GU7BA87QUIQ1Z15KL'],
    ['13563444', 'L7VCANSV88RMM301N9OZM8CC1YSQ3G29HTHHABU7G2KL1Z'],
    ['13563538', 'HYVCAN88N9PQ6T4001TTM8371Y51323R27879HR4B46PH1'],
    ['13563703', 'VOVCAN01EOOCQPSVZXEAM837YY8U322ZQUIQU7ZZB4H11Z'],
    ['13563842', 'VOCVANM3EO4001QP88TTM837YYSQ32T82ZHH87ZZ431ZKL'],
    ['13563868', 'VCA1AN0ESV6TQPM388TTG237YY4M32R4ZZ87BA2ZH1B4WK'],
    ['13564913', 'A1PAHY0E0188QPM3OCGRG237YY4M3229HTHHQ92ZG2H1WK'],
    ['13565550', 'A7VCVO6T40UBZX01M3EAM8721YSQ3G27U7ABIQ2GG2B415'],
    ['13565602', 'ANBDA7SCZX01PQN9EOEAG237YY51322ZBAU78GDD15WK1Z'],
    ['13566663', 'BDVCPAQPA0SCPQEO40GRM8CC1Y513GT8R4BAABZZ431ZB4'],
    ['13566786', 'A7HYPAQP01SV406TOCOZG272YYSQ32U7BA3R2987WK43KL'],
    ['13566870', 'BDCVVOM3EO0EZXRMN9TTG2721Y8U3GQ987HHQUABWK1ZKL'],
    ['13567019', 'HYL7A7A0N96TZXM3RMGRG2371Y5132QUR43RHTZZH11Z43'],
    ['13567161', 'PABDA1ZXA0RMOC01QPOZM8371YSQ3GAB2Z873RZZB41ZKL'],
    ['13567909', 'L7CVVCEOA0SVZXQPUBOZG2CC1Y5132Q9ABHHDDHT15H1KL'],
    ['13567967', 'HYCVANRMSC40UB01QPOZM837YY8U3GZZDD2ZIQU743B4H1'],
    ['13568261', 'A7ANL70ESVM36T01OCEAG2CCYYSQ32AB8GR4HH276P1ZB4'],
    ['13568452', 'PAA1ANSC0ESV6TUBZXEAM8CC1YSQ3GIQ27Q9ABHTG2KLB4'],
    ['13568465', 'HYPAA1PQ40ZXSV88N9OZM872YY513GQ9HTR429T8WKH143'],
    ['13568494', 'ANPAVC0188M3OC6T0EGRG2721Y8U3GQ9DD879H2915G26P'],
    ['13568520', 'L7HYVC0140PQ6TN9RMGRG2371Y8U3G872Z2G8GHT43G2H1'],
    ['13569345', 'VOHYAN6TPQUB0E40EOEAG2CC1Y8U3GQUHHIQ3R9H6PG2WK'],
    ['13569390', 'VOVCL701QP6TEOUB40TTM8CCYY4M3GHTT827DDU7WK431Z'],
    ['13570538', 'A1ANL7PQN9OCQPM3A0EAM872YYSQ3229T8HTQUAB6P43KL'],
    ['13570635', 'VCA1PA01UBZX0EA0M3GRM837YYSQ329HHH8GQ9IQ15B46P'],
    ['13570813', 'L7VOCV6TSCEOSVN9QPOZG2CC1Y8U3GIQ27T82ZHHWK1ZB4'],
    ['13571162', 'BDPAL7N9SCUB88OCRMEAM8371Y8U3GBA9HHH8GDD6PB4H1'],
    ['13582672', 'A7HYPAM3RMEOOC88N9OZG237YY8U3G87BA2Z3R2743H16P'],
    ['13583387', 'VCL7BDEOSC88M30E01OZG237YYSQ3GBA27HT2ZQ9G243H1']
];


//Question 1 options
var q1list = [
    'H1.Formal instrument',
    '1Z.AS4000-1997 - General conditions of contract',
    '43.AS4000-1997 - Annexure Part A',
    'B4.AS4000-1997 - Annexure Part B',
    '15.Scope of Works',
    '6P.Program',
    'KL.Bill of quantities',
    'WK.Technical specifications',
    'G2.Construction drawings'
];


var q2list = [
    '27.the parties to the Contract',
    '8G.dimensions for the Works',
    '3R.the type and amount of security to be provided by the Contractor',
    'R4.the contract sum',
    'DD.the person nominated to act on behalf of the Principal',
    'QU.the scope of the Works',
    'HT.the conditions upon which the Contractor is to be given possession of site',
    'T8.details of the Contractor&#39s obligation to notify of a delay',
    '2Z.specific details of the materials to be used in the Works',
    '9H.the requirement for evidence of insurances',
	'BA.clauses that have been deleted from the General Conditions in AS4000',
	'AB.which party is required to insure against liability for death or injury to persons employed by the Contractor',
	'ZZ.which party is required to effect the public liability policy for the project',
	'U7.the sequence in which the Superintendent expects the Contractor to undertake the Works',
	'Q9.the agreed duration of the contract',
	'2G.the technical description of WUC',
	'HH.the geometric details of the Works',
	'IQ.the amounts of any provisional sums',
	'87.the extent to which the Contractor is responsible for provision of site amenities for the Superintendent',
	'29.how much information about the project that the Contractor can include in it&#39s industry magazine advertising'
];


var s2alist = [
    '3G.<li><a href="Annexure Part A and B (Version 1).pdf" target="blank">Annexure Part A and B (Version 1)</a></li>',
    '32.<li><a href="Annexure Part A and B (Version 2).pdf" target="blank">Annexure Part A and B (Version 2)</a></li>'
];


//var s2blist = [
//    'PI.<li><a href="Bill of quantities (Version A).pdf" target="blank">Bill of quantities (Version A)',
//    'IT.<li><a href="Bill of quantities (Version B).pdf" target="blank">Bill of quantities (Version B)'
//]
var s2clist = [
    //1
    '51.<li>Date of acceptance of tender = 02/06/2017.</li><li>The Contractor&#39s overheads and profit percentage was agreed: 13% \
    </li><li>The Contractor did not reach practical completion until one week ago: 01/06/2018 \
    </li><li>The Superintendent has certified a cumulative total amount of $560,000.00 to be added to the contract sum. \
    </li><li>Eight weeks ago the Contractor issued a notice of dispute but the dispute has not been resolved.',
    //2
    '8U.<li>Date of acceptance of tender = 12/06/2017.</li><li>The Contractor&#39s overheads and profit percentage was agreed: 13% \
    </li><li>The Contractor did not reach practical completion until one week ago: 01/06/2018 \
    </li><li>The Superintendent has certified a cumulative total amount of $560,000.00 to be added to the contract sum. \
    </li><li>Eight weeks ago the Contractor issued a notice of dispute but the dispute has not been resolved.',
    //3
    'SQ.<li>Date of acceptance of tender = 02/06/2017.</li><li>The Contractor&#39s overheads and profit percentage was agreed: 15% \
    </li><li>The Contractor did not reach practical completion until one week ago: 01/06/2018 \
    </li><li>The Superintendent has certified a cumulative total amount of $560,000.00 to be added to the contract sum. \
    </li><li>Eight weeks ago the Contractor issued a notice of dispute but the dispute has not been resolved.',
    //4
    '4M.<li>Date of acceptance of tender = 12/06/2017.</li><li>The Contractor&#39s overheads and profit percentage was agreed: 15% \
    </li><li>The Contractor did not reach practical completion until one week ago: 01/06/2018 \
    </li><li>The Superintendent has certified a cumulative total amount of $560,000.00 to be added to the contract sum. \
    </li><li>Eight weeks ago the Contractor issued a notice of dispute but the dispute has not been resolved.'
];

var q4alist = [
    '1Y.According to AS4000 what actions should the Contractor have taken within 6 weeks of the contract date?',
    'YY.According to AS4000 what actions should the Principal have taken within 6 weeks of the contract date?'
];

var q4blist = [
    //1
    'CC.<p style="text-indent: 70px">BQ07 = 5156.0 sq m</p> \
    <p style="text-indent: 70px">BQ11 = 2,497.2 sq m</p> \
    <p style="text-indent: 70px">BQ12 = 0</p> \
    <p style="text-indent: 70px">BQ16 = 4,681.5 sq m</p> \
    <p style="text-indent: 70px">BQ20 = 12,096.4 sq m</p> \
    <p style="text-indent: 70px">BQ21 = 3,618.0 sq m</p>',
    //2
    '72.<p style="text-indent: 70px">BQ07 = 5130.2.0 sq m</p> \
    <p style="text-indent: 70px">BQ11 = 2484.7 sq m</p> \
    <p style="text-indent: 70px">BQ12 = 0</p> \
    <p style="text-indent: 70px">BQ16 = 4,682.7 sq m</p> \
    <p style="text-indent: 70px">BQ20 = 12,097.6 sq m</p> \
    <p style="text-indent: 70px">BQ21 = 3,599.9 sq m</p>',
    //3
    '37.<p style="text-indent: 70px">BQ07 = 5181.5 sq m</p> \
    <p style="text-indent: 70px">BQ11 = 2,509.6 sq m</p> \
    <p style="text-indent: 70px">BQ12 = 0</p> \
    <p style="text-indent: 70px">BQ16 = 4,729.5 sq m</p> \
    <p style="text-indent: 70px">BQ20 = 12,218.6 sq m</p> \
    <p style="text-indent: 70px">BQ21 = 3,635.9 sq m</p>',
];

var q5list = [
    //1
    'G2.<ol type="i" style="margin-left: 70px"> \
        <li>the amount invoiced by a subcontractor to the Contractor for work done under a provisional sum was as follows: \
        <p style="text-indent: 70px">Provisional Sum = $108,000.00</p> \
        <p style="text-indent: 70px">Subcontractor invoice =  $94,500.00</p></li> \
        <li>the artwork in Item B/Q 012 of the bill of quantities is <strong><em>deleted</em></strong> from the Contract</li> \
        <li>the <em><strong>total cost</strong></em> to the Contractor of work carried out by the Contractor in relation to a provisional sum was as follows:  \
        <p style="text-indent: 70px">Provisional Sum = $107,500.00</p> \
        <p style="text-indent: 70px">Contractors <strong><em>costs</em></strong> = $98,900.00</p></li> \
    </ol>',
    //2
    'M8.<ol type="i" style="margin-left: 70px"> \
        <li>the amount invoiced by a subcontractor to the Contractor for work done under a provisional sum was as follows: \
        <p style="text-indent: 70px">Provisional Sum = $108,000.00</p> \
        <p style="text-indent: 70px">Subcontractor invoice =  $94,500.00</p></li> \
        <li>the artwork in Item B/Q 012 of the bill of quantities is <strong><em>deleted</em></strong> from the Contract</li> \
        <li>the <em><strong>total cost</strong></em> to the Contractor of work carried out by the Contractor in relation to a provisional sum was as follows:  \
        <p style="text-indent: 70px">Provisional Sum = $105,700.00</p> \
        <p style="text-indent: 70px">Contractors <strong><em>costs</em></strong> = $98,900.00</p></li> \
    </ol>'
];

var q6list = [
    //1
	'OZ.<p>You are the Superintendent for the contract described in the assignment scenario and a situation has arisen where, although you are not certain, you suspect that the quality of one face of a reinforced concrete footing may not meet the requirements of the specification. Unfortunately, the footing was backfilled before you had an opportunity to inspect the workmanship.</p> \
	<p>Prepare a notice to the Contractor, directing it to open up the work for inspection. It should also inform the Contractor of the possible consequences of this direction, and of any defective work that may be revealed by the inspection.</p> ',
	//2
    'GR.<ul><li>you are the Superintendent for the Contract</li> \
		<li>the Contractor is obliged to effect insurance of the Works</li> \
		<li>the date for giving the Contractor possession of the site has passed</li> \
		<li>whilst the Contractor asserts that the insurance has been effected, it has not provided any evidence of such insurance to the Principal</li></ul> \
	<p>Prepare a notice to the Contractor, informing it of the contractual consequences of its failure to comply with the Contract.</p>',
    //3
    'EA.<ul><li>you are the Superintendent for the Contract</li> \
		<li>heavy rain caused the sides of a deep excavation which is part of WUC to become unstable </li> \
		<li>a residential building on the adjacent lot is likely to be undermined and collapse within hours unless emergency shoring work is carried out urgently </li> \
		<li>it is after midnight and the Contractor&#39s representative has not been contactable for the past 2 hours</li></ul> \
	<p>Prepare a notice to the Contractor, informing it that the Principal intends to take the urgent action necessary to prevent collapse of the neighbouring building and advising of the contractual consequences of the Contractor&#39s failure to take action.</p>',
    //4
    'TT.<ul><li>you are the Superintendent for the Contract</li> \
		<li>you are the Contractor&#39s representative for the Contract</li> \
		<li>the Principal has not made any payment of moneys due for more than two months</li> \
		<li>two weeks ago, in accordance with Cl 39.8 you gave the Principal a notice to show cause within eight days of the notice</li> \
		<li>the Principal has not replied</li></ul> \
	<p>Prepare a notice to the Principal informing it that the Contractor is suspending the whole of WUC, and advising of the potential consequences of the Principal&#39;s failure to show cause.</p>'
];

var q7list = [
    '01.identities of the parties to the Contract',
	'PQ.details of substantial breaches by the parties',
	'UB.how a construction program is instigated',
	'M3.identity of a nominated subcontractor',
	'6T.risks of loss or damage to WUC for which the Principal is liable',
	'RM.whether the bill of quantities forms part of the Contract',
	'SV.from whom the Contractor is required to take instructions/directions',
	'88.in what manner the Superintendent should act',
	'N9.the primary obligations of the parties to the Contract',
	'A0.the period after a party becomes aware of a claim in relation to a Superintendent&#39ss direction within which the party is required to issue a notice of dispute',
	'EO.an explicit statement defining a substantial breach by the Principal that is caused by a failure of the Superintendent',
	'OC.whether the Superintendent has the authority to prevent the Contractor from removing it&#39s own equipment from the site once it is no longer required',
	'ZX.who is responsible for the cost of rectifying damage classified under Cl 15.1 d)',
	'0Ethe purpose for which the Principal is permitted to copy the documents in Cl 8.3 a)',
	'QP.how the work required to rectify damage caused by an excepted risk is valued',
	'40.the Contractor&#39s obligation to avoid interference with the ability of pedestrians to move past the site',
	'SC.what measures the Contractor can take if the Superintendent does not respond as required under Cl 34.6 after receiving the Contractor&#39ss request for issue of a certificate of practical completion'
];


var q8list = [
    'A1.Provisional sum',
	'PA.Order of precedence',
	'HY.Selected subcontractor',
	'CV.Time bar',
	'BD.Cross liability',
	'VO.Novation',
	'L7.Formal instrument of agreement',
	'VC.Annexure Part A Separable Portions',
	'AN.Security',
	'A7.Final certificate'
];

var q9list = [
    'VG.in escrow',
	'B1.time bar',
    'IJ.Prescribed notice',
    '3D.Contract sum'
];


function findItem(code,list) {
    for (var c = 0; c < list.length; c++) {
       // console.log(list[c].substr(0,2));
        if (code == list[c].substr(0,2)) {
            return(list[c].substr(3));
//            console.log(list[c].substr(3));
            
        }
    }
}


function generateKey() {
    var studentid = "";
    var idcount = 0;
    var examidslen = examids.length;
    var examID="";
    var item1="";
    var item2="";
    var item3="";
    var qDiv = document.getElementById("s2a");
    var answer="";
    var altanswer="";
    var comboitem="";
    var finalresult="";
    
    //Use finalresult to setup start of table of results
    finalresult += "<table style='width:100%' border='1px solid black'><th>Student number</th><th>Q3</th><th>Q4</th><th>Q5</th><th>Q6</th><th>Q7a</th><th>Q7b</th><th>Q7c</th><th>Q7d</th><th>Q7e</th><th>Q8</th><th>Q9</th></tr>";
    // Search for student and find their examid

    for (idcount =0; idcount <examidslen; idcount++) {
        finalresult += "<tr><td>"+examids[idcount][0]+"</td>"    // Add student number to the table
        examID = examids[idcount][1];
        console.log('examid:'+examID);
        //Task 3
        item1=examID.substr(28,2);  //Find the item code for s2a from the examID
        item2=examID.substr(26,2);  //Find the item code for s2c from the examID
        if (item1 == "3G") {
            switch (item2) {
                case "51":
                    answer="311";
                    break;
                case "SQ":
                    answer="311";
                    break;
                case "8U":
                    answer="312";
                    break;
                case "4M":
                    answer="312";
                    break;      
            }
        } else {
            switch (item2) {
                case "51":
                    answer="321";
                    break;
                case "SQ":
                    answer="321";
                    break;
                case "8U":
                    answer="322";
                    break;
                case "4M":
                    answer="322";
                    break;       
            }
        }
        finalresult += "<td>"+answer+"</td>";
    
    
        //TASK 4
        answer="";
        altanswer="";
        //item 1 stays the same
        item2=examID.substr(24,2);  //Find the item code for q4a from the examID
        item3=examID.substr(22,2);  //Find the item code for q4b from the examID
        comboitem = item1 + item2 + item3;  // combine the 3 for easy lookup
        switch (comboitem) {
            case "3G1YCC":
                answer="401 + 403";
                altanswer="413";
                break;
            case "3G1Y72":
                answer="401 + 404";
                altanswer="414";
                break;
            case "3G1Y37":
                answer="401 + 405";
                altanswer="415";
                break;
            case "321YCC":
                answer="401 + 406";
                altanswer="416";
                break;
            case "321Y72":
                answer="401 + 407";
                altanswer="417";
                break;
            case "321Y37":
                answer="401 + 408";
                altanswer="418";
                break;
            case "3GYYCC":
                answer="402 + 403";
                altanswer="423";
                break;
            case "3GYY72":
                answer="402 + 404";
                altanswer="424";
                break;
            case "3GYY37":
                answer="402 + 405";
                altanswer="425";
                break;
            case "32YYCC":
                answer="402 + 406";
                altanswer="426";
                break;
            case "32YY72":
                answer="402 + 407";
                altanswer="427";
                break;
            case "32YY37":
                answer="402 + 408";
                altanswer="428";
                break;
        }        
        //Display answers for task 4
        finalresult += "<td>"+ answer + ". Alt:" + altanswer + "</td>";

    
    
        //TASK 5
        answer="";
        altanswer="";
        item1=examID.substr(28,2);  //Find the item code for s2a from the examID
        item2=examID.substr(26,2);  //Find the item code for s2c from the examID
        item3=examID.substr(20,2);  //Find the item code for q5 from the examID        
        comboitem = item1 + item2 + item3;
        switch (comboitem) {
            case "3251G2":
                answer="521";
                break;
            case "3251M8":
                answer="522";
                break;
            case "324MG2":
                answer="523";
                break;
            case "324MM8":
                answer="522";
                break; 
            case "328UG2":
                answer="521";
                break; 
            case "328UM8":
                answer="522";
                break; 
            case "32SQG2":
                answer="523";
                break;
            case "32SQM8":
                answer="522";
                break;
            case "3G51G2":
                answer="511";
                break;    
            case "3G51M8":
                answer="512";
                break;
            case "3G4MG2":
                answer="513";
                break;
            case "3G4MM8":
                answer="512";
                break;
            case "3G8UG2":
                answer="511";
                break;    
            case "3G8UM8":
                answer="512";
                break;
            case "3GSQG2":
                answer="513";
                break;
            case "3GSQM8":
                answer="512";
                break;
        }
        finalresult += "<td>" + answer + "</td>";
    
        //TASK 6
        answer="";
        altanswer="";
        item1=examID.substr(18,2);  //Find the item code for q6 from the examID
        
        switch (item1) {
            case "OZ":
                answer="601";
                break;
            case "GR":
                answer="602";
                break;
            case "EA":
                answer="603";
                break;
            case "TT":
                answer="604";
                break;
        }
        finalresult += "<td>" + answer + "</td>";
    
        //TASK 7
        answer="";
        for (var cs=0; cs < 5; cs++) {
            item1=examID.substr(16-cs*2,2);
            switch (item1) {
                case "01":
                    answer="701a";
                    break;
                case "PQ":
                    answer="701b";
                    break;
                case "UB":
                    answer="701c";
                    break;
                case "M3":
                    answer="701d";
                    break;
                case "6T":
                    answer="701e";
                    break;
                case "RM":
                    answer="701f";
                    break;
                case "SV":
                    answer="701g";
                    break;
                case "88":
                    answer="701h";
                    break;
                case "N9":
                    answer="701i";
                    break;
                case "A0":
                    answer="701j";
                    break;
                case "EO":
                    answer="701k";
                    break;
                case "OC":
                    answer="701l";
                    break;
                case "ZX":
                    answer="701m";
                    break;
                case "0E":
                    answer="701n";
                    break;
                case "QP":
                    answer="701o";
                    break;
                case "40":
                    answer="701p";
                    break;
                case "SC":
                    answer="701q";
                    break;
            }
            finalresult += "<td>" + answer + "</td>";
        }
        
        

            
        //TASK 8
        answer="";
        altanswer="";
        item1=examID.substr(4,2);  //Find the item code for q8 from the examID
        item2=examID.substr(2,2);  //Find the item code for q8 from the examID
        switch (item1) {
            case "A1":
                answer="801";
                break;
            case "PA":
                answer="802";
                break;
            case "HY":
                answer="803";
                break;
            case "CV":
                answer="804";
                break;
            case "BD":
                answer="805";
                break;
            case "VO":
                answer="806";
                break;
            case "L7":
                answer="807";
                break;
            case "VC":
                answer="808";
                break;
            case "AN":
                answer="809";
                break;
            case "A7":
                answer="810";
                break;
        }
        switch (item2) {
            case "A1":
                altanswer="801";
                break;
            case "PA":
                altanswer="802";
                break;
            case "HY":
                altanswer="803";
                break;
            case "CV":
                altanswer="804";
                break;
            case "BD":
                altanswer="805";
                break;
            case "VO":
                altanswer="806";
                break;
            case "L7":
                altanswer="807";
                break;
            case "VC":
                altanswer="808";
                break;
            case "AN":
                altanswer="809";
                break;
            case "A7":
                altanswer="810";
                break;
        }
        finalresult += "<td>" + + answer + " and " + altanswer + "</td>";
    
        //TASK 9
        answer="";
        altanswer="";
        item1=examID.substr(0,2);  //Find the item code for q8 from the examID which is incorrectly using q8's variables        
        switch (item1) {
            case "A1":
                answer="901";
                break;
            case "PA":
                answer="902";
                break;
            case "HY":
                answer="903";
                break;
            case "CV":
                answer="904";
                break;
            case "BD":
                answer="905";
                break;
            case "VO":
                answer="906";
                break;
            case "L7":
                answer="907";
                break;
            case "VC":
                answer="908";
                break;
            case "AN":
                answer="909";
                break;
            case "A7":
                answer="910";
                break;
        }
        finalresult += "<td>" + answer + "</td></tr>";    
    }
    qdiv = document.getElementById('resulttable');
    qdiv.innerHTML += finalresult;
    
    console.log(finalresult);
    

    
}

