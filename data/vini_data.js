/**
 * ============================================================
 *  TABELLA CARTA DEI VINI — Hotel Touring Livigno
 *  Campi: name, producer, notes, bottle (prezzo bottiglia), glass (calice)
 * ============================================================
 */

const VINI_DATA = {
  title: "Carta dei Vini",
  subtitle: "\"I veri intenditori non bevono vino... degustano segreti\"",

  categories: [

    // --------------------------------------------------------
    // BOLLICINE
    // --------------------------------------------------------
    {
      id: "bollicine",
      name: "BOLLICINE",
      items: [
        { name: "\"VALDO VALDOBBIADENE\" IL FONDATORE DOCG",    producer: "",                       notes: "",                                                          bottle: "28.00",  glass: "" },
        { name: "\"PLOZZA\" Brut — Franciacorta DOCG",          producer: "",                       notes: "",                                                          bottle: "38.00",  glass: "" },
        { name: "\"PLOZZA\" ROSÈ — Franciacorta DOCG",          producer: "",                       notes: "",                                                          bottle: "42.00",  glass: "" },
        { name: "FERRARI MAXIMUM BRUT — Trento DOC",             producer: "",                       notes: "",                                                          bottle: "40.00",  glass: "" },
        { name: "MADONNA DELLE VITTORIE — Trento DOC",           producer: "",                       notes: "",                                                          bottle: "35.00",  glass: "" },
        { name: "\"BEAUMONT DES CRAYÈRES\" GRAN ROSÉ BRUT",      producer: "Champagne",              notes: "",                                                          bottle: "68.00",  glass: "" },
        { name: "\"BEAUMONT DES CRAYÈRES\" GRANDE RÉSERVE BRUT", producer: "Champagne",              notes: "",                                                          bottle: "63.00",  glass: "" },
        { name: "CHAMPAGNE VEUVE CLICQUOT",                      producer: "Champagne AOC",          notes: "",                                                          bottle: "80.00",  glass: "" },
        { name: "CHAMPAGNE LAURENT-PERRIER",                     producer: "Champagne AOC",          notes: "",                                                          bottle: "85.00",  glass: "" },
        { name: "CHAMPAGNE MOËT & CHANDON",                      producer: "Champagne AOC",          notes: "",                                                          bottle: "90.00",  glass: "" },
        { name: "DOM PÉRIGNON BRUT 2013",                        producer: "Champagne AOC",          notes: "",                                                          bottle: "320.00", glass: "" }
      ]
    },

    // --------------------------------------------------------
    // VINI ROSATI — LOMBARDIA
    // --------------------------------------------------------
    {
      id: "rosati",
      name: "VINI ROSATI — LOMBARDIA",
      items: [
        {
          name: "\"MADONNA DELLE VITTORIE\" LAGREIN ROSÉ",
          producer: "",
          notes: "Rosato da uve Lagrein. Colore brillante, profumi fruttati e delicati, note di fragolina e lampone. Fresco, equilibrato e piacevole",
          bottle: "29.00", glass: ""
        },
        {
          name: "MONROSE — ALPI RETICHE IGT",
          producer: "Mamete Prevostini",
          notes: "Da uve Nebbiolo. Rosato luminoso e vivace, profumi di frutti rossi freschissimi ed eleganti sfumature minerali",
          bottle: "26.00", glass: ""
        },
        {
          name: "CERASUS — ALPI RETICHE IGT",
          producer: "Cantine Nera",
          notes: "Da uve Nebbiolo. Rosato color cerasuolo, sentori di ciliegia, lampone e fragola. Al gusto morbido",
          bottle: "25.00", glass: ""
        }
      ]
    },

    // --------------------------------------------------------
    // VINI ROSSI — LOMBARDIA
    // --------------------------------------------------------
    {
      id: "rossi-lombardia",
      name: "VINI ROSSI — LOMBARDIA",
      items: [
        { name: "ALISIO SASSELLA SUPERIORE DOCG 0,375 L",    producer: "", notes: "Nebbiolo, sottozona Sassella. Elegante, note di frutti rossi e piacevole mineralità",                                     bottle: "14.00", glass: "" },
        { name: "ALISIO SASSELLA SUPERIORE DOCG 0,75 L",     producer: "", notes: "Nebbiolo, sottozona Sassella. Elegante, note di frutti rossi e piacevole mineralità",                                     bottle: "26.00", glass: "" },
        { name: "SOREL ALPI RETICHE IGT",                    producer: "", notes: "Nebbiolo dal carattere pieno e rotondo. Profumi intensi di frutta matura e leggere note speziate",                       bottle: "41.00", glass: "" },
        { name: "INFERNO RISERVA AL CARMINE DOCG",           producer: "", notes: "Grande tipicità valtellinese: profumo intenso, gusto asciutto e deciso",                                                  bottle: "41.00", glass: "" },
        { name: "\"PARADISO\" RISERVA DOCG",                 producer: "", notes: "Vino elegante e strutturato, profumi di frutti rossi e leggere note speziate",                                           bottle: "42.00", glass: "" },
        { name: "\"MESSERE\" SFURZAT VALTELLINA DOCG",       producer: "", notes: "Rosso granato, complesso. Aromi di frutti rossi maturi, spezie, note tostate e sfumature di cacao",                      bottle: "55.00", glass: "" },
        { name: "TIRSO GRUMELLO SUPERIORE DOCG 0,375 L",     producer: "", notes: "Rosso rubino con riflessi granati. Profumi di frutti di bosco, confettura e note floreali",                              bottle: "15.00", glass: "" },
        { name: "TIRSO GRUMELLO SUPERIORE DOCG 0,75 L",      producer: "", notes: "Rosso rubino con riflessi granati. Profumi di frutti di bosco, confettura e note floreali",                              bottle: "26.00", glass: "" },
        { name: "ROSSO DI VALTELLINA DOC \"TOURING\"",       producer: "", notes: "Tipico vino di qualità da tutto pasto, fresco e leggermente fruttato",                                                    bottle: "14.00", glass: "" },
        { name: "\"MAZER\" — VALTELLINA SUPERIORE DOCG",     producer: "", notes: "Una parte delle uve viene leggermente appassita. Profumi delicati di frutta rossa e spezie dolci",                       bottle: "31.00", glass: "" },
        { name: "\"VIGNA SASSOROSSO\" — GRUMELLO SUPERIORE DOCG", producer: "", notes: "Rosso rubino brillante, profumi di more, ribes, ciliegie e lamponi",                                               bottle: "45.00", glass: "" },
        { name: "5 STELLE SFURZAT VALTELLINA DOCG 2018",     producer: "", notes: "Rosso granato intenso, profumi complessi di frutta secca, spezie, note tostate e balsamiche",                            bottle: "110.00", glass: "" },
        { name: "5 STELLE SFURZAT VALTELLINA DOCG 2020",     producer: "", notes: "Vino potente, ricco e concentrato, note di frutta matura, spezie e sfumature balsamiche",                                bottle: "90.00", glass: "" },
        { name: "\"LE TENSE\" — SASSELLA SUPERIORE DOCG",    producer: "", notes: "Rosso rubino con riflessi granati. Aromi di frutti rossi in confettura, fiori appassiti e spezie leggere",               bottle: "31.00", glass: "" },
        { name: "VIGNA CA' GUICCIARDI INFERNO SUPERIORE DOCG", producer: "", notes: "Rosso rubino intenso, aromi di frutti rossi, viola appassita e spezie",                                               bottle: "45.00", glass: "" },
        { name: "\"CASTEL CHIURO\" VALTELLINA SUPERIORE DOCG Riserva 2013", producer: "", notes: "Profumi complessi di frutta sotto spirito, erbe aromatiche, tabacco e legno pregiato",                  bottle: "85.00", glass: "" },
        { name: "CORTE DI CAMA SFURZAT VALTELLINA DOCG",     producer: "Mamete Prevostini",          notes: "Rosso granato intenso, profumi complessi di frutta matura, spezie dolci, erbe alpine e note balsamiche", bottle: "61.00", glass: "" },
        { name: "INFERNO LA CRUUS SUPERIORE DOCG",           producer: "Mamete Prevostini",          notes: "Nebbiolo rubino brillante, aromi di frutti rossi, spezie e nota minerale",                                 bottle: "43.00", glass: "" },
        { name: "BOTONERO — TERRAZZE RETICHE DI SONDRIO 0,375 L", producer: "Mamete Prevostini",   notes: "Vino giovane, rosso rubino con profumi di ciliegia, lampone e violetta",                                    bottle: "16.00", glass: "" },
        { name: "BOTONERO — TERRAZZE RETICHE DI SONDRIO 0,75 L",  producer: "Mamete Prevostini",   notes: "Vino giovane, rosso rubino con profumi di ciliegia, lampone e violetta",                                    bottle: "27.00", glass: "" },
        { name: "SASSELLA SUPERIORE SOMMAROVINA DOCG",        producer: "Mamete Prevostini",         notes: "Elegante e armonioso, aromi di piccoli frutti rossi, agrumi e leggere spezie",                              bottle: "43.00", glass: "" },
        { name: "PASSIONE ALPI RETICHE IGT 2015",             producer: "Cantina Plozza",            notes: "Rosso intenso, complesso, note di frutta matura, spezie dolci e leggeri sentori tostati",                   bottle: "64.00", glass: "" },
        { name: "SASSELLA RED EDITION SUPERIORE DOCG 0,375 L", producer: "Cantina Plozza",          notes: "Rosso granato, aroma di frutta rossa, elegante e morbido",                                                  bottle: "16.00", glass: "" },
        { name: "SASSELLA RED EDITION SUPERIORE DOCG 0,75 L",  producer: "Cantina Plozza",          notes: "Rosso granato, aroma di frutta rossa, elegante e morbido",                                                  bottle: "30.00", glass: "" },
        { name: "SFURZAT BLACK EDITION DOCG 0,375 L",         producer: "Cantina Plozza",           notes: "Complesso e strutturato, richiami a frutti rossi maturi, prugna, confettura e pepe verde",                   bottle: "23.00", glass: "" },
        { name: "SFURZAT BLACK EDITION DOCG 0,75 L",          producer: "Cantina Plozza",           notes: "Complesso e strutturato, richiami a frutti rossi maturi, prugna, confettura e pepe verde",                   bottle: "44.00", glass: "" },
        { name: "NUMERO UNO ALPI RETICHE IGT",                 producer: "Cantina Plozza",           notes: "Rosso intenso, avvolgente, note di frutta sotto spirito e spezie dolci",                                     bottle: "70.00", glass: "" },
        { name: "\"CINQUANTA 50\" ALPI RETICHE 2014",          producer: "Cantina Plozza",           notes: "Il profilo olfattivo ben articolato e comunicativo",                                                          bottle: "52.00", glass: "" },
        { name: "SASSI SOLIVI SUPERIORE SASSELLA RISERVA DOCG", producer: "Cantine Sassi Solivi",   notes: "Rosso rubino, profumi di piccoli frutti di bosco, note minerali e spezie",                                    bottle: "40.00", glass: "" },
        { name: "SASSI SOLIVI VALTELLINA SUPERIORE SASSELLA",   producer: "Cantine Sassi Solivi",   notes: "",                                                                                                             bottle: "30.00", glass: "" },
        { name: "\"I CIAZ\" — SASSELLA SUPERIORE DOCG",        producer: "Cantine Sassi Solivi",    notes: "Matura 20 mesi in piccole botti di rovere. Sentori di lampone, spezie e balsamico",                          bottle: "35.00", glass: "" }
      ]
    },

    // --------------------------------------------------------
    // VINI ROSSI — PIEMONTE
    // --------------------------------------------------------
    {
      id: "rossi-piemonte",
      name: "VINI ROSSI — PIEMONTE",
      items: [
        { name: "BAROLO DOCG",              producer: "Cantina Cabianca",          notes: "Vino elegante e complesso, profumi di rosa, spezie e frutta rossa matura",                           bottle: "55.00", glass: "" },
        { name: "LANGHE NEBBIOLO DOC",      producer: "Cantina Cabianca",          notes: "Fresco e raffinato, note di ciliegia, violetta e leggere spezie",                                    bottle: "25.00", glass: "" },
        { name: "BARBERA D'ASTI DOC",       producer: "Cantina Cabianca",          notes: "Profumi intensi di frutti rossi e leggere sfumature speziate",                                       bottle: "24.00", glass: "" },
        { name: "\"DOLCETTO D'ACQUI\" DOC", producer: "Cantina Cabianca",          notes: "Fragrante e immediato, aromi di prugna, ciliegia e sentori floreali",                                bottle: "24.00", glass: "" },
        { name: "ROERO \"SRU\" DOCG",       producer: "Monachiero Carbone",        notes: "Vino fine e profumato, note di frutti rossi, rosa e leggere sfumature speziate",                     bottle: "38.00", glass: "" },
        { name: "PRINTI ROERO RISERVA DOCG", producer: "Monachiero Carbone",       notes: "Aromi di ciliegia matura, spezie e cenni balsamici. Sorso pieno, armonioso e persistente",           bottle: "58.00", glass: "" },
        { name: "PELISA BARBERA D'ALBA DOC", producer: "Monachiero Carbone",       notes: "Ricco e fruttato, profumi di amarena, prugna e leggere note speziate",                               bottle: "26.00", glass: "" }
      ]
    },

    // --------------------------------------------------------
    // VINI ROSSI — VENETO
    // --------------------------------------------------------
    {
      id: "rossi-veneto",
      name: "VINI ROSSI — VENETO",
      items: [
        { name: "VALPOLICELLA CLASSICO DOC",                      producer: "Cantina S. Sofia",  notes: "Fresco e fragrante, profumi di ciliegia, piccoli frutti rossi e note floreali",                               bottle: "27.00", glass: "" },
        { name: "VALPOLICELLA RIPASSO SUPERIORE DOC",             producer: "Cantina S. Sofia",  notes: "Più ricco e avvolgente, aromi di frutta matura, spezie e lieve nota di cacao",                                bottle: "31.00", glass: "" },
        { name: "AMARONE DELLA VALPOLICELLA CLASSICO DOCG",       producer: "Cantina S. Sofia",  notes: "Intenso e complesso, profumi di amarena, prugna secca, spezie dolci e cioccolato",                            bottle: "58.00", glass: "" },
        { name: "\"CARLO SANTI\" AMARONE DELLA VALPOLICELLA",     producer: "Cantina Santi",     notes: "Vino importante e raffinato, profumi intensi di amarena, prugna secca, spezie e cacao",                       bottle: "70.00", glass: "" },
        { name: "\"SANTICO\" AMARONE DELLA VALPOLICELLA",         producer: "Cantina Santi",     notes: "Aromi di frutta rossa matura, vaniglia e spezie dolci",                                                        bottle: "56.00", glass: "" },
        { name: "\"SOLANE\" VALPOLICELLA RIPASSO SUPERIORE DOC",  producer: "Cantina Santi",     notes: "Fruttato e speziato, note di ciliegia, prugna e leggeri sentori tostati",                                     bottle: "29.00", glass: "" },
        { name: "\"LE CALESELLE\" VALPOLICELLA CLASSICO DOC",     producer: "Cantina Santi",     notes: "Fresco e scorrevole, profumi di ciliegia, piccoli frutti rossi e note floreali",                              bottle: "26.00", glass: "" }
      ]
    },

    // --------------------------------------------------------
    // VINI ROSSI — TRENTINO / ALTRE REGIONI
    // --------------------------------------------------------
    {
      id: "rossi-altri",
      name: "VINI ROSSI — TRENTINO & ALTRE REGIONI",
      items: [
        { name: "TEROLDEGO",                          producer: "Cantina Madonna delle Vittorie", notes: "Vino dal colore intenso, profumi di frutti rossi maturi e lievi note speziate",                       bottle: "29.00", glass: "" },
        { name: "LAGREIN",                            producer: "",                               notes: "Al palato morbido, fresco e piacevolmente armonico, finale fruttato e scorrevole",                   bottle: "32.00", glass: "" },
        { name: "RUSPOLI CHIANTI CLASSICO DOCG",      producer: "Tenuta di Lilliano",             notes: "Note di ciliegia, piccoli frutti rossi e leggere sfumature speziate",                                bottle: "28.00", glass: "" },
        { name: "RUSPOLI CHIANTI CLASSICO RISERVA DOCG", producer: "Tenuta di Lilliano",         notes: "Più complesso e strutturato, aromi di frutta matura, spezie e accenti balsamici",                    bottle: "41.00", glass: "" },
        { name: "RUSPOLI CHIANTI CLASSICO GRAN SELEZIONE DOCG", producer: "Tenuta di Lilliano",  notes: "Ricco e profondo, note di amarena, mora, spezie dolci e cenni tostati",                              bottle: "48.00", glass: "" },
        { name: "W'HEART ROSSO PRIMITIVO IGT",        producer: "Cantina Barsento",               notes: "Carattere moderno e mediterraneo, profumi di frutti rossi e spezie leggere",                        bottle: "26.00", glass: "" },
        { name: "ROSSO DI MONTEPULCIANO DOC",         producer: "Cantina Val di Piatta",          notes: "Vino giovane e vivace, profumi di ciliegia, frutti rossi e leggere note speziate",                  bottle: "26.00", glass: "" },
        { name: "VINO NOBILE DI MONTEPULCIANO DOCG",  producer: "Cantina Val di Piatta",          notes: "Elegante e strutturato, aromi di frutti rossi maturi, violetta e spezie dolci",                     bottle: "25.00", glass: "" },
        { name: "BRUNELLO DI MONTALCINO DOCG",        producer: "Az. Agr. Ventolaio",             notes: "Vino elegante e complesso, profumi di ciliegia matura, spezie e note balsamiche",                   bottle: "58.00", glass: "" },
        { name: "CANNONAU DOC",                       producer: "Cantina Audarya",                notes: "Caldo e mediterraneo, profumi di frutti rossi maturi, mirto e leggere note speziate",               bottle: "26.00", glass: "" },
        { name: "\"MERLOT COLLIO\" DOC",              producer: "Cantina Formentini",             notes: "Elegante e morbido, profumi di frutti rossi maturi, prugna e leggere note erbacee",                 bottle: "26.00", glass: "" }
      ]
    },

    // --------------------------------------------------------
    // VINI BIANCHI — LOMBARDIA
    // --------------------------------------------------------
    {
      id: "bianchi-lombardia",
      name: "VINI BIANCHI — LOMBARDIA",
      items: [
        { name: "LA NOVELLA TERRAZZE RETICHE IGT 0,375 L", producer: "Cantina Nera",        notes: "Vino fresco e fragrante, note di frutti di montagna e leggera sfumatura minerale",  bottle: "13.00", glass: "" },
        { name: "LA NOVELLA TERRAZZE RETICHE IGT 0,75 L",  producer: "Cantina Nera",        notes: "Vino fresco e fragrante, note di frutti di montagna e leggera sfumatura minerale",  bottle: "22.00", glass: "" },
        { name: "WHITE EDITION TERRAZZE RETICHE IGT",       producer: "Cantina Plozza",      notes: "Fresco e fine, aromi di frutta a polpa bianca, agrumi e delicata nota minerale",   bottle: "26.00", glass: "" },
        { name: "WIGHEL LUGANA DOC",                        producer: "Tenuta Roveglia",     notes: "Ricco e delicato, profumi di pesca bianca, mandorla fresca e agrumi",              bottle: "27.00", glass: "" },
        { name: "OPERA ALPI RETICHE IGT",                   producer: "Mamete Prevostini",   notes: "Bianco elegante, aromi di pera, mela verde e agrumi con fine nota minerale",       bottle: "38.00", glass: "" },
        { name: "\"ALPI RETICHE\" IGT",                     producer: "Nino Negri",          notes: "Fresco e profumato, sentori di frutta bianca, fiori alpini e lievi accenti agrumati", bottle: "28.00", glass: "" }
      ]
    },

    // --------------------------------------------------------
    // VINI BIANCHI — PIEMONTE & VENETO
    // --------------------------------------------------------
    {
      id: "bianchi-piemonte-veneto",
      name: "VINI BIANCHI — PIEMONTE & VENETO",
      items: [
        { name: "GAVI DOCG",                              producer: "Cantina Cabianca",  notes: "Bianco elegante e fresco, profumi di agrumi, fiori bianchi e sottile nota minerale",      bottle: "28.00", glass: "" },
        { name: "ROERO ARNEIS RECIT DOCG",                producer: "",                  notes: "Fragrante e fine, aromi di pera, mela e fiori bianchi con un accenno di erbe delicate",   bottle: "26.00", glass: "" },
        { name: "LUGANA DOC",                             producer: "Cantina S. Sofia",  notes: "Fresco e armonioso, profumi di agrumi, pesca bianca e leggere note floreali",              bottle: "26.00", glass: "" },
        { name: "LE CALDERARE GARDA PINOT GRIGIO 0,375 L", producer: "Cantina S. Sofia", notes: "Bianco fragrante, aromi di pera, mela e fiori bianchi. Fresco e scorrevole",              bottle: "14.00", glass: "" },
        { name: "LE CALDERARE GARDA PINOT GRIGIO 0,75 L",  producer: "Cantina S. Sofia", notes: "Bianco fragrante, aromi di pera, mela e fiori bianchi. Fresco e scorrevole",              bottle: "24.00", glass: "" }
      ]
    },

    // --------------------------------------------------------
    // VINI BIANCHI — TRENTINO A.A. & ALTRE REGIONI
    // --------------------------------------------------------
    {
      id: "bianchi-altri",
      name: "VINI BIANCHI — TRENTINO A.A. & ALTRE REGIONI",
      items: [
        { name: "A.A. MÜLLER THURGAU",                          producer: "Kellerei Aichholz",  notes: "Fresco e aromatico, note di fiori bianchi, agrumi e sfumature di erbe alpine",              bottle: "29.00", glass: "" },
        { name: "TERA ALTA VALDADIGE PINOT GRIGIO DOC",         producer: "Cantina Roeno",      notes: "Bianco fresco e pulito, aromi di pera, mela verde e leggere note floreali",                  bottle: "25.00", glass: "" },
        { name: "\"PREACIPUUS\" DELLE VENEZIE IGT",             producer: "Cantina Roeno",      notes: "Aromatico e fine, profumi di agrumi, pesca bianca e fiori delicati",                          bottle: "32.00", glass: "" },
        { name: "KIES GEWURZTRAMINER TRENTINO DOC 0,375 L",     producer: "Cantina Roeno",      notes: "Intenso e profumato, note di litchi, rosa e spezie dolci tipiche del vitigno",               bottle: "16.00", glass: "" },
        { name: "KIES GEWURZTRAMINER TRENTINO DOC 0,75 L",      producer: "Cantina Roeno",      notes: "Intenso e profumato, note di litchi, rosa e spezie dolci tipiche del vitigno",               bottle: "27.00", glass: "" },
        { name: "SAUVIGNON IGP",                                producer: "",                   notes: "Intenso e profumato, aromi di foglia di pomodoro, pesca bianca ed erbe aromatiche",          bottle: "29.00", glass: "" },
        { name: "VERMENTINO DI SARDEGNA DOC",                   producer: "Cantina Audarya",    notes: "Fresco e mediterraneo, profumi di agrumi, fiori bianchi e delicata nota salina",              bottle: "25.00", glass: "" },
        { name: "RIBOLLA GIALLA COLLIO DOC",                    producer: "Cantina Formentini", notes: "Fresco e vivace, aromi di agrumi, fiori bianchi e piacevole nota minerale",                   bottle: "26.00", glass: "" },
        { name: "\"SAUVIGNON\" COLLIO DOC",                     producer: "Cantina Formentini", notes: "Aromatico e intenso, profumi di foglia di pomodoro, agrumi ed erbe aromatiche",               bottle: "26.00", glass: "" },
        { name: "\"CHARDONNAY\" COLLIO DOC",                    producer: "Cantina Formentini", notes: "Morbido e armonioso, note di frutta a polpa bianca, vaniglia delicata e un tocco minerale",  bottle: "26.00", glass: "" }
      ]
    }

  ]
};
