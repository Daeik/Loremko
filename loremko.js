(function() {
	
	// family name: http://ko.wikipedia.org/wiki/%ED%95%9C%EA%B5%AD%EC%9D%98_%EC%84%B1%EC%94%A8_%EB%AA%A9%EB%A1%9D
	// other name part: http://ko.wikipedia.org/wiki/%ED%95%9C%EA%B5%AD%EC%9D%98_%EC%84%B1%EC%94%A8%EC%99%80_%EC%9D%B4%EB%A6%84

	var nameData = {
		familyName: ["가","간","갈","감","강","강전","개","견","경","계","고","곡","공","곽","구","국","군","궁","궉","권","근","금","기","길","김","나","라","남","남궁","낭","랑","내","노","로","뇌","뢰","누","단","담","당","대","도","독고","돈","동","동방","두","류","마","만","망절","매","맹","명","모","목","묵","문","미","민","박","반","방","배","백","범","변","복","봉","부","빈","빙","사","사공","삼","상","서","서문","석","선","선우","설","섭","성","소","소봉","손","송","수","순","승","시","신","심","십","아","안","애","야","양","량","어","어금","엄","여","연","염","영","예","오","옥","온","옹","왕","요","용","우","운","원","위","유","육","윤","은","음","이","인","임","림","자","장","전","점","정","제","제갈","조","종","좌","주","준","즙","지","진","차","창","채","척","천","초","최","추","탁","탄","태","판","팽","편","평","포","표","풍","피","필","하","학","한","함","해","허","현","형","호","홍","화","환","황","황보"],
		maleMiddle: ["영","성","정","지","동","민","현","상","준","우","종","도","건","예","병","진","광","경","중","재","승"],
		maleEnd: ["수","호","훈","현","준","철","민","우","후","식","웅","진","혁","서","길","재","일","환","영","석","남"],
		femaleMiddle: ["지","유","은","미","서","진","정","영","민","혜","수","경","현","주","예","아","하","세","선"],
		femaleEnd:  ["은","진","지","경","영","혜","연","서","희","정","주","민","빈","현","원","우","미","윤","름","유"]
	};

	// words from http://ko.wikipedia.org/wiki/%EB%A3%A8%ED%8A%B8%EB%B9%84%ED%9E%88_%ED%8C%90_%EB%B2%A0%ED%86%A0%EB%B2%A4

	var words = {
		word: ["위키백과","우리","모두의","백과사전","이동","둘러보기","검색","베토벤은","여기로","다른","뜻에","대해서는","베토벤","동음이의","문서를","참조하십시오","루트비히","요제프","슈타이어가","그린","베토벤의","초상화","장엄","미사를","작곡하고","기본","정보","출생","독일","사망","오스트리아","제국","국적","직업","피아노","연주자","오르간","작곡가","장르","서양","고전","음악","악기","독일어","독일의","본에서","태어났으며","성인이","이후","거의","빈에서","감기와","폐렴으로","인한","합병증으로","투병하다가","세로","생을","마친","그는","고전주의와","낭만주의의","전환기에","활동한","주요","음악가이며","작곡가로","널리","존경받고","가장","알려진","작품","가운데에는","교향곡","피아노곡","엘리제를","위하여","비창","소나타","월광","등이","목차","숨기기","생애","유년","시절","부친","음악수업","사람들과의","만남","브로이닝","집안과의","모차르트와의","궁정","교향악단","하이든과의","연주활동","유명세를","음악적","성숙","교습","청력","상실","후원","슈베르트와의","시기별","분류","낭만주의적","특징","실내악곡","미사","오라토리오","칸타타와","기타","성악곡","관현악곡","협주곡","푸가","자필본","주석","참고","문헌","바깥","고리","편집","할아버지는","네덜란드의","플랑드르","귀족","출신의","음악가로","손자와","동명인","할아버지","살에","독일로","이주하여","쾰른","선제후","궁정의","베이스","가수로","취직해서","악장","으로","그의","외아들","요한","같은","곳에서","테너","일하였으며","피아노와","바이올린","교습으로","부수입을","요한은","마리아","막달레나","케베리히","결혼하였는데","마리아는","트리어","대주교","수석","요리사였던","하인리히","원래","모두","남매를","장남인","루드비히","태어나자","마자","죽었고","둘째가","셋째","카알과","넷째","요한을","낳은","후에도","자녀들도","일찍","어머니가","죽은","살림을","맡아","가정부가","있었지만","실질적인","부양은","첫째","동생인","안톤","카알","형과","같이","작곡가가","되려고","했지만","포기하고","세무서원이","피아노를","웬만큼","치기는","하였지만","별다른","재능이","없었기에","나중에","형의","평판이","높아지자","작품을","처분해서","보려는","생각으로","형이","출판을","꺼려했던","초기의","습작들을","팔아치우는","여러가지로","형을","전기","작가인","세이어","바가텔집","가곡","등으로","추측하고","카알의","아들도","삼촌인","베토벤에게","말할","없는","괴로움을","막내동생인","니콜라스","역시","골치아픈","도움으로","약제사가","상당한","돈을","모은","다음에는","형에게","빌려주고는","그것을","미끼로","마음대로","품행이","단정치","못한","여인과","결혼할","때에도","반대를","꺾고","결혼한","뒤로부터는","상재가","대단해서","제법","재산을","모았으나","베토벤이","어려운","곤경에","처했을","결코","도우려고","하지","아버지도","술주정뱅이로","음악회를","가져다가","술을","교사는","아버지","흔히","가혹한","선생이며","어린","베토벤을","건반악기에","세워놓았으며","아이는","대개","울고","그러나","그로브","음악가","사전에서는","요한의","그런","행동에","대한","확실한","기록","증거가","없다고","지적하며","억측과","속설은","늘어나는","이라고","주장하고","선생으로는","에덴","주자인","토비아스","프리드리히","프파이퍼","가족의","친구이며","친척","에게","바이올린과","비올라를","가르침이","재능은","어릴","때부터","두각을","드러내어","나이","속설에서","말하는","살이","아닌","공연을","있을","당시","레오폴트","모차르트의","명성을","알고","있던","아들을","신동으로","삼아","벌려","했으나","결과는","대중","공연회","포스터에서","거짓말로","아들","살이라고","주장하였지만","실제로는","개월","다시말해","재능을","인정받기","위해","살을","속였지만","효과는","보지","그렇지만","이때문에","자신의","실제나이를","살로","적게","살게","되는데","훨씬","후에야","실제","나이를","알게","어느","시기에","중요한","교사였던","크리스티안","고틀로프","네페에","수업을","받게","주자로","임명된","네페는","작곡을","가르쳤으며","처음으로","출판한","곡인","드레슬러","행진곡에","의한","개의","건반","변주곡","작곡하는","네페의","보조","일하였는데","처음에는","임금을","받지","않은","일이었으나","안드레아","루체시가","지휘하는","예배당에","여러","사람들에게","소개받아","이때부터","삶에서","역할을","하게","젊은","의대생","프란츠","베겔러","그를","집안","베겔러는","집안의","딸과","결혼하게","소개해","종종","집안에","갔는데","여기서","문학과","문학을","접하였으며","아이","몇몇에게","가의","환경은","알코올","의존증환자인","아버지의","통제가","점점","심해지는","비교한다면","편안한","페르디난트","발트슈타인","백작과","알게되어","평생","친구이자","재정","지원자가","전기작가인","오토","모차르트가","천재성에","감탄했다는","일화를","전하고","있는데","내용은","다음과","되던","해인","오스트리아의","수도인","빈으로","여행을","여행의","목적이","자신은","모차르트를","만나기","위해서라고","단정짓고","있지만","그때문만은","이때까지","접해보지","못했던","새로운","자연과","음악을","접하고","싶은","마음도","충분히","내제하고","있었을","모차르트는","만나고","싶다는","청을","듣고","거절할","고향인","유명한","작곡가라는","말에","만나게","요구에","의해","즉흥곡을","연주했는데","암기하고","치는거라","여기고","별로","탐탁치","않게","그러자","평상시에","자신있던","즉흥실력을","모짜르트에게","보여주기","모차르트에서","즉흥곡의","테마","주제를","흥이","일기만","하면","즉흥연주에","뛰어난","솜씨를","자랑하던","그였고","연주는","감탄시키기에는","너무나","친구들이","모여있는","옆방으로","뛰어가","이렇게","사내를","지켜보게","오래지","않아","세상을","떠들썩하게","하고야","존재가","나타났다네","솔직히","년의","최초","여행에","관하여","확실하게","단정짓는","기록은","아무것도","그가","만났는지","만났다면","어느정도","대화를","나누었는지","또는","모차르트에게서","렛슨을","받았는지의","여부도","확인할만한","자료가","전혀","없다는","그리고","얀이","주장한","것과","모차르트와","만났다는","것을","뒷받침할","만한","뚜렷한","근거","또한","찾아","당시의","오페라","돈지오반니","작곡에","전념하고","있어서","사소한","방문객은","만나주지도","않았던","터여서","이때","당시에는","유명하지도","않고","이름도","알려지지","시골청년","관심을","보였을리","없고","모든","이야기는","사람들의","상상이","지어낸","이야기에","불과하리라는","것이","근래의","통설이고","국제음악계에서는","규정사실로","짓고","있는","이것을","증명해줄만한","물질적인","없기","교향곡의","불리는","하이든을","통하여","오랜","기간동안","수없이","많은","교제를","하였고","하이든에게서","레슨을","받은","기록들을","많이","발견할","베토벤도","하이든이","영국의","런던에서","본으로","와서","잠시","쉬고","있을때","찾아가서","인정받았고","얼마후","비인으로","다시","건너가서","하이든에게","수많은","기록도","남아있고","헌정한","이와","베토벤과","실제로","만남을","가졌다는","주장은","하나도","없어","국제","음악계에서도","인정을","받고","있지","음악가였던","뒤를이어","법적","지위를","얻어","집안을","부양하기","아버지가","받는","월급의","반을","받을","있었고","교향악단에서","연주하여","수입으로","교향악단에서의","경험으로","비롯하여","궁정에서","연주하던","다양한","오페라에","익숙해졌고","지휘자의","조카이며","자신과","동갑이던","플루트","주자","라이하","친구가","선제후의","아마","년대","런던으로","가던","성탄절","쯤에","머물","그에게","소개받은","것으로","하이든은","작곡한","곡의","장송칸타타","악보를","보고","인정하여","제자로","받아들이게","되어","월에","귀환한","뒤부터","베토벤과의","인연이","본을","떠날때","이별의","인사말을","적은","기념노트를","보면","빠른","날자는","리히터가","늦은","날짜는","브로이닝이","이므로","떠날","준비","기간과","출발시간을","가늠할","일에","빈에","도착한","즉시","가르침을","만족했지만","받다보니","이전의","위대한","우상이었던","거장","실망을","느끼게","특히","고치고","돌려준","셍크","미처","발견하지","오류와","잘못을","지적해주자","하이든에","불신감은","더욱","마침내","하이든에게서는","배울","선언하게","가르쳐주지","않았다고는","도저히","믿어지지","않지만","하이든의","느긋하고","여유있는","성격을","생각해보면","누군가에게","가르친다는","일이","적성에","맞았던","것은","아니었던","가르치는","상대가","젋은","혈기에","급한","성격으로","베토벤이었으니","둘이","서로","맞지","않았음은","당연하지","않았을까","이론가로","통하던","알브레히츠베르거","모짜르트의","연적으로","안토니오","살리에리","년말","결국","하이든","곁을","떠나지만","사람간의","불화가","정도였는지는","확실치","스스로","만족해하던","단조","중주곡을","출판하지","말라고","충고한","때문에","심한","상처를","받았던","일도","있듯이","어쨌든","사람","사이에","뭔가","개운치","앙금이","있었던","것만은","사실인","번째","영국","떠나자","선생님을","바꿀","절호의","기회가","그럼에도","불구하고","완성하여","헌정하였으며","그해","돌아왔을때","카를","리히노브스키","후작","저택의","연주회에서","직접","소나타가","출판되었다는","사실은","하이든과","사이가","결정적으로","나쁜","아니었음을","말해주고","쪽에서","말하자면","과거의","업적을","놓고","단지","향학열을","만족시켜주지","것에","불만을","가졌을","누구도","따라올","지위와","연륜을","갖춘","때도","신출내기","청년","음악가의","불평이나","불만","따위에","일일이","대응하여","신경을","필요가","사정이","간의","돌이킬","불화를","막아준","것이라고","중주","외에","출판되지","상당수의","곡을","작곡하는데","오늘날에는","대부분","작품번호로","볼수록","작곡","양식이","성숙해지고","범위가","넓어지고","있음을","음악학자들은","년에","변주곡집에서","번의","주제와","비슷한","부분이","찾아낸","바로","작곡자로","자립하지","않았으며","공부와","연주에","지도를","받으며","대위법을","숙달하고자","하였으며","이그나츠","슈판지히에게서","교습을","일찍이","때때로","살리에리에게서","주로","이탈리아풍","성악","양식","등의","받기도","관계는","년까지일수도","까지","영국으로","선제후는","고향으로","돌아오리라","남기로","알브레히츠베르거과","선생에게서","대위법","공부를","장학금","지급","기간이","끝났으나","롭코비츠","고트프리드","슈비텐","남작","이미","빈의","귀족들의","알아보고","재정적인","지원을","명인이자","살롱의","즉흥","연주자로","얻었으며","제바스티안","바흐의","평균율","클라비어곡집의","전주곡과","푸가를","연주하기도","친구","니콜라우스","짐로크는","출판하기","시작하였는데","처음","출간한","작품은","변주곡집","내내","매달렸으며","이듬해","출판이","공연하여","협주곡을","모호하여","작품이","번인지","번인지는","불분명하나","완성을","앞둔","동안","완성되어","연주회","직후","출판하면서","번호를","붙여","번을","이들","후원자","리히노브스키에게","헌정되었으며","생계비에","가까운","이익을","연주","여행처럼","중부","유럽의","문화","중심지를","여정에는","여행에도","함께하였으며","프라하","드레스덴","라이프치히","베를린을","방문하였으며","작곡과","공연","활동으로","여행","프라하에서","오래","머물렀는데","가문의","인맥","덕분에","도시에","오기도","전에","명성이","베를린에서는","첼로","작곡하여","첼로를","연주하는","애호가인","빌헬름","임금에","곡은","첼로와","피아노의","고려한","작품으로","비르투오조","파트를","결합한","임금은","금화가","가득","코담뱃갑을","주었는데","여행으로","벌었음을","돌아왔으며","떠났는데","북쪽이","동쪽으로","가서","프레스부르크","오늘날","브라티슬라바","페슈트로","프레스부르크에서","안드레아스","슈트라이허가","보낸","피아노로","연주하였는데","이를","농담하기를","나에게는","너무","왜냐하면","피아노는","나만의","음색을","자유를","빼앗아가기","라고","체재하였는데","그에게는","여름과","심각한","질병","티푸스","시달렸으나","부탁을","연주를","년일","수도","청력에","문제가","프라하로","여행할","청력이","점차","약해지면서","자체를","포기하게","년에서","드디어","작곡의","꽃이라고","여기던","현악","중주와","교향곡에","손을","공의","부탁으로","출판되어","번과","번와","함께","초연하였으며","뒤를","잇는","신예","세대의","인물로","계속","악곡도","작품도","내놓았는데","쿠퍼","성격의","강렬함","감정의","깊이","독창성","역동성","음조","면에서","이전","생전에","인기를","얻었던","중주도","초연하기","도시","극장을","임대하였으며","작품과","곡목을","알게마이네","무지칼리쉐","차이퉁","지에서","오랫동안","흥미로운","묘사했던","연주회는","어려움도","겪었는데","일부","비평가들은","연주자들이","독주자에","기울이지","비판하기도","영향을","분명하나","가령","목관","중주에서는","자신만의","독특한","기법이","쓰였으나","형식이","매우","측면을","무치오","클레멘티와","음악가들에게서도","양식상의","선율","전개","전조","轉調","기조","基調","쓰임","특성","빼놓을","없으며","초기","출간될","작품에서","영향이","그때부터","년까지","음악은","후원자와","출판업자","사이에서","얻고","멜러","헝가리인","백작부인","안나","브륀스비크","딸들에게","교습은","달을","넘기지","못하였는데","맏딸","요제피네","관계를","맺어","억측의","대상이","교습이","끝난","요제피네는","다임","혼인하였으며","이들의","가정에","자주","모임에서","하거나","악기를","요제피네의","결혼은","누가","보기에도","불행하였으나","부부는","자녀를","두었으며","다임이","뒤에도","요제피네와","진전이","밖에","제자도","리스","가르쳤는데","그들의","다룬","책인","체르니","년부터","밑에서","자신도","저명한","교사가","되었는데","맡은","제자","가운데는","리스트도","황제","초연한","작품에","집중하였는데","등과","이보다는","작은","곡도","발레곡","프로메테우스의","창조물","성공을","거두어","년과","수차례","공연되었으며","인기에","편승하여","편곡판도","연주회를","열려고","하였으나","교향곡은","자신이","상임","강의","강변","극장","예약","더불어","연주회에서는","감람산의","예수","평가는","제각각이었으나","재정적으로","성공하였고","일반","표의","가격으로","표값을","책정할","전에는","가끔","도와주던","동생","카를이","출판","경영에서","맡으면서","출판업자와의","사업도","발전하게","최근","작곡된","높은","값을","불러","협상할","아니라","카를은","예전에","작곡하고는","팔았으며","인기있는","작품들을","편성으로","편곡하도록","이런","부탁에","응했는데","출판업자들이","사람을","고용하여","비슷하게","편곡하는","막을","없었기","년경","청력을","귀울음","耳鳴","증세를","보여","감지하기","어렵게","되었으며","대화도","피하게","잃었는지는","않았는데","매독","중독","자기","면역","장애","전신","홍반성","루푸스","설이","있으며","심지어","잠을","깨기","찬물에","머리를","담그던","습관이","지적되기도","이에","관한","오래된","설명은","부검","결과로","외상이","커져","내이","內耳","부푼","상태였다는","다음날","음악가가","머리카락을","죽을","때까지","보관했으며","대대로","가보로","차세계대전","물품은","행방이","묘연해졌는데","이것이","런던","소더비","경매소에서","세상에","아르곤","국립연구소에서","분석한","결과","일반인의","배가","넘는","납수치가","이로써","일생동안","겪은","육체적","고통과","청력상실의","직접적인","원인이","납중독임이","친구들에게","편지를","보내어","증상을","설명하고","이로","인해","활동과","사회","생활에","어려움을","겪고","있다고","일부는","상실을","의사의","조언에","따라","바깥에","마을인","하일리겐슈타트에서","월부터","월까지","지내며","증세에","적응하고자","하일리겐슈타트","유서를","쓰는데","활동을","살겠노라는","결심을","시간이","지나면서","상실은","일화가","초연할","연주가","끝나자","들리지","않던","청각장애인임을","배려한","여가수의","객석을","향해","뒤돌아서자","그제서야","관객들이","박수를","치고","보았으며","눈물을","흘렸다고","잃었어도","계속할","있었으나","수지맞는","돈벌이","수단이던","연주하려","실패한","뒤로","다시는","사람들","앞에서","연주하지","소리를","조금이라도","공명판에","막대기를","대고","입에","물어서","진동을","턱으로","본의","베토벤하우스","박물관에는","나팔","기구","보청","기구들이","전시되어","분명","걱정거리였지만","체르니는","년까지는","그럭저럭","사람의","말이나","들을","귀머거리가","손님들","시끄러운","아르페지오나","우레같은","음표를","연주할","아름답지","않소","손님들은","익살과","용기에","깊은","동정을","잃으면서","특이한","사료가","죽기","친구들은","말을","책에다가","써서","전하였으며","말로","대답하거나","쓰기도","책들은","음악이나","화제에","토론을","담고","생각을","전해주고","음악과","관계에","대하여","어떻게","생각했는지","얼마나","작품의","느꼈을지에","연구의","되고","불행히도","비서","신틀러","이상화된","모습으로","그리려고","이러한","대화록","권을","고친","것도","후원자였던","루돌프","대공","이전까지의","음악가와","귀족간의","바하","헨델","모짜르트","등등의","작곡가들도","슬하에","귀족의","보호와","후원을","받아","먹고","사는","하이든도","에스테르하지","가문","소속의","음악가였지만","에스테르가문의","후계자가","워낙","음악에","관심이","없던","탓에","말년이","되서야","가문에서","벗어날","있었으며","모짜르트도","귀족과의","종속관계를","벗어나기","아르코","백작에게","발길질을","당하는","수모까지","끝에","종속관계에서","벗어났지만","못하여","가난한","말년을"],
		end: ["연결됩니다","있다","작곡가이다","살았다","타다","이었다","승진하였다","벌었다","딸이었다","낳았다","베토벤이다","죽었다","몫이었다","되었다","괴롭혔다","안겨주었다","존재였다","처분했다","멀어졌다","않았다","사먹었다","요한이었다","있었다","회자된다","가르쳤다","정도였다","시원찮았다","살이었다","못하였다","된다","사람이었다","도와주었다","고용되었다","주었다","가르쳐주었다","곳이었다","같다","떠난다","아니었다","것이다","생각했다","요청한다","충분하였다","외쳤다","없다","실정이다","때문이다","곡이다","않다","삼았다","갔다","보인다","시작된다","받았다","깊어졌다","그런데다","싶다","배운다","왔다","들려주었다","대선배였다","뿐이었다","없었다","여겨진다","분류된다","보여준다","몰두하였다","하였다","이어졌다","기대하였다","계속하였다","중요해졌다","선보였다","상황이었다","내놓았다","얻었다","순회하였다","동행하였다","환영받았다","높았다","헌정하였다","유명하다","알았다","좋다","말하였다","가을마다","많아졌다","대었다","평가받았다","뛰어넘었다","평가하였다","완성하였다","상태였다","공연하였다","않는다","도드라졌다","연주하였다","기억한다","썼다","수학하였다","취소되어버렸다","초연되었다","공연됐다","어쩌다","권하였다","때문이었다","잃어갔다","한다","잘라가져간다","물려준다","공개된다","나타났다","밝혀졌다","알렸다","담았다","심해졌다","어려워졌다","느꼈다","보존되었다","대화록이었다","파손해버렸다","종속관계였다","이유였다","작곡가였다","호칭이었다","편이었다","만났다","받아들였다","약속하였다","지불하였다","중단하였다","의지하였다","못했다","했다","그러다","말한다","말았다","만남이었다","분류한다","나눈다","넓힌다","든다","들어있다","작곡되었다","집어넣었다","이다","사람들마다","위치한다","불렸다","보고되었다","팔렸다","음악가이다","지적된다","경우이다","있습니다"]
	};

	var area = {
		state: [
			{ name: "서울", phonePrefix: "02" },
			{ name: "부산", phonePrefix: "051" },
			{ name: "대구", phonePrefix: "053" },
			{ name: "인천", phonePrefix: "032" },
			{ name: "광주", phonePrefix: "062" },
			{ name: "대전", phonePrefix: "042" },
			{ name: "울산", phonePrefix: "052" },
			{ name: "세종", phonePrefix: "044" },
			{ name: "경기", phonePrefix: "031" },
			{ name: "강원", phonePrefix: "033" },
			{ name: "충북", phonePrefix: "043" },
			{ name: "충남", phonePrefix: "041" },
			{ name: "전북", phonePrefix: "063" },
			{ name: "전남", phonePrefix: "061" },
			{ name: "경북", phonePrefix: "054" },
			{ name: "경남", phonePrefix: "055" },
			{ name: "제주", phonePrefix: "064" }
		]
	};


	var LoremKo = {
		name: function(gender) {
			var familyName = nameData.familyName[getRandomInt(0, nameData.familyName.length - 1)],
				middle = null,
				end = null,
				fullname = "";

			switch (gender) {
				case "m":
					middle = nameData.maleMiddle[getRandomInt(0, nameData.maleMiddle.length - 1)];
					end = nameData.maleEnd[getRandomInt(0, nameData.maleEnd.length - 1)];
					fullname = familyName + middle + end;
				break;
				case "f":
					middle = nameData.femaleMiddle[getRandomInt(0, nameData.femaleMiddle.length - 1)];
					end = nameData.femaleEnd[getRandomInt(0, nameData.femaleEnd.length - 1)];
					fullname = familyName + middle + end;
				break;
				default:
					var g = ["m", "f"][getRandomInt(0, 1)];
					fullname = this.name(g);
			}

			return fullname;
		},
		mobile: function() {
			return [
				0,
				1,
				getRandomInt(0, 8),
				"-",
				getRandomInt(0, 9),
				getRandomInt(0, 9),
				getRandomInt(0, 9),
				getRandomInt(0, 9),
				"-",
				getRandomInt(0, 9),
				getRandomInt(0, 9),
				getRandomInt(0, 9),
				getRandomInt(0, 9)
			].join("");
		},
		city: function() {
			return area.state[getRandomInt(0, area.state.length - 1)];
		},
		phone: function() {
			return [
				this.city().phonePrefix,
				"-",
				getRandomInt(1, 9),
				getRandomInt(0, 9),
				getRandomInt(0, 9),
				"-",
				getRandomInt(0, 9),
				getRandomInt(0, 9),
				getRandomInt(0, 9),
				getRandomInt(0, 9)
			].join("");
		},
		word: function(length) {
			var length = length ? length : 1,
				str = [];

			for (var i = 0; i < length; i++) {
				str.push(words.word[getRandomInt(0, words.word.length - 1)]);
			};
			return str.join(" ");
		},
		sentence: function(length) {
			var length = length ? length : 1,
				sentences = [];

			for (var j = 0; j < length; j++) {
				var sentence = [this.word(getRandomInt(4, 12)), words.end[getRandomInt(0, words.end.length - 1)]];
				sentences.push(sentence.join(" ") + ".")
			};

			return sentences.join(" ");
		},
		paragraph: function(length) {
			var length = length ? length : 1,
				paragraph = [];

			for (var i = 0; i < length; i++) {
				paragraph.push(this.sentence(getRandomInt(4, 8)));
			};
			return paragraph.join("\n")
		}
	}

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	window.LoremKo = LoremKo;

})();