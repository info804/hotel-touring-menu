/**
 * ============================================================
 *  TABELLA PIZZERIA — Hotel Touring Livigno
 *  Modifica nome, desc, price e allergens di ogni pizza.
 * ============================================================
 */

const PIZZERIA_DATA = {
  title: "Pizzeria",
  subtitle: "Per ogni ingrediente aggiuntivo € 1.00",

  categories: [

    // --------------------------------------------------------
    // PIZZE CLASSICHE
    // --------------------------------------------------------
    {
      id: "classiche",
      name: "PIZZE CLASSICHE",
      items: [
        {
          name: "Pizza Marinara",
          desc: "Pomodoro, aglio, origano",
          allergens: "1",
          price: "7.00"
        },
        {
          name: "Pizza Margherita",
          desc: "Pomodoro, mozzarella",
          allergens: "1 7",
          price: "8.00"
        },
        {
          name: "Pizza ai funghi",
          desc: "Pomodoro, mozzarella e Champignon",
          allergens: "1 7",
          price: "10.00"
        },
        {
          name: "Pizza prosciutto e funghi",
          desc: "Pomodoro, mozzarella, prosciutto, funghi",
          allergens: "1 7",
          price: "11.00"
        },
        {
          name: "Pizza al prosciutto",
          desc: "Pomodoro, mozzarella, prosciutto",
          allergens: "1 7",
          price: "10.00"
        },
        {
          name: "Diavola",
          desc: "Pomodoro, mozzarella, salamino piccante",
          allergens: "1 7",
          price: "10.00"
        },
        {
          name: "Pizza 4 formaggi",
          desc: "Mozzarella, gorgonzola, parmigiano, emmenthal",
          allergens: "1 7",
          price: "10.50"
        },
        {
          name: "Pizza 4 stagioni",
          desc: "Pomodoro, mozzarella, prosciutto, funghi, carciofi, olive",
          allergens: "1 7",
          price: "11.00"
        },
        {
          name: "Pizza Capricciosa",
          desc: "Pomodoro, mozzarella, cotto, funghi, carciofi, olive, capperi",
          allergens: "1 7",
          price: "11.00"
        },
        {
          name: "Pizza tonno e cipolla",
          desc: "Pomodoro, mozzarella, tonno e cipolla",
          allergens: "1 7 4",
          price: "10.00"
        }
      ]
    },

    // --------------------------------------------------------
    // PIZZE FORNARINE
    // --------------------------------------------------------
    {
      id: "fornarine",
      name: "PIZZE FORNARINE",
      items: [
        {
          name: "Fornarina Classica",
          desc: "Classica",
          allergens: "1 7",
          price: "6.00"
        },
        {
          name: "Fornarina Emiliana",
          desc: "Emiliana, crudo in uscita",
          allergens: "1 7",
          price: "8.50"
        },
        {
          name: "Fornarina Light",
          desc: "Pomodorini, rucola in uscita",
          allergens: "1 7",
          price: "8.50"
        }
      ]
    },

    // --------------------------------------------------------
    // PIZZE SEMPLICI
    // --------------------------------------------------------
    {
      id: "semplici",
      name: "PIZZE SEMPLICI",
      items: [
        {
          name: "Pizza Wurstel",
          desc: "Pomodoro, mozzarella, wurstel",
          allergens: "1 7 6",
          price: "9.50"
        },
        {
          name: "Pizza Patatine",
          desc: "Pomodoro, mozzarella, patatine fritte",
          allergens: "1 7",
          price: "9.50"
        },
        {
          name: "Pizza Bresaola",
          desc: "Pomodoro, mozzarella, bresaola in uscita",
          allergens: "1 7",
          price: "10.00"
        },
        {
          name: "Pizza Gorgonzola",
          desc: "Pomodoro, mozzarella, gorgonzola",
          allergens: "1 7",
          price: "9.50"
        },
        {
          name: "Pizza Speck",
          desc: "Pomodoro, mozzarella, speck in uscita",
          allergens: "1 7",
          price: "10.00"
        }
      ]
    },

    // --------------------------------------------------------
    // CALZONE
    // --------------------------------------------------------
    {
      id: "calzone",
      name: "CALZONE",
      items: [
        {
          name: "Calzone Liscio",
          desc: "Pomodoro, mozzarella, prosciutto",
          allergens: "1 7",
          price: "10.00"
        },
        {
          name: "Calzone Farcito",
          desc: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofini",
          allergens: "1 7 3",
          price: "11.00"
        }
      ]
    },

    // --------------------------------------------------------
    // PIZZE DELL'ORTO
    // --------------------------------------------------------
    {
      id: "orto",
      name: "PIZZE DELL'ORTO",
      items: [
        {
          name: "Pizza Vegetariana",
          desc: "Pomodoro, mozzarella, peperoni, melanzane, zucchine",
          allergens: "1 7",
          price: "11.00",
          tags: ["veg"]
        },
        {
          name: "Pizza Primavera",
          desc: "Pomodoro, mozzarella, rucola, pomodorini e grana",
          allergens: "1 7",
          price: "10.00",
          tags: ["veg"]
        },
        {
          name: "Pizza Italia",
          desc: "Pomodoro, mozzarella di bufala, pomodorini e basilico",
          allergens: "1 7",
          price: "13.00",
          tags: ["veg"]
        }
      ]
    },

    // --------------------------------------------------------
    // PIZZE CITTADINE
    // --------------------------------------------------------
    {
      id: "cittadine",
      name: "PIZZE CITTADINE",
      items: [
        {
          name: "Pizza Napoletana",
          desc: "Pomodoro, mozzarella, acciughe e origano",
          allergens: "1 7 4",
          price: "10.00"
        },
        {
          name: "Pizza Pugliese",
          desc: "Pomodoro, mozzarella, cipolla e origano",
          allergens: "1 7",
          price: "9.00"
        },
        {
          name: "Pizza Siciliana",
          desc: "Mozzarella, olive, tonno, pomodorini in uscita",
          allergens: "1 7 4",
          price: "11.00"
        },
        {
          name: "Pizza Trentina",
          desc: "Pomodoro, mozzarella, gorgonzola, speck e noci",
          allergens: "1 7 8",
          price: "12.00"
        },
        {
          name: "Pizza Parma",
          desc: "Pomodoro, mozzarella, prosciutto crudo e grana in uscita",
          allergens: "1 7",
          price: "12.00"
        },
        {
          name: "Pizza Californiana",
          desc: "Pomodoro, mozzarella, wurstel, patatine fritte",
          allergens: "1 7 6",
          price: "11.00"
        }
      ]
    },

    // --------------------------------------------------------
    // PIZZE SPECIALI
    // --------------------------------------------------------
    {
      id: "speciali",
      name: "PIZZE SPECIALI",
      items: [
        {
          name: "Pizza Vulcano",
          desc: "Pomodoro, mozzarella, salsiccia, cipolla e peperoncino",
          allergens: "1 7 12",
          price: "12.00"
        },
        {
          name: "Pizza Tedesca",
          desc: "Pomodoro, mozzarella, prosciutto cotto, wurstel, uovo, funghi",
          allergens: "3 1 7 6",
          price: "13.00"
        },
        {
          name: "Pizza Messicana",
          desc: "Pomodoro, mozzarella, salame piccante, peperoni, cipolla",
          allergens: "1 7",
          price: "13.00"
        },
        {
          name: "Pizza Europa",
          desc: "Pomodoro, mozzarella, funghi porcini, gorgonzola, rucola e scaglie grana",
          allergens: "1 7",
          price: "13.00"
        },
        {
          name: "Pizza Touring",
          desc: "Pomodoro, mozzarella, bresaola, funghi porcini, scaglie di grana, rucola",
          allergens: "1 7",
          price: "13.00"
        },
        {
          name: "Pizza Burratina",
          desc: "Pomodoro, mozzarella, burrata e crudo",
          allergens: "1 7",
          price: "14.00"
        },
        {
          name: "Zola e mele",
          desc: "Mozzarella, gorgonzola e mele",
          allergens: "1 8 7",
          price: "11.00"
        },
        {
          name: "Gustosa",
          desc: "Pomodoro, mozzarella, crema ai 4 formaggi, finferli",
          allergens: "1 7",
          price: "13.00"
        },
        {
          name: "Boscaiola",
          desc: "Pomodoro, mozzarella, salsiccia, finferli",
          allergens: "1 7",
          price: "13.00"
        }
      ]
    }

  ]
};
