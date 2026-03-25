/**
 * ============================================================
 *  TABELLA BAR — Hotel Touring Livigno
 *  Modifica nome, desc e price di ogni voce.
 * ============================================================
 */

const BAR_DATA = {
  title: "Bar",
  subtitle: "Caffetteria, bibite e birre, dolci, panini, aperitivi e alcolici",

  categories: [

    // --------------------------------------------------------
    // CAFFETTERIA
    // --------------------------------------------------------
    {
      id: "caffe",
      name: "CAFFETTERIA",
      items: [
        { name: "Caffè espresso",               desc: "",                                          price: "1.40" },
        { name: "Caffè Americano",              desc: "",                                          price: "2.00" },
        { name: "Caffè decaffeinato",           desc: "",                                          price: "1.80" },
        { name: "Caffè doppio",                 desc: "",                                          price: "2.80" },
        { name: "Caffè corretto",               desc: "",                                          price: "2.00" },
        { name: "Orzo",                         desc: "Piccolo / grande",                          price: "1.50 / 2.00" },
        { name: "Ginseng",                      desc: "Piccolo / grande",                          price: "1.60 / 2.50" },
        { name: "Cappuccino",                   desc: "",                                          price: "2.00" },
        { name: "Cappuccino decaffeinato",      desc: "",                                          price: "2.50" },
        { name: "Cappuccino d'orzo",            desc: "",                                          price: "2.50" },
        { name: "Cappuccino di soia",           desc: "",                                          price: "2.50" },
        { name: "Latte bianco",                 desc: "",                                          price: "1.50" },
        { name: "Latte macchiato",              desc: "",                                          price: "2.00" },
        { name: "Marocchino",                   desc: "",                                          price: "2.00" },
        { name: "Tè / Camomilla / Tisane",      desc: "",                                          price: "3.00" },
        { name: "Caffè shakerato",              desc: "",                                          price: "3.00" },
        { name: "Caffè shakerato alcolico",     desc: "A scelta",                                  price: "4.00" },
        { name: "Bombardino",                   desc: "Vov, latte, panna",                         price: "4.00" },
        { name: "Lumumba",                      desc: "Cioccolata, rum, panna montata",             price: "5.00" },
        { name: "Jägertee",                     desc: "",                                          price: "4.00" },
        { name: "Punch al liquore",             desc: "",                                          price: "3.50" },
        { name: "Vin brûlé",                    desc: "Alcolico",                                  price: "4.00" },
        { name: "Mela Brulè",                   desc: "Analcolico",                                price: "4.00" },
        { name: "Calimero",                     desc: "Vov, latte, brandy, panna, whiskey, caffè", price: "5.00" },
        { name: "Irish Coffee",                 desc: "Caffè, irish whiskey, panna fresca",        price: "7.00" }
      ]
    },

    // --------------------------------------------------------
    // CIOCCOLATE
    // --------------------------------------------------------
    {
      id: "cioccolate",
      name: "CIOCCOLATE",
      note: "panna aggiuntiva +€ 0.50",
      items: [
        { name: "Classica",          desc: "",             price: "3.50" },
        { name: "Fondente",          desc: "",             price: "4.00" },
        { name: "Cioccolata bianca", desc: "",             price: "4.00" },
        { name: "Aggiunta panna",    desc: "",             price: "0.50" }
      ]
    },

    // --------------------------------------------------------
    // AFFOGATI
    // --------------------------------------------------------
    {
      id: "affogati",
      name: "AFFOGATI",
      items: [
        { name: "Caffè",              desc: "",                 price: "5.00" },
        { name: "Cioccolato",         desc: "",                 price: "6.00" },
        { name: "Amaretto Disaronno", desc: "",                 price: "6.00" },
        { name: "Al Braulio",         desc: "Amaro locale",     price: "6.00" }
      ]
    },

    // --------------------------------------------------------
    // COPPE GELATO
    // --------------------------------------------------------
    {
      id: "gelato",
      name: "COPPE GELATO",
      items: [
        { name: "Coppa Danemark",   desc: "Gelato alla panna, gelato e topping al cioccolato, panna",   price: "6.00" },
        { name: "Coppa Arlecchino", desc: "Gelato e topping alla frutta, macedonia, panna",              price: "7.00" },
        { name: "Coppa Meringata",  desc: "Gelato alla panna, meringhe, topping al cioccolato, panna",  price: "6.00" },
        { name: "Coppa Fantasy",    desc: "Gelato alla frutta, panna, topping al lampone",               price: "6.00" },
        { name: "Frappè",           desc: "",                                                            price: "5.00" }
      ]
    },

    // --------------------------------------------------------
    // DOLCI & SNACK
    // --------------------------------------------------------
    {
      id: "dolci",
      name: "DOLCI & SNACK",
      items: [
        { name: "Brioche",                  desc: "",                                                                     price: "1.50" },
        { name: "Biscotto occhio di bue",   desc: "",                                                                     price: "2.00" },
        { name: "Biscotti",                 desc: "",                                                                     price: "1.00" },
        { name: "Strudel di mele e vaniglia", desc: "",                                                                   price: "7.00" },
        { name: "Tiramisù",                 desc: "",                                                                     price: "6.00" },
        { name: "Macedonia",                desc: "",                                                                     price: "5.00" },
        { name: "Crostata",                 desc: "",                                                                     price: "6.00" },
        { name: "Gelato — 1 pallina",       desc: "",                                                                     price: "1.80" },
        { name: "Gelato — 2 palline",       desc: "",                                                                     price: "2.50" },
        { name: "Sacher",                   desc: "",                                                                     price: "7.00" },
        { name: "Maxi toast",               desc: "Prosciutto e formaggio",                                               price: "6.00" },
        { name: "Crêpes",                   desc: "Nutella / zucchero / marmellata frutti di bosco o albicocca",         price: "5.00" },
        { name: "Aggiunte crêpes",          desc: "Cocco, panna, gelato +€0.50 · Banana o macedonia +€2.00 · Topping fragola/cioccolato/frutti di bosco +€0.50 · Gran Marnier +€2.00", price: "" }
      ]
    },

    // --------------------------------------------------------
    // BIBITE & BIRRE
    // --------------------------------------------------------
    {
      id: "bibite",
      name: "BIBITE & BIRRE",
      items: [
        { name: "Acqua 0,25 L",             desc: "",                                                       price: "1.00" },
        { name: "Acqua 0,5 L",              desc: "",                                                       price: "2.00" },
        { name: "Acqua 0,75 L",             desc: "",                                                       price: "3.00" },
        { name: "Acqua e Sciroppi",          desc: "",                                                       price: "2.00" },
        { name: "Bibite in lattina",         desc: "Tè pesca o limone, Red Bull",                           price: "3.50 / 4.00" },
        { name: "Monster",                   desc: "",                                                       price: "4.50" },
        { name: "Bibite in vetro",           desc: "Coca, Coca Zero, Fanta, Sprite",                        price: "4.00" },
        { name: "Bibite Lurisia",            desc: "Limonata, Chinotto, Aranciata amara",                   price: "4.00" },
        { name: "Bibite alla spina",         desc: "0,3 / 0,4 L",                                          price: "3.00 / 4.00" },
        { name: "Succhi di frutta",          desc: "Ace, Albicocca, Ananas, Arancia, Mela, Mirtillo, Pera, Pesca, Pompelmo", price: "3.50" },
        { name: "Spremuta d'arancia",        desc: "",                                                       price: "4.00" },
        { name: "Birra alla spina Calanda",  desc: "0,3 / 0,5 L",                                          price: "3.50 / 6.00" },
        { name: "Panache",                   desc: "0,3 / 0,5 L",                                          price: "3.50 / 6.00" },
        { name: "Corona",                    desc: "Birra in bottiglia",                                    price: "4.00" },
        { name: "Heineken",                  desc: "Birra in bottiglia",                                    price: "4.00" },
        { name: "Chimay",                    desc: "Birra in bottiglia",                                    price: "5.50" },
        { name: "1816 Livigno — IPA / Hells / Weiss", desc: "Birra artigianale locale",                    price: "7.00" },
        { name: "Paulaner Weizen",           desc: "Birra in bottiglia",                                    price: "6.00" },
        { name: "Moretti analcolica",        desc: "",                                                       price: "4.00" },
        { name: "Weiss analcolica Erdinger", desc: "",                                                       price: "5.00" }
      ]
    },

    // --------------------------------------------------------
    // VINI AL CALICE
    // --------------------------------------------------------
    {
      id: "vini-calice",
      name: "VINI AL CALICE",
      items: [
        { name: "Sassella di Valtellina",           desc: "Rosso",               price: "6.00" },
        { name: "Sforzato di Valtellina",           desc: "Rosso",               price: "12.00" },
        { name: "Valpolicella Ripasso",             desc: "Rosso",               price: "8.00" },
        { name: "Amarone",                          desc: "Rosso",               price: "12.00" },
        { name: "Pinot Grigio",                     desc: "Bianco",              price: "6.00" },
        { name: "Lugana / Sauvignon / Chardonnay",  desc: "Bianco",              price: "7.00" },
        { name: "Franciacorta",                     desc: "Bollicine",           price: "8.00" },
        { name: "Prosecco",                         desc: "Bollicine",           price: "6.00" },
        { name: "Lagrein Rosè",                     desc: "Rosato",              price: "7.00" }
      ]
    },

    // --------------------------------------------------------
    // COCKTAILS SPECIALI
    // --------------------------------------------------------
    {
      id: "cocktails-speciali",
      name: "COCKTAILS SPECIALI",
      items: [
        {
          name: "Livignasc",
          desc: "Taneda, Braulio, Vodka, sciroppo di zucchero al rosmarino fatto in casa, succo di limone, Sprite",
          price: "11.00"
        },
        {
          name: "Ice Bombardino",
          desc: "Whiskey, latte, Vov, panna",
          price: "10.00"
        },
        {
          name: "Sour a scelta",
          desc: "Base alcolica a scelta, succo di limone, sciroppo di zucchero, magic foamer",
          price: "10.00"
        },
        {
          name: "Cuban Mojito",
          desc: "Rum Havana 3, succo di lime, zucchero, menta, soda",
          price: "10.00"
        },
        {
          name: "Sage Smash",
          desc: "Vodka, sciroppo di zucchero, succo di limone, salvia, soda",
          price: "10.00"
        },
        {
          name: "Tequila Sunrise",
          desc: "Tequila, succo d'arancia, granatina",
          price: "10.00"
        }
      ]
    },

    // --------------------------------------------------------
    // COCKTAILS CLASSICI
    // --------------------------------------------------------
    {
      id: "cocktails-classici",
      name: "COCKTAILS CLASSICI",
      items: [
        { name: "Hugo Spritz",        desc: "Prosecco, succo di lime, liquore al sambuco, soda, menta",                   price: "7.50" },
        { name: "Aperol Spritz",      desc: "Aperol, prosecco, soda",                                                     price: "7.50" },
        { name: "Negroni",            desc: "Vermouth rosso, gin, bitter, Campari, soda",                                 price: "8.50" },
        { name: "Americano",          desc: "Vermouth rosso, bitter Campari, soda",                                       price: "8.50" },
        { name: "Cuba Libre",         desc: "Rum bianco, succo di lime, cola",                                            price: "8.50" },
        { name: "Long Island Iced Tea", desc: "Vodka, tequila, gin, Cointreau, rum bianco, succo di limone, sciroppo, cola", price: "8.50" },
        { name: "Margarita",          desc: "Tequila, Triple Sec, succo di lime",                                         price: "8.50" },
        { name: "Moscow Mule",        desc: "Vodka, ginger beer, succo di lime",                                          price: "8.50" },
        { name: "Sex on the Beach",   desc: "Vodka, liquore alla pesca, succo di lime, sciroppo di mirtillo rosso, succo d'arancia", price: "8.50" },
        { name: "Espresso Martini",   desc: "Caffè, vodka, Kahlúa, sciroppo di zucchero",                                 price: "8.50" },
        { name: "Black Russian",      desc: "Vodka, Kahlúa, panna montata",                                               price: "8.50" }
      ]
    },

    // --------------------------------------------------------
    // COCKTAILS ANALCOLICI
    // --------------------------------------------------------
    {
      id: "analcolici",
      name: "COCKTAILS ANALCOLICI",
      items: [
        { name: "Il Biondo",          desc: "Succo di limone, succo di pompelmo, succo d'arancia",                    price: "7.00" },
        { name: "Shake on the Peach", desc: "Succo d'arancia, succo di limone, sciroppo di cranberry, tè alla pesca", price: "7.00" },
        { name: "Virgin Mojito",      desc: "Menta, lime, zucchero, soda",                                            price: "7.00" },
        { name: "Tramonto",           desc: "Succo ananas, succo arancia, granatina",                                  price: "7.00" }
      ]
    },

    // --------------------------------------------------------
    // GIN TONIC + FEVER TREE
    // --------------------------------------------------------
    {
      id: "gin-tonic",
      name: "GIN TONIC + FEVER TREE TONIC",
      note: "Kinley / Fever Tree Mediterranean / Fever Tree Indian Tonic",
      items: [
        { name: "Gordon's London Dry", desc: "", price: "8.00" },
        { name: "1816 Livigno",        desc: "", price: "12.00" },
        { name: "Adamus",              desc: "", price: "16.00" },
        { name: "Il Pioniere",         desc: "", price: "15.00" },
        { name: "Hendrick's",          desc: "", price: "12.00" },
        { name: "Gin Mare",            desc: "", price: "12.00" },
        { name: "Bulldog",             desc: "", price: "10.00" },
        { name: "Bombay",              desc: "", price: "10.00" },
        { name: "Malfy Rosa",          desc: "", price: "13.50" },
        { name: "Hetsu",               desc: "", price: "14.00" },
        { name: "Cubical",             desc: "", price: "14.00" }
      ]
    },

    // --------------------------------------------------------
    // AMARI LOCALI
    // --------------------------------------------------------
    {
      id: "amari-locali",
      name: "AMARI LOCALI",
      items: [
        { name: "Braulio",          desc: "", price: "5.00" },
        { name: "Braulio Riserva",  desc: "", price: "6.00" },
        { name: "Taneda",           desc: "", price: "4.00" },
        { name: "Al Fedaria",       desc: "", price: "6.00" }
      ]
    },

    // --------------------------------------------------------
    // AMARI
    // --------------------------------------------------------
    {
      id: "amari",
      name: "AMARI",
      items: [
        { name: "Brancamenta",    desc: "", price: "4.00" },
        { name: "Fernet Branca",  desc: "", price: "4.00" },
        { name: "Cynar",          desc: "", price: "4.00" },
        { name: "Ramazzotti",     desc: "", price: "4.00" },
        { name: "Averna",         desc: "", price: "4.00" },
        { name: "Montenegro",     desc: "", price: "4.00" },
        { name: "Jägermeister",   desc: "", price: "4.00" },
        { name: "Disaronno",      desc: "", price: "4.00" },
        { name: "Limoncello",     desc: "", price: "4.00" },
        { name: "Amaro del Capo", desc: "", price: "5.00" }
      ]
    },

    // --------------------------------------------------------
    // SPIRITS
    // --------------------------------------------------------
    {
      id: "spirits",
      name: "SPIRITS",
      items: [
        { name: "Vecchia Romagna",          desc: "Brandy",              price: "4.00" },
        { name: "Fundador",                 desc: "Brandy",              price: "5.00" },
        { name: "Courvoisier",              desc: "Cognac",              price: "6.00" },
        { name: "Remy Martin VSOP",         desc: "Cognac",              price: "8.00" },
        { name: "Zacapa 23 anni",           desc: "Rum",                 price: "10.00" },
        { name: "Havana 7",                 desc: "Rum",                 price: "6.00" },
        { name: "Smirnoff",                 desc: "Vodka",               price: "4.00" },
        { name: "Belvedere",                desc: "Vodka",               price: "7.00" },
        { name: "Beluga",                   desc: "Vodka",               price: "8.00" },
        { name: "Jack Daniel's",            desc: "Tennessee",           price: "5.00" },
        { name: "Wild Turkey",              desc: "Bourbon",             price: "6.00" },
        { name: "Long Branch",              desc: "Bourbon",             price: "7.00" },
        { name: "Jameson",                  desc: "Irish",               price: "5.00" },
        { name: "Johnnie Walker Red Label", desc: "Blended Scotch",      price: "5.00" },
        { name: "Chivas Regal",             desc: "Blended Scotch",      price: "6.00" },
        { name: "Ballantine's",             desc: "Blended Scotch",      price: "6.00" },
        { name: "The Balvenie",             desc: "Scotch Single Malt",  price: "6.00" },
        { name: "Dimple",                   desc: "Scotch Single Malt",  price: "7.00" },
        { name: "Caol Ila 12 anni",         desc: "Scotch Torbato",      price: "8.00" },
        { name: "Carpano Rosso",            desc: "Vermouth",            price: "5.00" },
        { name: "Martini Bianco",           desc: "Vermouth",            price: "5.00" },
        { name: "Martini Dry",              desc: "Vermouth",            price: "5.00" }
      ]
    },

    // --------------------------------------------------------
    // GRAPPE
    // --------------------------------------------------------
    {
      id: "grappe",
      name: "GRAPPE",
      items: [
        { name: "Grappa Williams",        desc: "", price: "4.00" },
        { name: "Mirtillo",               desc: "", price: "4.00" },
        { name: "Diplomatico Anejo",      desc: "", price: "7.00" },
        { name: "La Trentina Bianca",     desc: "", price: "5.00" },
        { name: "La Trentina Barricata",  desc: "", price: "5.00" },
        { name: "Anfora",                 desc: "", price: "6.00" },
        { name: "Moscato",                desc: "", price: "6.00" },
        { name: "18 Lune",                desc: "", price: "6.00" },
        { name: "Chardonnay",             desc: "", price: "6.00" },
        { name: "Gewurztraminer",         desc: "", price: "7.00" },
        { name: "18 Lune Botte Porto",    desc: "", price: "7.00" },
        { name: "18 Lune Botte Whisky",   desc: "", price: "7.00" },
        { name: "18 Lune Botte Rum",      desc: "", price: "7.00" },
        { name: "Amarone",                desc: "", price: "7.00" },
        { name: "Tempo Bianca",           desc: "", price: "7.00" },
        { name: "Tempo Barricata",        desc: "", price: "7.00" },
        { name: "Al Vach",                desc: "", price: "7.00" },
        { name: "Sforzato Bianca",        desc: "", price: "8.00" },
        { name: "Sforzata Barricata",     desc: "", price: "8.00" },
        { name: "Mela Verde",             desc: "", price: "9.00" },
        { name: "Nebbiolo",               desc: "", price: "10.00" },
        { name: "Trinidad Riserva",       desc: "", price: "13.00" }
      ]
    }

  ]
};
