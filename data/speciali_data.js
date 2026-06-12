/**
 * ============================================================
 *  TABELLA MENÙ SPECIALI — Hotel Touring Livigno
 *  Menù degustazione a prezzo fisso.
 * ============================================================
 */

const SPECIALI_DATA = {

  /* --------------------------------------------------------
     MENU DEGUSTAZIONE VALTELLINESE
  -------------------------------------------------------- */
  valtellinese: {
    title: "Degustazione Valtellinese",
    tabLabel: "Valtellinese",
    fixedPrice: "49.00",
    priceNote: "a persona",
    includes: "",

    courses: [
      {
        name: "ANTIPASTO",
        dishes: [
          { name: "Bresaola di Livigno con lamelle di Casera servita con sciatt", desc: "" }
        ]
      },
      {
        name: "PRIMO PIATTO",
        dishes: [
          { name: "Pizzoccheri fatti in casa alla Valtellinese", desc: "" }
        ]
      },
      {
        name: "SECONDO PIATTO",
        dishes: [
          { name: "Tzigoiner con verdure grigliate e patate al forno", desc: "" }
        ]
      },
      {
        name: "DESSERT",
        dishes: [
          { name: "Sorbetto al Braulio", desc: "" }
        ]
      }
    ]
  },

  /* --------------------------------------------------------
     MENU SELVAGGINA
  -------------------------------------------------------- */
  selvaggina: {
    title: "Menù Selvaggina",
    tabLabel: "Selvaggina",
    fixedPrice: "55.00",
    priceNote: "a persona",
    includes: "",

    courses: [
      {
        name: "ANTIPASTO",
        dishes: [
          { name: "Slinziga di cervo con burro al ginepro e funghi porcini sott'olio", desc: "" }
        ]
      },
      {
        name: "PRIMO PIATTO",
        dishes: [
          { name: "Rustici fatti a mano al ragù di capriolo", desc: "" }
        ]
      },
      {
        name: "SECONDO PIATTO",
        dishes: [
          { name: "Salmì di cervo con polenta taragna", desc: "" }
        ]
      },
      {
        name: "DESSERT",
        dishes: [
          { name: "Gelato alla Taneda", desc: "" }
        ]
      }
    ]
  }

}; // fine SPECIALI_DATA
