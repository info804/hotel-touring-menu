/**
 * ============================================================
 * MENÙ DEGUSTAZIONE — Hotel Touring Livigno · Inverno 2026
 * Menù a prezzo fisso. dishes: name, desc, allergens.
 * Traduzioni EN/DE in data/i18n/speciali.js
 * ============================================================
 */

const SPECIALI_DATA = {
  valtellinese: {
    title: "Degustazione Valtellina",
    tabLabel: "Valtellina",
    fixedPrice: "49,00",
    priceNote: "a persona",
    includes: "",
    courses: [
      {
        name: "Antipasto",
        dishes: [
          { name: "Bresaola di Livigno con lamelle di Casera servita con sciatt", desc: "", allergens: "1-5-7-10-12" }
        ]
      },
      {
        name: "Primo",
        dishes: [
          { name: "Pizzoccheri fatti in casa alla valtellinese", desc: "", allergens: "1-3-5-7" }
        ]
      },
      {
        name: "Secondo",
        dishes: [
          { name: "Tzigoiner con verdure grigliate e patate al forno", desc: "", allergens: "5-7" }
        ]
      },
      {
        name: "Dessert",
        dishes: [
          { name: "Sorbetto al Braulio", desc: "", allergens: "7" }
        ]
      }
    ]
  },
  selvaggina: {
    title: "Degustazione Selvaggina",
    tabLabel: "Selvaggina",
    fixedPrice: "55,00",
    priceNote: "a persona",
    includes: "",
    courses: [
      {
        name: "Antipasto",
        dishes: [
          { name: "Slinzega di cervo con burro al ginepro e funghi porcini sott'olio", desc: "", allergens: "1-5-7" }
        ]
      },
      {
        name: "Primo",
        dishes: [
          { name: "Rustici al capriolo con il suo sugo", desc: "", allergens: "1-3-5-7-9-12" }
        ]
      },
      {
        name: "Secondo",
        dishes: [
          { name: "Salmì di cervo con polenta taragna", desc: "", allergens: "1-7-9-12" }
        ]
      },
      {
        name: "Dessert",
        dishes: [
          { name: "Gelato alla Taneda", desc: "", allergens: "7" }
        ]
      }
    ]
  }
};
