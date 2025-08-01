import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CheckCircle, XCircle, Loader2, Info, History, Target } from 'lucide-react';

// Updated serviceableZips to include all regions within 150 miles of DC
const serviceableZips = new Set([
    // Original DC/VA/MD zip codes
    "20191","20192","20190","22096","20196","20171","20172","20195","22095","22124","20194","22181","20170","22033","22182",
    "22185","20041","22183","22066","22035","20102","20189","22180","20164","20151","20166","20163","20167","22038","22030",
    "22034","20104","20103","22067","22102","20101","22031","22027","20122","22081","22082","22116","22118","22119","20165",
    "20120","22037","22032","20153","22043","22107","22108","22109","22103","22106","20152","20859","22046","22042","20854",
    "20148","20147","22036","20121","22003","22101","20146","20149","22213","20818","22009","22015","20124","20817","20812",
    "22040","20816","22044","22205","22151","22041","22207","22039","22152","20143","22203","20837","20111","22230","22240",
    "22241","22242","22243","22244","22245","22216","22156","22158","22159","22160","22161","22215","22312","22210","22227",
    "22226","20878","20105","20108","22219","20850","20810","20811","20813","20824","20825","20827","20109","20016","20892",
    "22217","20894","22212","22311","22246","22201","20814","20047","22204","22153","20874","20852","22304","20889","20007",
    "20847","20848","20849","20857","20113","22150","20110","20057","20815","22209","20392","22206","20896","20015","22214",
    "22211","22302","20899","20008","20851","20175","20895","20891","20169","20566","20037","22122","22310","20156","20052",
    "22225","20521","20168","20511","20050","20884","20885","20898","20520","20418","20551","20177","20178","20431","20415",
    "20372","20036","20433","20245","20270","22315","20155","22305","20240","22202","20009","20877","56901","56920","20006",
    "20506","20875","20880","20203","20206","20207","20208","20210","20211","20213","20214","20215","20218","20221","20222",
    "20223","20232","20233","20235","20238","20239","20241","20244","20251","20261","20262","20265","20266","20268","20277",
    "20289","20299","20303","20306","20310","20317","20330","20350","20355","20370","20380","20389","20390","20391","20393",
    "20394","20395","20398","20402","20403","20404","20405","20406","20410","20411","20412","20413","20414","20416","20419",
    "20421","20423","20424","20425","20427","20428","20429","20434","20435","20437","20439","20440","20441","20442","20444",
    "20447","20451","20453","20456","20460","20463","20468","20469","20470","20501","20502","20503","20505","20507","20509",
    "20523","20524","20525","20526","20527","20531","20533","20537","20538","20539","20541","20546","20547","20548","20552",
    "20554","20555","20557","20559","20570","20572","20573","20575","20576","20577","20578","20579","20581","20586","20591",
    "20594","20599","20420","20029","20030","20040","20042","20043","20044","20045","20049","20053","20055","20056","20058",
    "20061","20062","20063","20065","20067","20068","20069","20070","20071","20073","20074","20075","20076","20077","20078",
    "20080","20081","20082","20091","20504","56904","56902","56945","56950","56965","20254","20314","20318","20508","20522",
    "20500","22199","20136","20571","20220","20010","20005","20230","20542","20026","20027","20839","20024","20242","20227",
    "20841","20228","22301","20250","22332","20012","20252","20910","22303","22331","20004","20224","20535","20202","20560",
    "20530","20536","20059","20260","20060","20585","20011","20907","20908","20911","20915","20918","20436","20408","22192",
    "20997","20301","20038","20553","20407","20916","20426","20033","20229","20580","20902","20176","20549","20853","22125",
    "20913","20001","20597","20565","20219","22314","20472","20226","20855","20217","20237","20529","20422","20216","20534",
    "20204","20201","20401","20039","20013","20066","20022","20319","20212","22060","20515","20035","20090","22313","22320",
    "22333","22334","20883","20417","20842","22306","22350","20510","20906","20544","20886","20543","20540","20064","20912",
    "20897","20879","20373","20112","20590","20340","20017","20375","22307","22079","56915","20901","20376","20388","20593",
    "20374","20032","22194","22195","22309","20876","20528","20003","56933","56944","56972","20182","22193","20002","20018",
    "20903","20181","20838","20712","20129","20782","20787","20745","20020","22308","20783","20117","20914","22121","20832",
    "20750","20993","20830","20158","20722","20198","20904","20788","20118","20137","20159","22191","20160","20781","20019",
    "20742","20744","20741","20131","20738","20905","20860","20710","20197","20871","20598","20882","22025","20740","20134",
    "20737","20752","20748","20749","21790","20616","20868","20861","20757","20784","20746","20697","20862","20704","20743",
    "20785","21710","20770","20833","20753","22026","20187","20731","20790","20791","20747","20872","20866","21777","20119",
    "20768","20705","20141","20132","20777","20703","20185","20142","20607","20706","22172","20762","20799","20138","20771",
    "20658","20735","20139","20180","20188","20707","20759","20140","21036","21754","21717","21704","21737","20184","21029",
    "20640","22135","22134","20769","21770","20708","20603","20709","20725","20726","20797","20723","21738","21703","21716",
    "20115","20721","20720","20675","20623","20135","21150","22556","20604","22545","20116","20186","20718","20719","21755",
    "22728","21044","21797","22463","20774","20695","20724","20144","22739","20763","21794","20130","25425","21771","21765",
    "21046","20772","21723","20755","20701","20715","21774","21705","21709","20775","20773","20792","20794","21758","21042",
    "21045","25432","20717","20601","20602","22643","22712","20646","20716","21714","20677","22554","20613","21715","25441",
    "21113","20128","21718","22720","25414","20662","21701","25423","22555","21114","22724","25410","21769","20693","22639",
    "21104","21075","21779","22611","21043","21054","21076","21041","22620","21784","25438","22734","22430","20617","22646",
    "21144","21035","21077","22742","20611","22406","21792","22642","21762","21163","22471","20106","21793","25446","20711",
    "21702","25442","21228","21240","20776","21756","20754","20632","21032","22714","22412","22718","21108","21250","21244",
    "22627","21140","21090","21061","20637","22736","21241","21782","22663","21798","22746","21133","21062","21227","21235",
    "20608","21776","21791","22640","20778","20622","22623","22405","22737","21229","25430","25443","20736","21146","20779",
    "21037","21773","21401","21207","21405","20758","22656","20765","21775","20751","22741","22402","22630","22403","22622",
    "21713","21225","21223","22404","21759","22401","22448","22726","21216","21060","21048","20733","21106","20689","21230",
    "21117","21215","25413","21208","22716","20764","20714","21788","25440","21757","21217","21290","21411","21403","25405",
    "21404","21412","21201","22747","20639","21226","22624","20612","22547","21203","21233","21263","21264","21270","21273",
    "21275","21279","21281","21282","21289","21297","21298","21012","22601","21778","22485","21278","21211","21122","21123",
    "21071","21157","21202","20661","21209","21402","21231","21733","21746","25428","20732","21287","25404","22553","21153",
    "21210","21136","22407","22655","20664","22433","22526","21409","21781","21218","20610","22649","25402","22508","22451",
    "25401","21212","21205","22701","21213","21022","22645","22408","22749","21224","20659","21139","21020","21251","21056",
    "21204","20678","21734","22610","21239","22713","21720","21783","22446","21787","25420","21222","21214","21727","21252",
    "22481","20621","21094","22603","21721","21158","25403","21780","22538","21093","21795","21206","21740","21284","22602",
    "21285","21052","21742","21030","20660","20645","21747","21155","25419","22542","20676","22740","21749","21741","22729",
    "25421","21031","21023","20624","21286","20682","21065","20618","21719","20625","21237","21219","22735","22657","21074",
    "20656","22544","21234","21666","22725","21221","22535","25427","21152","22551","22650","22733","21236","22443","17214",
    "22580","22565","20685","17250","20609","20615","22641","22626","21665","21767","22715","21671","21131","22567","22719",
    "22948","21676","20606","21722","22722","21619","21057","22637","20627","21092","20626","22660","22604","21647","21220",
    "17263","20636","21102","17320","22652","21128","17340","21624","22436","22711","21612","21652","22730","17272","22654",
    "22625","21162","21111","21082","21027","21088","20650","22989","17256","21051","21663","17268","21120","22428","17247",
    "21087","22509","26711","21013","21638","22743","21661","21156","26808","22960","21711","21053",
    
    // New Pennsylvania zip codes
    "17011", "17013", "17015", "17025", "17033", "17034", "17036", "17043", "17050", "17055", "17057", "17065", "17070", 
    "17101", "17102", "17103", "17104", "17105", "17106", "17107", "17108", "17109", "17110", "17111", "17112", "17113", 
    "17120", "17121", "17122", "17123", "17124", "17125", "17126", "17127", "17128", "17129", "17130", "17140", "17177", 
    "17201", "17202", "17211", "17212", "17215", "17217", "17219", "17220", "17221", "17222", "17223", "17224", "17225", 
    "17228", "17229", "17232", "17233", "17235", "17236", "17237", "17238", "17239", "17241", "17243", "17244", "17246", 
    "17251", "17252", "17253", "17254", "17255", "17257", "17260", "17261", "17262", "17264", "17265", "17266", "17267", 
    "17271", "17301", "17302", "17303", "17304", "17306", "17307", "17309", "17310", "17311", "17312", "17313", "17314", 
    "17315", "17316", "17317", "17318", "17319", "17321", "17322", "17323", "17324", "17325", "17326", "17327", "17329", 
    "17331", "17332", "17333", "17334", "17335", "17339", "17342", "17343", "17344", "17345", "17347", "17349", "17350", 
    "17352", "17353", "17354", "17355", "17356", "17360", "17361", "17362", "17363", "17364", "17365", "17366", "17368", 
    "17370", "17371", "17372", "17375", "17401", "17402", "17403", "17404", "17405", "17406", "17407", "17408", "17501", 
    "17502", "17503", "17504", "17505", "17506", "17507", "17508", "17509", "17512", "17516", "17517", "17518", "17519", 
    "17520", "17521", "17522", "17527", "17528", "17529", "17532", "17533", "17534", "17535", "17536", "17537", "17538", 
    "17540", "17543", "17545", "17547", "17549", "17550", "17551", "17552", "17554", "17555", "17557", "17560", "17562", 
    "17563", "17564", "17565", "17566", "17567", "17568", "17569", "17570", "17572", "17575", "17576", "17578", "17579", 
    "17580", "17581", "17582", "17584", "17601", "17602", "17603", "17604", "17605", "17606", "17607",
    
    // New Delaware zip codes
    "19701", "19702", "19703", "19706", "19707", "19708", "19709", "19710", "19711", "19712", "19713", "19714", "19715", 
    "19716", "19717", "19718", "19720", "19721", "19722", "19725", "19726", "19730", "19731", "19732", "19733", "19734", 
    "19735", "19736", "19801", "19802", "19803", "19804", "19805", "19806", "19807", "19808", "19809", "19810", "19850", 
    "19880", "19884", "19885", "19886", "19887", "19889", "19890", "19891", "19892", "19893", "19894", "19895", "19896", 
    "19897", "19898", "19899", "19901", "19902", "19903", "19904", "19905", "19906", "19930", "19931", "19933", "19934", 
    "19936", "19938", "19939", "19940", "19941", "19943", "19944", "19945", "19946", "19947", "19950", "19951", "19952", 
    "19953", "19954", "19955", "19956", "19958", "19960", "19962", "19963", "19964", "19966", "19967", "19968", "19969", 
    "19970", "19971", "19973", "19975", "19977", "19979", "19980",
    
    // New West Virginia zip codes
    "24701", "24712", "24714", "24715", "24716", "24719", "24724", "24726", "24731", "24732", "24733", "24736", "24737", 
    "24738", "24739", "24740", "24747", "24751", "24801", "24808", "24811", "24813", "24815", "24816", "24817", "24818", 
    "24822", "24823", "24826", "24827", "24828", "24830", "24831", "24834", "24836", "24839", "24843", "24844", "24845", 
    "24846", "24847", "24848", "24849", "24850", "24851", "24853", "24854", "24855", "24856", "24857", "24859", "24860", 
    "24861", "24862", "24866", "24867", "24868", "24869", "24870", "24871", "24872", "24873", "24874", "24878", "24879", 
    "24880", "24881", "24882", "24892", "24894", "24895", "24898", "24901", "24902", "24910", "24915", "24916", "24918", 
    "24920", "24924", "24925", "24927", "24931", "24934", "24935", "24938", "24941", "24943", "24944", "24945", "24946", 
    "24951", "24954", "24957", "24962", "24963", "24966", "24970", "24974", "24976", "24977", "24981", "24983", "24984", 
    "24985", "24986", "24991", "24993", "25002", "25003", "25005", "25007", "25008", "25009", "25011", "25015", "25019", 
    "25021", "25022", "25024", "25025", "25026", "25028", "25030", "25031", "25033", "25035", "25036", "25039", "25040", 
    "25043", "25044", "25045", "25047", "25048", "25049", "25051", "25053", "25054", "25057", "25059", "25060", "25061", 
    "25062", "25063", "25064", "25067", "25070", "25071", "25075", "25076", "25079", "25081", "25082", "25083", "25085", 
    "25086", "25088", "25090", "25093", "25102", "25103", "25106", "25107", "25108", "25109", "25110", "25111", "25112", 
    "25113", "25114", "25115", "25118", "25119", "25121", "25123", "25124", "25125", "25126", "25130", "25132", "25133", 
    "25134", "25136", "25139", "25140", "25141", "25142", "25143", "25148", "25149", "25152", "25154", "25156", "25159", 
    "25160", "25161", "25162", "25164", "25165", "25168", "25169", "25173", "25174", "25177", "25180", "25181", "25183", 
    "25185", "25186", "25187", "25193", "25201", "25202", "25203", "25204", "25205", "25206", "25208", "25209", "25211", 
    "25213", "25214", "25231", "25234", "25235", "25239", "25241", "25243", "25244", "25245", "25247", "25248", "25251", 
    "25252", "25253", "25259", "25260", "25261", "25262", "25264", "25265", "25266", "25267", "25268", "25270", "25271", 
    "25275", "25276", "25285", "25286", "25287", "25301", "25302", "25303", "25304", "25305", "25306", "25309", "25311", 
    "25312", "25313", "25314", "25315", "25317", "25320", "25321", "25322", "25323", "25324", "25325", "25326", "25327", 
    "25328", "25329", "25330", "25331", "25332", "25333", "25334", "25335", "25336", "25337", "25338", "25339", "25350", 
    "25356", "25357", "25358", "25359", "25360", "25361", "25362", "25364", "25365", "25375", "25401", "25402", "25403", 
    "25404", "25405", "25410", "25411", "25413", "25414", "25419", "25420", "25421", "25422", "25423", "25425", "25427", 
    "25428", "25429", "25430", "25431", "25432", "25434", "25437", "25438", "25440", "25441", "25442", "25443", "25444", 
    "25446", "25501", "25502", "25503", "25504", "25505", "25506", "25507", "25508", "25510", "25511", "25512", "25514", 
    "25515", "25517", "25520", "25521", "25523", "25524", "25526", "25529", "25530", "25534", "25535", "25537", "25540", 
    "25541", "25544", "25545", "25547", "25550", "25555", "25557", "25559", "25560", "25562", "25564", "25565", "25567", 
    "25570", "25571", "25573", "25601", "25606", "25607", "25608", "25611", "25612", "25614", "25617", "25621", "25624", 
    "25625", "25628", "25630", "25632", "25634", "25635", "25637", "25638", "25639", "25644", "25646",
    
    // Additional DC zip codes
    "20201", "20204", "20206", "20207", "20208", "20210", "20212", "20213", "20214", "20215", "20216", "20217", "20218", 
    "20219", "20220", "20221", "20222", "20223", "20224", "20226", "20227", "20228", "20229", "20230", "20240", "20250", 
    "20260", "20261", "20262", "20265", "20266", "20268", "20270", "20314", "20317", "20318", "20319", "20330", "20340", 
    "20350", "20355", "20370", "20372", "20373", "20374", "20375", "20376", "20380", "20388", "20389", "20391", "20392", 
    "20393", "20394", "20395", "20398", "20401", "20402", "20403", "20404", "20405", "20406", "20407", "20408", "20409", 
    "20410", "20411", "20412", "20413", "20414", "20415", "20416", "20417", "20418", "20419", "20420", "20421", "20422", 
    "20423", "20424", "20425", "20426", "20427", "20428", "20429", "20431", "20433", "20434", "20435", "20436", "20437", 
    "20439", "20440","20441","20442","20444","20447","20451","20453","20456","20460","20463","20468","20469","20470","20472",
    "20500","20501","20502","20503","20504","20505","20506","20507","20508","20509","20510","20515","20520","20521","20522",
    "20523","20524","20525","20526","20527","20531","20533","20537","20538","20539","20540","20541","20542","20543","20544",
    "20546","20547","20548","20549","20551","20552","20553","20554","20555","20557","20558","20559","20560","20565","20566",
    "20570","20571","20572","20573","20575","20576","20577","20578","20579","20580","20581","20585","20586","20588","20590",
    "20591","20593","20594","20597","20599"
]);

const AvailabilityProcess = () => {
  // Scroll animation state
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Availability check state
  const [zipCode, setZipCode] = useState('');
  const [serviceStatus, setServiceStatus] = useState<null | boolean | 'loading'>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecent, setShowRecent] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Input references for better focus management
  const inputRef = useRef<HTMLInputElement>(null);
  const blurTimeoutRef = useRef<number | null>(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        // Only calculate parallax when section is in viewport
        const scrolled = window.scrollY;
        const rate = scrolled * -0.3; // Negative for upward movement
        setScrollY(rate);
      }
    };

    // Use requestAnimationFrame for smooth performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentZipSearchesDMV');
    if (savedSearches) {
      try {
        const parsedSearches = JSON.parse(savedSearches);
        if (Array.isArray(parsedSearches)) {
          setRecentSearches(parsedSearches.slice(0, 5)); // Ensure max 5
        }
      } catch (error) {
        console.error("Failed to parse recent searches:", error);
        localStorage.removeItem('recentZipSearchesDMV'); // Clear corrupted data
      }
    }
  }, []);

  // Save a zip code to recent searches
  const saveToRecent = useCallback((zip: string) => {
    if (!zip || zip.length !== 5) return;
    
    setRecentSearches(prevSearches => {
      const updatedSearches = [zip, ...prevSearches.filter(item => item !== zip)].slice(0, 5);
      localStorage.setItem('recentZipSearchesDMV', JSON.stringify(updatedSearches));
      return updatedSearches;
    });
  }, []);

  // Check service area with the large ZIP code set
  const checkServiceArea = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (zipCode.length !== 5) {
      setErrorMessage('Please enter a valid 5-digit ZIP code');
      return;
    }
    
    setErrorMessage('');
    setServiceStatus('loading');
    setShowRecent(false);
    
    setTimeout(() => {
      try {
        const isServiceable = serviceableZips.has(zipCode);
        setServiceStatus(isServiceable);
        saveToRecent(zipCode);
        setShowResults(true);
      } catch (error) {
        setErrorMessage('Something went wrong. Please try again.');
        setServiceStatus(null);
      }
    }, 800);
  }, [zipCode, saveToRecent]);

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '').slice(0, 5);
    setZipCode(value);
    
    if (errorMessage) {
      setErrorMessage('');
    }
    
    if (showResults) {
      setShowResults(false);
    }
    
    if (!showRecent) {
      setShowRecent(true);
    }
  };

  const handleFocus = () => {
    if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
        blurTimeoutRef.current = null;
    }
    setShowRecent(true);
  };

  const handleBlur = () => {
    blurTimeoutRef.current = window.setTimeout(() => {
        setShowRecent(false);
    }, 150);
  };

  const selectRecentZip = (zip: string) => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
    setZipCode(zip);
    setShowRecent(false);
    inputRef.current?.focus();
  };
  
  useEffect(() => {
    return () => {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="availability-process"
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-black relative overflow-hidden flex items-center justify-center"
      style={{
        minHeight: '80vh',
      }}>
      
      {/* Parallax Background Layer - Only this moves */}
      <div 
        className="absolute inset-0 w-full h-full bg-gray-900"
        style={{
          backgroundImage: "url('/1000002290.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate3d(0, ${scrollY}px, 0) scale(1.1)`,
          willChange: 'transform',
          zIndex: 1
        }}
      />
      
      {/* Dark gradient overlay - Static */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
        zIndex: 2
      }} />
      
    {/* Animation styles */}
    <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      /* Enhanced parallax performance - Only for background */
      #availability-process > div:first-child {
        transform-style: preserve-3d;
        backface-visibility: hidden;
      }
      
      /* Keep content static */
      #availability-process .container {
        position: relative;
        z-index: 10;
        transform: none !important;
      }
    `}</style>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`} style={{ zIndex: 10 }}>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={checkServiceArea} className="w-full animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <div className="flex flex-col sm:flex-row items-end gap-3">
              <div className="w-full sm:flex-grow">
                <label htmlFor="zipInput" className="block text-sm font-semibold text-white mb-2">Service Address</label>
                <div className="relative">
                  <input
                    id="zipInput"
                    ref={inputRef}
                    type="text"
                    value={zipCode}
                    onChange={handleZipChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Enter ZIP code"
                    maxLength={5}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="w-full px-4 py-3 pr-12 rounded-md backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                    aria-label="Enter your ZIP code"
                    required
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.42)' }} // glassmorph style
                  />
                  <Target className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none"/>
                  {showRecent && recentSearches.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl z-20 overflow-hidden animate-fadeInUp">
                      <div className="p-2 text-xs text-white/60 border-b border-white/10 font-bold tracking-wide">
                        Recent searches
                      </div>
                      {recentSearches.map((zip, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => selectRecentZip(zip)}
                          onMouseDown={(e) => e.preventDefault()}
                          className="w-full text-left px-3 py-2.5 hover:bg-white/10 text-white transition-colors duration-200 flex items-center gap-2"
                        >
                          <History className="h-4 w-4 text-white/60"/>
                          <span className="font-medium tracking-tight">{zip}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <button
                  type="submit"
                  disabled={serviceStatus === 'loading' || zipCode.length !== 5}
                  className="w-full px-8 py-3 rounded-md bg-white text-black font-bold text-base hover:bg-gray-400 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  {serviceStatus === 'loading' ? (
                    <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                  ) : (
                    'CHECK'
                  )}
                </button>
              </div>
            </div>
          </form>
          <div className="mt-6 text-center">
            {errorMessage && (
              <div className="mt-3 text-red-300 text-sm flex items-center justify-center gap-2 font-medium" role="alert">
                <Info className="h-4 w-4 flex-shrink-0" />
                {errorMessage}
              </div>
            )}
            {serviceStatus !== 'loading' && serviceStatus !== null && showResults && (
              <div className={`rounded-xl p-6 backdrop-blur-sm border transition-all duration-700 animate-fadeInUp bg-black/40 ${
                serviceStatus === true
                  ? 'border-green-500/50' 
                  : 'border-red-500/50'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm border ${
                    serviceStatus === true ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30'
                  }`}>
                    {serviceStatus === true ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-400" />
                    )}
                  </div>
                  <div className="flex-grow text-left">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {serviceStatus === true ? 'Service Available!' : 'Not Available Yet'}
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      {serviceStatus === true
                        ? `Great! We provide professional Starlink installation services in ${zipCode}. You can get high-speed satellite internet with same-day installation.` 
                        : `We're not currently servicing ${zipCode}, but we're expanding rapidly. Join our waitlist to be notified when service becomes available.`}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <p className="text-white/60 text-sm leading-relaxed font-medium mt-8">
              Currently serving the <span className="text-white font-semibold">Washington DC Metro area</span> including 
              Maryland, Virginia, Pennsylvania, Delaware, and West Virginia within 150 miles of DC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityProcess;