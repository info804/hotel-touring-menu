/**
 * ============================================================
 *  TABELLA BAR — Hotel Touring Livigno
 *  Modifica nome, desc e price di ogni voce.
 * ============================================================
 */

const BAR_DATA = {
  title: "Bar",
  subtitle: "Caffetteria, dolci, gelato, bibite, vini, cocktail e spiriti",

  categories: [

    // --------------------------------------------------------
    // CAFFETTERIA
    // --------------------------------------------------------
    {
      id: "caffe",
      name: "CAFFETTERIA",
      items: [
        { name: "Espresso",                 desc: "",                                           price: "1.40" },
        { name: "Americano",                desc: "",                                           price: "2.00" },
        { name: "Decaffeinato",             desc: "",                                           price: "1.60" },
        { name: "Doppio",                   desc: "",                                           price: "2.80" },
        { name: "Corretto",                 desc: "",                                           price: "2.00" },
        { name: "Orzo",                     desc: "Piccolo / grande",                           price: "1.50 / 2.00" },
        { name: "Ginseng",                  desc: "Piccolo / grande",                           price: "1.60 / 2.50" },
        { name: "Cappuccino",               desc: "Variazioni disponibili +€ 0.50",             price: "2.00" },
        { name: "Latte bianco",             desc: "",                                           price: "1.50" },
        { name: "Latte macchiato",          desc: "",                                           price: "2.00" },
        { name: "Marocchino",               desc: "",                                           price: "2.00" },
        { name: "Tè & tisane",              desc: "",                                           price: "3.50" },
        { name: "Caffè shakerato",          desc: "Correzione alcolica +€ 1.00",                price: "4.00" },
        { name: "Bombardino",               desc: "Vov, latte, panna",                          price: "5.00" },
        { name: "Lumumba",                  desc: "Cioccolata, rum, panna montata",              price: "5.00" },
        { name: "Jägertee",                 desc: "",                                           price: "4.00" },
        { name: "Punch al liquore",         desc: "",                                           price: "4.00" },
        { name: "Vin brûlé",                desc: "",                                           price: "5.00" },
        { name: "Calimero",                 desc: "Vov, latte, brandy, panna, whiskey, caffè",  price: "6.00" },
        { name: "Irish Coffee",             desc: "Caffè, irish whiskey, panna fresca",         price: "7.00" }
      ]
    },

    // --------------------------------------------------------
    // YOGURT LOCALE
    // --------------------------------------------------------
    {
      id: "yogurt",
      name: "YOGURT LOCALE",
      items: [
        { name: "Liscio",             desc: "",  price: "3.50" },
        { name: "+ Miele",            desc: "",  price: "+0.50" },
        { name: "+ Cereali",          desc: "",  price: "+0.50" },
        { name: "+ Fragole",          desc: "",  price: "+2.50" },
        { name: "+ Frutti di bosco",  desc: "",  price: "+3.00" }
      ]
    },

    // --------------------------------------------------------
    // CREMA CAFFÈ
    // --------------------------------------------------------
    {
      id: "crema-caffe",
      name: "CREMA CAFFÈ",
      note: "Piccolo / grande",
      items: [
        { name: "Classica",      desc: "", price: "2.50 / 3.50" },
        { name: "Nero fondente", desc: "", price: "3.00 / 4.00" },
        { name: "Bianca",        desc: "", price: "3.00 / 4.00" },
        { name: "Cremino",       desc: "", price: "3.00 / 4.00" }
      ]
    },

    // --------------------------------------------------------
    // CIOCCOLATA
    // --------------------------------------------------------
    {
      id: "cioccolata",
      name: "CIOCCOLATA",
      note: "Panna aggiuntiva +€ 0.50",
      items: [
        { name: "Al latte",  desc: "", price: "4.00" },
        { name: "Fondente",  desc: "", price: "4.50" },
        { name: "Bianca",    desc: "", price: "4.50" }
      ]
    },

    // --------------------------------------------------------
    // CREPES
    // --------------------------------------------------------
    {
      id: "crepes",
      name: "CRÊPES",
      special: true,
      items: [
        { name: "Base",                                          desc: "Nutella, albicocca o frutti di bosco",  price: "5.00" },
        { name: "+ Cocco / panna",                               desc: "",                                      price: "+0.50" },
        { name: "+ Gelato, mirtilli / fragole fresche / banana", desc: "",                                      price: "+2.00" },
        { name: "+ Fragola / cioccolato / frutti di bosco",      desc: "",                                      price: "+0.50" },
        { name: "+ Gran Marnier",                                desc: "",                                      price: "+2.00" }
      ]
    },

    // --------------------------------------------------------
    // AFFOGATI
    // --------------------------------------------------------
    {
      id: "affogati",
      name: "AFFOGATI",
      items: [
        { name: "Caffè",              desc: "", price: "5.00" },
        { name: "Cioccolato",         desc: "", price: "6.00" },
        { name: "Amaretto Disaronno", desc: "", price: "6.00" },
        { name: "Braulio",            desc: "", price: "6.00" }
      ]
    },

    // --------------------------------------------------------
    // DOLCI & SNACK
    // --------------------------------------------------------
    {
      id: "dolci",
      name: "DOLCI & SNACK",
      items: [
        { name: "Brioche",                    desc: "",  price: "1.50" },
        { name: "Biscotto occhio di bue",     desc: "",  price: "2.00" },
        { name: "Biscotti semplici",          desc: "",  price: "1.00" },
        { name: "Strudel di mele",            desc: "",  price: "7.00" },
        { name: "Tiramisù",                   desc: "",  price: "7.00" },
        { name: "Macedonia",                  desc: "",  price: "6.00" },
        { name: "Crostata",                   desc: "",  price: "6.00" },
        { name: "Gelato — 1 / 2 palline",     desc: "",  price: "1.80 / 2.50" }
      ]
    },

    // --------------------------------------------------------
    // COPPE GELATO
    // --------------------------------------------------------
    {
      id: "gelato",
      name: "COPPE GELATO",
      note: "Panna +€ 0.50 · Gelato +€ 1.00",
      items: [
        { name: "Coppa Danemark",   desc: "Gelato alla vaniglia, topping al cioccolato, panna",              price: "6.00" },
        { name: "Coppa Arlecchino", desc: "Gelato alla frutta, topping ai frutti di bosco, macedonia, panna", price: "7.00" },
        { name: "Coppa Meringata",  desc: "Gelato alla panna, meringhe, topping al cioccolato, panna",        price: "6.00" },
        { name: "Coppa Fantasy",    desc: "Gelato alla frutta, panna, topping ai frutti di bosco",            price: "6.00" },
        { name: "Frappè",           desc: "",                                                                 price: "5.00" },
        { name: "Mirtilli freschi", desc: "",                                                                 price: "6.00" }
      ]
    },

    // --------------------------------------------------------
    // BEVANDE
    // --------------------------------------------------------
    {
      id: "bevande",
      name: "BEVANDE",
      items: [
        { name: "Acqua 0,5 L",        desc: "",                                                    price: "2.00" },
        { name: "Acqua e sciroppi",    desc: "",                                                    price: "2.00" },
        { name: "Bibite in lattina",   desc: "",                                                    price: "4.00" },
        { name: "Bibite Lurisia",      desc: "Limonata, Chinotto, Aranciata amara",                 price: "4.00" },
        { name: "Bibite alla spina",   desc: "0,3 / 0,4 L",                                        price: "3.00 / 4.00" },
        { name: "Succhi di frutta",    desc: "",                                                    price: "6.00" },
        { name: "Spremuta d'arancia",  desc: "",                                                    price: "3.50" },
        { name: "Birra Calanda",       desc: "",                                                    price: "4.00" },
        { name: "Panachè",             desc: "0,3 / 0,5 L",                                        price: "3.50 / 6.00" }
      ]
    },

    // --------------------------------------------------------
    // BIRRE IN BOTTIGLIA
    // --------------------------------------------------------
    {
      id: "birre",
      name: "BIRRE IN BOTTIGLIA",
      items: [
        { name: "Corona",                      desc: "",                              price: "5.00" },
        { name: "Heineken",                    desc: "",                              price: "5.00" },
        { name: "Chimay",                      desc: "",                              price: "6.00" },
        { name: "1816 Livigno",                desc: "Pils, Weiss, IPA",             price: "7.00" },
        { name: "Paulaner Weizen",             desc: "",                              price: "6.00" },
        { name: "Moretti analcolica",          desc: "",                              price: "4.00" },
        { name: "Weiss analcolica Erdinger",   desc: "",                              price: "5.00" }
      ]
    },

    // --------------------------------------------------------
    // VINO A CALICE
    // --------------------------------------------------------
    {
      id: "vini-calice",
      name: "VINO A CALICE",
      items: [
        { name: "Sassella di Valtellina",  desc: "Rosso",     price: "6.00" },
        { name: "Sforzato di Valtellina",  desc: "Rosso",     price: "12.00" },
        { name: "Valpolicella Ripasso",    desc: "Rosso",     price: "8.00" },
        { name: "Amarone",                 desc: "Rosso",     price: "12.00" },
        { name: "Pinot Grigio",            desc: "Bianco",    price: "6.00" },
        { name: "Lugana",                  desc: "Bianco",    price: "7.00" },
        { name: "Sauvignon",               desc: "Bianco",    price: "7.00" },
        { name: "Chardonnay",              desc: "Bianco",    price: "7.00" },
        { name: "Franciacorta",            desc: "Bollicine", price: "8.00" },
        { name: "Prosecco",                desc: "Bollicine", price: "6.00" },
        { name: "Lagrein Rosé",            desc: "Rosato",    price: "7.00" }
      ]
    },

    // --------------------------------------------------------
    // GIN TONIC
    // --------------------------------------------------------
    {
      id: "gin-tonic",
      name: "GIN TONIC",
      items: [
        { name: "Gordon's London Dry",  desc: "", price: "8.00" },
        { name: "1816 Livigno",         desc: "", price: "12.00" },
        { name: "Adamus",               desc: "", price: "16.00" },
        { name: "Il Pioniere",          desc: "", price: "15.00" },
        { name: "Mandarin Shanghi",     desc: "", price: "15.00" },
        { name: "Hendrick's",           desc: "", price: "12.00" },
        { name: "Gin Mare",             desc: "", price: "12.00" },
        { name: "Bulldog",              desc: "", price: "10.00" },
        { name: "Bombay",               desc: "", price: "10.00" },
        { name: "Malfy Rosa",           desc: "", price: "13.50" },
        { name: "Hetsu",                desc: "", price: "14.00" },
        { name: "Cubical",              desc: "", price: "14.00" }
      ]
    },

    // --------------------------------------------------------
    // I CLASSICI
    // --------------------------------------------------------
    {
      id: "cocktails-classici",
      name: "I CLASSICI",
      items: [
        { name: "Hugo Spritz",          desc: "Prosecco, succo di lime, liquore al sambuco, soda, menta",                    price: "7.50" },
        { name: "Aperol Spritz",        desc: "Aperol, prosecco, soda",                                                      price: "7.50" },
        { name: "Negroni",              desc: "Gin, vermouth rosso, Campari",                                                price: "8.50" },
        { name: "Americano",            desc: "Vermouth rosso, Campari, soda",                                               price: "8.50" },
        { name: "Cuba Libre",           desc: "Rum bianco, succo di lime, cola",                                             price: "8.50" },
        { name: "Long Island Iced Tea", desc: "Vodka, tequila, gin, Cointreau, rum bianco, succo di limone, sciroppo, cola", price: "8.50" },
        { name: "Margarita",            desc: "Tequila, Triple Sec, succo di lime",                                          price: "8.50" },
        { name: "Moscow Mule",          desc: "Vodka, ginger beer, succo di lime",                                           price: "8.50" },
        { name: "Sex on the Beach",     desc: "Vodka, liquore alla pesca, succo d'arancia, sciroppo di cranberry",           price: "8.50" },
        { name: "Espresso Martini",     desc: "Caffè, vodka, Kahlúa, sciroppo di zucchero",                                  price: "8.50" }
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
          desc: "Taneda, Braulio, vodka, sciroppo di zucchero, succo di lime, Sprite",
          price: "11.00"
        },
        {
          name: "Jager Grape",
          desc: "Jägermeister, soda al pompelmo, spremuta d'arancia",
          price: "11.00"
        },
        {
          name: "Taneda Spritz",
          desc: "Taneda, prosecco, soda",
          price: "11.00"
        },
        {
          name: "Caipiroska alla fragola",
          desc: "Vodka, liquore alle fragole, lime, fragole, sciroppo di zucchero",
          price: "11.00"
        },
        {
          name: "Sour a scelta",
          desc: "Base alcolica a scelta, zucchero, foamer",
          price: "11.00"
        },
        {
          name: "Cuban Mojito",
          desc: "Rum Havana 3, succo di lime, sciroppo di zucchero, menta, soda",
          price: "11.00"
        },
        {
          name: "Tequila Sunrise",
          desc: "Tequila, succo d'arancia, granatina",
          price: "11.00"
        }
      ]
    },

    // --------------------------------------------------------
    // ANALCOLICI
    // --------------------------------------------------------
    {
      id: "analcolici",
      name: "ANALCOLICI",
      items: [
        { name: "Tramonto",           desc: "Succo di ananas e arancia, granatina",             price: "7.00" },
        { name: "Biondo",             desc: "Succo di arancia e limone, pompelmo",               price: "7.00" },
        { name: "Shake on the Peach", desc: "Cranberry, tè alla pesca, succo d'arancia",         price: "7.00" }
      ]
    },

    // --------------------------------------------------------
    // AMARI
    // --------------------------------------------------------
    {
      id: "amari",
      name: "AMARI",
      items: [
        { name: "Braulio",          desc: "", price: "5.00" },
        { name: "Braulio Riserva",  desc: "", price: "6.00" },
        { name: "Brancamenta",      desc: "", price: "4.00" },
        { name: "Fernet Branca",    desc: "", price: "4.00" },
        { name: "Cynar",            desc: "", price: "4.00" },
        { name: "Ramazzotti",       desc: "", price: "4.00" },
        { name: "Averna",           desc: "", price: "4.00" },
        { name: "Montenegro",       desc: "", price: "4.00" },
        { name: "Jägermeister",     desc: "", price: "4.00" },
        { name: "Disaronno",        desc: "", price: "4.00" },
        { name: "Limoncello",       desc: "", price: "4.00" },
        { name: "Amaro del Capo",   desc: "", price: "5.00" }
      ]
    },

    // --------------------------------------------------------
    // BRANDY
    // --------------------------------------------------------
    {
      id: "brandy",
      name: "BRANDY",
      items: [
        { name: "Vecchia Romagna", desc: "", price: "4.00" },
        { name: "Fundador",        desc: "", price: "5.00" }
      ]
    },

    // --------------------------------------------------------
    // COGNAC
    // --------------------------------------------------------
    {
      id: "cognac",
      name: "COGNAC",
      items: [
        { name: "Courvoisier",      desc: "", price: "6.00" },
        { name: "Remy Martin VSOP", desc: "", price: "8.00" }
      ]
    },

    // --------------------------------------------------------
    // RUM
    // --------------------------------------------------------
    {
      id: "rum",
      name: "RUM",
      items: [
        { name: "Zacapa 23 anni",      desc: "", price: "10.00" },
        { name: "Havana 7",            desc: "", price: "6.00" },
        { name: "Diplomatico Añejo",   desc: "", price: "7.00" }
      ]
    },

    // --------------------------------------------------------
    // VODKA
    // --------------------------------------------------------
    {
      id: "vodka",
      name: "VODKA",
      items: [
        { name: "Sky",       desc: "", price: "4.00" },
        { name: "Belvedere", desc: "", price: "7.00" },
        { name: "Beluga",    desc: "", price: "8.00" }
      ]
    },

    // --------------------------------------------------------
    // BOURBON
    // --------------------------------------------------------
    {
      id: "bourbon",
      name: "BOURBON",
      items: [
        { name: "Wild Turkey", desc: "", price: "6.00" },
        { name: "Long Branch", desc: "", price: "7.00" }
      ]
    },

    // --------------------------------------------------------
    // IRISH
    // --------------------------------------------------------
    {
      id: "irish",
      name: "IRISH",
      items: [
        { name: "Jameson", desc: "", price: "5.00" }
      ]
    },

    // --------------------------------------------------------
    // BLENDED SCOTCH
    // --------------------------------------------------------
    {
      id: "blended-scotch",
      name: "BLENDED SCOTCH",
      items: [
        { name: "Johnnie Walker Red Label", desc: "", price: "5.00" },
        { name: "Chivas Regal",             desc: "", price: "6.00" },
        { name: "Ballantine's",             desc: "", price: "6.00" }
      ]
    },

    // --------------------------------------------------------
    // SCOTCH SINGLE MALT
    // --------------------------------------------------------
    {
      id: "single-malt",
      name: "SCOTCH SINGLE MALT",
      items: [
        { name: "The Balvenie", desc: "", price: "6.00" },
        { name: "Dimple",       desc: "", price: "7.00" }
      ]
    },

    // --------------------------------------------------------
    // SCOTCH TORBATO
    // --------------------------------------------------------
    {
      id: "torbato",
      name: "SCOTCH TORBATO",
      items: [
        { name: "Caol Ila 12 anni", desc: "", price: "8.00" }
      ]
    },

    // --------------------------------------------------------
    // VERMOUTH
    // --------------------------------------------------------
    {
      id: "vermouth",
      name: "VERMOUTH",
      items: [
        { name: "Carpano Rosso", desc: "", price: "5.00" },
        { name: "Martini Bianco", desc: "", price: "5.00" },
        { name: "Martini Dry",    desc: "", price: "5.00" }
      ]
    },

    // --------------------------------------------------------
    // TENNESSEE
    // --------------------------------------------------------
    {
      id: "tennessee",
      name: "TENNESSEE",
      items: [
        { name: "Jack Daniel's", desc: "", price: "5.00" }
      ]
    },

    // --------------------------------------------------------
    // GRAPPE
    // --------------------------------------------------------
    {
      id: "grappe",
      name: "GRAPPE",
      items: [
        { name: "Williams",                  desc: "", price: "4.00" },
        { name: "Mirtillo",                  desc: "", price: "4.00" },
        { name: "La Trentina bianca",        desc: "", price: "5.00" },
        { name: "La Trentina barricata",     desc: "", price: "5.00" },
        { name: "Anfora",                    desc: "", price: "6.00" },
        { name: "Moscato",                   desc: "", price: "6.00" },
        { name: "18 Lune",                   desc: "", price: "6.00" },
        { name: "Chardonnay",                desc: "", price: "6.00" },
        { name: "Gewurztraminer",            desc: "", price: "7.00" },
        { name: "18 Lune botte Porto",       desc: "", price: "7.00" },
        { name: "18 Lune botte Whisky",      desc: "", price: "7.00" },
        { name: "18 Lune botte Rum",         desc: "", price: "7.00" },
        { name: "Amarone",                   desc: "", price: "7.00" },
        { name: "Tempo bianca",              desc: "", price: "7.00" },
        { name: "Tempo barricata",           desc: "", price: "7.00" },
        { name: "Al Vach",                   desc: "", price: "7.00" },
        { name: "Sforzato bianca",           desc: "", price: "8.00" },
        { name: "Sforzato barricata",        desc: "", price: "8.00" },
        { name: "Mela verde",                desc: "", price: "9.00" },
        { name: "Nebbiolo",                  desc: "", price: "10.00" },
        { name: "Trinidad Riserva",          desc: "", price: "13.00" }
      ]
    }

  ]
};