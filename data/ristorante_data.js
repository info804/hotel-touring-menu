/**
 * ============================================================
 *  TABELLA RISTORANTE — Hotel Touring Livigno
 *  Modifica nome, desc, price e allergens di ogni piatto.
 *  allergens: codici numerici EU (es. "1 7 10")
 * ============================================================
 */

const RISTORANTE_DATA = {
  title: "Ristorante",
  subtitle: "Specialità della cucina Valtellinese e piatti di montagna",

  categories: [

    // --------------------------------------------------------
    // ANTIPASTI
    // --------------------------------------------------------
    {
      id: "antipasti",
      name: "ANTIPASTI",
      items: [
        {
          name: "Il nostro tagliere di salumi e formaggi con giardiniera fresca",
          desc: "",
          allergens: "7 9 10 12",
          price: "18.00"
        },
        {
          name: "Sciatt Valtellinesi su letto d'insalata e vinaigrette all'aceto di mele",
          desc: "",
          allergens: "1 5 7 10",
          price: "12.00"
        },
        {
          name: "Fiocco di prosciutto di Parma con burrata di bufala",
          desc: "",
          allergens: "7",
          price: "19.00"
        },
        {
          name: "Tagliere di formaggi locali accompagnati da composte di frutta",
          desc: "",
          allergens: "7 10",
          price: "17.00"
        },
        {
          name: "Bruschetta all'Italiana",
          desc: "",
          allergens: "1",
          price: "12.00"
        },
        {
          name: "Slinziga di cervo con funghi porcini sott'olio e crostini di pane",
          desc: "",
          allergens: "1 5 7",
          price: "15.00"
        },
        {
          name: "Bresaola Livignasca con rucola e grana",
          desc: "",
          allergens: "7",
          price: "22.00"
        },
        {
          name: "Carpaccio di scottona con sedano, scaglie di grana e pomodorini",
          desc: "",
          allergens: "7 9",
          price: "16.00"
        }
      ]
    },

    // --------------------------------------------------------
    // PRIMI PIATTI
    // --------------------------------------------------------
    {
      id: "primi",
      name: "PRIMI PIATTI",
      items: [
        {
          name: "Pizzoccheri Valtellinesi fatti a mano con Casera DOP",
          desc: "",
          allergens: "1 3 5 7",
          price: "16.00"
        },
        {
          name: "Tagliolini freschi ai funghi porcini con lamelle di tartufo estivo",
          desc: "",
          allergens: "1 3 5 7 9 12",
          price: "18.00"
        },
        {
          name: "Rustici di grano saraceno al capriolo e ricco sugo",
          desc: "",
          allergens: "1 3 5 7 9 12",
          price: "17.00"
        },
        {
          name: "Risotto cremoso al caprino con dolci note di pera e speck croccante",
          desc: "",
          allergens: "7 9 12",
          price: "20.00"
        },
        {
          name: "Spaghetti alla carbonara con pecorino romano e guanciale",
          desc: "",
          allergens: "1 3 5 7",
          price: "14.00"
        },
        {
          name: "Spaghettoni di Gragnano con scampi e pomodorini",
          desc: "",
          allergens: "1 2 4 5 7",
          price: "22.00"
        },
        {
          name: "Lasagne della tradizione romagnola",
          desc: "",
          allergens: "1 3 7 9 12",
          price: "14.00"
        }
      ]
    },

    // --------------------------------------------------------
    // ZUPPE
    // --------------------------------------------------------
    {
      id: "zuppe",
      name: "ZUPPE",
      items: [
        {
          name: "Minestrone di verdure fresco con croccanti crostini di pane",
          desc: "",
          allergens: "1 9",
          price: "12.00"
        },
        {
          name: "Crema di pomodoro con soffice fiocco di panna",
          desc: "",
          allergens: "1 7",
          price: "10.00"
        }
      ]
    },

    // --------------------------------------------------------
    // SECONDI PIATTI
    // --------------------------------------------------------
    {
      id: "secondi",
      name: "SECONDI PIATTI",
      items: [
        {
          name: "Filetto di manzo alla griglia / ai funghi porcini",
          desc: "",
          allergens: "1 7 9 12",
          price: "32.00 / 36.00"
        },
        {
          name: "Rognoncino di vitello trifolato, servito con crostone di polenta",
          desc: "",
          allergens: "1 7 9 12",
          price: "18.00"
        },
        {
          name: "Tzigoiner Valtellinese con patate saltate e verdure grigliate",
          desc: "",
          allergens: "7",
          price: "22.00"
        },
        {
          name: "Piatto del montanaro: gorgonzola, polenta, uovo e speck croccante",
          desc: "",
          allergens: "3 7",
          price: "16.00"
        },
        {
          name: "Filetto di trota di montagna profumato alle erbe alpine",
          desc: "",
          allergens: "4 7",
          price: "22.00"
        },
        {
          name: "Cotoletta di vitello alla milanese",
          desc: "",
          allergens: "1 3 5",
          price: "32.00"
        },
        {
          name: "Costolette d'agnello alla scottadito",
          desc: "",
          allergens: "5",
          price: "28.00"
        },
        {
          name: "Suprema di pollo alla griglia",
          desc: "",
          allergens: "5",
          price: "17.00"
        },
        {
          name: "Salmì di cervo accompagnato da polenta taragna",
          desc: "",
          allergens: "1 7 9 12",
          price: "22.00"
        },
        {
          name: "Tagliata di manzo con rucola e scaglie di grana",
          desc: "",
          allergens: "5 7",
          price: "25.00"
        },
        {
          name: "Misto di verdure di stagione con tomino grigliato",
          desc: "",
          allergens: "",
          price: "17.00"
        }
      ]
    },

    // --------------------------------------------------------
    // PER I PIÙ PICCOLI
    // --------------------------------------------------------
    {
      id: "bambini",
      name: "PER I PIÙ PICCOLI",
      note: "Possibile porzione adulto +€ 4.00",
      items: [
        {
          name: "Pasta al pomodoro / ragù alla bolognese / pesto genovese",
          desc: "",
          allergens: "1 7 8 9 12",
          price: "8.00"
        },
        {
          name: "Passato di verdure con crostini",
          desc: "",
          allergens: "1 9",
          price: "8.00"
        },
        {
          name: "Lasagne della tradizione romagnola",
          desc: "",
          allergens: "1 3 7 9 12",
          price: "10.00"
        },
        {
          name: "Tzigoiner con patatine fritte",
          desc: "",
          allergens: "1",
          price: "12.00"
        },
        {
          name: "Cotoletta di vitello alla milanese con patatine fritte",
          desc: "",
          allergens: "1 3",
          price: "12.00"
        },
        {
          name: "Paillard di vitello con pomodorini",
          desc: "",
          allergens: "",
          price: "12.00"
        },
        {
          name: "Wurstel alla griglia con patatine fritte",
          desc: "",
          allergens: "1",
          price: "10.00"
        }
      ]
    },

    // --------------------------------------------------------
    // INSALATE
    // --------------------------------------------------------
    {
      id: "insalate",
      name: "INSALATE",
      items: [
        {
          name: "Insalata verde",
          desc: "",
          allergens: "",
          price: "6.00"
        },
        {
          name: "Insalata mista",
          desc: "Insalata, pomodori, cetrioli, carote e finocchi",
          allergens: "",
          price: "7.00"
        },
        {
          name: "Insalata cipolle e pomodoro",
          desc: "",
          allergens: "",
          price: "6.00"
        },
        {
          name: "Insalata Caprese",
          desc: "Pomodoro e mozzarella di bufala e basilico",
          allergens: "7",
          price: "12.00"
        },
        {
          name: "Insalata Caesar",
          desc: "Misticanza, olive taggiasche, pomodorini, petto di pollo, scaglie di grana, finocchi",
          allergens: "1 7 10",
          price: "12.00"
        },
        {
          name: "Insalata Pescatora",
          desc: "Insalata verde, pomodorini, acciughe, capperi, tonno",
          allergens: "4",
          price: "14.00"
        },
        {
          name: "Insalata Greca",
          desc: "Insalata verde, pomodorini, cetrioli, olive verdi, feta",
          allergens: "7",
          price: "14.00"
        },
        {
          name: "Insalata la Fiordilatte",
          desc: "Insalata verde, pomodorini, mozzarelline e scaglie di grana",
          allergens: "7",
          price: "12.00"
        },
        {
          name: "Insalata l'Atomica",
          desc: "Insalata verde, tonno, mozzarelline, mais, peperoni, uovo sodo, cetrioli",
          allergens: "3 4 7",
          price: "15.00"
        }
      ]
    },

    // --------------------------------------------------------
    // CONTORNI
    // --------------------------------------------------------
    {
      id: "contorni",
      name: "CONTORNI",
      items: [
        {
          name: "Polenta taragna",
          desc: "",
          allergens: "7",
          price: "6.00"
        },
        {
          name: "Patatine fritte",
          desc: "",
          allergens: "1",
          price: "7.00"
        },
        {
          name: "Patate al forno",
          desc: "",
          allergens: "1",
          price: "6.00"
        },
        {
          name: "Verdure alla griglia",
          desc: "",
          allergens: "",
          price: "6.00"
        },
        {
          name: "Funghi porcini di selva trifolati",
          desc: "",
          allergens: "7",
          price: "12.00"
        }
      ]
    },

    // --------------------------------------------------------
    // BEVANDE
    // --------------------------------------------------------
    {
      id: "drinks",
      name: "BEVANDE",
      items: [
        { name: "Acqua 0,5 L",                        desc: "",                        allergens: "", price: "2.00" },
        { name: "Acqua 0,75 L",                       desc: "",                        allergens: "", price: "3.00" },
        { name: "Bibite 0,3 L",                       desc: "",                        allergens: "", price: "3.00" },
        { name: "Bibite 0,4 L",                       desc: "",                        allergens: "", price: "4.00" },
        { name: "Bibite in lattina",                  desc: "",                        allergens: "", price: "3.50" },
        { name: "Bibite in vetro",                    desc: "",                        allergens: "", price: "4.00" },
        { name: "Succhi di frutta",                   desc: "",                        allergens: "", price: "3.50" },
        { name: "Spremuta d'arancia",                 desc: "",                        allergens: "", price: "4.00" },
        { name: "Birra alla spina Calanda 0,3 L",     desc: "",                        allergens: "", price: "3.50" },
        { name: "Birra alla spina Calanda 0,5 L",     desc: "",                        allergens: "", price: "6.00" },
        { name: "Radler / Panache 0,3 L",             desc: "",                        allergens: "", price: "3.50" },
        { name: "Radler / Panache 0,5 L",             desc: "",                        allergens: "", price: "6.00" },
        { name: "1816 Livigno",                       desc: "Birra artigianale locale", allergens: "", price: "8.00" },
        { name: "Weizen Paulaner",                    desc: "",                        allergens: "", price: "6.00" },
        { name: "Heineken",                           desc: "",                        allergens: "", price: "4.00" },
        { name: "Corona",                             desc: "",                        allergens: "", price: "4.00" },
        { name: "Chimay",                             desc: "",                        allergens: "", price: "4.00" },
        { name: "Weiss analcolica",                   desc: "",                        allergens: "", price: "4.00" },
        { name: "Moretti analcolica",                 desc: "",                        allergens: "", price: "4.00" }
      ]
    }

  ]
};
