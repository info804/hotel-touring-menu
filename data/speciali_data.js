/**
 * ============================================================
 *  TABELLA MENÙ SPECIALI — Hotel Touring Livigno
 *  Modifica qui i menù di Natale e Capodanno.
 *
 *  Per ogni menù puoi impostare:
 *    title       — titolo visualizzato nella pagina
 *    tabLabel    — etichetta del tab di selezione
 *    fixedPrice  — prezzo fisso a persona (es. "75.00")
 *    priceNote   — nota sotto il prezzo (es. "bevande escluse")
 *    includes    — testo che descrive cosa è incluso nel prezzo
 *    courses     — array di portate, ognuna con name e dishes[]
 * ============================================================
 */

const SPECIALI_DATA = {

  /* --------------------------------------------------------
     MENU DI NATALE
  -------------------------------------------------------- */
  natale: {
    title: "Menù di Natale",
    tabLabel: "🎄 Natale",
    fixedPrice: "75.00",
    priceNote: "a persona — bevande non incluse",
    includes: "Il menù include: acqua minerale, pane e grissini. \nVini e bevande a parte. Prenotazione obbligatoria entro il 20 Dicembre.",

    courses: [
      {
        name: "BENVENUTO DALLA CUCINA",
        dishes: [
          { name: "Amuse-bouche dello chef", desc: "Piccoli bocconcini di benvenuto" }
        ]
      },
      {
        name: "ANTIPASTI",
        dishes: [
          {
            name: "Tagliere natalizio di salumi e formaggi",
            desc: "Bresaola della Valtellina IGP, Violino di capra, Mortadella di fegato, formaggi locali stagionati, mostarda di frutta"
          },
          {
            name: "Sciatt in festa",
            desc: "Frittelline croccanti di grano saraceno con cuore di Casera fuso, su insalatina di campo"
          }
        ]
      },
      {
        name: "PRIMO PIATTO",
        dishes: [
          {
            name: "Pizzoccheri della Valtellina alla tradizione",
            desc: "Tagliatelle di grano saraceno con patate, verza, Casera e Bitto fusi, burro di malga"
          },
          {
            name: "Zuppa di castagne e porcini",
            desc: "Con crostino di pane di segale tostato e olio EVO al tartufo bianco"
          }
        ]
      },
      {
        name: "SECONDO PIATTO",
        dishes: [
          {
            name: "Filetto di manzo al vino Sforzato",
            desc: "Con riduzione di Sforzato di Valtellina DOCG, patate duchessa alle erbe alpine, verdure di stagione"
          },
          {
            name: "Sella di capriolo in crosta di erbe",
            desc: "Con salsa ai mirtilli selvatici, polenta taragna e mousse di sedano rapa"
          }
        ]
      },
      {
        name: "PRE-DESSERT",
        dishes: [
          { name: "Sorbetto al limone", desc: "Con zeste candite e foglia di menta" }
        ]
      },
      {
        name: "DOLCE",
        dishes: [
          {
            name: "Millefoglie di Natale",
            desc: "Pasta sfoglia caramellata, crema diplomatica alla vaniglia Bourbon, frutti di bosco e coulis di lampone"
          },
          {
            name: "Panettone artigianale",
            desc: "Servito al tavolo con mascarpone al rum e marmellata di arance"
          }
        ]
      },
      {
        name: "PICCOLA PASTICCERIA",
        dishes: [
          { name: "Mignons natalizi", desc: "Assortimento di cioccolatini, amaretti e biscotti fatti in casa" }
        ]
      }
    ]
  },

  /* --------------------------------------------------------
     MENU DI CAPODANNO 2026
  -------------------------------------------------------- */
  capodanno: {
    title: "Menù di Capodanno 2026",
    tabLabel: "🎆 Capodanno",
    fixedPrice: "120.00",
    priceNote: "a persona — musica dal vivo inclusa | bevande non incluse",
    includes: "Il prezzo include: musica dal vivo, acqua minerale, brindisi di mezzanotte con Franciacorta. \nPacchetto vini su richiesta. Prenotazione obbligatoria entro il 27 Dicembre.",

    courses: [
      {
        name: "APERITIVO DI BENVENUTO",
        dishes: [
          {
            name: "Cocktail di benvenuto e fingerfood",
            desc: "Franciacorta brut o analcolico, accompagnato da stuzzichini misti"
          }
        ]
      },
      {
        name: "ANTIPASTI",
        dishes: [
          {
            name: "Gran plateau di antipasti",
            desc: "Capesante gratinate al burro e prezzemolo, tartare di manzo con tuorlo d'uovo, brunoise di verdure e salsa worcestershire, salmone affumicato con crema al limone e caviale di lompo, crostino al foie gras con confettura di fichi"
          }
        ]
      },
      {
        name: "PRIMO PIATTO",
        dishes: [
          {
            name: "Tagliolini freschi al granchio reale e bottarga",
            desc: "Con olio EVO al limone, pomodorino confit e bottarga di muggine"
          },
          {
            name: "Risotto allo Sforzato di Valtellina con fonduta di Bitto",
            desc: "Mantecato con Bitto DOP invecchiato, decorato con scaglie di tartufo nero"
          }
        ]
      },
      {
        name: "SECONDO PIATTO",
        dishes: [
          {
            name: "Filetto di manzo in crosta di tartufo nero",
            desc: "Con foie gras spadellato, tartufo nero di Norcia, patate rosolate al burro di malga, asparagi e salsa al Barolo"
          },
          {
            name: "Aragosta al burro fuso con erbe aromatiche",
            desc: "Mezza aragosta con burro alla citronette, riso Carnaroli soffiato e bisque di crostacei"
          }
        ]
      },
      {
        name: "PRE-DESSERT",
        dishes: [
          {
            name: "Granita di Champagne al passion fruit",
            desc: "Con foglia d'oro 22 carati"
          }
        ]
      },
      {
        name: "DOLCE",
        dishes: [
          {
            name: "Torta delle stelle 2026",
            desc: "Cheesecake al cioccolato bianco con gelatina di Champagne Rosé, ganache al caramello salato e lamponi freschi — creazione esclusiva dello chef pasticcere"
          }
        ]
      },
      {
        name: "PICCOLA PASTICCERIA & MEZZANOTTE",
        dishes: [
          { name: "Macarons, tartufi al cioccolato e mignons assortiti", desc: "" },
          { name: "Brindisi di mezzanotte con Franciacorta DOCG", desc: "Con cotechino e lenticchie della tradizione italiana" }
        ]
      }
    ]
  }

}; // fine SPECIALI_DATA
