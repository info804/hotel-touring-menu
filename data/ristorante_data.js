/**
 * ============================================================
 * RISTORANTE — Hotel Touring Livigno · Inverno 2026
 * Campi: name, desc, allergens (codici EU, es. "1-7"), price (come stampato, es. "7,50").
 * sub: titolo di sottogruppo, sulla prima voce del gruppo.
 * Le traduzioni EN/DE stanno in data/i18n/ (non modificare qui).
 * ============================================================
 */

const RISTORANTE_DATA = {
  title: "Ristorante",
  subtitle: "Specialità della cucina valtellinese e piatti di montagna",

  categories: [
    {
      id: "antipasti",
      name: "Antipasti",
      items: [
        { sub: "Dalla Valtellina", name: "Slinzega di cervo con burro al ginepro e funghi porcini sott'olio", allergens: "1-5-7", price: "22" },
        { name: "Il nostro tagliere di salumi e formaggi con giardiniera fresca", allergens: "7-9-10-12", price: "18" },
        { name: "Bresaola di Livigno con lamelle di Casera e sciatt valtellinesi", allergens: "1-5-7-10-12", price: "17" },
        { name: "Bresaola punta d'anca 100% italiana con lamelle di sedano, funghi porcini trifolati e scaglie di grana", allergens: "7-9-10-12", price: "18" },
        { name: "Tagliere di formaggi locali accompagnato da composte di frutta", allergens: "7-10", price: "17" },
        { name: "Sciatt valtellinesi su letto d'insalata e vinaigrette all'aceto di mele", allergens: "1-5-7-10-12", price: "13" },
        { sub: "Sapori d'Italia", name: "Tartare di manzo con stracciatella di bufala e lamelle di tartufo", allergens: "1-7", price: "22" },
        { name: "Tris di pesce affumicato con crostini di pane e riccioli di burro (spada-tonno-salmone)", allergens: "1-4-7", price: "18" },
        { name: "Insalata caprese con mozzarella di bufala", allergens: "7", price: "12" },
        { name: "Bruschetta all'italiana", allergens: "1", price: "12" },
      ]
    },
    {
      id: "primi",
      name: "Primi piatti",
      items: [
        { sub: "Tradizione di montagna", name: "Pizzoccheri valtellinesi fatti a mano al profumo d'erbe e Casera DOP", allergens: "1-3-5-7", price: "16" },
        { name: "Rustici al capriolo con il suo sugo", allergens: "1-3-5-7-9-12", price: "18" },
        { name: "Tagliatelle ai funghi porcini", allergens: "1-3-5-7", price: "18" },
        { name: "Spätzle verdi allo speck tirolese croccante", allergens: "1-3-7", price: "15" },
        { sub: "Classici italiani", name: "Lasagna gratinata della tradizione romagnola", allergens: "1-3-7-9-12", price: "15" },
        { name: "Spaghetti alla carbonara con pecorino romano e guanciale", allergens: "1-3-7", price: "15" },
        { name: "Chicche di patate con pomodorini Pachino bicolore al profumo di basilico", allergens: "1-3-7-9", price: "14" },
        { name: "Pasta al pomodoro / ragù alla bolognese / pesto genovese", allergens: "1-7-9 / 1-7-9-12 / 1-7-8", price: "12" },
        { name: "Risotto alla milanese", allergens: "7-9-12", price: "21" },
        { name: "Risotto alla milanese con ossobuco di vitello in gremolada", allergens: "1-5-7-9-12", price: "25" },
      ]
    },
    {
      id: "zuppe",
      name: "Zuppe",
      items: [
        { name: "Crema di pomodoro con fiocco di panna e crostini di pane", allergens: "1-7-9", price: "11" },
        { name: "Zuppa di cipolle in crosta di pasta sfoglia con sesamo", allergens: "1-3-7-9-11", price: "14" },
        { name: "Minestrone di verdure fresche dell'orto", allergens: "9", price: "11" },
        { name: "Vellutata di zucca delica con crostini", allergens: "1-7-9", price: "11" },
        { name: "Crema di asparagi con lamelle di mandorle tostate", allergens: "1-8-9", price: "11" },
        { name: "Vellutata di porri e patate", allergens: "1-7-9", price: "11" },
        { name: "Zuppa di gulasch all'ungherese", allergens: "1-9-12", price: "15" },
      ]
    },
    {
      id: "secondi",
      name: "Secondi",
      items: [
        { name: "Salmì di cervo con polenta taragna", allergens: "1-7-9-12", price: "22" },
        { name: "Tzigoiner valtellinese con patate saltate e verdure grigliate", allergens: "5-7", price: "22" },
        { name: "Tagliata di manzo con funghi porcini di selva", allergens: "5-7-12", price: "28" },
        { name: "Costoletta d'agnello allo scottadito con patate saltate alle erbe e verdure grigliate", allergens: "5-7", price: "28" },
        { name: "Filetto di manzo alla griglia con patate fritte e verdure grigliate", allergens: "5", price: "32" },
        { name: "Cotoletta alla milanese (400 g) con osso e patatine fritte", allergens: "1-3-5", price: "32" },
        { name: "Suprema di pollo alla griglia con insalatina mista di stagione", allergens: "5", price: "18" },
        { name: "Trota spinata alle erbe di montagna con patate al vapore", allergens: "1-4-7", price: "24" },
        { name: "Piatto del montanaro: gorgonzola, polenta taragna, uovo e speck croccante", allergens: "3-7", price: "17" },
        { name: "Casera alla griglia caramellato al miele con pere, noci e crostone di polenta", allergens: "7-8", price: "16" },
      ]
    },
    {
      id: "contorni",
      name: "Contorni",
      items: [
        { name: "Polenta taragna", allergens: "7", price: "6" },
        { name: "Patate fritte", allergens: "5", price: "6" },
        { name: "Verdure alla griglia", price: "7" },
        { name: "Funghi porcini di selva trifolati", allergens: "7", price: "12" },
        { name: "Patate saltate", allergens: "5-7", price: "6" },
        { name: "Patate al vapore", price: "6" },
        { name: "Insalata mista", price: "7" },
        { name: "Insalata verde", price: "6" },
        { name: "Insalata Caesar", allergens: "1-7-10", price: "12" },
        { name: "Insalata di pomodori e cipolle", price: "6" },
      ]
    },
    {
      id: "bambini",
      name: "Per i più piccoli",
      items: [
        { name: "Pasta baby al pomodoro / ragù baby alla bolognese / al pesto baby genovese", desc: "Porzione adulti 12", allergens: "1-9 / 1-9-12 / 1-7-8", price: "8" },
        { name: "Passato di verdure", allergens: "9", price: "8" },
        { name: "Lasagne baby gratinate della tradizione romagnola", allergens: "1-3-7-9-12", price: "11" },
        { name: "Cotoletta di pollo alla milanese baby con patatine fritte", allergens: "1-3-5", price: "12" },
        { name: "Controfiletto di manzo baby con pomodorini", price: "14" },
        { name: "Würstel alla griglia baby con patatine fritte", allergens: "5", price: "10" },
      ]
    },
    {
      id: "dolci",
      name: "Dolci",
      items: [
        { name: "Tiramisù della casa", allergens: "1-3-7", price: "7" },
        { name: "Crème brûlée", allergens: "3-7", price: "7" },
        { name: "Crepes", desc: "Nutella, marmellata o zucchero", allergens: "1-3-7-8", price: "5" },
        { name: "Sorbetto al Braulio", allergens: "3-7", price: "8" },
        { name: "Sorbetto al limone (analcolico / alcolico)", price: "6/8" },
        { name: "Strudel di mele accompagnato da gelato alla vaniglia e panna montata", allergens: "1-3-7-8", price: "8" },
        { name: "Cremoso ai tre cioccolati", desc: "cioccolato fondente, cioccolato al latte, cioccolato bianco", allergens: "3-7-8", price: "10" },
        { name: "Fantasia Touring", desc: "tiramisù, cheesecake ai frutti rossi, cremoso ai tre cioccolati", allergens: "1-3-7-8", price: "12" },
        { name: "Torta Sacher", allergens: "1-3-7-8", price: "7" },
        { name: "Gelato alla Taneda", allergens: "7", price: "7" },
      ]
    },
    {
      id: "bevande",
      name: "Bevande",
      items: [
        { sub: "Classiche", name: "Acqua 0,5 / 0,75 l", price: "2/3" },
        { name: "Bibite 0,3 / 0,4 l", desc: "Coca-Cola, Fanta, Sprite, Tè pesca-limone", price: "3/4" },
        { name: "Bibite in lattina", desc: "Tè pesca-limone, Lemonsoda", price: "3,50" },
        { name: "Bibite in vetro", desc: "Coca, Coca zero, Fanta, Sprite, Lurisia", price: "4" },
        { name: "Succhi di frutta", desc: "Ace, Albicocca, Ananas, Arancia, Mirtilli, Pesca, Pera, Pompelmo, Mela", price: "3,50" },
        { name: "Spremuta d'arancia", price: "4,00" },
        { name: "Birra alla spina Nastro Azzurro 0,3 / 0,5 l", price: "3,50/6" },
        { name: "Radler-Panachè 0,3 / 0,5 l", price: "3,50/6" },
        { sub: "Birre in bottiglia", name: "1816 Livigno", desc: "Pils, Weiss, IPA", price: "8" },
        { name: "Weizen Paulaner", price: "6" },
        { name: "Heineken", price: "4" },
        { name: "Corona", price: "4" },
        { name: "Chimay", price: "4" },
        { name: "Weiss analcolica", price: "4" },
        { name: "Moretti analcolica", price: "4" },
      ]
    }
  ]
};
