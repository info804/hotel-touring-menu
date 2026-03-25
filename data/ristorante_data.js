/**
 * ============================================================
 *  TABELLA RISTORANTE — Hotel Touring Livigno
 *  Modifica nome, desc, price e allergens di ogni piatto.
 *  allergens: codici numerici EU (es. "1 7 10 12")
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
          name: "Il nostro tagliere di Salumi e formaggi TAST",
          desc: "Con giardiniera fresca, bresaola, speck, pancetta, salam da baita, slinzega, formaggio Casera e Scimudin",
          allergens: "9 7 10 12",
          price: "17.00"
        },
        {
          name: "Bresaola punta d'anca 100% italiano",
          desc: "Con rucola e scaglie di Bitto DOP",
          allergens: "7",
          price: "15.00"
        },
        {
          name: "Sciatt Valtellinesi",
          desc: "Su letto di insalata, vinaigrette all'aceto di mele",
          allergens: "1 7 5 10",
          price: "12.00"
        },
        {
          name: "Battuta al coltello di manzo condita",
          desc: "Tuorlo e velette di mandorle tostate",
          allergens: "3 1 8",
          price: "16.00"
        },
        {
          name: "Tagliere di formaggi locali",
          desc: "Accompagnati da composte (Scimudin, Casera, Latteria gold, Caprino)",
          allergens: "7 10",
          price: "15.00"
        },
        {
          name: "Tataki di capriolo",
          desc: "Con funghi misti all'olio",
          allergens: "1 5",
          price: "22.00"
        },
        {
          name: "Bruschetta all'italiana",
          desc: "",
          allergens: "1",
          price: "12.00"
        },
        {
          name: "Tartare di branzino",
          desc: "Alla mela verde",
          allergens: "1 4",
          price: "22.00"
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
          name: "Pasta al pomodoro / ragù alla bolognese / pesto genovese",
          desc: "",
          allergens: "1 9 12 7 8",
          price: "12.00"
        },
        {
          name: "Pizzoccheri Valtellinesi",
          desc: "Fatti a mano al profumo d'erbe e Casera DOP",
          allergens: "1 7 3",
          price: "16.00"
        },
        {
          name: "Raviolacci di porcini",
          desc: "Con fonduta di Bitto",
          allergens: "1 3 7",
          price: "16.00"
        },
        {
          name: "Gnocchi di patate e zucchine e gamberi",
          desc: "",
          allergens: "1 2 3 4 7",
          price: "16.00"
        },
        {
          name: "Tagliatelle fatte in casa",
          desc: "Con funghi porcini, bacon e pomodorini",
          allergens: "1 3 7",
          price: "15.00"
        },
        {
          name: "Spaghetti alla carbonara",
          desc: "Con pecorino romano e guanciale",
          allergens: "1 3 7",
          price: "14.00"
        },
        {
          name: "Spatzle verdi allo speck croccante",
          desc: "",
          allergens: "1 3 7",
          price: "14.00"
        },
        {
          name: "Lasagne della tradizione Romagnola",
          desc: "",
          allergens: "1 3 7 9 12",
          price: "14.00"
        },
        {
          name: "Risotto alle erbe aromatiche",
          desc: "E sminuzzato di capriolo",
          allergens: "7 9 12",
          price: "20.00"
        },
        {
          name: "Risotto alla milanese con ossobuco di vitello",
          desc: "",
          allergens: "1 9 5 7 12",
          price: "22.00"
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
          name: "Costoletta d'agnello alla scottadito",
          desc: "Con patate al forno e verdure grigliate",
          allergens: "5",
          price: "28.00"
        },
        {
          name: "Salmì di Cervo con polenta taragna",
          desc: "",
          allergens: "7 9 12",
          price: "22.00"
        },
        {
          name: "Tzgoiner Valtellinese",
          desc: "Con patate saltate e verdure grigliate",
          allergens: "7",
          price: "22.00"
        },
        {
          name: "Piatto del montanaro",
          desc: "Gorgonzola, polenta, uovo e speck croccante",
          allergens: "7 3",
          price: "16.00"
        },
        {
          name: "Tagliata di manzo",
          desc: "Con funghi porcini di selva",
          allergens: "7",
          price: "27.00"
        },
        {
          name: "Filetto di manzo 220gr alla griglia",
          desc: "Con patate saltate e verdure grigliate oppure al pepe verde",
          allergens: "7 11 10 12",
          price: "30.00"
        },
        {
          name: "Cotoletta alla milanese 400gr",
          desc: "Con osso e patatine fritte",
          allergens: "1 3 5",
          price: "32.00"
        },
        {
          name: "Trota spinata alle erbe di montagna",
          desc: "Con patate al vapore",
          allergens: "4 7 1",
          price: "22.00"
        },
        {
          name: "Grigliata mista di carne",
          desc: "Con patatine fritte",
          allergens: "5",
          price: "29.00"
        }
      ]
    },

    // --------------------------------------------------------
    // MENÙ PER I PIÙ PICCOLI
    // --------------------------------------------------------
    {
      id: "bambini",
      name: "MENÙ PER I PIÙ PICCOLI",
      items: [
        {
          name: "Pasta al pomodoro / ragù alla bolognese / pesto genovese",
          desc: "",
          allergens: "1 9 12 7 8",
          price: "8.00 / 12.00"
        },
        {
          name: "Passato di verdure",
          desc: "",
          allergens: "9",
          price: "8.00"
        },
        {
          name: "Lasagne della tradizione romagnola",
          desc: "",
          allergens: "1 3 7 9 12",
          price: "10.00"
        },
        {
          name: "Cotoletta di vitello alla milanese",
          desc: "Con patatine fritte",
          allergens: "1 3 5",
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
          allergens: "5",
          price: "10.00"
        }
      ]
    },

    // --------------------------------------------------------
    // ZUPPE — SUOP
    // --------------------------------------------------------
    {
      id: "zuppe",
      name: "ZUPPE — SUOP",
      items: [
        {
          name: "Minestra d'orzo alla grigionese",
          desc: "",
          allergens: "1 7 9",
          price: "14.00"
        },
        {
          name: "Crema di pomodoro con fiocco di panna",
          desc: "",
          allergens: "7",
          price: "10.00"
        },
        {
          name: "Zuppa di cipolla in crosta di pasta sfoglia",
          desc: "Con sesamo",
          allergens: "1 3 7 11",
          price: "14.00"
        },
        {
          name: "Minestrone di verdure fresco",
          desc: "",
          allergens: "9",
          price: "10.00"
        },
        {
          name: "Vellutata di zucca",
          desc: "Con granella di amaretti",
          allergens: "1 8 9",
          price: "10.00"
        },
        {
          name: "Zuppa di Gulash",
          desc: "",
          allergens: "1 9 12",
          price: "14.00"
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
          name: "Insalata caprese",
          desc: "Pomodoro, mozzarella di bufala e basilico",
          allergens: "7",
          price: "12.00"
        },
        {
          name: "Insalata Caesar",
          desc: "Insalata, olive taggiasche, pomodorini, petto di pollo, parmigiano, finocchi",
          allergens: "1 7 10",
          price: "12.00"
        },
        {
          name: "Insalata Nizzarda",
          desc: "Insalata, uovo, pomodorini, fagiolini, patate, tonno, olive taggiasche, acciughe",
          allergens: "3 4",
          price: "16.00"
        }
      ]
    },

    // --------------------------------------------------------
    // CONTORNI — SIDES
    // --------------------------------------------------------
    {
      id: "contorni",
      name: "CONTORNI — SIDES",
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
          allergens: "",
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
    // DRINKS
    // --------------------------------------------------------
    {
      id: "drinks",
      name: "DRINKS",
      items: [
        { name: "Acqua 0,50 L", desc: "", allergens: "", price: "2.00" },
        { name: "Acqua 0,75 L", desc: "", allergens: "", price: "3.00" },
        { name: "Bibite in lattina", desc: "Tè pesca, Tè limone, Lemonsoda", allergens: "", price: "3.50" },
        { name: "Bibite in vetro", desc: "Coca-Cola, Coca Zero, Fanta, Sprite, Lurisia", allergens: "", price: "4.00" },
        { name: "Succhi di frutta", desc: "Ace, Albicocca, Ananas, Arancia, Mela, Mirtilli, Pesca, Pera, Pompelmo", allergens: "", price: "3.50" },
        { name: "Spremuta d'arancia", desc: "", allergens: "", price: "4.00" },
        { name: "Birra alla spina piccola 0,3 L — Calanda", desc: "", allergens: "", price: "3.50" },
        { name: "Birra alla spina media 0,5 L — Calanda", desc: "", allergens: "", price: "6.00" },
        { name: "Radler / Panache 0,3 L", desc: "", allergens: "", price: "3.50" },
        { name: "Radler / Panache 0,5 L", desc: "", allergens: "", price: "6.00" },
        { name: "1816 Livigno — Weiss / IPA", desc: "Birra artigianale locale", allergens: "", price: "7.00" },
        { name: "Weizen Paulaner", desc: "", allergens: "", price: "6.00" },
        { name: "Heineken", desc: "", allergens: "", price: "4.00" },
        { name: "Corona", desc: "", allergens: "", price: "4.00" },
        { name: "Chimay", desc: "", allergens: "", price: "5.00" },
        { name: "Weiss analcolica", desc: "", allergens: "", price: "5.00" },
        { name: "Moretti analcolica", desc: "", allergens: "", price: "4.00" }
      ]
    }

  ]
};
