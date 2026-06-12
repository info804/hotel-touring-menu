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
          name: "Marinara",
          desc: "Pomodoro, aglio, origano",
          allergens: "1",
          price: "7.00"
        },
        {
          name: "Margherita",
          desc: "Pomodoro, mozzarella",
          allergens: "1 7",
          price: "8.00"
        },
        {
          name: "Ai Funghi",
          desc: "Pomodoro, mozzarella e funghi",
          allergens: "1 7",
          price: "9.00"
        },
        {
          name: "Prosciutto e Funghi",
          desc: "Pomodoro, mozzarella, prosciutto, funghi",
          allergens: "1 7",
          price: "10.00"
        },
        {
          name: "Prosciutto",
          desc: "Pomodoro, mozzarella, prosciutto",
          allergens: "1 7",
          price: "9.00"
        },
        {
          name: "Diavola",
          desc: "Pomodoro, mozzarella, salamino piccante",
          allergens: "1 7",
          price: "9.00"
        },
        {
          name: "4 Formaggi",
          desc: "Mozzarella, gorgonzola, parmigiano, emmenthal",
          allergens: "1 7",
          price: "10.00"
        },
        {
          name: "4 Stagioni",
          desc: "Pomodoro, mozzarella, prosciutto, funghi, carciofi, olive",
          allergens: "1 7",
          price: "11.00"
        },
        {
          name: "Capricciosa",
          desc: "Pomodoro, mozzarella, cotto, funghi, carciofi, olive, capperi",
          allergens: "1 7",
          price: "11.00"
        },
        {
          name: "Tonno e cipolla",
          desc: "Pomodoro, mozzarella, tonno e cipolla",
          allergens: "1 4 7",
          price: "9.50"
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
          name: "Classica",
          desc: "Classica",
          allergens: "1 7",
          price: "6.00"
        },
        {
          name: "Emiliana",
          desc: "Emiliana, crudo in uscita",
          allergens: "1 7",
          price: "7.50"
        },
        {
          name: "Light",
          desc: "Pomodorini, rucola in uscita",
          allergens: "1 7",
          price: "7.50"
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
          name: "Wurstel",
          desc: "Pomodoro, mozzarella, wurstel",
          allergens: "1 6 7",
          price: "9.00"
        },
        {
          name: "Patatine",
          desc: "Pomodoro, mozzarella, patatine fritte",
          allergens: "1 7",
          price: "9.00"
        },
        {
          name: "Bresaola",
          desc: "Pomodoro, mozzarella, bresaola in uscita",
          allergens: "1 7",
          price: "9.50"
        },
        {
          name: "Gorgonzola",
          desc: "Pomodoro, mozzarella, gorgonzola",
          allergens: "1 7",
          price: "9.00"
        },
        {
          name: "Speck",
          desc: "Pomodoro, mozzarella, speck in uscita",
          allergens: "1 7",
          price: "9.00"
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
          name: "Liscio",
          desc: "Pomodoro, mozzarella, prosciutto",
          allergens: "1 7",
          price: "9.50"
        },
        {
          name: "Farcito",
          desc: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofini",
          allergens: "1 3 7",
          price: "10.00"
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
          name: "Vulcano",
          desc: "Pomodoro, mozzarella, salsiccia, cipolla e peperoncino",
          allergens: "1 3 12",
          price: "11.00"
        },
        {
          name: "Tedesca",
          desc: "Pomodoro, mozzarella, prosciutto cotto, wurstel, uovo, funghi",
          allergens: "1 3 6 7",
          price: "12.00"
        },
        {
          name: "Messicana",
          desc: "Pomodoro, mozzarella, salame piccante, peperoni, cipolla",
          allergens: "1 7",
          price: "12.00"
        },
        {
          name: "Europa",
          desc: "Pomodoro, mozzarella, funghi porcini, gorgonzola, rucola e scaglie grana",
          allergens: "1 7",
          price: "12.00"
        },
        {
          name: "Touring",
          desc: "Pomodoro, mozzarella, bresaola, funghi porcini, scaglie di grana, rucola",
          allergens: "1 7",
          price: "12.00"
        },
        {
          name: "Burratina",
          desc: "Pomodoro, mozzarella, burrata e crudo",
          allergens: "1 7",
          price: "14.00"
        },
        {
          name: "Smeraldo",
          desc: "",
          allergens: "1 7",
          price: "15.00"
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
          name: "Vegetariana",
          desc: "Pomodoro, mozzarella, peperoni, melanzane, zucchine",
          allergens: "1 7",
          price: "11.00",
          tags: ["veg"]
        },
        {
          name: "Primavera",
          desc: "Pomodoro, mozzarella, rucola, pomodorini e grana",
          allergens: "1 7",
          price: "10.00",
          tags: ["veg"]
        },
        {
          name: "Italia",
          desc: "Pomodoro, mozzarella di bufala, pomodorini e basilico",
          allergens: "1 4 7",
          price: "12.00",
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
          name: "Napoletana",
          desc: "Pomodoro, mozzarella, acciughe e origano",
          allergens: "1 4 7",
          price: "9.00"
        },
        {
          name: "Pugliese",
          desc: "Pomodoro, mozzarella, cipolla e origano",
          allergens: "1 7",
          price: "9.00"
        },
        {
          name: "Siciliana",
          desc: "Mozzarella, olive, tonno, pomodorini in uscita",
          allergens: "1 4 7",
          price: "10.00"
        },
        {
          name: "Trentina",
          desc: "Pomodoro, mozzarella, gorgonzola, speck e noci",
          allergens: "1 7 8",
          price: "11.00"
        },
        {
          name: "Parma",
          desc: "Pomodoro, mozzarella, prosciutto crudo e grana in uscita",
          allergens: "1 7",
          price: "10.00"
        },
        {
          name: "California",
          desc: "Pomodoro, mozzarella, wurstel, patatine fritte",
          allergens: "1 6 7",
          price: "10.00"
        }
      ]
    }

  ]
};
