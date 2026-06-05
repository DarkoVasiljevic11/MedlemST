import bronhi from "../../assets/prozivodimed/bronhim.jpg";
import borovnica from "../../assets/prozivodimed/borovnicam.jpg";
import bagrem from "../../assets/prozivodimed/bagrem.jpg";
import imuno from "../../assets/prozivodimed/imunom.jpg";
import jagoda from "../../assets/prozivodimed/jagodam.jpg";
import kakao from "../../assets/prozivodimed/kakaom.jpg";
import kopriva from "../../assets/prozivodimed/koprivam.jpg";
import limun from "../../assets/prozivodimed/limunm.jpg";
import livadski from "../../assets/prozivodimed/livadskim.jpg";
import malina from "../../assets/prozivodimed/malina.jpg";
import propolis from "../..//assets/prozivodimed/propolis.jpg";


const products = [
    { id:1,
      image: bronhi,
      category:{
      name:"Lekoviti med",
      slug:"lekoviti"},
      title: "Bronhi Med",
      description:{des:"Prirodno olakšanje za vaše disajne puteve i moćan saveznik u borbi protiv prehlada. Ovaj proizvod predstavlja pažljivo izbalansiranu mešavinu našeg kristalizovanog livadskog meda i pet moćnih, lekovitih trava: anisa, podbela, bokvice, vranilove trave i omana. Kombinacija ovih biljaka u mednoj bazi stvara jedinstveni prirodni sirup koji efikasno umiruje disajne organe i donosi trenutni osećaj olakšanja.",
      prof:`Profil ukusa i mirisa:\n Intenzivan, bogat i izuzetno osvežavajući miris i ukus koji nose prepoznatljivu, prijatnu aromu mente, ostavljajući dugotrajan osećaj svežine u grlu. 
      
      Tekstura:\n Gusta, kompaktna i ujednačena kremasta mešavina prirodne, tamnije biljne nijanse.

      Zašto ćete ga voleti:\n Ova sinergija pet lekovitih biljaka tradicionalno se koristi za ublažavanje kašlja, Razređivanje i lakše iskašljavanje sekreta, kao i za smirivanje iziritiranog grla. Deluje antiseptički i protivupalno, pružajući brzu pomoć kod bronhitisa, prehlada i sezonskih respiratornih tegoba. 
      
      Kako koristiti: Preporučuje se uzimanje 2-3 puta dnevno po jedna drvena ili plastična kašičica, najbolje pola sata pre obroka. Mešavinu lagano otopite u ustima kako bi biljne esencije obložile sluzokožu ždrela, ili je razmutite u šolji mlakog čaja. `,
      tec:`Tehnički podaci: 
      Sastav: Kristalizovani pčelinji livadski med, odabrano lekovito bilje (anis, podbel, bokvica, vranilova trava, oman). 
      Pakovanje: 240g 
      Čuvanje: Čuvati na hladnom, suvom i tamnom mestu.  `},
      
         variants: [
    { size: "240g", price: 400 },
    
  ]
    },
    { id:2,
      image: borovnica,
       category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"},
      title: "Med i borovnica",
      description:{
        des:"Spoj vrhunskog zdravlja i čistog uživanja. Ovaj proizvod nastaje pažljivim mešanjem kristalizovanog cvetnog meda i prave liofilizovane borovnice. Zahvaljujući naprednom procesu liofilizacije (sušenja zamrzavanjem), borovnica je zadržala sve svoje prirodne vitamine, minerale, intenzivnu aromu i prelepu, duboku boju, pružajući vam savršenu i potpuno prirodnu poslasticu. ",
        prof:`Profil ukusa: Umereno i blago sladak ukus cvetnog meda savršeno je izbalansiran sa osvežavajućim, voćnim notama domaće borovnice. 

Tekstura: Gusta, kremasta i glatka mešavina koja je dobila prepoznatljivu, raskošnu tamnoljubičastu boju borovnice. 

Zašto ćete ga voleti: Ovo je idealna i potpuno zdrava zamena za industrijske slatkiše, džemove i kremove sa dodatim šećerom. Pored toga što je neodoljivo ukusan, ovaj proizvod je izuzetno bogat antioksidansima i vitaminom C, pa je savršen za decu, sportiste i sve koji vode računa o ishrani. 

Kako koristiti: Može se jesti direktno sa kašičice kada vam se prijede nešto slatko. Izuzetan je kao namaz na tost, preliv za palačinke, vafle ili sladoled, a savršeno se otapa i u jutarnjim kašama, jogurtu i smutijima. `,
        tec:`Tehnički podaci: 

Sastav: Kristalizovani pčelinji cvetni med, liofilizovana borovnica. 

Pakovanje: 240g 

Čuvanje: Čuvati na hladnom, suvom i tamnom mestu. 

 `
      },
          variants: [
    { size: "240g", price: 450 },
    
  ]
      
    },
    { id:3,
      image: livadski,
      category:{
      name:"Med",
      slug:"med"},
      title:"Livadski med",
      description:{
        des:"Naš livadski med donosi bogatstvo i snagu stotina različitih cvetova sakupljanih tokom cele sezone. Prepoznatljiv je po svojoj tamnožutoj boji koja, u zavisnosti od nektara koji preovladava te godine, može imati i prelepe crvenkaste nijanse. Prirodno sadrži veću količinu polena u poređenju sa bagremovim medom, što mu daje dodatnu nutritivnu vrednost. ",
        prof:`Profil ukusa: Pun, bogat i aromatičan ukus koji donosi pravu esenciju divlje prirode. 

Tekstura: Gusta i viskozna. Zbog prisustva više različitih vrsta prirodnih šećera, ovaj med ima osobinu da brže kristališe, što je jasan dokaz njegove stopostotne čistoće. 

Zašto ćete ga voleti: Zbog bogatstva polena i minerala, idealan je za jačanje imuniteta, oporavak organizma i podizanje opšte vitalnosti. Pravi je izbor za ljubitelje tradicionalnog, punog ukusa meda. 

Kako koristiti: Odličan zalogaj za početak dana uz čašu mlake vode za pokretanje metabolizma. Savršen je kao zdrava zamena za šećer u toplim napicima, a izuzetno se dobro slaže i kao namaz na crni hleb ili dodatak jutarnjim kašama. `,
        tec:`Tehnički podaci: 

Sastav: 100% prirodni pčelinji livadski med 

Pakovanje: 500g / 1000g 

Napomena: Brža kristalizacija je prirodno svojstvo livadskog meda zbog visokog sadržaja cvetnog polena i prirodnih šećera. `
      },
        variants: [
    { size: "500g", price: 500 },
    { size: "1000g", price: 1000 }
  ]
      
    },
    {
        id:4,
        image:bagrem,
        category:{
      name:"Med",
      slug:"med"},  
        title:"Bagremov med",
        description:{
        des:"Izuzetno blag i prepoznatljiv po svojoj svetložutoj, prozirnoj boji, naš bagremov med je pravi klasik među pčelinjim proizvodima. Zbog visokog sadržaja fruktoze, ovaj med ostaje u tečnom stanju veoma dugo, što ga čini omiljenim izborom za svakodnevnu upotrebu. ",
        prof:`Profil ukusa: Neutralan, nežan i umereno slatkast, bez jakih aromatičnih nota. 

Tekstura: Tečna, glatka i bistra. 

Zašto ćete ga voleti: Zbog svog blagog ukusa, idealan je za decu i sve one koji ne vole previše aromatične medove. Odličan je izvor brze energije koji ne opterećuje stomak. 

Kako koristiti: Savršen izbor za početak dana uz čašu mlake vode. Zbog svog neutralnog profila, idealan je kao zdrava zamena za šećer u čaju, kafi ili limunadi, jer zaslađuje piće bez menjanja njegovog izvornog ukusa. `,
        tec:`Tehnički podaci: 

Sastav: 100% prirodni pčelinji bagremov med 

Pakovanje: 500g / 1000g 

Napomena: Kristalizacija je prirodno svojstvo svakog čistog meda. `
      },
          variants: [
    { size: "500g", price: 600 },
    { size: "1000g", price: 1200 }
  ]
    },
    {
       id:5,
       image:imuno,
       category:{
      name:"Lekoviti med",
      slug:"lekoviti"},
       title:"Imuno med",
      description:{
        des:"Moćna prirodna formula stvorena sa jednim ciljem – da pruži maksimalnu podršku vašem odbrambenom sistemu. Ova bogata mešavina kombinuje čisti kristalizovani livadski med, prirodni cvetni polen i pročišćeni propolis. Pažljivim spajanjem dobili smo homogen, gust proizvod koji zadržava sve blagodeti najjačih pčelinjih proizvoda. ",
        prof:`Profil ukusa i mirisa: Pri otvaranju tegle dominira prepoznatljiv, bogat i topao miris propolisa, dok pri konzumaciji glavnu reč vodi autentičan, blago orašast ukus cvetnog polena ublažen sladošću livadskog meda. 

Tekstura: Gusta, kremasta i fino zrnasta zbog prirodno kristalizovanog meda i mlevenog polena, što olakšava uzimanje bez kapanja. 

Zašto ćete ga voleti: Ovo je prava energetska i vitaminska bomba. Sinergija tri moćna sastojka čini ga idealnim za brzo podizanje imuniteta, borbu protiv hroničnog umora, poboljšanje krvne slike i zaštitu organizma u periodima smene godišnjih doba i virusa. 

Kako koristiti: Preporučuje se uzimanje jedne drvene ili plastične kašičice ujutru na prazan stomak. Mešavinu lagano otopite u ustima kako bi organizam odmah apsorbovao sve hranljive materije. `,
        tec:`Tehnički podaci: 

Sastav: Kristalizovani pčelinji livadski med, cvetni polen, pročišćeni propolis. 

Pakovanje: 480g 

Čuvanje: Čuvati na tamnom, suvom i hladnom mestu. Preporučuje se upotreba drvene ili plastične kašičice. `
      },
          variants: [
    { size: "480g", price: 800 },
    
  ]
    
    },
    {
       id:6,
       image:jagoda,
       category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"},
       title:"Med i jagoda",
       description:{
        des:"Još jedan neodoljiv spoj iz naše voćne radionice zdravlja. Kombinacija kristalizovanog livadskog meda i vrhunske liofilizovane jagode donosi vam eksploziju prolećnih ukusa u bilo koje doba godine. Pažljiv proces liofilizacije omogućava jagodi da zadrži svoj izvorni oblik, miris, nutritivne vrednosti i boju, pretvarajući ovu mešavinu u čist, prirodni užitak. ",
        prof:`Profil ukusa: Nežan i blago sladak ukus u kojem se prepoznatljive, osvežavajuće slatko-kiselkaste note domaće jagode savršeno prožimaju sa bogatstvom livadskog meda. 

Tekstura: Raskošna, kremasta i gusta struktura kojom dominira prirodna, privlačna crvenkasta boja zrele jagode. 

Zašto ćete ga voleti: Predstavlja savršenu, zdravu užinu i potpuno prirodnu zamenu za džemove i industrijske konditorske proizvode sa belim šećerom. Zbog svog primamljivog izgleda i poznatog ukusa, ovaj proizvod je apsolutni favorit među najmlađima, a ujedno je bogat vitaminima i antioksidansima. 

Kako koristiti: Odličan izbor za brzu i zdravu užinu direktno sa kašičice. Savršeno se ponaša kao namaz na integralnom tostu sa maslacem, kao preliv preko palačinki ili galeta, a deci će biti omiljeni dodatak u sutlijašu, grizu ili jutarnjim ovsenim pahuljicama. `,
        tec:`Tehnički podaci: 

Sastav: Kristalizovani pčelinji livadski med, liofilizovana jagoda. 

Pakovanje: 240g 

Čuvanje: Čuvati na hladnom, suvom i tamnom mestu. `
      },
           variants: [
    { size: "240g", price: 450 },
    
  ]
    },
    {
       id:7,
       image:kopriva,
       category:{
      name:"Lekoviti med",
      slug:"lekoviti"},
       title:"Med i seme koprive",
      description:{
        des:"Prirodna formula stvorena za snažnu podršku vašem organizmu i obnavljanje životne energije. Ovaj proizvod predstavlja pažljivo izbalansiran spoj našeg kristalizovanog livadskog meda i čistog, mlevenog semena koprive. Kopriva je u narodnoj medicini od davnina poznata kao kraljica zdravlja, a u ovoj kombinaciji sa medom njena lekovita svojstva postaju još lakše dostupna vašem telu. ",
        prof:`Profil ukusa i mirisa: Blago sladak ukus livadskog meda suptilno je prožet specifičnom, prirodnom notom semena koprive čiji miris prijatno podseća na svežu travu i netaknutu prirodu. 

Tekstura: Gusta i kremasta mešavina prepoznatljive maslinastozelene boje. Pri konzumaciji, pod zubima se blago osećaju sitne, fine semenke koprive, što proizvodu daje autentičnu i rustičnu teksturu. 

Zašto ćete ga voleti: Seme koprive u kombinaciji sa medom je jedan od najboljih i najefikasnijih prirodnih izvora gvožđa. Izuzetno je uspešan u borbi protiv anemije (malokrvnosti), poboljšava krvnu sliku, jača imunitet i pomaže kod hroničnog umora i iscrpljenosti, vraćajući telu prirodnu snagu. 

Kako koristiti: Preporučuje se uzimanje jedne drvene ili plastične kašičice ujutru na prazan stomak, ili pola sata pre obroka. Za optimalne rezultate kod poboljšanja krvne slike, mešavinu možete razmutiti u čaši mlake vode sa nekoliko kapi limunovog soka (vitamin C iz limuna dodatno pospešuje vezivanje gvožđa). `,
        tec:`Tehnički podaci: 

Sastav: Kristalizovani pčelinji livadski med, seme koprive. 

Pakovanje: 240g 

Čuvanje: Čuvati na hladnom, suvom i tamnom mestu. `
      },
           variants: [
    { size: "240g", price: 450 },
    
  ]
    },
    {
       id:8,
       image:kakao,
       category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"},
       title:"Med i kakao",
      description:{
        des:"Za sve ljubitelje čokolade koji biraju zdraviji stil života – donosimo vam savršen spoj prirode i čistog uživanja. Ovaj proizvod nastaje pažljivim mešanjem našeg kristalizovanog livadskog meda i visokokvalitetnog, čistog kakao praha. Dobijena mešavina pruža bogat čokoladni doživljaj bez ijednog grama rafinisanog šećera, palminog ulja ili veštačkih aditiva. ",
        prof:`Profil ukusa: Intenzivan, raskošan i dubok ukus kvalitetnog kakaa savršeno je ublažen prirodnom sladošću livadskog meda, stvarajući prepoznatljivu "čokoladnu" harmoniju. 

Tekstura: Gusta, izuzetno kremasta i glatka mešavina tamne, čokoladne boje, koja je idealna za razmazivanje. 

Zašto ćete ga voleti: Ovo je ubedljivo najbolja i potpuno zdrava zamena za industrijske čokoladne kremove i namaze. Pored toga što uspešno gasi želju za slatkišima, ova kombinacija je bogata gvožđem, magnezijumom i antioksidansima iz kakaa, zbog čega je idealna za decu, sportiste i sve koji paze na ishrani. 

Kako koristiti: Savršen je kao zdrav namaz na tost, palačinke, vafle ili pirinčane galete. Možete ga jesti direktno sa kašičice kada vam padne energija, dodati ga u toplo mleko za instant zdravu toplu čokoladu, ili njime obogatiti jutarnju ovsenu kašu i smoothie. `,
        tec:`Tehnički podaci: 

Sastav: Kristalizovani pčelinji livadski med, kvalitetni kakao prah. 

Pakovanje: 240g 

Čuvanje: Čuvati na hladnom, suvom i tamnom mestu. `
      },
           variants: [
    { size: "240g", price: 450 },
    
  ]
    },
    {
       id:9,
       image:limun,
      category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"},
       title:"Med i limun",
       description:{
        des:"Prava definicija prirodnog osveženja i zdravlja u jednoj tegli. Ovaj proizvod spaja bogatstvo našeg kristalizovanog livadskog meda i vrhunski kvalitet liofilizovanog limuna. Kroz proces liofilizacije, limun je zadržao sav svoj dragoceni vitamin C, prirodna ulja iz limunove kore i prepoznatljivu svežinu, stvarajući idealan spoj za hladne zimske dane ili vrela letnja osveženja. ",
        prof:`Profil ukusa: Tradicionalno sladak i pun ukus livadskog meda savršeno je obogaćen i izbalansiran sa upečatljivom, kiselkastom i osvežavajućom citrusnom notom pravog limuna. 

Tekstura: Gusta, kremasta i glatka mešavina koju odlikuje prelepa, topla žućkasta boja. 

Zašto ćete ga voleti: Med i limun su vanvremenska kombinacija za jačanje imuniteta, ublažavanje upale grla i podizanje energije. Zbog svoje citrusne svežine, ovaj proizvod je fantastična i potpuno prirodna zamena za industrijske osvežavajuće namaze i bombone. 

Kako koristiti: Nezamenljiv je kao dodatak u toplim čajevima (pazite samo da čaj ne bude vreo kako bi se sačuvao vitamin C). Takođe, fenomenalan je kada se kašičica ovog meda razmuti u čaši hladne vode kao instant prirodna limunada, a odlično se slaže i kao namaz na tost ili dodatak voćnim salatama. `,
        tec:`Tehnički podaci: 

Sastav: Kristalizovani pčelinji livadski med, liofilizovani limun. 

Pakovanje: 240g 

Čuvanje: Čuvati na hladnom, suvom i tamnom mestu. `
      },
           variants: [
    { size: "240g", price: 450 },
    
  ]
    },
    {
      id:10,
      image:bagrem,
      category:{
      name:"Lekoviti Med",
      slug:"lekoviti"
      },
      title:"Med i matični mleč",
      description:{
        des:"Pravi vrhunac prirodne nege i snage iz košnice. Ovaj proizvod predstavlja moćnu sinergiju čistog pčelinjeg meda po vašem izboru (bagremov ili livadski) i čiste matične mleči – najdragocenijeg pčelinjeg proizvoda. Kreiran je za sve koji traže maksimalnu podršku svom organizmu iz same prirode. ",
        prof:`Profil ukusa: Zadržava pun, prirodan ukus meda koji ste izabrali. Iako je obogaćen matičnom mleči, ona ne menja aromu, pa je proizvod izuzetno prijatan za konzumaciju. 

Tekstura: Gusta i ujednačena mešavina prirodne teksture. 

Zašto ćete ga voleti: Matična mleč je poznata kao „kraljevska hrana“ i vrhunski je prirodni dodatak ishrani. Ova kombinacija je izuzetan saveznik za snažno podizanje imuniteta, brži oporavak organizma, veću energiju i opštu vitalnost celog tela. 

Kako koristiti: Preporučuje se uzimanje jedne drvene ili plastične kašičice ujutru na prazan stomak. 

Važna napomena: Matična mleč je lakša od meda i prirodno teži da ispliva na površinu, pa je obavezno dobro promešati proizvod drvenom ili plastičnom kašikom pre svake upotrebe. Izbegavajte metalne kašičice kako bi se sačuvala sva lekovita svojstva. `,
        tec:`Tehnički podaci: 

Sastav: 1000g prirodnog pčelinjeg meda (po vašem izboru) i 10g sveže matične mleči. 

Pakovanje: 1010g 

Čuvanje: Proizvod čuvati na tamnom i hladnom mestu, daleko od izvora visoke temperature i direktne sunčeve svetlosti. `
      },
         variants: [
    { size: "bagrem", price: 2200 },
    { size: "livada", price: 2000 }
  ]
    },
    {
      id:11,
      image:malina,
      category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"
      },
      title:"Med i malina",
     description:{
        des:"Još jedan neodoljiv spoj iz naše voćne radionice zdravlja. Kombinacija kristalizovanog livadskog meda i vrhunske liofilizovane jagode donosi vam eksploziju prolećnih ukusa u bilo koje doba godine. Pažljiv proces liofilizacije omogućava jagodi da zadrži svoj izvorni oblik, miris, nutritivne vrednosti i boju, pretvarajući ovu mešavinu u čist, prirodni užitak. ",
        prof:`Profil ukusa: Nežan i blago sladak ukus u kojem se prepoznatljive, osvežavajuće slatko-kiselkaste note domaće jagode savršeno prožimaju sa bogatstvom livadskog meda. 

Tekstura: Raskošna, kremasta i gusta struktura kojom dominira prirodna, privlačna crvenkasta boja zrele jagode. 

Zašto ćete ga voleti: Predstavlja savršenu, zdravu užinu i potpuno prirodnu zamenu za džemove i industrijske konditorske proizvode sa belim šećerom. Zbog svog primamljivog izgleda i poznatog ukusa, ovaj proizvod je apsolutni favorit među najmlađima, a ujedno je bogat vitaminima i antioksidansima. 

Kako koristiti: Odličan izbor za brzu i zdravu užinu direktno sa kašičice. Savršeno se ponaša kao namaz na integralnom tostu sa maslacem, kao preliv preko palačinki ili galeta, a deci će biti omiljeni dodatak u sutlijašu, grizu ili jutarnjim ovsenim pahuljicama. `,
        tec:`Tehnički podaci: 

Sastav: Kristalizovani pčelinji livadski med, liofilizovana jagoda. 

Pakovanje: 240g 

Čuvanje: Čuvati na hladnom, suvom i tamnom mestu. `
      },
          variants: [
    { size: "240g", price: 450 }
    
  ]
    },
    {
      id:12,
      image:propolis,
      category:{
      name:"Lekoviti med/proizvod",
      slug:"lekoviti"
      },
      title:"Propolis kapi / sprej",
     description:{
        des:"Naš propolis predstavlja čist, prirodni štit koji pčele koriste za odbranu svoje košnice, a koji mi donosimo direktno do vas. Dobijen pažljivom ekstrakcijom prirodnog propolisa u visokokvalitetnom 98% alkoholnom rastvoru, ovaj proizvod zadržava maksimalnu koncentraciju aktivnih materija i pruža brzu i efikasnu podršku organizmu. ",
        prof:`Profil ukusa: Karakterističan, jak, blago gorak i aromatičan ukus pčelinjeg propolisa sa toplom notom alkohola. 

Tekstura: Tečna, bistra tamnoćilibarska tekstura, idealna za lako doziranje. 

Zašto ćete ga voleti: Propolis je najmoćniji prirodni antibiotik i antiseptik. Izuzetno je efikasan kod ublažavanja upalnih procesa u usnoj duplji i grlu (afti, iritacija, crvenila), a deluje i kao vrhunski svakodnevni dodatak ishrani za jačanje prirodnog imuniteta. 

Kako koristiti: 

Varijanta sprej: Poprskati direktno u usnu duplju ili bolno mesto na grlu 2–3 puta dnevno. 

Varijanta kapi: Ukapati 10–15 kapi u malo vode, na kocku šećera ili kašičicu meda i lagano otopiti u ustima. `,
        tec:`Tehnički podaci: 

Sastav: Prirodni pčelinji propolis, 98% alkoholni rastvor. 

Pakovanje: Plastična bočica od 10ml (sa kapaljkom ili pumpicom za sprej). 

Čuvanje: Čuvati na tamnom, suvom i hladnom mestu, van domašaja dece. `
      },
          variants: [
    { size: "kapi 10ml", price: 200 },
    { size: "sprej 10ml", price: 200 }
    
  ]
    }
  ];

 export default products;