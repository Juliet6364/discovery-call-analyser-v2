/* Qualification frameworks, shared by the web page (window.FRAMEWORKS) and the API (require). */
(function (root) {
  const FRAMEWORKS = {
    MEDDICC: {
      name: "MEDDICC",
      blurb: "Enterprise deals with several approvers, procurement and competitors.",
      elements: [
        { key: "metrics", letter: "M", name: "Metrics", ask: "Did the buyer put numbers on the problem and the goal?",
          rubric: "Quantified business impact and success measures the buyer cares about (time, money, %, targets)." },
        { key: "economic_buyer", letter: "E", name: "Economic buyer", ask: "Do we know who controls the budget and signs off?",
          rubric: "The person with budget authority and final say: identified by name, and ideally engaged or their priorities known." },
        { key: "decision_criteria", letter: "D", name: "Decision criteria", ask: "Do we know how they'll choose a vendor?",
          rubric: "The technical, commercial and other criteria the buyer will use to compare and choose a solution." },
        { key: "decision_process", letter: "D", name: "Decision process", ask: "Do we know the steps and timeline to a decision?",
          rubric: "The steps, people, approvals and timeline from evaluation to a decision." },
        { key: "paper_process", letter: "P", name: "Paper process", ask: "Do we know what procurement, legal and security need?",
          rubric: "How the contract gets signed: procurement, legal, security review, MSA, PO, and how long each takes." },
        { key: "pain", letter: "I", name: "Identify pain", ask: "Is there a real, specific problem worth solving?",
          rubric: "The specific, urgent business problem, its cause and its consequences if left unsolved." },
        { key: "champion", letter: "C", name: "Champion", ask: "Is there an insider who will push for this deal?",
          rubric: "An internal person with influence who personally wins if this succeeds and actively sells for you. Tested, not assumed." },
        { key: "competition", letter: "C", name: "Competition", ask: "Do we know who else they're considering?",
          rubric: "Other vendors, internal builds, or doing nothing / hiring people instead." }
      ]
    },
    BANT: {
      name: "BANT",
      blurb: "Quick first-call check for smaller or faster deals.",
      elements: [
        { key: "budget", letter: "B", name: "Budget", ask: "Is there money for this, and roughly how much?",
          rubric: "Whether budget exists or can be found, the rough amount or range, and where it comes from." },
        { key: "authority", letter: "A", name: "Authority", ask: "Do we know who makes the final decision?",
          rubric: "Who decides and signs, named, and whether the rep is talking to them or knows how to reach them." },
        { key: "need", letter: "N", name: "Need", ask: "Is there a specific problem the buyer wants solved?",
          rubric: "A specific business need or problem, why it matters, and what it costs them today." },
        { key: "timeline", letter: "T", name: "Timeline", ask: "Do we know when they want it solved, and why then?",
          rubric: "When the buyer intends to decide and implement, and the reason behind that date." }
      ]
    },
    SPICED: {
      name: "SPICED",
      blurb: "Value-led discovery, common in SaaS and recurring-revenue sales.",
      elements: [
        { key: "situation", letter: "S", name: "Situation", ask: "Do we understand how they work today?",
          rubric: "Facts about the buyer's current setup: team, volumes, tools, processes and recent changes." },
        { key: "pain", letter: "P", name: "Pain", ask: "Do we know the problem and what causes it?",
          rubric: "The specific problem the buyer has, in their words, and its root cause." },
        { key: "impact", letter: "I", name: "Impact", ask: "Do we know what the problem costs, and what fixing it is worth?",
          rubric: "The quantified business impact (money, time, risk, customers) and the personal impact on the buyer, plus the value of solving it." },
        { key: "critical_event", letter: "C", name: "Critical event", ask: "Is there a deadline that forces a decision?",
          rubric: "A date-driven event with consequences if missed (audit, launch, renewal, funding, season) that sets when they must act." },
        { key: "decision", letter: "D", name: "Decision", ask: "Do we know who decides, how, and by when?",
          rubric: "The people, criteria, steps, approvals and paperwork that lead to a signed decision." }
      ]
    }
  };

  const CRM_FIELDS = [
    ["company", "Company"], ["contact", "Contact"], ["role", "Role"], ["stage", "Stage"],
    ["pain", "Pain"], ["impact", "Impact and metrics"], ["budget", "Budget"],
    ["decision_maker", "Decision maker"], ["decision_process", "Decision process"],
    ["timeline", "Timeline"], ["competition", "Competition"], ["next_step", "Next step"], ["notes", "Notes"]
  ];

  const VERDICTS = ["Advance", "Nurture", "Disqualify"];

  // Selling skills used to tag "Say it better" coaching. Framework-independent, so the
  // dashboard can show which skill a rep needs to work on across every conversation.
  const SKILLS = ["Opening", "Discovery questions", "Listening and follow-up", "Value and pricing", "Objection handling", "Next step"];
  const FIX_TYPES = ["rewrite", "missed_cue"];

  // Score bands by share of the maximum, so every framework reads the same way.
  // For MEDDICC (out of 16): 0–6 weak, 7–11 needs work, 12–16 well qualified.
  function band(total, max) {
    const p = max ? total / max : 0;
    if (p >= 0.75) return { id: "strong", label: "Well qualified" };
    if (p >= 0.4) return { id: "mid", label: "Needs work" };
    return { id: "weak", label: "Weakly qualified" };
  }

  const api = { FRAMEWORKS, CRM_FIELDS, VERDICTS, SKILLS, FIX_TYPES, band };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.DCA = api;
})(typeof window !== "undefined" ? window : globalThis);
