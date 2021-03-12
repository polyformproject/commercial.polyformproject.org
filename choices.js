module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "included in license fee",
          "No SLAs",
          "E-Mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "availability and response-time SLAs",
          "separately priced"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "Nome"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "no additional fee",
          "no SLAs",
          "e-mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "additional fee",
          "availability SLAs",
          "response-time SLAs"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "No Support"
      },
      {
        "id": "basic",
        "name": "Basic",
        "notes": [
          "no additional fee",
          "no SLAs",
          "e-mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full",
        "notes": [
          "additional fee",
          "availability SLAs",
          "response-time SLAs"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "No Support"
      },
      {
        "id": "basic",
        "name": "Basic Support",
        "notes": [
          "no additional fee",
          "no SLAs",
          "e-mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full Support",
        "notes": [
          "additional fee",
          "availability SLAs",
          "response-time SLAs"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "No Support"
      },
      {
        "id": "basic",
        "name": "Basic Support",
        "notes": [
          "no additional fee",
          "no SLAs",
          "e-mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full Support",
        "notes": [
          "additional fee",
          "availability SLAs",
          "response-time SLAs"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "No Support"
      },
      {
        "id": "basic",
        "name": "Basic Support",
        "notes": [
          "no additional fee",
          "no SLAs",
          "e-mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full Support",
        "notes": [
          "additional fee",
          "availability SLAs",
          "response-time SLAs"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage, as Agreed in Ordering Document"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "No Support"
      },
      {
        "id": "basic",
        "name": "Basic Support",
        "notes": [
          "no additional fee",
          "no SLAs",
          "e-mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full Support",
        "notes": [
          "additional fee",
          "availability SLAs",
          "response-time SLAs"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage, as Agreed in Ordering Document"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use"
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "No Support"
      },
      {
        "id": "basic",
        "name": "Basic Support",
        "notes": [
          "no additional fee",
          "no SLAs",
          "e-mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full Support",
        "notes": [
          "additional fee",
          "availability SLAs",
          "response-time SLAs"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
module.exports = 
[
  {
    "id": "model",
    "name": "License Model",
    "description": "Licenses are priced and sold in different ways.  These affect how fees get calculated, as well as other terms.",
    "choice": "single",
    "choices": [
      {
        "id": "trial",
        "name": "Trial"
      },
      {
        "id": "unlimited",
        "name": "Unlimited"
      },
      {
        "id": "seats",
        "name": "Seats"
      },
      {
        "id": "metered",
        "name": "Metered"
      },
      {
        "id": "cpu",
        "name": "CPU",
        "version": 2
      },
      {
        "id": "site",
        "name": "Site",
        "version": 2
      }
    ]
  },
  {
    "id": "expansion",
    "name": "Expansion",
    "description": "If the customer needs more usage than they've agreed to, how can they get it?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "negotiate",
        "name": "Commit to Negotiate in Good Faith"
      },
      {
        "id": "list",
        "name": "On Payment, at List Price"
      },
      {
        "id": "quoted",
        "name": "On Payment, as Agreed in Ordering Document"
      },
      {
        "id": "usage",
        "name": "Based on Usage, as Agreed in Ordering Document"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Usage Reporting",
    "description": "How will the seller determine the customer's usage?",
    "requires": [
      {
        "model": "seats"
      },
      {
        "model": "metered"
      },
      {
        "expansion": "usage"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "phone",
        "name": "Software Phones Home"
      },
      {
        "id": "self",
        "name": "Self-Reported by Customer"
      },
      {
        "id": "audit",
        "name": "Annual Audit Right"
      }
    ]
  },
  {
    "id": "term",
    "name": "Term",
    "description": "How long will the license last?",
    "choice": "single",
    "choices": [
      {
        "id": "perpetual",
        "name": "Perpetual"
      },
      {
        "id": "year",
        "name": "One Year"
      },
      {
        "id": "renewing",
        "name": "One Year, Automatically Renewing"
      },
      {
        "id": "month",
        "name": "Month to Month"
      }
    ]
  },
  {
    "id": "usage",
    "name": "Usage",
    "description": "How can the customer use the software?",
    "choice": "multiple",
    "choices": [
      {
        "id": "internal",
        "name": "Internal Use",
        "forced": true
      },
      {
        "id": "service",
        "name": "External Services"
      },
      {
        "id": "redistribution",
        "name": "Redistribution"
      }
    ]
  },
  {
    "id": "delivery",
    "name": "Delivery",
    "description": "Will the customer get source code, a compiled version, or both?",
    "choice": "single",
    "choices": [
      {
        "id": "binary",
        "name": "Binary Only"
      },
      {
        "id": "source",
        "name": "Source Only"
      },
      {
        "id": "both",
        "name": "Source and Binary"
      }
    ]
  },
  {
    "id": "modification",
    "name": "Modification Rights",
    "description": "If the customer gets source code, can they change the software?",
    "requires": [
      {
        "delivery": "binary"
      },
      {
        "delivery": "both"
      }
    ],
    "choice": "single",
    "choices": [
      {
        "id": "yes",
        "name": "Allowed"
      },
      {
        "id": "no",
        "name": "Prohibited"
      }
    ]
  },
  {
    "id": "escrow",
    "name": "Escrow",
    "description": "If the customer doesn't get source code, will they get it if the seller discontinues the product or goes out of business?",
    "requires": [
      {
        "delivery": "binary"
      }
    ],
    "choice": "multiple",
    "choices": [
      {
        "id": "yes",
        "name": "Third-Party"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "description": "Will the seller provides updates to the software?",
    "choice": "single",
    "choices": [
      {
        "id": "version",
        "name": "Specific Version"
      },
      {
        "id": "term",
        "name": "Updates During Term"
      }
    ]
  },
  {
    "id": "support",
    "name": "Support",
    "description": "Will the seller provide technical support?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "No Support"
      },
      {
        "id": "basic",
        "name": "Basic Support",
        "notes": [
          "no additional fee",
          "no SLAs",
          "e-mail only",
          "business hours"
        ]
      },
      {
        "id": "full",
        "name": "Full Support",
        "notes": [
          "additional fee",
          "availability SLAs",
          "response-time SLAs"
        ]
      }
    ]
  },
  {
    "id": "warranty",
    "name": "Quality Warranty",
    "description": "Will the seller give a promise about the quality of the software?",
    "choice": "single",
    "choices": [
      {
        "id": "period",
        "name": "Limited Warranty Period"
      },
      {
        "id": "term",
        "name": "Term of the Agreement"
      }
    ]
  },
  {
    "id": "patent",
    "name": "Patent Infringement Indemnity",
    "description": "Will the seller cover the customer if someone brings a lawsuit claiming that the software infringes a patent?",
    "choice": "single",
    "choices": [
      {
        "id": "none",
        "name": "None"
      },
      {
        "id": "known",
        "name": "Known Patents"
      },
      {
        "id": "all",
        "name": "All Patents"
      }
    ]
  },
  {
    "id": "law",
    "name": "Governing Law",
    "description": "What law will govern the license agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "vendor",
        "name": "Vendor's Headquarters"
      },
      {
        "id": "customer",
        "name": "Customer's Headquarters"
      },
      {
        "id": "ca",
        "name": "California"
      },
      {
        "id": "de",
        "name": "Delaware"
      },
      {
        "id": "ny",
        "name": "New York"
      }
    ]
  },
  {
    "id": "venue",
    "name": "Venue for Disputes",
    "description": "Where will the seller and customer bring lawsuits about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "capital",
        "name": "Capital of the Governing Law Jurisdiction"
      },
      {
        "id": "big",
        "name": "Largest City in the Governing Law Jurisdiction"
      },
      {
        "id": "vendor",
        "name": "Name Nearest Vendor in Governing Law Jurisdiction"
      },
      {
        "id": "customers",
        "name": "Name Nearest Customer in Governing Law Jurisdiction"
      }
    ]
  },
  {
    "id": "disputes",
    "name": "Dispute Resolution",
    "description": "How will the seller and customer resolve disputes about the agreement?",
    "choice": "single",
    "choices": [
      {
        "id": "litigation",
        "name": "Litigation"
      },
      {
        "id": "execs",
        "name": "Executives Meet Before Litigation"
      },
      {
        "id": "mediation",
        "name": "Mediation Before Litigation"
      },
      {
        "id": "jams",
        "name": "JAMS Arbitration"
      },
      {
        "id": "aaa",
        "name": "AAA Arbitration"
      }
    ]
  }
]
