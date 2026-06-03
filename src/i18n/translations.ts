import type { Locale } from "./locales";

type Card = {
  title: string;
  description: string;
  badge?: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type LegalSection = {
  title: string;
  body?: string;
  items?: string[];
};

type LegalPage = {
  seo: {
    title: string;
    description: string;
  };
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export type Translation = {
  seo: {
    title: string;
    description: string;
  };
  mailtoSubject: string;
  brand: string;
  nav: {
    ariaLabel: string;
    flow: string;
    features: string;
    useCases: string;
    beta: string;
  };
  languageSelector: {
    ariaLabel: string;
  };
  cta: {
    beta: string;
    flow: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  phone: {
    ariaLabel: string;
    status: string;
    jobTitle: string;
    customer: string;
    report: string;
    pdfReady: string;
    checklist: string;
    checklistItems: string[];
    nextStep: string;
    nextStepDescription: string;
  };
  problem: {
    kicker: string;
    title: string;
    description: string;
    cards: Card[];
  };
  flow: {
    kicker: string;
    title: string;
    description: string;
    steps: string[];
  };
  features: {
    kicker: string;
    title: string;
    cards: Card[];
  };
  useCases: {
    kicker: string;
    title: string;
    cards: Card[];
  };
  difference: {
    kicker: string;
    title: string;
    description: string;
    points: string[];
  };
  betaCta: {
    kicker: string;
    title: string;
    description: string;
  };
  faq: {
    kicker: string;
    title: string;
    items: FAQ[];
  };
  legal: {
    common: {
      backHome: string;
    };
    privacy: LegalPage;
    terms: LegalPage;
  };
  footer: {
    tagline: string;
    links: {
      privacy: string;
      terms: string;
      contacts: string;
    };
  };
};

export const translations: Record<Locale, Translation> = {
  it: {
    seo: {
      title: "Worktia — Il tuo lavoro. In ordine.",
      description:
        "Worktia aiuta squadre, manutentori e tecnici a gestire lavori, foto, checklist, firme e PDF in un unico flusso pensato per il lavoro sul campo.",
    },
    mailtoSubject: "Richiesta accesso beta Worktia",
    brand: "Worktia",
    nav: {
      ariaLabel: "Navigazione principale",
      flow: "Come funziona",
      features: "Funzioni",
      useCases: "Per chi è",
      beta: "Beta",
    },
    languageSelector: {
      ariaLabel: "Seleziona lingua",
    },
    cta: {
      beta: "Richiedi accesso alla beta",
      flow: "Guarda il flusso",
    },
    hero: {
      badge: "Beta privata in preparazione",
      title: "Il tuo lavoro. In ordine.",
      subtitle:
        "Worktia aiuta squadre, manutentori e tecnici a trasformare interventi, foto, checklist e firme in rapporti ordinati e PDF professionali.",
    },
    phone: {
      ariaLabel: "Anteprima interfaccia Worktia",
      status: "In corso",
      jobTitle: "Intervento caldaia",
      customer: "Cliente: Condominio Rovere",
      report: "Rapporto",
      pdfReady: "PDF pronto",
      checklist: "Checklist",
      checklistItems: ["Foto iniziali", "Controlli completati", "Firma cliente"],
      nextStep: "Prossimo passo",
      nextStepDescription: "Archivia e prepara il flusso per fatturazione.",
    },
    problem: {
      kicker: "Il problema",
      title: "Quando il lavoro è fatto, spesso resta da rimettere tutto in ordine.",
      description:
        "Foto nei messaggi, note sparse, conferme verbali e rapportini ricopiati a fine giornata fanno perdere tempo e rendono più difficile dimostrare cosa è stato fatto.",
      cards: [
        {
          title: "Conversazioni piene di messaggi",
          description: "Le informazioni restano dentro scambi difficili da consultare.",
        },
        {
          title: "Foto sparse tra messaggi e galleria",
          description: "Le immagini non sono sempre collegate al lavoro giusto.",
        },
        {
          title: "Rapportini manuali da ricopiare",
          description: "A fine giornata serve ricostruire tutto da appunti e memoria.",
        },
        {
          title: "Clienti e conferme da inseguire",
          description: "Mancano passaggi chiari per consegna, firma e archiviazione.",
        },
      ],
    },
    flow: {
      kicker: "Come funziona",
      title: "Un flusso semplice, pensato per arrivare al report senza rincorrere pezzi.",
      description:
        "Un flusso lineare, pensato per chi lavora sul campo e non vuole perdere tempo a ricostruire l’intervento dopo.",
      steps: ["Crea lavoro", "Raccogli foto e checklist", "Registra firma o conferma", "Genera PDF", "Archivia e prepara la fatturazione"],
    },
    features: {
      kicker: "Funzioni",
      title: "Gli strumenti essenziali per documentare meglio ogni intervento.",
      cards: [
        {
          title: "Lavori e clienti",
          description: "Tieni collegati cliente, intervento, stato, indirizzo e attività.",
        },
        {
          title: "Foto ordinate per intervento",
          description: "Raccogli immagini direttamente nel contesto del lavoro.",
        },
        {
          title: "Checklist operative",
          description: "Segui attività e controlli senza fogli sparsi.",
        },
        {
          title: "Firma sul rapportino",
          description: "Raccogli una conferma visiva quando serve.",
        },
        {
          title: "PDF professionali",
          description: "Genera documenti più ordinati da condividere e archiviare.",
        },
        {
          title: "Offline-first",
          description: "Lavora anche quando la connessione non è stabile.",
        },
        {
          title: "Portale tecnico/cliente",
          description: "Previsto per ridurre installazioni e passaggi manuali.",
          badge: "in sviluppo",
        },
        {
          title: "Validazione tracciata",
          description: "Pensata per documentare meglio consegna e conferma del lavoro.",
        },
      ],
    },
    useCases: {
      kicker: "Per chi è",
      title: "Per squadre e tecnici che devono lasciare traccia chiara del lavoro svolto.",
      cards: [
        {
          title: "Manutenzione immobiliare",
          description: "Interventi in appartamenti, condomini e immobili con foto, note e rapporti ordinati.",
        },
        {
          title: "Impiantisti",
          description: "Uscite tecniche, controlli, riparazioni e conferme raccolte in un unico flusso.",
        },
        {
          title: "Facility e pulizie",
          description: "Checklist, attività ricorrenti e prove fotografiche per squadre operative.",
        },
        {
          title: "Edilizia leggera",
          description: "Piccoli cantieri, avanzamenti, sopralluoghi e consegne documentate.",
        },
        {
          title: "Ispezioni",
          description: "Controlli, verifiche e rapporti con evidenze raccolte sul posto.",
        },
      ],
    },
    difference: {
      kicker: "La differenza",
      title: "Non un gestionale generico. Un flusso operativo per documentare meglio il lavoro.",
      description:
        "Worktia nasce mobile-first per ridurre passaggi manuali e trasformare ciò che succede sul campo in materiale ordinato, leggibile e pronto per i processi interni.",
      points: ["Meno informazioni disperse", "Rapporti più facili da ricostruire", "Documenti più chiari per cliente e archivio"],
    },
    betaCta: {
      kicker: "Beta privata",
      title: "Vuoi provare Worktia quando la beta sarà pronta?",
      description:
        "Stiamo raccogliendo aziende e tecnici interessati a validare il flusso reale: lavori, foto, checklist, firma, PDF e archiviazione.",
    },
    faq: {
      kicker: "FAQ",
      title: "Domande frequenti",
      items: [
        {
          question: "È già disponibile?",
          answer:
            "Worktia è in fase beta/pre-lancio. Stiamo raccogliendo richieste da aziende e tecnici interessati a provare il flusso quando saranno aperti nuovi inviti.",
        },
        {
          question: "Serve installare l’app al cliente?",
          answer:
            "Il flusso è pensato per ridurre il carico sul cliente. Il portale tecnico/cliente è previsto proprio per limitare installazioni e passaggi manuali dove possibile.",
        },
        {
          question: "Funziona offline?",
          answer: "L’approccio previsto è offline-first per aiutare chi lavora sul campo anche in contesti con connettività non stabile.",
        },
        {
          question: "Che valore ha il PDF generato?",
          answer:
            "Il PDF aiuta a documentare l’intervento in modo ordinato, con le informazioni raccolte durante il lavoro. Non viene presentato come firma elettronica qualificata e non sostituisce consulenze legali, collaudi formali o requisiti normativi quando richiesti.",
        },
        {
          question: "Per quali aziende è pensata?",
          answer: "Per imprese e squadre operative che gestiscono interventi, manutenzioni, ispezioni, checklist, foto e rapportini da consegnare o archiviare.",
        },
      ],
    },
    legal: {
      common: {
        backHome: "Torna alla home",
      },
      privacy: {
        seo: {
          title: "Privacy | Worktia",
          description: "Informativa privacy della landing beta/pre-lancio di Worktia.",
        },
        title: "Informativa privacy",
        updated: "Ultimo aggiornamento: 2026-06-03",
        intro:
          "Questa informativa descrive in modo sintetico come possono essere trattati i dati personali nella landing beta/pre-lancio di Worktia. Non costituisce consulenza legale.",
        sections: [
          {
            title: "Chi siamo",
            body: "Worktia è un progetto in fase beta/pre-lancio dedicato alla gestione dei lavori sul campo.",
          },
          {
            title: "Ambito",
            body: "Questa informativa riguarda la landing pubblica di Worktia e le richieste beta o pre-lancio inviate via email.",
          },
          {
            title: "Cosa non copre ancora",
            body: "Questa informativa non riguarda ancora un'app completa, account pubblici, pagamenti, sincronizzazione cloud o portali cliente/tecnico, perché non sono attivi su questa landing.",
          },
          {
            title: "Quali dati possiamo trattare",
            items: [
              "dati tecnici di navigazione necessari al funzionamento del sito e dell'hosting;",
              "dati inviati volontariamente via email, per esempio nome, email, azienda, settore e messaggio;",
              "nessun pagamento, account utente o form backend attivo su questa landing.",
            ],
          },
          {
            title: "Finalità",
            items: [
              "rispondere a richieste di informazioni o accesso beta;",
              "gestire comunicazioni pre-commerciali;",
              "migliorare la comprensione dell'interesse verso Worktia;",
              "garantire sicurezza e funzionamento tecnico del sito.",
            ],
          },
          {
            title: "Cookie e tracking",
            body: "Questa landing non usa strumenti di tracking, analytics o cookie di profilazione. Se in futuro verranno introdotti strumenti di analisi o marketing, questa informativa sarà aggiornata e, dove richiesto, sarà richiesto il consenso.",
          },
          {
            title: "Base giuridica",
            items: [
              "richiesta dell'utente o misure precontrattuali per rispondere alla richiesta beta;",
              "legittimo interesse per sicurezza e funzionamento tecnico del sito;",
              "obblighi legali, dove applicabili.",
            ],
          },
          {
            title: "Conservazione",
            body: "I dati inviati via email saranno conservati per il tempo necessario a gestire la richiesta beta e le comunicazioni collegate, salvo obblighi o necessità ulteriori.",
          },
          {
            title: "Condivisione",
            body: "I dati possono essere trattati da fornitori tecnici necessari al funzionamento del sito, del deploy/repository e della posta elettronica. Non vendiamo dati personali.",
          },
          {
            title: "Trasferimenti extra SEE",
            body: "Alcuni fornitori tecnici potrebbero trattare dati fuori dallo Spazio Economico Europeo, se applicabile. In questi casi il trattamento dipende dalle garanzie e dalle condizioni previste dai rispettivi fornitori.",
          },
          {
            title: "Diritti",
            body: "L'utente può chiedere accesso, rettifica, cancellazione, limitazione, opposizione e, dove applicabile, portabilità.",
          },
          {
            title: "Aggiornamenti",
            body: "Questa informativa sarà aggiornata prima di una beta pubblica o di un lancio commerciale, se cambieranno dati trattati, funzionalità o fornitori rilevanti.",
          },
          {
            title: "Contatto",
            body: "beta@worktia.com",
          },
        ],
      },
      terms: {
        seo: {
          title: "Termini | Worktia",
          description: "Termini d'uso della landing beta/pre-lancio di Worktia.",
        },
        title: "Termini",
        updated: "Ultimo aggiornamento: 2026-06-03",
        intro:
          "Questi termini descrivono l'uso della landing beta/pre-lancio di Worktia. Non costituiscono consulenza legale.",
        sections: [
          {
            title: "Natura del sito",
            body: "Il sito presenta Worktia come prodotto in fase beta/pre-lancio.",
          },
          {
            title: "Nessuna disponibilità pubblica garantita",
            body: "L'accesso alla beta può essere limitato, rinviato o non concesso.",
          },
          {
            title: "Limiti della beta",
            body: "Eventuali accessi beta possono includere limiti funzionali, bug, interruzioni o cambiamenti senza che questo implichi disponibilità stabile del prodotto.",
          },
          {
            title: "Informazioni non contrattuali",
            body: "Le funzionalità descritte rappresentano direzione prodotto e posizionamento; alcune possono essere in sviluppo o soggette a modifica.",
          },
          {
            title: "Nessuna consulenza",
            body: "I contenuti del sito non sono consulenza legale, fiscale, tecnica o professionale.",
          },
          {
            title: "Documentazione operativa",
            body: "PDF, firme, validazioni e documentazione operativa eventualmente descritti non sostituiscono requisiti legali, collaudi formali o verifiche professionali quando richiesti.",
          },
          {
            title: "Proprietà intellettuale",
            body: "Nome, testi, design e contenuti appartengono a Worktia o ai rispettivi titolari.",
          },
          {
            title: "Uso corretto",
            body: "Non usare il sito per attività illecite, scraping abusivo, interferenze tecniche, accessi non autorizzati o comportamenti che possano danneggiare il servizio.",
          },
          {
            title: "Link e servizi terzi",
            body: "Il sito può rimandare a servizi terzi, per esempio email, hosting o strumenti tecnici. Tali servizi restano soggetti alle rispettive condizioni.",
          },
          {
            title: "Modifiche",
            body: "I testi possono essere aggiornati in futuro.",
          },
          {
            title: "Contatto",
            body: "beta@worktia.com",
          },
        ],
      },
    },
    footer: {
      tagline: "Il tuo lavoro. In ordine.",
      links: {
        privacy: "Privacy",
        terms: "Termini",
        contacts: "Contatti",
      },
    },
  },
  en: {
    seo: {
      title: "Worktia — Field work, organized.",
      description:
        "Worktia helps field teams, maintenance companies and technicians manage jobs, photos, checklists, signatures and PDFs in one workflow built for field work.",
    },
    mailtoSubject: "Worktia beta access request",
    brand: "Worktia",
    nav: {
      ariaLabel: "Main navigation",
      flow: "How it works",
      features: "Features",
      useCases: "Who it is for",
      beta: "Beta",
    },
    languageSelector: {
      ariaLabel: "Select language",
    },
    cta: {
      beta: "Request beta access",
      flow: "See the workflow",
    },
    hero: {
      badge: "Private beta in preparation",
      title: "Field work, organized.",
      subtitle:
        "Worktia helps field teams, maintenance companies and technicians turn jobs, photos, checklists and signatures into clear reports and professional PDFs.",
    },
    phone: {
      ariaLabel: "Worktia interface preview",
      status: "In progress",
      jobTitle: "Boiler service",
      customer: "Customer: Rovere Building",
      report: "Report",
      pdfReady: "PDF ready",
      checklist: "Checklist",
      checklistItems: ["Initial photos", "Checks completed", "Customer signature"],
      nextStep: "Next step",
      nextStepDescription: "Archive and prepare the billing workflow.",
    },
    problem: {
      kicker: "The problem",
      title: "The job may be done, but the paperwork is often still a mess.",
      description:
        "Photos in message threads, scattered notes, verbal confirmations and end-of-day paperwork waste time and make it harder to prove what was actually done.",
      cards: [
        {
          title: "Message threads full of updates",
          description: "Information stays inside conversations that are hard to search later.",
        },
        {
          title: "Photos scattered across messages and galleries",
          description: "Images are not always connected to the right job.",
        },
        {
          title: "Manual reports to copy again",
          description: "At the end of the day, everything has to be rebuilt from notes and memory.",
        },
        {
          title: "Customers and confirmations to chase",
          description: "Clear steps are missing for handover, signature and archiving.",
        },
      ],
    },
    flow: {
      kicker: "How it works",
      title: "A simple workflow from job to report.",
      description:
        "Built for field teams that need to document the job while the work is still fresh.",
      steps: ["Create the job", "Collect photos and checklists", "Capture a signature or confirmation", "Generate the PDF", "Archive and prepare billing"],
    },
    features: {
      kicker: "Features",
      title: "The essential tools to document every job more clearly.",
      cards: [
        {
          title: "Jobs and customers",
          description: "Keep customer, job, status, address and activities connected.",
        },
        {
          title: "Photos organized by job",
          description: "Collect images directly in the context of the work.",
        },
        {
          title: "Operational checklists",
          description: "Follow activities and checks without scattered paper.",
        },
        {
          title: "Signature on the report",
          description: "Collect a visual confirmation when needed.",
        },
        {
          title: "Professional PDFs",
          description: "Generate clearer documents to share and archive.",
        },
        {
          title: "Offline-first",
          description: "Work even when the connection is not stable.",
        },
        {
          title: "Technician/customer portal",
          description: "Planned to reduce installations and manual steps.",
          badge: "in development",
        },
        {
          title: "Tracked validation",
          description: "Designed to better document handover and work confirmation.",
        },
      ],
    },
    useCases: {
      kicker: "Who it is for",
      title: "For teams and technicians who need a clear record of completed work.",
      cards: [
        {
          title: "Property maintenance",
          description: "Jobs in apartments, buildings and properties with organized photos, notes and reports.",
        },
        {
          title: "Installers",
          description: "Technical visits, checks, repairs and confirmations collected in one workflow.",
        },
        {
          title: "Facility and cleaning",
          description: "Checklists, recurring tasks and photographic proof for operational teams.",
        },
        {
          title: "Light construction",
          description: "Small sites, progress updates, inspections and documented handovers.",
        },
        {
          title: "Inspections",
          description: "Checks, reviews and reports with evidence collected on site.",
        },
      ],
    },
    difference: {
      kicker: "The difference",
      title: "Not another generic management tool.\nA field workflow to document work better.",
      description:
        "Worktia is designed mobile-first to reduce manual steps and turn what happens in the field into organized, readable material ready for internal processes.",
      points: ["Less scattered information", "Reports that are easier to produce", "Clearer documents for customers and internal records"],
    },
    betaCta: {
      kicker: "Private beta",
      title: "Do you want to try Worktia when the beta is ready?",
      description:
        "We are collecting companies and technicians interested in validating the real workflow: jobs, photos, checklists, signature, PDF and archiving.",
    },
    faq: {
      kicker: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "Is it already available?",
          answer:
            "Worktia is in beta/pre-launch. We are collecting requests from companies and technicians interested in trying the workflow when new invitations open.",
        },
        {
          question: "Does the customer need to install the app?",
          answer:
            "The workflow is designed to reduce the customer's effort. The technician/customer portal is planned specifically to limit installations and manual steps where possible.",
        },
        {
          question: "Does it work offline?",
          answer: "The planned approach is offline-first to help field teams work even in places where connectivity is not stable.",
        },
        {
          question: "What value does the generated PDF have?",
          answer:
            "The PDF helps document the job in an organized way, using the information collected during the work. It is not presented as a qualified electronic signature and does not replace legal advice, formal acceptance procedures or regulatory requirements when required.",
        },
        {
          question: "What companies is it designed for?",
          answer: "For companies and operational teams managing jobs, maintenance, inspections, checklists, photos and reports to deliver or archive.",
        },
      ],
    },
    legal: {
      common: {
        backHome: "Back to home",
      },
      privacy: {
        seo: {
          title: "Privacy | Worktia",
          description: "Privacy notice for the Worktia beta/pre-launch landing page.",
        },
        title: "Privacy notice",
        updated: "Last updated: 2026-06-03",
        intro:
          "This notice briefly describes how personal data may be processed on the Worktia beta/pre-launch landing page. It is not legal advice.",
        sections: [
          {
            title: "Who we are",
            body: "Worktia is a beta/pre-launch project dedicated to field work management.",
          },
          {
            title: "Scope",
            body: "This notice covers Worktia's public landing page and beta or pre-launch requests sent by email.",
          },
          {
            title: "What it does not cover yet",
            body: "This notice does not yet cover a complete app, public accounts, payments, cloud sync or customer/technician portals, because they are not active on this landing page.",
          },
          {
            title: "Data we may process",
            items: [
              "technical navigation data necessary for the operation of the site and hosting;",
              "data voluntarily sent by email, such as name, email, company, sector and message;",
              "no payments, user accounts or active backend forms on this landing page.",
            ],
          },
          {
            title: "Purposes",
            items: [
              "responding to information or beta access requests;",
              "managing pre-commercial communications;",
              "improving our understanding of interest in Worktia;",
              "ensuring the security and technical operation of the site.",
            ],
          },
          {
            title: "Cookies and tracking",
            body: "This landing page does not use tracking tools, analytics or profiling cookies. If analytics or marketing tools are introduced in the future, this notice will be updated and, where required, consent will be requested.",
          },
          {
            title: "Legal basis",
            items: [
              "the user's request or pre-contractual steps to respond to the beta request;",
              "legitimate interest for the security and technical operation of the site;",
              "legal obligations, where applicable.",
            ],
          },
          {
            title: "Retention",
            body: "Data sent by email will be retained for the time necessary to handle the beta request and related communications, unless further obligations or needs apply.",
          },
          {
            title: "Sharing",
            body: "Data may be processed by technical providers necessary for the operation of the site, deploy/repository and email. We do not sell personal data.",
          },
          {
            title: "Transfers outside the EEA",
            body: "Some technical providers may process data outside the European Economic Area, where applicable. In those cases, processing depends on the safeguards and terms provided by the relevant providers.",
          },
          {
            title: "Rights",
            body: "Users may request access, rectification, deletion, restriction, objection and, where applicable, portability.",
          },
          {
            title: "Updates",
            body: "This notice will be updated before a public beta or commercial launch if the processed data, features or relevant providers change.",
          },
          {
            title: "Contact",
            body: "beta@worktia.com",
          },
        ],
      },
      terms: {
        seo: {
          title: "Terms | Worktia",
          description: "Terms of use for the Worktia beta/pre-launch landing page.",
        },
        title: "Terms",
        updated: "Last updated: 2026-06-03",
        intro:
          "These terms describe use of the Worktia beta/pre-launch landing page. They are not legal advice.",
        sections: [
          {
            title: "Nature of the site",
            body: "The site presents Worktia as a product in beta/pre-launch phase.",
          },
          {
            title: "No guaranteed public availability",
            body: "Access to the beta may be limited, postponed or not granted.",
          },
          {
            title: "Beta limits",
            body: "Any beta access may include functional limits, bugs, interruptions or changes, and does not imply stable product availability.",
          },
          {
            title: "Non-contractual information",
            body: "The features described represent product direction and positioning; some may be in development or subject to change.",
          },
          {
            title: "No advice",
            body: "The site's content is not legal, tax, technical or professional advice.",
          },
          {
            title: "Operational documentation",
            body: "PDFs, signatures, validations and operational documentation that may be described do not replace legal requirements, formal acceptance procedures or professional checks where required.",
          },
          {
            title: "Intellectual property",
            body: "The name, texts, design and content belong to Worktia or their respective owners.",
          },
          {
            title: "Proper use",
            body: "Do not use the site for unlawful activities, abusive scraping, technical interference, unauthorized access or behavior that may damage the service.",
          },
          {
            title: "Third-party links and services",
            body: "The site may refer to third-party services, such as email, hosting or technical tools. Those services remain subject to their own terms.",
          },
          {
            title: "Changes",
            body: "These texts may be updated in the future.",
          },
          {
            title: "Contact",
            body: "beta@worktia.com",
          },
        ],
      },
    },
    footer: {
      tagline: "Field work, organized.",
      links: {
        privacy: "Privacy",
        terms: "Terms",
        contacts: "Contact",
      },
    },
  },
  es: {
    seo: {
      title: "Worktia — Tu trabajo de campo, en orden.",
      description:
        "Worktia ayuda a equipos de mantenimiento y técnicos de campo a gestionar intervenciones, fotos, checklists, firmas y PDF en un único flujo de trabajo.",
    },
    mailtoSubject: "Solicitud de acceso beta Worktia",
    brand: "Worktia",
    nav: {
      ariaLabel: "Navegación principal",
      flow: "Cómo funciona",
      features: "Funciones",
      useCases: "Para quién",
      beta: "Beta",
    },
    languageSelector: {
      ariaLabel: "Seleccionar idioma",
    },
    cta: {
      beta: "Solicitar acceso a la beta",
      flow: "Ver el flujo",
    },
    hero: {
      badge: "Beta privada en preparación",
      title: "Tu trabajo de campo, en orden.",
      subtitle:
        "Worktia ayuda a equipos de mantenimiento y técnicos de campo a convertir intervenciones, fotos, checklists y firmas en informes claros y PDF profesionales.",
    },
    phone: {
      ariaLabel: "Vista previa de la interfaz Worktia",
      status: "En curso",
      jobTitle: "Intervención de caldera",
      customer: "Cliente: Comunidad Rovere",
      report: "Informe",
      pdfReady: "PDF listo",
      checklist: "Checklist",
      checklistItems: ["Fotos iniciales", "Controles completados", "Firma del cliente"],
      nextStep: "Siguiente paso",
      nextStepDescription: "Archivar y preparar el flujo para facturación.",
    },
    problem: {
      kicker: "El problema",
      title: "La intervención puede estar terminada, pero la documentación suele quedar desordenada.",
      description:
        "Fotos en conversaciones, notas dispersas, confirmaciones verbales e informes preparados al final del día hacen perder tiempo y dificultan demostrar qué se hizo realmente.",
      cards: [
        {
          title: "Conversaciones llenas de mensajes",
          description: "La información queda dentro de conversaciones difíciles de consultar.",
        },
        {
          title: "Fotos dispersas entre mensajes y galería",
          description: "Las imágenes no siempre están conectadas con el trabajo correcto.",
        },
        {
          title: "Informes manuales que rehacer",
          description: "Al final del día hay que reconstruir todo desde notas y memoria.",
        },
        {
          title: "Clientes y confirmaciones pendientes",
          description: "Faltan pasos claros para entrega, firma y archivo.",
        },
      ],
    },
    flow: {
      kicker: "Cómo funciona",
      title: "Un flujo sencillo: de la intervención al informe.",
      description:
        "Un flujo lineal para quien trabaja en campo y no quiere perder tiempo reconstruyendo la intervención después.",
      steps: ["Crear la intervención", "Recoger fotos y checklists", "Registrar firma o confirmación", "Generar PDF", "Archivar y preparar facturación"],
    },
    features: {
      kicker: "Funciones",
      title: "Las herramientas esenciales para documentar mejor cada intervención.",
      cards: [
        {
          title: "Intervenciones y clientes",
          description: "Mantén conectados cliente, intervención, estado, dirección y actividades.",
        },
        {
          title: "Fotos ordenadas por intervención",
          description: "Recoge imágenes directamente en el contexto del trabajo.",
        },
        {
          title: "Checklists operativas",
          description: "Sigue actividades y controles sin hojas dispersas.",
        },
        {
          title: "Firma en el informe",
          description: "Recoge una confirmación visual cuando sea necesario.",
        },
        {
          title: "PDF profesionales",
          description: "Genera documentos más ordenados para compartir y archivar.",
        },
        {
          title: "Offline-first",
          description: "Trabaja incluso cuando la conexión no es estable.",
        },
        {
          title: "Portal técnico/cliente",
          description: "Previsto para reducir instalaciones y pasos manuales.",
          badge: "en desarrollo",
        },
        {
          title: "Validación trazada",
          description: "Pensada para documentar mejor la entrega y confirmación del trabajo.",
        },
      ],
    },
    useCases: {
      kicker: "Para quién",
      title: "Para equipos y técnicos que necesitan dejar una traza clara del trabajo realizado.",
      cards: [
        {
          title: "Mantenimiento inmobiliario",
          description: "Intervenciones en viviendas, comunidades e inmuebles con fotos, notas e informes ordenados.",
        },
        {
          title: "Instaladores",
          description: "Salidas técnicas, controles, reparaciones y confirmaciones recogidas en un único flujo.",
        },
        {
          title: "Servicios generales y limpieza",
          description: "Checklists, tareas recurrentes y pruebas fotográficas para equipos operativos.",
        },
        {
          title: "Obras menores y reformas",
          description: "Pequeñas obras, avances, visitas y entregas documentadas.",
        },
        {
          title: "Inspecciones",
          description: "Controles, verificaciones e informes con evidencias recogidas en sitio.",
        },
      ],
    },
    difference: {
      kicker: "La diferencia",
      title: "No es otro gestor genérico.\nEs un flujo operativo para documentar mejor el trabajo de campo.",
      description:
        "Worktia nace mobile-first para reducir pasos manuales y transformar lo que ocurre en campo en material ordenado, legible y listo para procesos internos.",
      points: ["Menos información dispersa", "Informes más fáciles de reconstruir", "Documentos más claros para cliente y archivo"],
    },
    betaCta: {
      kicker: "Beta privada",
      title: "¿Quieres probar Worktia cuando la beta esté lista?",
      description:
        "Estamos reuniendo empresas y técnicos interesados en validar el flujo real: intervenciones, fotos, checklists, firma, PDF y archivo.",
    },
    faq: {
      kicker: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Ya está disponible?",
          answer:
            "Worktia está en fase beta/prelanzamiento. Estamos recogiendo solicitudes de empresas y técnicos interesados en probar el flujo cuando se abran nuevas invitaciones.",
        },
        {
          question: "¿El cliente necesita instalar la app?",
          answer:
            "El flujo está pensado para reducir la carga del cliente. El portal técnico/cliente está previsto precisamente para limitar instalaciones y pasos manuales cuando sea posible.",
        },
        {
          question: "¿Funciona sin conexión?",
          answer: "El enfoque previsto es offline-first para ayudar a quienes trabajan en campo incluso en contextos con conectividad inestable.",
        },
        {
          question: "¿Qué valor tiene el PDF generado?",
          answer:
            "El PDF ayuda a documentar la intervención de forma ordenada, con la información recogida durante el trabajo. No se presenta como firma electrónica cualificada y no sustituye asesoramiento legal, recepciones formales ni requisitos normativos cuando sean necesarios.",
        },
        {
          question: "¿Para qué empresas está pensada?",
          answer: "Para empresas y equipos operativos que gestionan intervenciones, mantenimientos, inspecciones, checklists, fotos e informes para entregar o archivar.",
        },
      ],
    },
    legal: {
      common: {
        backHome: "Volver al inicio",
      },
      privacy: {
        seo: {
          title: "Privacidad | Worktia",
          description: "Información de privacidad de la landing beta/prelanzamiento de Worktia.",
        },
        title: "Información de privacidad",
        updated: "Última actualización: 2026-06-03",
        intro:
          "Esta información describe de forma sintética cómo pueden tratarse los datos personales en la landing beta/prelanzamiento de Worktia. No constituye asesoramiento legal.",
        sections: [
          {
            title: "Quiénes somos",
            body: "Worktia es un proyecto en fase beta/prelanzamiento dedicado a la gestión del trabajo de campo.",
          },
          {
            title: "Ámbito",
            body: "Esta información cubre la landing pública de Worktia y las solicitudes beta o de prelanzamiento enviadas por email.",
          },
          {
            title: "Qué no cubre todavía",
            body: "Esta información todavía no cubre una app completa, cuentas públicas, pagos, sincronización cloud o portales cliente/técnico, porque no están activos en esta landing.",
          },
          {
            title: "Qué datos podemos tratar",
            items: [
              "datos técnicos de navegación necesarios para el funcionamiento del sitio y del hosting;",
              "datos enviados voluntariamente por email, por ejemplo nombre, email, empresa, sector y mensaje;",
              "ningún pago, cuenta de usuario o formulario backend activo en esta landing.",
            ],
          },
          {
            title: "Finalidades",
            items: [
              "responder a solicitudes de información o acceso beta;",
              "gestionar comunicaciones precomerciales;",
              "mejorar la comprensión del interés hacia Worktia;",
              "garantizar la seguridad y el funcionamiento técnico del sitio.",
            ],
          },
          {
            title: "Cookies y tracking",
            body: "Esta landing no utiliza herramientas de tracking, analytics ni cookies de perfilado. Si en el futuro se introducen herramientas de análisis o marketing, esta información se actualizará y, cuando sea necesario, se solicitará el consentimiento.",
          },
          {
            title: "Base jurídica",
            items: [
              "solicitud del usuario o medidas precontractuales para responder a la solicitud beta;",
              "interés legítimo para la seguridad y el funcionamiento técnico del sitio;",
              "obligaciones legales, cuando correspondan.",
            ],
          },
          {
            title: "Conservación",
            body: "Los datos enviados por email se conservarán durante el tiempo necesario para gestionar la solicitud beta y las comunicaciones relacionadas, salvo obligaciones o necesidades adicionales.",
          },
          {
            title: "Compartición",
            body: "Los datos pueden ser tratados por proveedores técnicos necesarios para el funcionamiento del sitio, del deploy/repositorio y del correo electrónico. No vendemos datos personales.",
          },
          {
            title: "Transferencias fuera del EEE",
            body: "Algunos proveedores técnicos podrían tratar datos fuera del Espacio Económico Europeo, si corresponde. En esos casos, el tratamiento depende de las garantías y condiciones previstas por los respectivos proveedores.",
          },
          {
            title: "Derechos",
            body: "El usuario puede solicitar acceso, rectificación, supresión, limitación, oposición y, cuando corresponda, portabilidad.",
          },
          {
            title: "Actualizaciones",
            body: "Esta información se actualizará antes de una beta pública o de un lanzamiento comercial si cambian los datos tratados, las funcionalidades o los proveedores relevantes.",
          },
          {
            title: "Contacto",
            body: "beta@worktia.com",
          },
        ],
      },
      terms: {
        seo: {
          title: "Términos | Worktia",
          description: "Términos de uso de la landing beta/prelanzamiento de Worktia.",
        },
        title: "Términos",
        updated: "Última actualización: 2026-06-03",
        intro:
          "Estos términos describen el uso de la landing beta/prelanzamiento de Worktia. No constituyen asesoramiento legal.",
        sections: [
          {
            title: "Naturaleza del sitio",
            body: "El sitio presenta Worktia como producto en fase beta/prelanzamiento.",
          },
          {
            title: "Ninguna disponibilidad pública garantizada",
            body: "El acceso a la beta puede ser limitado, pospuesto o no concedido.",
          },
          {
            title: "Límites de la beta",
            body: "Cualquier acceso beta puede incluir límites funcionales, bugs, interrupciones o cambios, sin que esto implique disponibilidad estable del producto.",
          },
          {
            title: "Información no contractual",
            body: "Las funcionalidades descritas representan dirección de producto y posicionamiento; algunas pueden estar en desarrollo o sujetas a modificación.",
          },
          {
            title: "Ningún asesoramiento",
            body: "Los contenidos del sitio no son asesoramiento legal, fiscal, técnico o profesional.",
          },
          {
            title: "Documentación operativa",
            body: "Los PDF, firmas, validaciones y documentación operativa que puedan describirse no sustituyen requisitos legales, recepciones formales o verificaciones profesionales cuando sean necesarias.",
          },
          {
            title: "Propiedad intelectual",
            body: "El nombre, los textos, el diseño y los contenidos pertenecen a Worktia o a sus respectivos titulares.",
          },
          {
            title: "Uso correcto",
            body: "No utilices el sitio para actividades ilícitas, scraping abusivo, interferencias técnicas, accesos no autorizados o comportamientos que puedan dañar el servicio.",
          },
          {
            title: "Enlaces y servicios de terceros",
            body: "El sitio puede remitir a servicios de terceros, por ejemplo email, hosting o herramientas técnicas. Dichos servicios quedan sujetos a sus propias condiciones.",
          },
          {
            title: "Modificaciones",
            body: "Los textos pueden actualizarse en el futuro.",
          },
          {
            title: "Contacto",
            body: "beta@worktia.com",
          },
        ],
      },
    },
    footer: {
      tagline: "Tu trabajo, en orden.",
      links: {
        privacy: "Privacidad",
        terms: "Términos",
        contacts: "Contacto",
      },
    },
  },
  fr: {
    seo: {
      title: "Worktia — Vos interventions, enfin organisées.",
      description:
        "Worktia aide les équipes terrain, les entreprises de maintenance et les techniciens à gérer interventions, photos, listes de contrôle, signatures et PDF dans un seul flux.",
    },
    mailtoSubject: "Demande d’accès bêta Worktia",
    brand: "Worktia",
    nav: {
      ariaLabel: "Navigation principale",
      flow: "Fonctionnement",
      features: "Fonctions",
      useCases: "Pour qui",
      beta: "Bêta",
    },
    languageSelector: {
      ariaLabel: "Sélectionner la langue",
    },
    cta: {
      beta: "Demander l’accès bêta",
      flow: "Voir le flux",
    },
    hero: {
      badge: "Bêta privée en préparation",
      title: "Vos interventions, enfin organisées.",
      subtitle:
        "Worktia aide les équipes terrain, les entreprises de maintenance et les techniciens à transformer interventions, photos, listes de contrôle et signatures en rapports clairs et PDF professionnels.",
    },
    phone: {
      ariaLabel: "Aperçu de l’interface Worktia",
      status: "En cours",
      jobTitle: "Intervention chaudière",
      customer: "Client : Immeuble Rovere",
      report: "Rapport",
      pdfReady: "PDF prêt",
      checklist: "Liste de contrôle",
      checklistItems: ["Photos initiales", "Contrôles terminés", "Signature client"],
      nextStep: "Étape suivante",
      nextStepDescription: "Archiver et préparer le flux pour la facturation.",
    },
    problem: {
      kicker: "Le problème",
      title: "L’intervention est terminée, mais le dossier reste souvent à remettre en ordre.",
      description:
        "Photos dans les conversations, notes dispersées, confirmations verbales et rapports rédigés en fin de journée font perdre du temps et compliquent la preuve du travail réalisé.",
      cards: [
        {
          title: "Conversations pleines de messages",
          description: "Les informations restent dans des échanges difficiles à consulter.",
        },
        {
          title: "Photos dispersées entre messages et galerie",
          description: "Les images ne sont pas toujours reliées à la bonne intervention.",
        },
        {
          title: "Rapports manuels à rédiger",
          description: "En fin de journée, il faut tout reconstruire à partir de notes et de mémoire.",
        },
        {
          title: "Clients et confirmations à relancer",
          description: "Il manque des étapes claires pour la remise, la signature et l’archivage.",
        },
      ],
    },
    flow: {
      kicker: "Fonctionnement",
      title: "Un flux simple, de l’intervention au rapport.",
      description:
        "Pensé pour les équipes terrain qui veulent documenter le travail au bon moment, sans devoir tout reconstruire ensuite.",
      steps: ["Créer l’intervention", "Collecter photos et listes de contrôle", "Enregistrer une signature ou confirmation", "Générer le PDF", "Archiver et préparer la facturation"],
    },
    features: {
      kicker: "Fonctions",
      title: "Les outils essentiels pour mieux documenter chaque intervention.",
      cards: [
        {
          title: "Interventions et clients",
          description: "Gardez client, intervention, statut, adresse et activités connectés.",
        },
        {
          title: "Photos classées par intervention",
          description: "Collectez les images directement dans le contexte du travail.",
        },
        {
          title: "Listes de contrôle opérationnelles",
          description: "Suivez activités et contrôles sans feuilles dispersées.",
        },
        {
          title: "Signature sur le rapport",
          description: "Recueillez une confirmation visuelle lorsque nécessaire.",
        },
        {
          title: "PDF professionnels",
          description: "Générez des documents plus clairs à partager et archiver.",
        },
        {
          title: "Offline-first",
          description: "Travaillez même lorsque la connexion n’est pas stable.",
        },
        {
          title: "Portail technicien/client",
          description: "Prévu pour réduire les installations et les étapes manuelles.",
          badge: "en développement",
        },
        {
          title: "Validation tracée",
          description: "Pensée pour mieux documenter la remise et la confirmation du travail.",
        },
      ],
    },
    useCases: {
      kicker: "Pour qui",
      title: "Pour les équipes et techniciens qui doivent laisser une trace claire du travail effectué.",
      cards: [
        {
          title: "Maintenance immobilière",
          description: "Interventions dans appartements, immeubles et biens avec photos, notes et rapports ordonnés.",
        },
        {
          title: "Installateurs",
          description: "Sorties techniques, contrôles, réparations et confirmations réunis dans un seul flux.",
        },
        {
          title: "Facility et nettoyage",
          description: "Listes de contrôle, tâches récurrentes et preuves photo pour équipes opérationnelles.",
        },
        {
          title: "Petits chantiers",
          description: "Petits chantiers, avancements, visites et remises documentées.",
        },
        {
          title: "Inspections",
          description: "Contrôles, vérifications et rapports avec preuves collectées sur place.",
        },
      ],
    },
    difference: {
      kicker: "La différence",
      title: "Pas un logiciel de gestion générique.\nUn flux terrain pour mieux documenter le travail.",
      description:
        "Worktia est conçu mobile-first pour réduire les étapes manuelles et transformer ce qui se passe sur le terrain en documents clairs, lisibles et prêts pour vos processus internes.",
      points: ["Moins d’informations dispersées", "Rapports plus faciles à reconstruire", "Documents plus clairs pour le client et l’archive"],
    },
    betaCta: {
      kicker: "Bêta privée",
      title: "Voulez-vous essayer Worktia quand la bêta sera prête ?",
      description:
        "Nous recueillons des entreprises et techniciens intéressés par la validation du flux réel : interventions, photos, listes de contrôle, signature, PDF et archivage.",
    },
    faq: {
      kicker: "FAQ",
      title: "Questions fréquentes",
      items: [
        {
          question: "Est-ce déjà disponible ?",
          answer:
            "Worktia est en phase bêta/pré-lancement. Nous recueillons les demandes d’entreprises et de techniciens intéressés par l’essai du flux lorsque de nouvelles invitations seront ouvertes.",
        },
        {
          question: "Le client doit-il installer l’application ?",
          answer:
            "Le flux est pensé pour réduire l’effort côté client. Le portail technicien/client est prévu précisément pour limiter les installations et les étapes manuelles lorsque possible.",
        },
        {
          question: "Cela fonctionne-t-il hors ligne ?",
          answer: "L’approche prévue est offline-first pour aider les équipes terrain même lorsque la connectivité n’est pas stable.",
        },
        {
          question: "Quelle est la valeur du PDF généré ?",
          answer:
            "Le PDF aide à documenter l’intervention de manière structurée, avec les informations collectées pendant le travail. Il n’est pas présenté comme une signature électronique qualifiée et ne remplace pas un conseil juridique, une réception formelle ou des exigences réglementaires lorsque celles-ci sont requises.",
        },
        {
          question: "Pour quelles entreprises est-ce pensé ?",
          answer: "Pour les entreprises et équipes opérationnelles qui gèrent interventions, maintenance, inspections, listes de contrôle, photos et rapports à remettre ou archiver.",
        },
      ],
    },
    legal: {
      common: {
        backHome: "Retour à l'accueil",
      },
      privacy: {
        seo: {
          title: "Confidentialité | Worktia",
          description: "Notice de confidentialité de la landing bêta/pré-lancement de Worktia.",
        },
        title: "Notice de confidentialité",
        updated: "Dernière mise à jour : 2026-06-03",
        intro:
          "Cette notice décrit de manière synthétique comment les données personnelles peuvent être traitées sur la landing bêta/pré-lancement de Worktia. Elle ne constitue pas un conseil juridique.",
        sections: [
          {
            title: "Qui sommes-nous",
            body: "Worktia est un projet en phase bêta/pré-lancement dédié à la gestion des interventions sur le terrain.",
          },
          {
            title: "Périmètre",
            body: "Cette notice couvre la landing publique de Worktia et les demandes bêta ou pré-lancement envoyées par email.",
          },
          {
            title: "Ce qu'elle ne couvre pas encore",
            body: "Cette notice ne couvre pas encore une application complète, des comptes publics, des paiements, une synchronisation cloud ou des portails client/technicien, car ils ne sont pas actifs sur cette landing.",
          },
          {
            title: "Données que nous pouvons traiter",
            items: [
              "données techniques de navigation nécessaires au fonctionnement du site et de l'hébergement ;",
              "données envoyées volontairement par email, par exemple nom, email, entreprise, secteur et message ;",
              "aucun paiement, compte utilisateur ou formulaire backend actif sur cette landing.",
            ],
          },
          {
            title: "Finalités",
            items: [
              "répondre aux demandes d'information ou d'accès bêta ;",
              "gérer les communications précommerciales ;",
              "améliorer la compréhension de l'intérêt pour Worktia ;",
              "garantir la sécurité et le fonctionnement technique du site.",
            ],
          },
          {
            title: "Cookies et tracking",
            body: "Cette landing n'utilise pas d'outils de tracking, d'analytics ni de cookies de profilage. Si des outils d'analyse ou de marketing sont introduits à l'avenir, cette notice sera mise à jour et, lorsque cela sera requis, le consentement sera demandé.",
          },
          {
            title: "Base juridique",
            items: [
              "demande de l'utilisateur ou mesures précontractuelles pour répondre à la demande bêta ;",
              "intérêt légitime pour la sécurité et le fonctionnement technique du site ;",
              "obligations légales, le cas échéant.",
            ],
          },
          {
            title: "Conservation",
            body: "Les données envoyées par email seront conservées pendant le temps nécessaire au traitement de la demande bêta et des communications liées, sauf obligations ou besoins supplémentaires.",
          },
          {
            title: "Partage",
            body: "Les données peuvent être traitées par des fournisseurs techniques nécessaires au fonctionnement du site, du déploiement/référentiel et de la messagerie électronique. Nous ne vendons pas de données personnelles.",
          },
          {
            title: "Transferts hors EEE",
            body: "Certains fournisseurs techniques peuvent traiter des données hors de l'Espace économique européen, le cas échéant. Dans ces cas, le traitement dépend des garanties et conditions prévues par les fournisseurs concernés.",
          },
          {
            title: "Droits",
            body: "L'utilisateur peut demander l'accès, la rectification, l'effacement, la limitation, l'opposition et, le cas échéant, la portabilité.",
          },
          {
            title: "Mises à jour",
            body: "Cette notice sera mise à jour avant une bêta publique ou un lancement commercial si les données traitées, les fonctionnalités ou les fournisseurs pertinents changent.",
          },
          {
            title: "Contact",
            body: "beta@worktia.com",
          },
        ],
      },
      terms: {
        seo: {
          title: "Conditions | Worktia",
          description: "Conditions d'utilisation de la landing bêta/pré-lancement de Worktia.",
        },
        title: "Conditions",
        updated: "Dernière mise à jour : 2026-06-03",
        intro:
          "Ces conditions décrivent l'utilisation de la landing bêta/pré-lancement de Worktia. Elles ne constituent pas un conseil juridique.",
        sections: [
          {
            title: "Nature du site",
            body: "Le site présente Worktia comme un produit en phase bêta/pré-lancement.",
          },
          {
            title: "Aucune disponibilité publique garantie",
            body: "L'accès à la bêta peut être limité, reporté ou non accordé.",
          },
          {
            title: "Limites de la bêta",
            body: "Tout accès bêta peut inclure des limites fonctionnelles, des bugs, des interruptions ou des changements, sans impliquer une disponibilité stable du produit.",
          },
          {
            title: "Informations non contractuelles",
            body: "Les fonctionnalités décrites représentent une direction produit et un positionnement ; certaines peuvent être en développement ou sujettes à modification.",
          },
          {
            title: "Aucun conseil",
            body: "Les contenus du site ne constituent pas un conseil juridique, fiscal, technique ou professionnel.",
          },
          {
            title: "Documentation opérationnelle",
            body: "Les PDF, signatures, validations et documentations opérationnelles éventuellement décrits ne remplacent pas les exigences légales, réceptions formelles ou vérifications professionnelles lorsqu'elles sont requises.",
          },
          {
            title: "Propriété intellectuelle",
            body: "Le nom, les textes, le design et les contenus appartiennent à Worktia ou à leurs titulaires respectifs.",
          },
          {
            title: "Utilisation correcte",
            body: "N'utilisez pas le site pour des activités illicites, du scraping abusif, des interférences techniques, des accès non autorisés ou des comportements susceptibles d'endommager le service.",
          },
          {
            title: "Liens et services tiers",
            body: "Le site peut renvoyer vers des services tiers, par exemple email, hébergement ou outils techniques. Ces services restent soumis à leurs propres conditions.",
          },
          {
            title: "Modifications",
            body: "Les textes peuvent être mis à jour à l'avenir.",
          },
          {
            title: "Contact",
            body: "beta@worktia.com",
          },
        ],
      },
    },
    footer: {
      tagline: "Vos interventions, enfin organisées.",
      links: {
        privacy: "Confidentialité",
        terms: "Conditions",
        contacts: "Contact",
      },
    },
  },
  de: {
    seo: {
      title: "Worktia — Ihre Außendienstarbeit, organisiert.",
      description:
        "Worktia hilft Außendienstteams, Wartungsbetrieben und Technikern, Aufträge, Fotos, Checklisten, Unterschriften und PDFs in einem einzigen Ablauf zu verwalten.",
    },
    mailtoSubject: "Anfrage für Worktia Beta-Zugang",
    brand: "Worktia",
    nav: {
      ariaLabel: "Hauptnavigation",
      flow: "So funktioniert es",
      features: "Funktionen",
      useCases: "Für wen",
      beta: "Beta",
    },
    languageSelector: {
      ariaLabel: "Sprache auswählen",
    },
    cta: {
      beta: "Beta-Zugang anfragen",
      flow: "Ablauf ansehen",
    },
    hero: {
      badge: "Private Beta in Vorbereitung",
      title: "Ihre Außendienstarbeit, organisiert.",
      subtitle:
        "Worktia hilft Außendienstteams, Wartungsbetrieben und Technikern, Aufträge, Fotos, Checklisten und Unterschriften in klare Berichte und professionelle PDFs zu verwandeln.",
    },
    phone: {
      ariaLabel: "Vorschau der Worktia-Oberfläche",
      status: "In Arbeit",
      jobTitle: "Heizungswartung",
      customer: "Kunde: Gebäude Rovere",
      report: "Bericht",
      pdfReady: "PDF bereit",
      checklist: "Checkliste",
      checklistItems: ["Startfotos", "Prüfungen abgeschlossen", "Kundenunterschrift"],
      nextStep: "Nächster Schritt",
      nextStepDescription: "Archivieren und Ablauf für die Abrechnung vorbereiten.",
    },
    problem: {
      kicker: "Das Problem",
      title: "Der Einsatz ist erledigt, aber die Dokumentation bleibt oft ungeordnet.",
      description:
        "Fotos in Nachrichtenverläufen, verstreute Notizen, mündliche Bestätigungen und Berichte am Tagesende kosten Zeit und erschweren den Nachweis der geleisteten Arbeit.",
      cards: [
        {
          title: "Nachrichtenverläufe voller Details",
          description: "Informationen bleiben in Unterhaltungen, die später schwer zu durchsuchen sind.",
        },
        {
          title: "Fotos verteilt auf Nachrichten und Galerie",
          description: "Bilder sind nicht immer mit dem richtigen Auftrag verbunden.",
        },
        {
          title: "Manuelle Berichte zum Abschreiben",
          description: "Am Tagesende muss alles aus Notizen und Erinnerung rekonstruiert werden.",
        },
        {
          title: "Kunden und Bestätigungen nachverfolgen",
          description: "Klare Schritte für Übergabe, Unterschrift und Archivierung fehlen.",
        },
      ],
    },
    flow: {
      kicker: "So funktioniert es",
      title: "Ein einfacher Ablauf: vom Auftrag zum Bericht.",
      description:
        "Für Außendienstteams, die den Einsatz direkt dokumentieren möchten, statt ihn später mühsam zu rekonstruieren.",
      steps: ["Auftrag erstellen", "Fotos und Checklisten sammeln", "Unterschrift oder Bestätigung erfassen", "PDF erzeugen", "Archivieren und Abrechnung vorbereiten"],
    },
    features: {
      kicker: "Funktionen",
      title: "Die wichtigsten Werkzeuge, um jeden Einsatz besser zu dokumentieren.",
      cards: [
        {
          title: "Aufträge und Kunden",
          description: "Kunde, Auftrag, Status, Adresse und Aktivitäten bleiben verbunden.",
        },
        {
          title: "Fotos pro Auftrag",
          description: "Fotos werden direkt im Kontext des Auftrags gesammelt.",
        },
        {
          title: "Checklisten für den Einsatz",
          description: "Aufgaben und Prüfungen bleiben nachvollziehbar, ohne verstreute Zettel.",
        },
        {
          title: "Unterschrift im Bericht",
          description: "Bei Bedarf wird eine visuelle Bestätigung erfasst.",
        },
        {
          title: "Professionelle PDFs",
          description: "Klarere Dokumente für Weitergabe und Archivierung.",
        },
        {
          title: "Offline-first",
          description: "Für Einsätze, bei denen die Verbindung nicht immer stabil ist.",
        },
        {
          title: "Techniker-/Kundenportal",
          description: "Geplant, um Installationen und manuelle Schritte zu reduzieren.",
          badge: "in Entwicklung",
        },
        {
          title: "Nachverfolgte Bestätigung",
          description: "Gedacht, um Übergabe und Arbeitsbestätigung besser zu dokumentieren.",
        },
      ],
    },
    useCases: {
      kicker: "Für wen",
      title: "Für Teams und Techniker, die eine klare Spur erledigter Arbeit brauchen.",
      cards: [
        {
          title: "Immobilienservice",
          description: "Einsätze in Wohnungen, Gebäuden und Immobilien mit geordneten Fotos, Notizen und Berichten.",
        },
        {
          title: "Handwerks- und Installationsbetriebe",
          description: "Technische Einsätze, Prüfungen, Reparaturen und Bestätigungen in einem Ablauf.",
        },
        {
          title: "Facility Management und Reinigung",
          description: "Checklisten, wiederkehrende Aufgaben und Fotobelege für operative Teams.",
        },
        {
          title: "Kleine Baustellen und Renovierungen",
          description: "Kleine Baustellen, Fortschritte, Begehungen und dokumentierte Übergaben.",
        },
        {
          title: "Inspektionen und Kontrollen",
          description: "Kontrollen, Prüfungen und Berichte mit vor Ort gesammelten Nachweisen.",
        },
      ],
    },
    difference: {
      kicker: "Der Unterschied",
      title: "Kein generisches Verwaltungstool.\nEin Außendienst-Workflow für bessere Dokumentation.",
      description:
        "Worktia ist mobile-first konzipiert, um manuelle Schritte zu reduzieren und Außendiensteinsätze in klare, lesbare Unterlagen für Kunden und interne Prozesse zu verwandeln.",
      points: ["Weniger verstreute Informationen", "Berichte leichter rekonstruieren", "Klarere Dokumente für Kunden und Archiv"],
    },
    betaCta: {
      kicker: "Private Beta",
      title: "Möchten Sie Worktia testen, sobald die Beta bereit ist?",
      description:
        "Wir sammeln Unternehmen und Techniker, die den realen Ablauf in der Praxis testen möchten: Aufträge, Fotos, Checklisten, Unterschrift, PDF und Archivierung.",
    },
    faq: {
      kicker: "FAQ",
      title: "Häufige Fragen",
      items: [
        {
          question: "Ist es bereits verfügbar?",
          answer:
            "Worktia befindet sich in der Beta-/Pre-Launch-Phase. Wir sammeln Anfragen von Unternehmen und Technikern, die den Ablauf testen möchten, sobald neue Einladungen geöffnet werden.",
        },
        {
          question: "Muss der Kunde die App installieren?",
          answer:
            "Der Ablauf ist darauf ausgelegt, den Aufwand für Kunden zu reduzieren. Das Techniker-/Kundenportal ist genau dafür geplant, Installationen und manuelle Schritte möglichst zu begrenzen.",
        },
        {
          question: "Funktioniert es offline?",
          answer: "Der geplante Ansatz ist offline-first, um Teams im Außendienst auch bei instabiler Verbindung zu unterstützen.",
        },
        {
          question: "Welchen Wert hat das erzeugte PDF?",
          answer:
            "Das PDF hilft, den Einsatz strukturiert zu dokumentieren – mit den Informationen, die während der Arbeit erfasst wurden. Es wird nicht als qualifizierte elektronische Signatur dargestellt und ersetzt keine Rechtsberatung, formale Abnahmen oder regulatorische Anforderungen, wenn diese erforderlich sind.",
        },
        {
          question: "Für welche Unternehmen ist es gedacht?",
          answer: "Für Unternehmen und operative Teams, die Aufträge, Wartungen, Inspektionen, Checklisten, Fotos und Berichte zur Übergabe oder Archivierung verwalten.",
        },
      ],
    },
    legal: {
      common: {
        backHome: "Zurück zur Startseite",
      },
      privacy: {
        seo: {
          title: "Datenschutz | Worktia",
          description: "Datenschutzhinweise für die Beta-/Pre-Launch-Landingpage von Worktia.",
        },
        title: "Datenschutzhinweise",
        updated: "Letzte Aktualisierung: 2026-06-03",
        intro:
          "Diese Hinweise beschreiben kurz, wie personenbezogene Daten auf der Beta-/Pre-Launch-Landingpage von Worktia verarbeitet werden können. Sie stellen keine Rechtsberatung dar.",
        sections: [
          {
            title: "Wer wir sind",
            body: "Worktia ist ein Projekt in der Beta-/Pre-Launch-Phase für die Verwaltung von Außendienstarbeit.",
          },
          {
            title: "Geltungsbereich",
            body: "Diese Hinweise betreffen die öffentliche Landingpage von Worktia und Beta- oder Pre-Launch-Anfragen, die per E-Mail gesendet werden.",
          },
          {
            title: "Was noch nicht abgedeckt ist",
            body: "Diese Hinweise betreffen noch keine vollständige App, keine öffentlichen Konten, keine Zahlungen, keine Cloud-Synchronisierung und keine Kunden-/Technikerportale, da diese auf dieser Landingpage nicht aktiv sind.",
          },
          {
            title: "Welche Daten wir verarbeiten können",
            items: [
              "technische Navigationsdaten, die für den Betrieb der Website und des Hostings erforderlich sind;",
              "freiwillig per E-Mail übermittelte Daten, zum Beispiel Name, E-Mail, Unternehmen, Branche und Nachricht;",
              "keine Zahlungen, Benutzerkonten oder aktiven Backend-Formulare auf dieser Landingpage.",
            ],
          },
          {
            title: "Zwecke",
            items: [
              "Beantwortung von Informations- oder Beta-Zugangsanfragen;",
              "Verwaltung vorkommerzieller Kommunikation;",
              "besseres Verständnis des Interesses an Worktia;",
              "Gewährleistung der Sicherheit und des technischen Betriebs der Website.",
            ],
          },
          {
            title: "Cookies und Tracking",
            body: "Diese Landingpage verwendet keine Tracking-Tools, Analytics oder Profiling-Cookies. Wenn in Zukunft Analyse- oder Marketing-Tools eingeführt werden, werden diese Hinweise aktualisiert und, soweit erforderlich, wird eine Einwilligung eingeholt.",
          },
          {
            title: "Rechtsgrundlage",
            items: [
              "Anfrage des Nutzers oder vorvertragliche Maßnahmen zur Beantwortung der Beta-Anfrage;",
              "berechtigtes Interesse an Sicherheit und technischem Betrieb der Website;",
              "rechtliche Verpflichtungen, soweit anwendbar.",
            ],
          },
          {
            title: "Aufbewahrung",
            body: "Per E-Mail übermittelte Daten werden so lange aufbewahrt, wie es für die Bearbeitung der Beta-Anfrage und der damit verbundenen Kommunikation erforderlich ist, sofern keine weiteren Pflichten oder Erfordernisse bestehen.",
          },
          {
            title: "Weitergabe",
            body: "Daten können von technischen Anbietern verarbeitet werden, die für den Betrieb der Website, des Deployments/Repositorys und der E-Mail-Kommunikation erforderlich sind. Wir verkaufen keine personenbezogenen Daten.",
          },
          {
            title: "Übermittlungen außerhalb des EWR",
            body: "Einige technische Anbieter können Daten gegebenenfalls außerhalb des Europäischen Wirtschaftsraums verarbeiten. In diesen Fällen hängt die Verarbeitung von den Garantien und Bedingungen der jeweiligen Anbieter ab.",
          },
          {
            title: "Rechte",
            body: "Nutzer können Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und, soweit anwendbar, Übertragbarkeit verlangen.",
          },
          {
            title: "Aktualisierungen",
            body: "Diese Hinweise werden vor einer öffentlichen Beta oder einem kommerziellen Launch aktualisiert, wenn sich verarbeitete Daten, Funktionen oder relevante Anbieter ändern.",
          },
          {
            title: "Kontakt",
            body: "beta@worktia.com",
          },
        ],
      },
      terms: {
        seo: {
          title: "Bedingungen | Worktia",
          description: "Nutzungsbedingungen für die Beta-/Pre-Launch-Landingpage von Worktia.",
        },
        title: "Bedingungen",
        updated: "Letzte Aktualisierung: 2026-06-03",
        intro:
          "Diese Bedingungen beschreiben die Nutzung der Beta-/Pre-Launch-Landingpage von Worktia. Sie stellen keine Rechtsberatung dar.",
        sections: [
          {
            title: "Art der Website",
            body: "Die Website präsentiert Worktia als Produkt in der Beta-/Pre-Launch-Phase.",
          },
          {
            title: "Keine garantierte öffentliche Verfügbarkeit",
            body: "Der Zugang zur Beta kann beschränkt, verschoben oder nicht gewährt werden.",
          },
          {
            title: "Grenzen der Beta",
            body: "Ein etwaiger Beta-Zugang kann funktionale Einschränkungen, Fehler, Unterbrechungen oder Änderungen enthalten und bedeutet keine stabile Produktverfügbarkeit.",
          },
          {
            title: "Nichtvertragliche Informationen",
            body: "Die beschriebenen Funktionen stellen Produktrichtung und Positionierung dar; einige können sich in Entwicklung befinden oder Änderungen unterliegen.",
          },
          {
            title: "Keine Beratung",
            body: "Die Inhalte der Website sind keine rechtliche, steuerliche, technische oder professionelle Beratung.",
          },
          {
            title: "Operative Dokumentation",
            body: "Etwa beschriebene PDFs, Unterschriften, Validierungen und operative Dokumentation ersetzen keine gesetzlichen Anforderungen, formalen Abnahmen oder professionellen Prüfungen, wenn diese erforderlich sind.",
          },
          {
            title: "Geistiges Eigentum",
            body: "Name, Texte, Design und Inhalte gehören Worktia oder den jeweiligen Rechteinhabern.",
          },
          {
            title: "Ordnungsgemäße Nutzung",
            body: "Nutzen Sie die Website nicht für rechtswidrige Aktivitäten, missbräuchliches Scraping, technische Störungen, unbefugte Zugriffe oder Verhalten, das den Dienst schädigen kann.",
          },
          {
            title: "Links und Dienste Dritter",
            body: "Die Website kann auf Dienste Dritter verweisen, zum Beispiel E-Mail, Hosting oder technische Tools. Diese Dienste unterliegen ihren eigenen Bedingungen.",
          },
          {
            title: "Änderungen",
            body: "Die Texte können in Zukunft aktualisiert werden.",
          },
          {
            title: "Kontakt",
            body: "beta@worktia.com",
          },
        ],
      },
    },
    footer: {
      tagline: "Ihre Außendienstarbeit, organisiert.",
      links: {
        privacy: "Datenschutz",
        terms: "Bedingungen",
        contacts: "Kontakt",
      },
    },
  },
};
