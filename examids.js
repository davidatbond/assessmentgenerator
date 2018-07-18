var examids = ['BDVCL7RMPQ0ESVM3OCEAG2CC1Y51329HHT2GIQHH15G243', 
'ANA7HY880E40UB01PQOZG2721YSQ32BAU7872ZR4B41Z6P',
'L7CVANM3SV01UBEO0EGRG2371Y5132T887U73RQ9WK6P15',
'ANCVBDM3PQZX01A0EOGRM872YY4M322ZU7AB9HQU1ZKL15',
'VOA7HYM3UBRM6TA0ZXGRG2CC1Y4M322GQUIQHH2ZG26PB4',
'VCANBDM340SVRMEO6TTTG2371Y51322Z3R9HU7QU6PB4KL',
'VCBDCVZX01PQN9SVOCOZG237YY4M3G29HT3RQ9ZZG215KL',
'ANCVPAZXUBRMSVEO01EAG2721Y4M3GHT3R2G8G27H1G21Z',
'VOPAA7M3QPUB40SVSCTTM8371YSQ32HHDDZZR4BAB4KLH1',
'CVHYVCZXRMSV40OCPQGRG2CC1YSQ3GQUABU73RQ9B4WKKL',
'PAANBDSVEO40PQA001TTG272YY8U3G2GABQUHT3RKL6PH1',
'VOPAA1PQA06TOCSC88TTG2721Y8U329HT8872G2Z1Z43B4',
'CVVCHY40SVQPOC886TEAG2CCYYSQ322Z87R4QUAB1Z43B4',
'PAHYVON9016TSC0EOCOZG237YY513GDDZZQ9HHAB1ZWKH1',
'HYVOL70ESVEOQP6TZXOZG2371YSQ32HH2GQ987HTKL6P15',
'A7VCPAEOSC0EQP406TTTG237YY513G3RHT27DDBAH1KL15',
'L7A1VC40SCRMQPA00EEAM872YY513GZZ3RHH87IQKLH1WK',
'A1CVBDPQOC01880E40EAG2721YSQ329HHTHHABDD6PKLH1',
'BDCVA7EOPQSC88N9QPEAM8CCYYSQ3229878G3R2GB4WKH1',
'VCCVA7RMSVEO8840ZXOZG237YY513227T8HH2Z9HKLG243',
'VOBDL7SV01UB0EN96TGRM8CC1Y5132HH9HT8BAU743151Z',
'VCANPAA0M3PQN96TOCGRG2371Y4M3GIQR4U72GHT15KL6P',
'PAVOANUB0EM3OC406TTTG2CCYYSQ32QUT8R49HBAWK1ZH1',
'ANVOL7UBSV6TA0PQOCGRG272YY4M32DD8G2ZZZU7B46PG2',
'HYL7PA0EQPEO88SV01GRM872YY8U3G3R9HDD2Z27H1KL43',
'A1BDVCOC01A0ZXQP6TGRM8CCYY4M3G3RT89HU787156P43',
'VCA1BDQP40OCUBM3SCEAM8721YSQ32U72GQ93RIQWK431Z',
'VOPAANPQEO010EUB6TOZM8CCYY8U3287Q9U7ZZBAKLG215',
'BDL7VOUB6T88SVPQZXTTM8721YSQ3G2GDD293RHHB41543',
'BDPAA7M3SVOC0EQPUBTTG2371Y513GQU2GT8IQDDH11ZKL',
'ANPAVORMEOA0SC01N9EAG2CCYY4M3G272G2ZDDR4WKKL6P',
'A1PACV4001QPSVSCRMEAM8CCYY8U3229DDAB3RHH6PWK15',
'A7VOPAM3A0OCN940PQTTM837YYSQ32BAQUDDQ9ZZKL6PWK',
'PAVOANOCN901SVEOQPGRM8721YSQ322G87R429IQB4H115',
'L7PACVA0SV88SCOC40OZG272YY513GT8ZZ27DD296PG2H1',
'BDPAVCSVOC88RMSCZXTTM8CC1YSQ32HH29879HU71ZG2H1',
'BDL7HY8801QPPQM3SCGRM8721Y8U3G8GIQQUU7BAKLWKB4',
'A7VCBD8801OCM36T40GRM8721Y4M3G8GT8HT27R4G2B4H1',
'ANVCA7SV40QPUB0EOCEAM8CCYY5132DDQUIQ29ZZWKB415',
'PABDVOUBSC01M3QPEOTTM872YYSQ3G8GQUIQR4DD156PB4',
'ANL7VC88QPSVRMM3OCTTM837YY4M3GHTHH2G2ZDD43WK6P',
'PAA1L70EQPM388UBZXGRG2CCYY4M32DD87R4IQBAB46P15',
'CVA7PAOCSCZX0E01EOGRM8CC1Y4M3G87292ZBAR443WK1Z',
'PAA7L7SVA0OCN940QPGRG272YY5132ZZ9H3RQ927G243WK',
'L7VCCV6TSCSVUB01M3GRM8371Y4M3GDD29HH9HHTKL1Z43',
'BDVOHY01SVRMN9QPM3GRG272YYSQ3G9HABQUR4ZZKLH1B4',
'HYVCBDOCSCSV88A00EEAM872YY5132T82GZZ8GHTKL6PG2',
'A1VCANN96TOCM3RMEOOZM837YY4M32DDBA29Q9U715WKB4',
'HYVOA7OCQP88UBSC0EGRG2CCYY8U3GZZ87HH9HDDKLH143',
'HYL7A7EO01QPSV88UBGRG2CC1Y5132R4879HDD2943H11Z',
'L7CVVOPQSC6T0EUBEOOZM8721Y4M32U7HHABQUIQWK6P43',
'BDHYA1N9OC6TEO01ZXTTM8CC1Y4M3G2G87HHQU2Z15KLG2',
'A1A7HYEO6TN901UB88EAG2CCYY8U32Q9IQ2ZAB9H6PH115',
'VOHYBDN90EOC6TM3EOTTM8CC1YSQ32ABU7DD2927H1156P',
'VOHYA10EM3PQ88UBA0OZM872YY513227IQ879H8GKL15WK',
'CVHYANA0SVN9QPEO6TTTM8CCYYSQ3G292Z872GBAH143KL',
'BDVOCVRM880E6TN901OZG2371YSQ3G298G2GHHZZKLG243',
'VOHYA70EPQRMA0SCOCGRG2721YSQ32ABDDIQ8G2GB46P15',
'VOVCA1QPN901SVPQA0EAG2CCYY513G29HHQUHTR46PWKKL',
'VCVOA7M3SCUBEO6TRMOZM837YYSQ3GHHU7BA29871ZKLH1',
'HYBDCV0140OCEORM0ETTG2CCYYSQ32T88GIQBA87H1431Z',
'VOA7L7SV88OCA00EM3TTM8371YSQ328GU7T8ABR4B4H1KL',
'BDA1A7M3QPSV01PQ40GRG2371YSQ3229ABQUR43RB415WK',
'PAL7A7N9A0M340016TGRM837YY5132BA9HQ9ABU7431Z15',
'A7A1VCPQ0ERM01QPZXTTM8721Y8U32DDQU3R2GBA1Z156P',
'VCANA1QP010EEOSVPQTTM8CCYYSQ32DD2ZQUT8ABB46PKL',
'A1VCA7A0ZXSVSCM3EOOZM837YY8U3G2G3RBA9HU7WK43H1',
'VOA7BD0ESCSVOCEO88TTM8CCYY8U3G3R9H29Q92Z15H1KL',
'BDPAA7SVSC01EORM6TTTG2721YSQ3G29IQ3R8G2GB4WKG2',
'PAANHY6T01880ESCA0OZG2721YSQ329HT8QUBA27436P1Z',
'BDA7PA6TSV01SCQPOCEAM872YYSQ3G2ZT8DDR4BAG2WK43',
'CVHYBDSCEON9QPSV01EAG237YY513GQ9U787ABDDG2KL15',
'A7HYPA6TSCN9ZXUBM3GRM8CC1YSQ3G29QU2G27R41ZH16P',
'L7PAA7RM406TZXA0OCOZG2371Y513GZZAB3RHH2G43KLH1',
'VCA7A1SV6T40UB88A0EAM837YY8U3GHTZZT8U7Q9G26P1Z',
'VOHYA70ESCZXEON9UBEAM8CC1Y8U3GR42787BAU7WKB415',
'A7VCVOSCM30E40RMQPEAM8CC1Y8U32292ZHHU7R46PG2B4',
'PACVL7OCM3SCEORMZXTTG2371YSQ3287R4QUU727KL15H1',
'PAA7L7RMA0QP6TUBZXEAM8CCYY513GZZQ929R4T8H16P43',
'L7VOVCZX88SCEOA0N9GRG2721YSQ32BA27Q929U7B41Z43',
'VCVOA701M30E88EOSVTTG2CCYY8U329HR42G8GT8H1KLB4',
'HYPAA7406TM3QPOCUBOZG2CCYY8U3GQ9HTIQABR443WK1Z',
'HYA7ANEO880EM3A0OCTTM837YYSQ3GIQ2ZT82787B46PH1',
'ANVOA1M3SVOCUB0EQPEAG2CC1Y513GBA9HU7QUQ9KL11Z',
'A1A7VCUBN9A04088PQEAM8371Y513G9HT8HH3R271ZG2WK',
'VOA1PAQPM3N901RMEOEAM8CC1YSQ3G2Z8GR429276PB4KL',
'L7ANPA88M3OCA0RM0EGRG2CCYY4M3G3RHTQ99HZZKLH16P',
'L7A7CVOCA00EM36TUBOZG272YY4M3GAB29QU273RKLG243',
'BDANHYOCZXUBPQSC88OZM8371YSQ329HQU3R2927KLH1WK',
'HYPABDSCOCN9QPZX88EAG272YY8U3GDDIQHT29HHG26PB4',
'VCCVPAPQA08840QP0EOZG2CCYYSQ3GHTZZQUT83RWKG2KL',
'VOVCA7SVUBEOSCPQZXTTG2721Y8U3G8GT8Q9HH87KLH1G2',
'CVVCVOA0UBPQ40OCZXGRM8CCYY4M32ZZ8GT8U72ZG2WKKL',
'ANL7CVN9A0SV6T0EOCEAG2CC1YSQ3GQUZZBA293RH1G2KL',
'HYBDL7QPZXN9SV0EA0GRG237YY4M328GABT8873R6PH115',
'BDANVO40M3A0EORMPQOZM8CCYY8U3GABHTU7R4Q943WKB4',
'BDCVHYM3PQEOSV88N9GRM8CC1Y4M3GZZABT88G2ZKLB443',
'CVVCPAM3RM6TSV0EUBGRM8CCYYSQ3G27R4T8HHZZWK43KL',
'PAL7HYSCSV886TOCN9OZG2371Y8U3GT88G27HT29H1B4KL',
'ANVOL7SCPQRMQP01A0OZG2CCYY513G87R4292Z27KLWK1Z',
'VCANPAN9016TQPUBM3GRM8721Y4M3GHTHHQ9AB29KL6PH1',
'PAVCL7N9OCQP88SVZXOZM8721Y4M32ZZU7QU29AB1ZH16P',
'A7VCVOSV0E01OCA0M3OZG2CC1Y4M328G87272ZDD15H1KL',
'CVBDPAZXN9400EPQA0OZG2CC1Y513GU727AB872G15WKH1',
'A1CVPAOCN940M36TRMGRG2371Y513GQUHT2ZABBAH1KLWK',
'VOBDHY6TEOPQRMSVM3OZM8CC1Y4M3G87Q9BA29HHKLB4H1',
'CVVCBDZXA0SVSC4088OZG2371YSQ3G9HABZZ8G276P15H1',
'CVHYVORM88ZXM3A0OCEAG2721Y513GT8HTIQ8GBAH1436P',
'VOCVHYOC4088SVA0M3OZG2721Y8U3287R4DDZZ29H16PWK',
'CVA7AN6TPQOCSCUBRMGRG2371Y51323RBAZZDDR443B41Z',
'CVHYANRMA0ZXEOSV6TGRG2721YSQ3G27Q99HR4ZZ43G2B4',
'A7VOPAUBSVA00EOCQPGRG2721YSQ329HHH872Z27WKH115',
'A7VOBD40N90EQPUB6TOZG2CC1Y8U3GU72G8GZZ291Z15H1',
'L7PAANOCSV0EM340EOTTG2CC1Y51329H3RHTT827KL43G2',
'HYPABD0EUBSCA0016TGRG2CC1Y5132U7DD87T8BA43G21Z',
'A7PACVPQ88SV0140OCEAG2CC1YSQ32T8DDIQ292Z15B4KL',
'L7VCBD0EPQRM6T40M3OZG2721Y513GHTR4DDBA87H115KL',
'BDVCHYPQN9SVQPEO0EGRG237YYSQ32ZZ9H87BA2GG21543',
'PAVCBDM3QPZXOCUBSCEAM8371Y513GAB878GZZU7B4G2KL',
'A1HYA70EM3SVN9UBRMGRM8721YSQ3GIQ9H2787BAG2KL6P',
'PAANBDSVOC01PQEORMOZG2721Y513G8G27ZZHH9H43H16P',
'CVHYBDA0SVUB40SCZXEAM8CC1Y513G2G8G27BAR4H115KL',
'VCA1L7UBSV88PQ016TTTG2721Y8U32BA9HAB3R2G1ZB415',
'PAANHYN9OCUBRMSCM3TTM8CCYY51329H8GU72Z2715KLG2',
'ANCVBDPQOCRMSV0ESCEAM8CC1Y5132Q9U7T8IQ2GB4H115',
'L7A7PAEOSV40A088PQTTM872YY4M32QU87BA2Z29B4436P',
'VCCVL788ZXOCUB6T0EEAG2371YSQ3GDDT829IQ9HH16PB4',
'CVPABDUBN9SCRMEOPQOZG2371Y5132AB279HT8BAKL431Z',
'PAVCL7M3EORMPQOC6TOZM8721Y5132299HQU278GKLWK43',
'BDA7CV0EQPA0SVUBOCGRG237YY8U3G8GABHH272GKL1ZH1',
'A1PAANEOQPSV40A0RMGRG2371Y8U3G8GHTQUAB3R15B46P',
'CVPAHY88OC016TM3QPOZM8721Y513G9HQ9T82G8GKL151Z',
'VCVOBDUB40A0QP0EM3EAG237YYSQ32HTQUR4ZZAB1Z15G2',
'VOL7BDA0M3N940PQEOGRG237YYSQ3GR42GBAHHQUB4H1KL',
'A1BDPASCEO01UBOCN9GRM837YYSQ3GU7BA87QUIQ1Z15KL',
'L7VCANSV88RMM301N9OZM8CC1YSQ3G29HTHHABU7G2KL1Z',
'HYVCAN88N9PQ6T4001TTM8371Y51323R27879HR4B46PH1',
'VOVCAN01EOOCQPSVZXEAM837YY8U322ZQUIQU7ZZB4H11Z',
'VOCVANM3EO4001QP88TTM837YYSQ32T82ZHH87ZZ431ZKL',
'VCA1AN0ESV6TQPM388TTG237YY4M32R4ZZ87BA2ZH1B4WK',
'A1PAHY0E0188QPM3OCGRG237YY4M3229HTHHQ92ZG2H1WK',
'A7VCVO6T40UBZX01M3EAM8721YSQ3G27U7ABIQ2GG2B415',
'ANBDA7SCZX01PQN9EOEAG237YY51322ZBAU78GDD15WK1Z',
'BDVCPAQPA0SCPQEO40GRM8CC1Y513GT8R4BAABZZ431ZB4',
'A7HYPAQP01SV406TOCOZG272YYSQ32U7BA3R2987WK43KL',
'BDCVVOM3EO0EZXRMN9TTG2721Y8U3GQ987HHQUABWK1ZKL',
'HYL7A7A0N96TZXM3RMGRG2371Y5132QUR43RHTZZH11Z43',
'PABDA1ZXA0RMOC01QPOZM8371YSQ3GAB2Z873RZZB41ZKL',
'L7CVVCEOA0SVZXQPUBOZG2CC1Y5132Q9ABHHDDHT15H1KL',
'HYCVANRMSC40UB01QPOZM837YY8U3GZZDD2ZIQU743B4H1',
'A7ANL70ESVM36T01OCEAG2CCYYSQ32AB8GR4HH276P1ZB4',
'PAA1ANSC0ESV6TUBZXEAM8CC1YSQ3GIQ27Q9ABHTG2KLB4',
'HYPAA1PQ40ZXSV88N9OZM872YY513GQ9HTR429T8WKH143',
'ANPAVC0188M3OC6T0EGRG2721Y8U3GQ9DD879H2915G26P',
'L7HYVC0140PQ6TN9RMGRG2371Y8U3G872Z2G8GHT43G2H1',
'VOHYAN6TPQUB0E40EOEAG2CC1Y8U3GQUHHIQ3R9H6PG2WK',
'VOVCL701QP6TEOUB40TTM8CCYY4M3GHTT827DDU7WK431Z',
'A1ANL7PQN9OCQPM3A0EAM872YYSQ3229T8HTQUAB6P43KL',
'VCA1PA01UBZX0EA0M3GRM837YYSQ329HHH8GQ9IQ15B46P',
'L7VOCV6TSCEOSVN9QPOZG2CC1Y8U3GIQ27T82ZHHWK1ZB4',
'BDPAL7N9SCUB88OCRMEAM8371Y8U3GBA9HHH8GDD6PB4H1',
'A7HYPAM3RMEOOC88N9OZG237YY8U3G87BA2Z3R2743H16P',
'VCL7BDEOSC88M30E01OZG237YYSQ3GBA27HT2ZQ9G243H1'];

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
    '3G.Annexure Part A and B (Version 1)',
    '32.Annexure Part A and B (Version 2)'
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
    <p style="text-indent: 70px">BQ21 = 3,635.9 sq m</p>'
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
    'TT.<ul><li>you are the Contractor&#39s representative for the Contract</li> \
		<li>the Principal has not made any payment of moneys due for more than two months</li> \
		<li>two weeks ago, in accordance with Cl 39.8 you gave the Principal a notice to show cause within eight days of the notice</li> \
		<li>the Principal has not replied</li></ul> \
	<p>Prepare a notice to the Principal informing it that the Contractor is suspending the whole of WUC, and advising of the potential consequences of the Principal’s failure to show cause.</p>'
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

var c;
var qc;
var currentid = "";
var q1count = [0,0,0,0,0,0,0,0,0];
var q2count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var s2acount =[0,0];
var s2ccount = [0,0,0,0];
var q4acount = [0,0];
var q4bcount = [0,0,0];
var q5count = [0,0];
var q6count = [0,0,0,0];
var q7count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var q8count = [0,0,0,0,0,0,0,0,0,0];
var q9count = [0,0,0,0];

for (c=0; c < examids.length; c++) {
    currentid = examids[c].substring(44,46);
    
    // Search and count q1list-a
    for (qc=0; qc < q1list.length; qc++) {
        if (currentid == q1list[qc].substring(0,2)) {
            q1count[qc] += 1;
        }
    }
    // Search and count q1list-b
    currentid = examids[c].substring(42,44);
    for (qc=0; qc < q1list.length; qc++) {
        if (currentid == q1list[qc].substring(0,2)) {
            q1count[qc] += 1;
        }
    }
    
    // Search and count q1list-c
    currentid = examids[c].substring(42,44);
    for (qc=0; qc < q1list.length; qc++) {
        //console.log(currentid + ' == ' + q1list[qc].substring(0,2))
        if (currentid == q1list[qc].substring(0,2)) {
            q1count[qc] += 1;
        }
        //console.log(q1count[qc] + " of: "+ q1list[qc]);
    }
    
    //Search 5 times through q2list and count
    for (var q2c=0; q2c < 5; q2c++) {
        var q2lstart = 40 - (q2c*2);
        var q2lend = 42 - q2c*2;
        
         currentid = examids[c].substring(q2lstart,q2lend);
        for (qc=0; qc < q2list.length; qc++) {
            //console.log(currentid + ' == ' + q2list[qc].substring(0,2))
            if (currentid == q2list[qc].substring(0,2)) {
                q2count[qc] += 1;
            }
        }
    }
    
    //Search s2alist and count
    //Search 2 times through q2list and count
    for (q2c=0; q2c < 2; q2c++) {
        q2lstart = 30 - (q2c*2);
        q2lend = 32 - q2c*2;
        
         currentid = examids[c].substring(q2lstart,q2lend);
        for (qc=0; qc < s2alist.length; qc++) {
            //console.log(currentid + ' == ' + q2list[qc].substring(0,2))
            if (currentid == s2alist[qc].substring(0,2)) {
                s2acount[qc] += 1;
            }
        }
    }
    
    // Search and count s2clist and count
    currentid = examids[c].substring(26,28);
    for (qc=0; qc < s2clist.length; qc++) {
        //console.log(currentid + ' == ' + q1list[qc].substring(0,2))
        if (currentid == s2clist[qc].substring(0,2)) {
            s2ccount[qc] += 1;
        }
        //console.log(q1count[qc] + " of: "+ q1list[qc]);
    }
    
 
    //Search q4alist and count
    //Search 2 times through q4alist and count 
    currentid = examids[c].substring(24,26);
    for (qc=0; qc < q4alist.length; qc++) {
        
        if (currentid == q4alist[qc].substring(0,2)) {
            q4acount[qc] += 1;
        }
        
    }
    
    
    //Search q4blist and count
    currentid = examids[c].substring(22,24);
    for (qc=0; qc < q4blist.length; qc++) {
        //console.log(currentid + ' == ' + q2list[qc].substring(0,2))
        if (currentid == q4blist[qc].substring(0,2)) {
            q4bcount[qc] += 1;
        }
    }
    

    //Search q5list and count
    //Search 2 times through q5list and count
    currentid = examids[c].substring(20,22);
    for (qc=0; qc < q5list.length; qc++) {
        if (currentid == q5list[qc].substring(0,2)) {
            q5count[qc] += 1;
        }
        
    }
     
    
    //Search q6list and count
    //Search 4 times through q6list and count
    currentid = examids[c].substring(18,20);
    for (qc=0; qc < q6list.length; qc++) {
        if (currentid == q6list[qc].substring(0,2)) {
            q6count[qc] += 1;
        }
    }
     
    
    //Search q7list and count
    //Search 6 times through 7list and count
    for (q2c=0; q2c < 6; q2c++) {
        q2lstart =18 - (q2c*2);
        q2lend = 16 - q2c*2;
        
        currentid = examids[c].substring(q2lstart,q2lend);
        for (qc=0; qc < q7list.length; qc++) {
            if (currentid == q7list[qc].substring(0,2)) {
                q7count[qc] += 1;
            }
        }
    } 
    
    //Search q8list and count
    //Search 2 times through q4blist and count
    for (q2c=0; q2c < 2; q2c++) {
        q2lstart = 8 - (q2c*2);
        q2lend =  6 - q2c*2;
        
        currentid = examids[c].substring(q2lstart,q2lend);
        for (qc=0; qc < q8list.length; qc++) {
            if (currentid == q8list[qc].substring(0,2)) {
                q8count[qc] += 1;
            }
        }
    } 
    
    //Search q9list and count
    //Search 2 times through q4blist and count
    for (q2c=0; q2c < 2; q2c++) {
        q2lstart =4 - (q2c*2);
        q2lend = 2 - q2c*2;
        
        currentid = examids[c].substring(q2lstart,q2lend);
        for (qc=0; qc < q9list.length; qc++) {
            if (currentid == q9list[qc].substring(0,2)) {
                q9count[qc] += 1;
            }
            console.log(currentid + ' == ' + q9list[qc].substring(0,2) + " = "+ q9count[qc]);
        }
    } 
}

//Put q1 details on page
var qdiv = document.getElementById('q1list');
for (qc=0; qc < q1list.length; qc++) {
    qdiv.innerHTML += q1count[qc] + " of: "+ q1list[qc].substring(3,q1list[qc].length) + "</br>";
}

//Put q2 details on page
qdiv = document.getElementById('q2list');
for (qc=0; qc < q2list.length; qc++) {
    qdiv.innerHTML += q2count[qc] + " of: "+ q2list[qc].substring(3,q2list[qc].length) + "</br>";
}

//Put s2a details on page
qdiv = document.getElementById('s2a');
for (qc=0; qc < s2alist.length; qc++) {
    qdiv.innerHTML += s2acount[qc] + " of: "+ s2alist[qc].substring(3,s2alist[qc].length) + "</br>";
}
    
//Put s2c details on page
qdiv = document.getElementById('s2c');
for (qc=0; qc < s2clist.length; qc++) {
    qdiv.innerHTML += "<br>" + s2ccount[qc] + " of: "+ s2clist[qc].substring(3,s2clist[qc].length) + "</br>";
}  
    
//Put q4a details on page
qdiv = document.getElementById('q4a');
for (qc=0; qc < q4alist.length; qc++) {
    qdiv.innerHTML += "<br>" + q4acount[qc] + " of: "+ q4alist[qc].substring(3,q4alist[qc].length) + "</br>";
}  

//Put q4b details on page
qdiv = document.getElementById('q4b');
for (qc=0; qc < q4blist.length; qc++) {
    qdiv.innerHTML += "<br>" + q4bcount[qc] + " of: "+ q4blist[qc].substring(3,q4blist[qc].length) + "</br>";
}  

//Put q5 details on page
qdiv = document.getElementById('q5');
for (qc=0; qc < q5list.length; qc++) {
    qdiv.innerHTML += "<br>" + q5count[qc] + " of: "+ q5list[qc].substring(3,q5list[qc].length) + "</br>";
}  

//Put q6 details on page
qdiv = document.getElementById('q6');
for (qc=0; qc < q6list.length; qc++) {
    qdiv.innerHTML += "<br>" + q6count[qc] + " of: "+ q6list[qc].substring(3,q6list[qc].length) + "</br>";
} 

//Put q7 details on page
qdiv = document.getElementById('q7');
for (qc=0; qc < q7list.length; qc++) {
    qdiv.innerHTML += "<br>" + q7count[qc] + " of: "+ q7list[qc].substring(3,q7list[qc].length) + "</br>";
} 

//Put q8 details on page
qdiv = document.getElementById('q8');
for (qc=0; qc < q8list.length; qc++) {
    qdiv.innerHTML += "<br>" + q8count[qc] + " of: "+ q8list[qc].substring(3,q8list[qc].length) + "</br>";
} 

//Put q9 details on page
qdiv = document.getElementById('q9');
for (qc=0; qc < q9list.length; qc++) {
    //qdiv.innerHTML += "<br>" + q9count[qc] + " of: "+ q9list[qc].substring(3,q9list[qc].length) + "</br>";
    qdiv.innerHTML += "No data for: "+ q9list[qc].substring(3,q9list[qc].length) + "</br>";
} 
