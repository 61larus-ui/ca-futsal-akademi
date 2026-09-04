import { IMAGES } from './images'

export const HERO_CONTENT = {
  eyebrow: 'CA Futsal Akademi',
  titleLead: 'Geleceğin oyunu',
  titleAccent: 'Burada başlıyor',
  description:
    "Trabzon'da futsal temelli profesyonel futbol gelişim akademisi.",
  primaryCta: {
    label: 'Ön Kayıt Yap',
    action: 'open-registration',
  },
  secondaryCta: {
    label: 'Akademiyi Keşfet',
    action: 'open-academy',
  },
  image: IMAGES.heroPlayersBlack,
  imageAlt: 'CA Futsal Akademi hero görselinde iki sporcu, siyah formalarıyla',
}

export const QUICK_INFO_ITEMS = [
  {
    id: 'development',
    icon: 'users-round',
    title: '4–12 Yaş',
    description: 'Gelişim Programı',
    programView: 'development',
  },
  {
    id: 'performance',
    icon: 'zap',
    title: '12+ Yaş',
    description: 'Performans Programı',
    programView: 'performance',
  },
  {
    id: 'training',
    icon: 'star',
    title: 'Profesyonel Eğitim',
    description: 'Teknik · Hız · Zekâ',
  },
  {
    id: 'location',
    icon: 'map-pin',
    title: 'Trabzon',
    description: 'Çukurçayır / Sınav Koleji Spor Salonu',
  },
]

export const FOUNDER = {
  id: 'cemre-atmaca',
  name: 'Cemre Atmaca',
  role: 'Kurucu & Koordinatör',
  lead: 'Sahadan gelen deneyimi, modern futsal eğitimiyle geleceğin oyuncularına aktarıyoruz.',
  paragraphs: [
    "24 Mayıs 1985 Trabzon doğumlu Cemre Atmaca, futbol kariyerine Telekomspor'da başladı. 2002 yılında Trabzonspor'da profesyonelliğe adım attı ve A takım seviyesine yükseldi.",
    'Kariyeri boyunca Giresunspor, Adanaspor, Balıkesirspor, Kartalspor, Orduspor, Sarıyerspor ve Gebzespor gibi kulüplerde forma giydi. U18 Türk Milli Takımı seviyesinde de görev aldı.',
    'Bugün futbolculuk deneyimini CA Futsal Akademi çatısı altında genç sporcuların teknik, fiziksel ve zihinsel gelişimine aktarıyor.',
  ],
  stats: [
    { id: 'pro', value: '2002', label: 'Profesyonellik' },
    { id: 'national', value: 'U18', label: 'Milli Takım' },
    { id: 'experience', value: '20+ Yıl', label: 'Futbol Deneyimi' },
  ],
  image: IMAGES.founder,
  imageAlt: 'Cemre Atmaca, CA Futsal Akademi kurucusu ve koordinatörü',
  branding: ['CA Futsal', 'Trabzon'],
}

export const TECHNICAL_STAFF = [
  {
    id: 'cemre-atmaca',
    name: 'Cemre Atmaca',
    roleLines: ['Kurucu & Koordinatör', 'Eski Milli Futbolcu'],
    image: IMAGES.cemreAtmacaTracksuit,
    imageAlt: 'Cemre Atmaca',
    variant: 'person',
    href: '/#cemre-atmaca',
  },
  {
    id: 'sebahattin-akbayrak',
    name: 'Sebahattin Akbayrak',
    roleLines: ['Teknik Direktör', 'UEFA PRO Lisans'],
    image: IMAGES.sebahattinAkbayrak,
    imageAlt: 'Sebahattin Akbayrak',
    variant: 'person',
    href: '/#teknik-kadro',
  },
  {
    id: 'antrenor-1',
    name: '1. Antrenör',
    roleLines: [],
    image: IMAGES.logoLight,
    imageAlt: 'CA Futsal Akademi',
    variant: 'logo',
  },
  {
    id: 'antrenor-2',
    name: '2. Antrenör',
    roleLines: [],
    image: IMAGES.logoLight,
    imageAlt: 'CA Futsal Akademi',
    variant: 'logo',
  },
  {
    id: 'antrenor-3',
    name: '3. Antrenör',
    roleLines: [],
    image: IMAGES.logoLight,
    imageAlt: 'CA Futsal Akademi',
    variant: 'logo',
  },
]

export const ORGANIZATION_STRUCTURE = {
  coordinator: {
    title: 'KOORDİNATÖR',
    name: 'Cemre Atmaca',
  },
  technicalDirector: {
    title: 'TEKNİK DİREKTÖR',
    name: 'Sebahattin Akbayrak',
    coaches: ['1. Antrenör', '2. Antrenör', '3. Antrenör'],
  },
  publicRelations: {
    title: 'HALKLA İLİŞKİLER',
  },
  healthSupport: {
    title: 'SAĞLIK & DESTEK',
    roles: ['Psikolog', 'Diyetisyen', 'Fizyoterapist'],
  },
}

export const LOCATION_INFO = {
  titleLead: 'Bizi nerede',
  titleAccent: 'bulabilirsiniz?',
  area: 'Trabzon / Çukurçayır',
  venue: 'Sınav Koleji Spor Salonu',
  city: 'Çukurçayır / Trabzon',
  addressLines: [
    'Çukurçayır, Hasan Turfanda Cad. No:32,',
    '61000 Ortahisar / Trabzon',
  ],
  phone: {
    kicker: 'Telefon',
    label: '0540 001 0462',
    href: 'tel:+905400010462',
    telHref: 'tel:+905400010462',
    whatsappNumber: '905400010462',
    ariaLabel: "CA Futsal Akademi'yi ara: 0540 001 0462",
  },
  web: {
    kicker: 'Web',
    label: 'www.cafutsalakademi.com',
    href: 'https://www.cafutsalakademi.com/',
  },
  directions: {
    label: 'Yol tarifi al',
    href: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x4064393d7ec7aba5:0x2c8e1d78137be632?sa=X&ved=1t:8290&ictx=111',
  },
  buildingImage: IMAGES.schoolBuilding,
  buildingAlt: 'Sınav Koleji Trabzon Çukurçayır yerleşkesi',
  schoolLogo: IMAGES.schoolLogo,
  schoolLogoAlt: 'Trabzon Sınav Koleji Çukurçayır logosu',
  venueLabel: 'Sınav Koleji Çukurçayır',
}

export const CONTACT_MODAL_CONTENT = {
  eyebrow: 'İletişim',
  title: 'Bize ulaşın',
  description:
    'Cemre Atmaca Futsal Akademi hakkında bilgi almak, programlarımızı öğrenmek ve ön kayıt süreciyle ilgili bize ulaşabilirsiniz.',
  addressLabel: 'Adres',
  venue: LOCATION_INFO.venue,
  addressLines: LOCATION_INFO.addressLines,
  phoneLabel: LOCATION_INFO.phone.kicker,
  phone: LOCATION_INFO.phone.label,
  phoneHref: LOCATION_INFO.phone.telHref,
  phoneAriaLabel: LOCATION_INFO.phone.ariaLabel,
  websiteLabel: LOCATION_INFO.web.kicker,
  website: LOCATION_INFO.web.label,
  websiteHref: 'https://www.cafutsalakademi.com/',
  instagramLabel: 'Instagram',
  instagram: '@atmaca61cemre',
  instagramHref: 'https://www.instagram.com/atmaca61cemre/',
  instagramAriaLabel: 'CA Futsal Akademi Instagram hesabını aç',
  mapsLabel: LOCATION_INFO.directions.label,
  mapsHref: LOCATION_INFO.directions.href,
  note: 'Ön kayıt ve bilgi için bizimle iletişime geçebilirsiniz.',
}

export const REGISTRATION_CONTENT = {
  eyebrow: 'Ön kayıt',
  titleLines: ['Akademiye', 'katıl'],
  lead: 'Formu doldurun; bilgileriniz WhatsApp üzerinden akademiye iletilmeye hazır hale gelir.',
  phoneLabel: LOCATION_INFO.phone.kicker,
  phone: LOCATION_INFO.phone.label,
  phoneHref: LOCATION_INFO.phone.telHref,
  phoneAriaLabel: LOCATION_INFO.phone.ariaLabel,
  locationLabel: 'Konum',
  venue: LOCATION_INFO.venue,
  city: LOCATION_INFO.city,
  whatsappNumber: LOCATION_INFO.phone.whatsappNumber,
  programsLabel: 'Programlar',
  programs: [
    { id: 'development', label: '4–12 Yaş Gelişim Grubu' },
    { id: 'performance', label: '12 Yaş ve Üzeri Performans Grubu' },
  ],
  fields: {
    parentName: 'Veli adı soyadı',
    athleteName: 'Sporcu adı soyadı',
    age: 'Sporcu yaşı',
    phone: 'Telefon numarası',
    program: 'Program',
    note: 'Kısa not',
    noteOptional: '(isteğe bağlı)',
  },
  consent:
    'Kişisel bilgilerimin ön kayıt sürecinde iletişim amacıyla kullanılmasını kabul ediyorum.',
  submit: 'WhatsApp ile ön kaydı gönder',
  helper:
    'Formu tamamladıktan sonra WhatsApp açılır. Mesajı göndererek ön kayıt talebinizi iletebilirsiniz.',
  ageMin: 4,
  ageMax: 18,
}

export const FOOTER_CONTENT = {
  intro: "Trabzon'da futsal temelli profesyonel futbol gelişim akademisi.",
  instagramLabel: 'Instagram',
  academyLinks: [
    { id: 'about', label: 'Hakkımızda', action: 'open-academy' },
    { id: 'programs', label: 'Programlarımız', action: 'open-programs' },
    { id: 'staff', label: 'Teknik Kadro', action: 'open-staff' },
  ],
  programLinks: [
    {
      id: 'development',
      title: 'Gelişim Programı',
      meta: '4–12 Yaş',
      action: 'open-programs',
      view: 'development',
    },
    {
      id: 'performance',
      title: 'Performans Programı',
      meta: '12+ Yaş',
      action: 'open-programs',
      view: 'performance',
    },
  ],
  copyright: '© 2026 CA Futsal Akademi',
  rights: 'Tüm Hakları Saklıdır.',
}

export const ACADEMY_MODAL_CONTENT = {
  eyebrow: 'Akademi',
  titleLines: ['Geleceğin sporcusunu', 'bugünden yetiştiriyoruz'],
  intro: [
    'Cemre Atmaca Futsal Akademi, çocukların futsal ve futbol becerilerini geliştirmekle birlikte; özgüvenli, disiplinli, takım bilinci yüksek ve spor kültürünü benimsemiş bireyler olarak yetişmelerine katkı sağlamak amacıyla kurulmuştur.',
    'Akademimizde her sporcu, kendi yaş ve gelişim düzeyine uygun planlanmış bir eğitim sürecinin parçasıdır. Antrenmanlarımız; teknik gelişim, koordinasyon, çeviklik, sürat, oyun zekâsı, doğru karar verme ve takım oyunu gibi modern futbolun temel gerekliliklerini birlikte geliştirecek şekilde yapılandırılır.',
  ],
  sections: [
    {
      id: 'gelisim-yolculugu',
      title: 'Her Çocuk Bizim İçin Ayrı Bir Gelişim Yolculuğudur',
      paragraphs: [
        'Çocukların fiziksel ve sportif gelişim hızlarının birbirinden farklı olduğunun bilincindeyiz. Bu nedenle akademimizde yalnızca sonuç değil, doğru gelişim süreci önemlidir.',
        'Sporcularımızın güçlü yönlerini ortaya çıkarmayı, geliştirilmesi gereken alanlarını belirlemeyi ve potansiyellerini doğru eğitimle desteklemeyi hedefliyoruz. Çocuğun kendisini baskı altında hissetmediği; ancak disiplin, sorumluluk ve çalışma alışkanlığı kazandığı güvenli ve profesyonel bir eğitim ortamı oluşturuyoruz.',
      ],
    },
    {
      id: 'futsal-temel',
      title: 'Futsaldan Futbola Güçlü Bir Temel',
      paragraphs: [
        'Futsalın dar alanda hızlı düşünme, top hâkimiyeti, çabuk karar verme ve oyunu doğru okuma becerilerine sağladığı katkıyı eğitim modelimizin merkezine yerleştiriyoruz.',
        'Amacımız yalnızca iyi futsal oynayan çocuklar yetiştirmek değil; sahada düşünebilen, çözüm üretebilen ve futbolun gerektirdiği teknik altyapıya sahip sporcular yetiştirmektir.',
      ],
    },
    {
      id: 'degerler',
      title: 'Eğitim, Disiplin ve Değerler',
      paragraphs: [
        'Bizim için sportif başarı kadar çocuğun spor yoluyla kazandığı değerler de önemlidir. Saygı, disiplin, fair-play, takım arkadaşlığı, sorumluluk ve özgüven, akademimizin eğitim anlayışının ayrılmaz parçalarıdır.',
        'Çünkü iyi bir sporcu yetiştirmenin, önce sağlam karakterli ve sorumluluk sahibi bir bireyin gelişimine katkıda bulunmakla başladığına inanıyoruz.',
      ],
    },
    {
      id: 'deneyim',
      title: 'Profesyonel Deneyimden Çocuklara',
      paragraphs: [
        'Akademimizin eğitim yaklaşımı; profesyonel futbolculuk ve antrenörlük deneyiminin, çocukların gelişim ihtiyaçlarına uygun bir sistem içerisinde sahaya aktarılması üzerine kuruludur.',
        'Cemre Atmaca liderliğindeki teknik kadromuz, sporcularımızın gelişimini planlı, sürdürülebilir ve yaşlarına uygun bir eğitim anlayışıyla destekler.',
      ],
    },
  ],
  manifesto: [
    'Her çocuk profesyonel futbolcu olmak zorunda değildir.',
    'Ama her çocuk profesyonel bir eğitim ortamını hak eder.',
  ],
  closing:
    'Cemre Atmaca Futsal Akademi olarak hedefimiz; çocukların sporu sevdiği, ailelerin gelişimlerine güvenle eşlik edebildiği ve her antrenmanın onları bir adım ileri taşıdığı güçlü bir akademi kültürü oluşturmaktır.',
}

export const WHY_FUTSAL_MODAL_CONTENT = {
  eyebrow: 'Neden Futsal?',
  titleLines: ['Büyük sahaların yıldızları,', 'küçük alanlarda yetişti'],
  intro: [
    'Bir çocuğun futbol gelişiminde önemli olan yalnızca ne kadar koştuğu değil; topla ne kadar buluştuğu, ne kadar hızlı düşündüğü ve baskı altında ne kadar doğru karar verebildiğidir.',
    'Futsal tam olarak bu becerilerin gelişimini destekleyen bir oyun ortamı sunar.',
    "FIFA tarafından tanınan resmi bir futbol branşı olan futsal; beşe beş oynanan, daha küçük bir alan ve daha az seken bir top kullanılan, yüksek tempolu bir oyundur. Alanın dar olması oyuncunun teknik becerisini daha sık kullanmasını, çevresini daha hızlı değerlendirmesini ve kısa sürede karar vermesini gerektirir. UEFA da futsalı 11'e 11 futbol için bir oyuncu gelişim aracı olarak tanımlamaktadır.",
  ],
  sections: [
    {
      id: 'kazandirir',
      title: 'Futsal çocuğa ne kazandırır?',
      paragraphs: [
        'Futsalda oyuncunun saklanabileceği geniş alanlar yoktur. Oyun sürekli hareket halindedir ve çocuk tekrar tekrar oyunun içine girer.',
        "Dar alan ve rakip baskısı; yakın top kontrolü, iki ayağı kullanabilme, pas kalitesi, dribling, çeviklik, oyun görüşü ve hızlı karar verme gibi becerileri ön plana çıkarır. UEFA'nın futsal eğitim materyallerinde de sınırlı alanın top kontrolünü ve tekniği geliştirmeyi gerektirdiği, oyunun yapısının oyuncuyu daha hızlı oynamaya ve düşünmeye yönelttiği belirtilmektedir.",
        'Bu nedenle biz futsalı yalnızca ayrı bir spor branşı olarak değil, aynı zamanda modern futbolcunun teknik ve zihinsel altyapısını geliştirebilecek güçlü bir eğitim ortamı olarak görüyoruz.',
      ],
    },
    {
      id: 'yildizlar',
      title: 'Dünyanın yıldızları da futsalla büyüdü',
      paragraphs: [
        'Futsalın oyuncu gelişimindeki yerini anlatmanın en etkileyici yollarından biri dünya futbolunun yıldızlarına bakmaktır.',
        'Lionel Messi, çocukluk yıllarında Arjantin\'de sokakta ve kulübünde futsal oynadığını ve bunun oyuncu olarak gelişimine önemli katkı sağladığını anlatıyor.',
        'Cristiano Ronaldo, Portekiz\'deki çocukluk yıllarında futsal oynadığını; küçük oyun alanının yakın top kontrolünü geliştirdiğini söylüyor.',
        'Neymar, futsalın oyuncuyu daha hızlı düşünmeye zorladığını ve futbol kariyerinde kendisine önemli katkı sağladığını ifade ediyor.',
        'Brezilyalı efsane Ronaldo Nazário ise küçük alanda rakip geçebilmek için çok iyi ayak becerilerine ihtiyaç duyduğunu anlatıyor. UEFA\'nın derlemelerinde bu isimlerin yanı sıra Ronaldinho, Andrés Iniesta ve Philippe Coutinho gibi dünya futbolunun önemli oyuncularının gelişim geçmişlerinde de futsalın yeri vurgulanıyor.',
      ],
    },
    {
      id: 'ulkeler',
      title: 'Brezilya, Arjantin, İspanya ve Portekiz...',
      paragraphs: [
        'Bu ilişki birkaç yıldız oyuncuyla sınırlı değil.',
        'UEFA, Brezilya, Arjantin, Portekiz ve İspanya gibi güçlü futbol kültürlerine sahip ülkelerde genç oyuncuların futsalla büyümesinin yaygın olduğuna dikkat çekiyor. Futsalın profesyonel futbolun yanında başlı başına uluslararası bir spor olmasının yanı sıra genç futbolcuların gelişiminde de kullanıldığını belirtiyor.',
        'Brezilya örneği özellikle dikkat çekici. UEFA kaynaklarında Pelé, Sócrates, Zico ve Ronaldinho gibi Brezilya futbolunun önemli isimlerinin gençlik yıllarında futsal oynadığı aktarılıyor.',
        "UEFA ayrıca Kaká, Ronaldinho ve Ronaldo'nun yeteneklerini futsal aracılığıyla geliştiren Brezilyalı yıldızlar arasında olduğunu belirtiyor.",
      ],
    },
    {
      id: 'daha-cok-top',
      titleLines: ['Daha çok top,', 'daha çok karar,', 'daha çok gelişim'],
      paragraphs: [
        'Çocuk futbolunda bizim için önemli bir soru var:',
        'Bir çocuk antrenmanda kaç kez gerçekten oyunun içerisinde?',
        'Futsalın küçük saha ve az oyunculu yapısı, çocuğu oyunun merkezinde tutar. Top gelir, karar vermesi gerekir. Pas verir, yeniden pozisyon alması gerekir. Topu kaybeder, savunmaya geçmesi gerekir. Alan değişir, yeniden düşünmesi gerekir.',
        'Bu döngü tekrar tekrar yaşanır.',
        'Dolayısıyla çocuk yalnızca hareketleri ezberlemez; oyunu görmeyi, düşünmeyi ve çözüm üretmeyi öğrenir.',
        "UEFA'nın futsal üzerine yayımladığı çalışmalarda da dar alanın yakın kontrolü ve düşünme hızını öne çıkardığı; genç yaşta futsal çalışmasının futbolla ilişkili teknik becerilerin ve daha hızlı karar vermenin gelişimine katkı sağlayabileceği ifade edilmektedir.",
      ],
    },
    {
      id: 'neden-sectik',
      title: 'Biz neden futsalı seçtik?',
      lead: "Cemre Atmaca Futsal Akademi'de amacımız çocuklara yalnızca futbol hareketleri öğretmek değil, futbolu anlamayı öğretmektir.",
      highlights: [
        'Top ayağına geldiğinde ne yapacağını bilen...',
        'Top kendisine gelmeden önce çevresini görebilen...',
        'Dar alanda çözüm üretebilen...',
        'Her iki ayağını kullanmaya çalışan...',
        'Rakibine göre karar verebilen...',
        'Takım arkadaşlarıyla birlikte hareket eden...',
        'Ve en önemlisi, oyunun içerisinde düşünmekten ve sorumluluk almaktan çekinmeyen sporcular yetiştirmek istiyoruz.',
      ],
      closing: 'Futsalı bu gelişim yolculuğunun çok güçlü bir parçası olarak görüyoruz.',
    },
  ],
  finale: {
    titleLines: ['Küçük alan.', 'Büyük gelişim.'],
    paragraphs: [
      'Messi, Cristiano Ronaldo, Neymar ve Ronaldinho gibi dünya futbolunun en özel yeteneklerinin geçmişinde futsal varsa, bunun bir nedeni var.',
      'Çünkü büyük sahada fark yaratmak için önce topa hâkim olmayı, hızlı düşünmeyi ve doğru karar vermeyi öğrenmek gerekir.',
    ],
    manifesto: {
      heading: 'Cemre Atmaca Futsal Akademi',
      lines: ['Topla daha fazla buluş.', 'Daha hızlı düşün.', 'Oyunu daha iyi anla.'],
    },
  },
}

export const PROGRAM_MODAL_CONTENT = {
  eyebrow: 'Programlarımız',
  titleLines: ['Her yaşa uygun', 'doğru gelişim modeli'],
  commonStatement:
    'Her yaşın ihtiyacı farklı, hedefimiz aynı: Doğru eğitimle maksimum gelişim.',
  backLabel: 'Programlara dön',
  backAriaLabel: 'Program seçimine dön',
  topicsTitle: 'Programda geliştirdiğimiz temel alanlar:',
  development: {
    id: 'development',
    eyebrow: 'Gelişim Programı',
    title: '4–12 Yaş',
    slogan: 'Sağlam Temel, Doğru Eğitim, Ömür Boyu Spor Sevgisi',
    paragraphs: [
      'Gelişim Programımız, çocukların futsal ve futbolla doğru yaşta, doğru yöntemlerle ve güvenli bir eğitim ortamında tanışmaları için hazırlanmıştır.',
      'Bu yaş grubunda önceliğimiz yalnızca top kullanmayı öğretmek değildir. Çocuğun koordinasyon, denge, çeviklik ve hareket becerilerini geliştirirken; top hâkimiyeti, pas, dribling, şut ve temel oyun bilgisi gibi teknik becerilerin sağlam temeller üzerine kurulmasını hedefliyoruz.',
      'Antrenmanlarımız çocukların yaşına ve gelişim seviyesine uygun olarak planlanır. Küçük alan oyunları ve oyun temelli çalışmalar sayesinde sporcularımızın daha fazla topla buluşması, çevresini gözlemlemesi, hızlı düşünmesi ve sahada kendi kararlarını verebilmesi desteklenir. Bu yaklaşım, modern genç oyuncu gelişiminde de özellikle öne çıkan yöntemlerden biridir.',
      'Program boyunca çocuklarımızın özgüven, disiplin, takım arkadaşlığı, sorumluluk ve fair-play gibi değerleri de sporun doğal bir parçası olarak kazanmalarını önemsiyoruz.',
    ],
    topics: [
      'Koordinasyon, denge, çeviklik ve temel hareket becerileri',
      'Top kontrolü ve top hâkimiyeti',
      'Pas, dribling ve şut teknikleri',
      'Çabukluk ve reaksiyon',
      'Oyun algısı ve doğru karar verme',
      'Bire bir ve küçük alan oyun becerileri',
      'Takım oyunu ve saha içi iletişim',
      'Özgüven, disiplin ve spor kültürü',
    ],
    manifesto:
      'Amacımız erken yaşta sonuç almak değil, gelecekte üzerine güçlü bir oyun inşa edilebilecek doğru temeli atmaktır.',
  },
  performance: {
    id: 'performance',
    eyebrow: 'Performans Programı',
    title: '12+ Yaş',
    slogan: 'Potansiyelden Performansa',
    paragraphs: [
      'Performans Programımız; temel futbol becerilerini kazanmış, gelişimini daha ileri seviyeye taşımak ve daha yüksek tempolu, teknik ve taktik açıdan daha kapsamlı bir eğitim sürecine dahil olmak isteyen sporcular için hazırlanmıştır.',
      'Bu programda oyuncunun yalnızca teknik kapasitesine değil; oyunu okuma, baskı altında doğru karar verme, pozisyon alma, hücum-savunma geçişleri, hız, çeviklik ve oyun temposuna uyum gibi performansı belirleyen unsurlara birlikte odaklanıyoruz.',
      'Futsalın dar alan ve yüksek karar verme sıklığı, oyuncuyu top kendisine gelmeden önce düşünmeye ve kısa sürede çözüm üretmeye zorlayan güçlü bir eğitim ortamı sağlar. FIFA\'nın futsal ve oyuncu gelişimine ilişkin çalışmaları da futsalın yoğun teknik aksiyonlarının ve özgün oyun koşullarının futbol için aktarılabilir teknik becerilerin gelişimine katkı sağlayabileceğine işaret ediyor.',
      'Antrenmanlarda gerçek müsabaka koşullarına yaklaşan çalışmalar kullanılarak oyuncunun teknik, taktik, fiziksel ve zihinsel kapasitesinin birlikte geliştirilmesi hedeflenir. Küçük alan oyunlarının futsalda karar verme ile fiziksel yükü aynı çalışma içerisinde geliştirmek için kullanılabildiğine ilişkin güncel bilimsel bulgular da bulunuyor.',
    ],
    topics: [
      'İleri seviye teknik beceriler',
      'Dar alanda top hâkimiyeti',
      'Baskı altında hızlı ve doğru karar verme',
      'Oyun görüşü ve pozisyon bilgisi',
      'Hücum ve savunma prensipleri',
      'Hücum-savunma geçişleri',
      'Sürat, çeviklik, reaksiyon ve koordinasyon',
      '1v1, 2v2, 3v3 ve oyun senaryoları',
      'Takım taktiği ve saha içi iletişim',
      'Müsabaka disiplini ve sportif sorumluluk',
    ],
    manifesto:
      'Hedefimiz yalnızca daha hızlı veya daha teknik oyuncular değil; oyunu anlayan, düşünen ve sahada doğru çözümü üretebilen sporcular yetiştirmektir.',
  },
}

export const TECHNICAL_STAFF_MODAL_CONTENT = {
  eyebrow: 'Teknik kadro',
  titleLines: ['Bir çocuğun gelişimi,', 'güçlü bir ekiple başlar'],
  intro: [
    "Cemre Atmaca Futsal Akademi'de çocuklarımızın gelişimini yalnızca antrenman saatleriyle sınırlı görmüyoruz. Her sporcunun teknik, fiziksel, zihinsel ve sosyal gelişimini bir bütün olarak ele alan profesyonel bir yapı içerisinde eğitim almasını hedefliyoruz.",
    'Bu anlayış doğrultusunda oluşturduğumuz kadromuz; profesyonel futbol deneyimini, UEFA lisanslı antrenörlük eğitimini ve farklı uzmanlık alanlarını aynı gelişim modeli içerisinde buluşturuyor.',
  ],
  sections: [
    {
      id: 'koordinator',
      title: 'Koordinatör',
      paragraphs: [
        'Akademimizin koordinasyonunda, eski milli futbolcu Cemre Atmaca yer almaktadır. Profesyonel futbolculuk kariyerinden edindiği saha deneyimini çocukların ve genç sporcuların gelişimine aktaran Atmaca, akademinin eğitim anlayışının, sportif hedeflerinin ve gelişim modelinin uygulanmasından sorumludur.',
      ],
    },
    {
      id: 'teknik-yapilanma',
      title: 'Teknik yapılanma',
      paragraphs: [
        'Teknik yapılanmamızın başında ise UEFA Pro Lisans sahibi Teknik Direktör Sebahattin Akbayrak bulunmaktadır. Antrenman metodolojisinin oluşturulması, yaş gruplarına göre eğitim programlarının planlanması ve sporcuların teknik-taktik gelişim süreçlerinin yönetimi, teknik direktörümüzün liderliğinde gerçekleştirilmektedir.',
        "Sebahattin Akbayrak'a bağlı olarak görev yapacak üç antrenörümüzün tamamı profesyonel futbol geçmişine ve UEFA B Antrenör Lisansına sahip isimlerden oluşacaktır. Böylece çocuklarımız, temel eğitimden performans seviyesine kadar futbolun içerisinden gelen ve antrenörlük eğitimini lisans düzeyinde tamamlamış bir teknik ekiple çalışma fırsatı bulacaktır.",
      ],
    },
    {
      id: 'butuncul-gelisim',
      titleLines: ['Sadece futbol değil,', 'bütüncül sporcu gelişimi'],
      paragraphs: [
        'Çocukların gelişiminin yalnızca teknik becerilerden ibaret olmadığına inanıyoruz. Bu nedenle teknik kadromuzu; psikolog, fizyoterapist ve diyetisyen desteğiyle tamamlayan multidisipliner bir yapı oluşturuyoruz.',
        'Psikolojik gelişim ve sportif özgüven, fiziksel gelişimin desteklenmesi ve sakatlık risklerine yönelik profesyonel yaklaşım ile yaşa ve sportif ihtiyaçlara uygun beslenme konusunda, ilgili uzmanlık alanlarımız sporcularımızın ihtiyaçlarına göre sürecin içerisinde yer alacaktır. Multidisipliner sporcu destek modellerinde psikoloji, fizyoterapi ve beslenme gibi farklı uzmanlıkların koordinasyonu bütüncül yaklaşımın önemli bir parçasıdır.',
      ],
    },
    {
      id: 'veli-iletisimi',
      title: 'Velilerimiz de bu sürecin bir parçası',
      paragraphs: [
        'Bizim için bir çocuğun gelişim yolculuğunda aile, akademi ve sporcu arasındaki iletişim son derece değerlidir.',
        'Alanında uzman Halkla İlişkiler birimimiz, velilerimiz ile akademimiz arasında güçlü ve düzenli bir iletişim köprüsü oluşturacaktır. Çocuklarımızın akademideki gelişim süreçleri hakkında ailelerimizin bilgilendirilmesi, ihtiyaç ve görüşlerinin akademiye aktarılması ve veli iletişiminin profesyonel biçimde yürütülmesi bu yapının temel görevlerinden olacaktır.',
        'Böylece velilerimiz çocuklarını yalnızca antrenmana bırakıp sürecin dışında kalan kişiler olmayacak; çocuklarının gelişimini takip edebilecekleri şeffaf ve güven veren bir akademi sisteminin parçası olacaklardır. Genç sporcularda sporcu, antrenör ve ebeveyn arasındaki sağlıklı iletişimin önemi de spor bilimleri literatüründe özellikle vurgulanmaktadır.',
      ],
    },
    {
      id: 'tek-ekip',
      title: 'Aynı hedef için çalışan tek ekip',
      paragraphs: [
        'Koordinatörümüzden teknik direktörümüze, antrenörlerimizden sağlık ve gelişim uzmanlarımıza, halkla ilişkiler birimimizden velilerimize kadar aynı hedef etrafında buluşuyoruz:',
      ],
    },
  ],
  manifesto:
    'Her çocuğun potansiyelini doğru eğitim, doğru iletişim ve profesyonel bir gelişim ortamıyla en üst seviyeye taşımak.',
  closing:
    'Cemre Atmaca Futsal Akademi olarak çocuklarımızı yalnızca bugünkü performanslarıyla değil, yarının sporcuları ve bireyleri olarak değerlendiriyoruz.',
}
