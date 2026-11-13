/**
 * ============================================================
 * PIZZERIA — Hotel Touring Livigno · Inverno 2026
 * Campi: name, desc, allergens (codici EU, es. "1-7"), price (come stampato, es. "7,50").
 * sub: titolo di sottogruppo, sulla prima voce del gruppo.
 * Le traduzioni EN/DE stanno in data/i18n/ (non modificare qui).
 * ============================================================
 */

const PIZZERIA_DATA = {
  title: "Pizzeria",
  subtitle: "Le nostre pizze",

  categories: [
    {
      id: "classiche",
      name: "Classiche",
      items: [
        { name: "Marinara", desc: "Pomodoro, aglio, origano", allergens: "1", price: "7" },
        { name: "Margherita", desc: "Pomodoro e mozzarella", allergens: "1-7", price: "8" },
        { name: "Prosciutto", desc: "Pomodoro, mozzarella e prosciutto", allergens: "1-7", price: "9" },
        { name: "Ai Funghi", desc: "Pomodoro, mozzarella e funghi", allergens: "1-7", price: "9" },
        { name: "Diavola", desc: "Pomodoro, mozzarella e salame piccante", allergens: "1-7", price: "9" },
        { name: "Tonno e Cipolla", desc: "Pomodoro, mozzarella, tonno e cipolla", allergens: "1-4-7", price: "9,50" },
        { name: "Prosciutto e Funghi", desc: "Pomodoro, mozzarella, prosciutto e funghi", allergens: "1-7", price: "10" },
        { name: "4 Formaggi", desc: "Mozzarella, gorgonzola, parmigiano ed Emmental", allergens: "1-7", price: "10" },
        { name: "4 Stagioni", desc: "Pomodoro, mozzarella, prosciutto, funghi, olive e carciofi", allergens: "1-7", price: "11" },
        { name: "Capricciosa", desc: "Pomodoro, mozzarella, prosciutto, funghi, olive, carciofi e capperi", allergens: "1-7", price: "11" },
      ]
    },
    {
      id: "fornarine",
      name: "Fornarine",
      items: [
        { name: "Classica", allergens: "1-7", price: "6" },
        { name: "Emiliana", desc: "Crudo in uscita", allergens: "1-7", price: "7,50" },
        { name: "Light", desc: "Pomodorini e rucola in uscita", allergens: "1-7", price: "7,50" },
      ]
    },
    {
      id: "semplici",
      name: "Semplici",
      items: [
        { name: "Wurstel", desc: "Pomodoro, mozzarella e wurstel", allergens: "1-6-7", price: "9" },
        { name: "Patatine", desc: "Pomodoro, mozzarella e patatine", allergens: "1-7", price: "9" },
        { name: "Gorgonzola", desc: "Pomodoro, mozzarella e gorgonzola", allergens: "1-7", price: "9" },
        { name: "Speck", desc: "Pomodoro, mozzarella e speck in uscita", allergens: "1-7", price: "9" },
        { name: "Bresaola", desc: "Pomodoro, mozzarella e bresaola in uscita", allergens: "1-7", price: "9,50" },
      ]
    },
    {
      id: "calzoni",
      name: "Calzoni",
      items: [
        { name: "Liscio", desc: "Pomodoro, mozzarella e prosciutto", allergens: "1-7", price: "9,50" },
        { name: "Farcito", desc: "Pomodoro, mozzarella, prosciutto, funghi e carciofi", allergens: "1-3-7", price: "10" },
      ]
    },
    {
      id: "speciali",
      name: "Speciali",
      items: [
        { name: "Vulcano", desc: "Pomodoro, mozzarella, salsiccia, cipolla e peperoncino", allergens: "1-7-12", price: "11" },
        { name: "Tedesca", desc: "Pomodoro, mozzarella, cotto, wurstel, uovo e funghi", allergens: "1-3-6-7", price: "12" },
        { name: "Messicana", desc: "Pomodoro, mozzarella, salame piccante, peperoni e cipolla", allergens: "1-7", price: "12" },
        { name: "Europa", desc: "Pomodoro, mozzarella, porcini, gorgonzola, rucola e grana", allergens: "1-7", price: "12" },
        { name: "Touring", desc: "Pomodoro, mozzarella, porcini, bresaola, rucola e grana", allergens: "1-7", price: "12" },
        { name: "Burratina", desc: "Pomodoro, mozzarella, burrata e crudo", allergens: "1-7", price: "14" },
        { name: "Smeraldo", desc: "Mozzarella, pistacchio, pesto di basilico e burrata", allergens: "1-7-8", price: "15" },
      ]
    },
    {
      id: "dellorto",
      name: "Dell'orto",
      items: [
        { name: "Primavera", desc: "Pomodoro, mozzarella, rucola, pomodorini e grana", allergens: "1-7", price: "10" },
        { name: "Vegetariana", desc: "Pomodoro, mozzarella, peperoni, melanzane e zucchine", allergens: "1-7", price: "11" },
        { name: "Italia", desc: "Pomodoro, mozzarella di bufala, pomodorini e basilico", allergens: "1-7", price: "12" },
      ]
    },
    {
      id: "cittadine",
      name: "Cittadine",
      items: [
        { name: "Napoletana", desc: "Pomodoro, mozzarella, acciughe e origano", allergens: "1-4-7", price: "9" },
        { name: "Pugliese", desc: "Pomodoro, mozzarella, cipolla e origano", allergens: "1-7", price: "9" },
        { name: "Parma", desc: "Pomodoro, mozzarella, prosciutto crudo e grana", allergens: "1-7", price: "10" },
        { name: "Siciliana", desc: "Mozzarella, olive, tonno e pomodorini", allergens: "1-4-7", price: "10" },
        { name: "California", desc: "Pomodoro, mozzarella, wurstel e patatine fritte", allergens: "1-6-7", price: "10" },
        { name: "Trentina", desc: "Pomodoro, mozzarella, gorgonzola, speck e noci", allergens: "1-7-8", price: "11" },
      ]
    }
  ]
};
