/* Practice conversations (fictional companies and people) with saved analyses for every framework.
   Shown instantly, so the tool can be tried without an API key. */
window.PRACTICE = [
 {
  "id": "cio",
  "label": "CIO, strong call",
  "source": "call",
  "file": "1-cio-strong.txt",
  "text": "Juliet (Nexora Automation): Hi Sanjay, thank you for the time. I've kept 30 minutes. I'd like to understand your order-to-cash process and your automation plans, and at the end we can decide together whether a next step makes sense. Does that work?\nSanjay (CIO, Vardhan Auto Components): Works. Go ahead.\nJuliet: When we spoke briefly at the CII event, you mentioned order processing was a bottleneck. What's happening there today?\nSanjay: We get about 40,000 sales orders a month from OEM customers, mostly PDF purchase orders by email. A 22-person shared services team keys them into SAP S/4HANA.\nJuliet: What does that cost the business?\nSanjay: The error rate is around 3%, which means wrong shipments and credit notes. About 6% of orders go out late. And our DSO is 68 days, partly because of invoice disputes caused by those errors.\nJuliet: If this project succeeds, how will you measure it?\nSanjay: 80% of orders touchless, and DSO down to 55 days by the end of the financial year. Both are on my KRA sheet and the CFO's.\nJuliet: Who owns the budget for this?\nSanjay: The CFO, Ramesh Gupta, and I co-own a 1.2 crore digital transformation budget. Anything above 1 crore also needs our MD's approval.\nJuliet: What will you use to compare vendors?\nSanjay: A certified SAP connector, bots that can run on-premise because of our OEM contracts, help setting up an automation CoE, and payback within 12 months.\nJuliet: Walk me through how a decision gets made, from now to signature.\nSanjay: A 6-week proof of value on one product line. Results go to our steering committee in the second week of December. Then MD approval, then procurement.\nJuliet: And on the paperwork side, what does procurement involve?\nSanjay: Vendor onboarding takes about four weeks. InfoSec does an audit, and legal will need a data processing agreement. Last time the DPA alone took three weeks.\nJuliet: Who else are you talking to?\nSanjay: A UiPath partner. And my own IT team thinks they can do it with Power Automate, since it's already in our Microsoft licence.\nJuliet: What would make the in-house option win?\nSanjay: Cost. But they've never automated anything at this volume, and I can't risk the DSO target.\nJuliet: Who on your team would run the proof of value day to day?\nSanjay: Deepa Nair, who heads shared services. She's fed up with the manual work and she'll push for whatever works.\nJuliet: Could we hold a two-hour scoping workshop with Deepa and someone from InfoSec, so security is part of the plan from day one?\nSanjay: Yes. Let's do 4th November, 11 am. I'll add Deepa and our InfoSec lead.",
  "saved": {
   "summary": "Sanjay is CIO of Vardhan Auto Components. A 22-person team keys ~40,000 emailed purchase orders a month into SAP S/4HANA, causing a 3% error rate, 6% late orders and a 68-day DSO. The call qualified the deal thoroughly and ended with a scoping workshop booked.",
   "verdict": "Advance",
   "verdict_reason": "Every part of qualification is established with specifics, budget is allocated, and a concrete next meeting with the day-to-day owner and InfoSec is booked.",
   "next_steps": [
    "Run the 4 November scoping workshop and agree written success criteria.",
    "Send the security pack and draft DPA to InfoSec and legal this week.",
    "Request 20 minutes with CFO Ramesh Gupta before the steering committee.",
    "Build a payback model using the 3% error rate and 68-day DSO."
   ],
   "strengths": [
    "Set a clear agenda and permission to walk away at the start.",
    "Asked about metrics, budget, criteria, process and paperwork in a natural order.",
    "Booked a specific next meeting with the right people."
   ],
   "improve": [
    "Could have asked Sanjay about his own stake in the project.",
    "Didn't ask what the competing proposals looked like."
   ],
   "crm": {
    "company": "Vardhan Auto Components",
    "contact": "Sanjay",
    "role": "CIO",
    "stage": "Qualified, advance",
    "pain": "~40,000 emailed POs a month keyed into SAP S/4HANA by 22 people. 3% errors, 6% late orders.",
    "impact": "68-day DSO. Targets: 80% touchless orders and DSO of 55 days by FY end (on CIO and CFO KRAs).",
    "budget": "1.2 crore digital transformation budget, co-owned by CIO and CFO.",
    "decision_maker": "CFO Ramesh Gupta and CIO Sanjay. MD approval above 1 crore.",
    "decision_process": "6-week proof of value, steering committee (2nd week Dec), MD, procurement. Criteria: certified SAP connector, on-prem bots, CoE support, 12-month payback.",
    "timeline": "Steering committee in the 2nd week of December. DSO target by FY end.",
    "competition": "UiPath partner; in-house Power Automate.",
    "next_step": "Scoping workshop 4 Nov, 11 am, with Deepa Nair (shared services) and the InfoSec lead.",
    "notes": "Paper process: 4-week vendor onboarding, InfoSec audit, DPA (took 3 weeks last time). Deepa Nair is a likely champion."
   },
   "frameworks": {
    "MEDDICC": {
     "missed_questions": [
      "Deepa, what would this project change for you personally?",
      "Who sits on the steering committee, and who has the most influence there?",
      "What would make the MD say no, even if the proof of value succeeds?",
      "What did the UiPath partner propose, and at what price?"
     ],
     "scores": [
      {
       "key": "metrics",
       "score": 2,
       "evidence": "80% of orders touchless, and DSO down to 55 days by the end of the financial year.",
       "gap": "Strong. Put these targets in writing as the proof-of-value success criteria."
      },
      {
       "key": "economic_buyer",
       "score": 2,
       "evidence": "The CFO, Ramesh Gupta, and I co-own a 1.2 crore digital transformation budget.",
       "gap": "Named with budget. Plan to meet Ramesh before the December steering committee."
      },
      {
       "key": "decision_criteria",
       "score": 2,
       "evidence": "A certified SAP connector, bots that can run on-premise ... and payback within 12 months.",
       "gap": "Clear. Prepare evidence for each criterion, especially the 12-month payback."
      },
      {
       "key": "decision_process",
       "score": 2,
       "evidence": "A 6-week proof of value on one product line. Results go to our steering committee in the second week of December.",
       "gap": "Clear steps and timeline. Confirm who sits on the steering committee."
      },
      {
       "key": "paper_process",
       "score": 2,
       "evidence": "Vendor onboarding takes about four weeks. InfoSec does an audit, and legal will need a data processing agreement.",
       "gap": "Well uncovered. Send the DPA and security pack early, since the DPA took 3 weeks last time."
      },
      {
       "key": "pain",
       "score": 2,
       "evidence": "The error rate is around 3%, which means wrong shipments and credit notes.",
       "gap": "Strong. Pain, cause and business impact are all clear."
      },
      {
       "key": "champion",
       "score": 1,
       "evidence": "She's fed up with the manual work and she'll push for whatever works.",
       "gap": "Deepa sounds like a champion, but she hasn't been met or tested yet. Use the workshop to test her."
      },
      {
       "key": "competition",
       "score": 2,
       "evidence": "A UiPath partner. And my own IT team thinks they can do it with Power Automate",
       "gap": "Strong, including the in-house option and why it might lose."
      }
     ]
    },
    "BANT": {
     "missed_questions": [
      "How much of the 1.2 crore is set aside for order-to-cash?",
      "What will the MD want to see before approving?",
      "When do the bots need to be live to reach 55 days DSO by year end?",
      "What happens if the steering committee date slips?"
     ],
     "scores": [
      {
       "key": "budget",
       "score": 2,
       "evidence": "The CFO, Ramesh Gupta, and I co-own a 1.2 crore digital transformation budget.",
       "gap": "Budget is allocated. Confirm how much of it this project can use."
      },
      {
       "key": "authority",
       "score": 2,
       "evidence": "Anything above 1 crore also needs our MD's approval.",
       "gap": "Approvers and limits are clear. Plan how the MD hears the proof-of-value results."
      },
      {
       "key": "need",
       "score": 2,
       "evidence": "The error rate is around 3%, which means wrong shipments and credit notes.",
       "gap": "Strong and specific need, tied to DSO."
      },
      {
       "key": "timeline",
       "score": 2,
       "evidence": "Results go to our steering committee in the second week of December.",
       "gap": "Clear decision date. Confirm the go-live date needed to hit the FY-end target."
      }
     ]
    },
    "SPICED": {
     "missed_questions": [
      "What happens for you and the CFO if DSO is still 68 days at year end?",
      "What are 13 days of DSO worth in working capital?",
      "Who on the steering committee could block this?",
      "When must the bots be live to show results by year end?"
     ],
     "scores": [
      {
       "key": "situation",
       "score": 2,
       "evidence": "A 22-person shared services team keys them into SAP S/4HANA.",
       "gap": "Volumes, team and systems are all clear."
      },
      {
       "key": "pain",
       "score": 2,
       "evidence": "About 6% of orders go out late.",
       "gap": "Problem and cause (manual keying of emailed POs) are clear."
      },
      {
       "key": "impact",
       "score": 2,
       "evidence": "our DSO is 68 days, partly because of invoice disputes caused by those errors.",
       "gap": "Strong. Put a rupee value on 13 days of DSO to anchor the payback."
      },
      {
       "key": "critical_event",
       "score": 1,
       "evidence": "DSO down to 55 days by the end of the financial year.",
       "gap": "Year end is a deadline, but what happens if it's missed wasn't tested."
      },
      {
       "key": "decision",
       "score": 2,
       "evidence": "Then MD approval, then procurement.",
       "gap": "People, steps, criteria and paperwork are all known."
      }
     ]
    }
   }
  }
 },
 {
  "id": "coo",
  "label": "COO, average call",
  "source": "call",
  "file": "2-coo-average.txt",
  "text": "Juliet (Nexora Automation): Hi Meera, thanks for joining. I know COOs don't get many free minutes, so I'll keep it tight.\nMeera (COO, SwiftLane Logistics): Appreciated. I have 20 minutes.\nJuliet: I saw SwiftLane opened three new hubs this year. How is operations keeping up with the growth?\nMeera: Volume is up 40%, but back-office headcount has grown even faster. That's the problem.\nJuliet: Where does most of that back-office effort go?\nMeera: Shipment paperwork. We generate about 9,000 e-way bills and invoices a month. The team pulls data from our TMS, emails and Excel, and keys it into the GST portal and our ERP.\nJuliet: What happens when it goes wrong?\nMeera: Trucks wait at checkpoints. We paid around 18 lakh in detention charges and penalties last quarter. And our two biggest customers have complained twice.\nJuliet: That's significant. If you could fix it, what would good look like?\nMeera: No trucks held up for paperwork, and I'd rather not hire another 12 people next year.\nJuliet: Makes sense. Is this something you'd decide on, or does IT lead it?\nMeera: I'd sponsor it, but our CIO, Farhan, has to sign off on anything that touches the ERP.\nJuliet: Got it. Let me show you how our bots handle e-way bills. The bot reads the TMS export, validates GSTINs, generates the bill on the portal and posts it to your ERP. Customers see 85% less manual work.\nMeera: Interesting. We've also had a call with a UiPath partner. How are you different?\nJuliet: We deploy faster, and we include AI document reading for emailed invoices. Our pricing is usually lower too.\nMeera: Okay. What would something like this cost?\nJuliet: It depends on volumes, but for your size roughly 25 to 40 lakh in the first year.\nMeera: Hm. That's more than I expected. Send me a proposal and I'll look at it with Farhan.\nJuliet: Will do. I'll send it by Friday.",
  "saved": {
   "summary": "Meera is COO of SwiftLane Logistics. Her back office keys ~9,000 e-way bills and invoices a month by hand, costing about 18 lakh a quarter in detention charges and penalties. Interest is real, but the call ended on a proposal with no meeting booked.",
   "verdict": "Nurture",
   "verdict_reason": "Pain and impact are clear and quantified, but decision criteria, process and paperwork are unknown, the CIO hasn't been engaged and the price objection wasn't handled.",
   "next_steps": [
    "Book a 30-minute call with Meera and Farhan before sending the proposal.",
    "Build the proposal around 18 lakh/quarter in penalties and 12 avoided hires, so the price reads as payback.",
    "Ask what Meera expected to pay and explore a smaller first phase if needed.",
    "Find out what the UiPath partner proposed and position against it."
   ],
   "strengths": [
    "Opened with a relevant, researched question about the new hubs.",
    "Uncovered and quantified the pain: 18 lakh/quarter and customer complaints.",
    "Identified the CIO as a required approver."
   ],
   "improve": [
    "Demoed before learning the decision criteria and process.",
    "Gave a wide price range without anchoring it to the cost of the problem.",
    "Accepted 'send me a proposal' instead of booking the next meeting."
   ],
   "crm": {
    "company": "SwiftLane Logistics",
    "contact": "Meera",
    "role": "COO",
    "stage": "Discovery done, nurture",
    "pain": "~9,000 e-way bills and invoices a month keyed manually from TMS, email and Excel into the GST portal and ERP. Trucks held at checkpoints.",
    "impact": "~18 lakh a quarter in detention charges and penalties. Two biggest customers have complained. Wants to avoid hiring 12 more staff next year.",
    "budget": "Not set. Found the 25–40 lakh first-year price higher than expected.",
    "decision_maker": "Unclear. Meera sponsors; CIO Farhan signs off on anything touching the ERP.",
    "decision_process": "Not discussed.",
    "timeline": "No date. Hiring plan for next year is the soft deadline.",
    "competition": "Spoke to a UiPath partner.",
    "next_step": "Send proposal by Friday. No meeting booked.",
    "notes": "Priority: a joint call with Meera and Farhan before the proposal."
   },
   "frameworks": {
    "MEDDICC": {
     "missed_questions": [
      "Who owns the budget for this, you or Farhan, and has any been set aside?",
      "When you compare us with the UiPath partner, what will matter most?",
      "What are the steps between today and a signed contract, and by when?",
      "What does IT security and procurement need to see before signing?",
      "What would it mean for you personally if trucks stopped waiting at checkpoints?",
      "When you say the price is more than expected, what were you comparing it against?"
     ],
     "scores": [
      {
       "key": "metrics",
       "score": 2,
       "evidence": "We paid around 18 lakh in detention charges and penalties last quarter.",
       "gap": "Well quantified. Turn it into an agreed success target, such as penalties cut by a set amount."
      },
      {
       "key": "economic_buyer",
       "score": 1,
       "evidence": "I'd sponsor it, but our CIO, Farhan, has to sign off on anything that touches the ERP.",
       "gap": "Unclear who owns the budget, and no plan to meet Farhan."
      },
      {
       "key": "decision_criteria",
       "score": 0,
       "evidence": "",
       "gap": "Never asked how SwiftLane will compare vendors or what's non-negotiable."
      },
      {
       "key": "decision_process",
       "score": 0,
       "evidence": "",
       "gap": "No steps, approvers or timeline to a decision were discussed."
      },
      {
       "key": "paper_process",
       "score": 0,
       "evidence": "",
       "gap": "Procurement, IT security and contract review were not raised."
      },
      {
       "key": "pain",
       "score": 2,
       "evidence": "Trucks wait at checkpoints. ... our two biggest customers have complained twice.",
       "gap": "Strong. Could also ask what happens if nothing changes next year."
      },
      {
       "key": "champion",
       "score": 1,
       "evidence": "I'd sponsor it",
       "gap": "Meera is a likely champion, but her personal stake and influence over Farhan weren't tested."
      },
      {
       "key": "competition",
       "score": 1,
       "evidence": "We've also had a call with a UiPath partner.",
       "gap": "Rep answered with features instead of asking what Meera liked or disliked about them."
      }
     ]
    },
    "BANT": {
     "missed_questions": [
      "What range did you have in mind for this?",
      "Would this come from your operations budget or IT's?",
      "When do you need to decide on the 12 new hires?",
      "Can we get 30 minutes with Farhan before I send the proposal?"
     ],
     "scores": [
      {
       "key": "budget",
       "score": 1,
       "evidence": "Hm. That's more than I expected.",
       "gap": "The price reaction suggests no budget is set. Ask what she expected to pay and where the money would come from."
      },
      {
       "key": "authority",
       "score": 1,
       "evidence": "I'd sponsor it, but our CIO, Farhan, has to sign off on anything that touches the ERP.",
       "gap": "Sponsor and signer are known, but who owns the budget isn't."
      },
      {
       "key": "need",
       "score": 2,
       "evidence": "We paid around 18 lakh in detention charges and penalties last quarter.",
       "gap": "Strong, quantified need."
      },
      {
       "key": "timeline",
       "score": 0,
       "evidence": "",
       "gap": "No date or deadline came up. Ask when next year's hiring decision gets made."
      }
     ]
    },
    "SPICED": {
     "missed_questions": [
      "When is next year's headcount plan signed off?",
      "What would Farhan need to see to sign off?",
      "How will you compare us with the UiPath partner?",
      "What happens with your two biggest customers if checkpoint delays continue?"
     ],
     "scores": [
      {
       "key": "situation",
       "score": 2,
       "evidence": "We generate about 9,000 e-way bills and invoices a month.",
       "gap": "Volumes, systems and recent growth are clear."
      },
      {
       "key": "pain",
       "score": 2,
       "evidence": "The team pulls data from our TMS, emails and Excel, and keys it into the GST portal and our ERP.",
       "gap": "Problem and cause are clear."
      },
      {
       "key": "impact",
       "score": 2,
       "evidence": "We paid around 18 lakh in detention charges and penalties last quarter.",
       "gap": "Quantified, plus customer complaints."
      },
      {
       "key": "critical_event",
       "score": 1,
       "evidence": "I'd rather not hire another 12 people next year.",
       "gap": "The hiring plan is a soft deadline. Find out when headcount gets approved."
      },
      {
       "key": "decision",
       "score": 1,
       "evidence": "I'd sponsor it, but our CIO, Farhan, has to sign off on anything that touches the ERP.",
       "gap": "People are partly known; steps and criteria are not."
      }
     ]
    }
   }
  }
 },
 {
  "id": "ithead",
  "label": "IT head, mixed call",
  "source": "call",
  "file": "3-it-head-mixed.txt",
  "text": "Juliet (Nexora Automation): Hi Anil, thanks for taking my call. You downloaded our report on process mining in healthcare, so I wanted to understand what prompted that.\nAnil (Head of IT, CareWell Hospitals): Our board wants to know why patient discharge takes so long. Average discharge time is over 6 hours across our 14 hospitals.\nJuliet: What's the impact of that for CareWell?\nAnil: Beds stay blocked, so we turn away admissions from emergency. Patients complain in Google reviews too. Nobody can tell me exactly where the delay sits: billing, pharmacy, insurance approval or the doctor's sign-off.\nJuliet: So the first need is visibility, before any automation?\nAnil: Exactly. The data is in our HIS, the billing system and the TPA portal, but nobody has joined it up.\nJuliet: If you had that visibility, what target would you set?\nAnil: The medical director wants discharge under 3 hours. I haven't been given a revenue number.\nJuliet: How would a project like this get approved?\nAnil: I'd write a business case. Our CEO, Dr. Suresh Menon, approves IT spend above 25 lakh. Below that, I can approve it myself.\nJuliet: What would the business case need to show?\nAnil: That it works with our HIS, which is an older on-prem system, that patient data never leaves our servers, and quick results, within three months.\nJuliet: And the steps after the business case?\nAnil: CEO review, then our IT committee, which meets monthly. Purchasing goes through our central procurement team.\nJuliet: Great. Let me show you a sample discharge process map from another hospital group. You can see exactly where cases wait.\nAnil: This is the kind of view the board wants.\nJuliet: I'll send you a proposal for a pilot at two hospitals next week.\nAnil: Okay, send it across.",
  "saved": {
   "summary": "Anil heads IT at CareWell Hospitals (14 hospitals). Discharge takes over 6 hours, blocking beds, and nobody can see where the delay sits across the HIS, billing and TPA portal. The call uncovered criteria and approvals well but ended on a proposal with no meeting booked.",
   "verdict": "Nurture",
   "verdict_reason": "Pain, criteria and approval route are clear, but the value is unquantified, competition wasn't explored, and the next step is a proposal rather than a meeting.",
   "next_steps": [
    "Book a call to walk Anil through the proposal rather than just emailing it.",
    "Help Anil build the business case with a cost per blocked bed.",
    "Ask to present at the next IT committee meeting.",
    "Keep the pilot under 25 lakh so Anil can approve it himself."
   ],
   "strengths": [
    "Opened by referring to the report Anil downloaded.",
    "Reframed the need as visibility before automation.",
    "Uncovered clear decision criteria."
   ],
   "improve": [
    "Didn't ask about competitors.",
    "Demoed before quantifying value.",
    "Accepted 'send it across' instead of booking a meeting."
   ],
   "crm": {
    "company": "CareWell Hospitals",
    "contact": "Anil",
    "role": "Head of IT",
    "stage": "Discovery done, nurture",
    "pain": "Discharge takes 6+ hours across 14 hospitals. Beds blocked, emergency admissions turned away. No visibility across HIS, billing and TPA portal.",
    "impact": "Target: discharge under 3 hours (medical director). No revenue figure.",
    "budget": "Not allocated. Anil approves below 25 lakh; CEO above.",
    "decision_maker": "CEO Dr. Suresh Menon above 25 lakh; Anil approves below.",
    "decision_process": "Business case, CEO review, monthly IT committee, central procurement. Criteria: works with on-prem HIS, data stays on-site, results in 3 months.",
    "timeline": "Wants results within 3 months. No decision date.",
    "competition": "Not discussed.",
    "next_step": "Send proposal for a 2-hospital pilot next week. No meeting booked.",
    "notes": "Good fit for process mining. Consider sizing the pilot under 25 lakh."
   },
   "frameworks": {
    "MEDDICC": {
     "missed_questions": [
      "What is a blocked bed costing CareWell per day in lost admissions?",
      "Are you speaking to any other vendors, or could your team build this in-house?",
      "When does the IT committee next meet, and what do they need to see?",
      "What would solving discharge times mean for you personally with the board?",
      "Who in medical operations would own this project with you?"
     ],
     "scores": [
      {
       "key": "metrics",
       "score": 1,
       "evidence": "The medical director wants discharge under 3 hours. I haven't been given a revenue number.",
       "gap": "Target exists but no money value. Ask what a blocked bed or lost admission is worth."
      },
      {
       "key": "economic_buyer",
       "score": 1,
       "evidence": "Our CEO, Dr. Suresh Menon, approves IT spend above 25 lakh.",
       "gap": "Approver named, but budget and the CEO's priorities are unknown."
      },
      {
       "key": "decision_criteria",
       "score": 2,
       "evidence": "That it works with our HIS ... that patient data never leaves our servers, and quick results, within three months.",
       "gap": "Clear criteria. Confirm the HIS vendor and version."
      },
      {
       "key": "decision_process",
       "score": 1,
       "evidence": "CEO review, then our IT committee, which meets monthly.",
       "gap": "Steps known but no dates. Ask when the next IT committee meets."
      },
      {
       "key": "paper_process",
       "score": 1,
       "evidence": "Purchasing goes through our central procurement team.",
       "gap": "Mentioned only. Ask about data security review, contract terms and timelines."
      },
      {
       "key": "pain",
       "score": 2,
       "evidence": "Beds stay blocked, so we turn away admissions from emergency.",
       "gap": "Strong. Pain and business impact are clear."
      },
      {
       "key": "champion",
       "score": 1,
       "evidence": "This is the kind of view the board wants.",
       "gap": "Anil is interested, but his personal stake and influence weren't tested."
      },
      {
       "key": "competition",
       "score": 0,
       "evidence": "",
       "gap": "Never asked whether other vendors or an in-house option are being considered."
      }
     ]
    },
    "BANT": {
     "missed_questions": [
      "Is there budget set aside this year, or would this be a new request?",
      "When is the next IT committee meeting?",
      "When does the board expect an answer on discharge times?",
      "Can we go through the proposal together on a call next week?"
     ],
     "scores": [
      {
       "key": "budget",
       "score": 1,
       "evidence": "Our CEO, Dr. Suresh Menon, approves IT spend above 25 lakh.",
       "gap": "Approval limits are known, but no budget is allocated."
      },
      {
       "key": "authority",
       "score": 2,
       "evidence": "Below that, I can approve it myself.",
       "gap": "Clear. Size the pilot under 25 lakh so Anil can sign."
      },
      {
       "key": "need",
       "score": 2,
       "evidence": "Beds stay blocked, so we turn away admissions from emergency.",
       "gap": "Specific and serious need."
      },
      {
       "key": "timeline",
       "score": 1,
       "evidence": "quick results, within three months.",
       "gap": "Wants fast results, but there's no decision date. Ask when the next IT committee meets."
      }
     ]
    },
    "SPICED": {
     "missed_questions": [
      "How many emergency admissions are turned away each month, and what is each worth?",
      "When does the board expect an answer?",
      "Is the medical director involved in the decision?",
      "Have you looked at any other ways to get this visibility?"
     ],
     "scores": [
      {
       "key": "situation",
       "score": 2,
       "evidence": "Average discharge time is over 6 hours across our 14 hospitals.",
       "gap": "Scale and systems (HIS, billing, TPA portal) are clear."
      },
      {
       "key": "pain",
       "score": 2,
       "evidence": "Nobody can tell me exactly where the delay sits: billing, pharmacy, insurance approval or the doctor's sign-off.",
       "gap": "Clear problem: no visibility across systems."
      },
      {
       "key": "impact",
       "score": 1,
       "evidence": "I haven't been given a revenue number.",
       "gap": "Put a value on turned-away emergency admissions."
      },
      {
       "key": "critical_event",
       "score": 1,
       "evidence": "Our board wants to know why patient discharge takes so long.",
       "gap": "Board pressure, but no date. Ask when the board reviews this."
      },
      {
       "key": "decision",
       "score": 2,
       "evidence": "CEO review, then our IT committee, which meets monthly.",
       "gap": "People, criteria and steps are known."
      }
     ]
    }
   }
  }
 },
 {
  "id": "itdir",
  "label": "IT director, weak call",
  "source": "call",
  "file": "4-it-director-weak.txt",
  "text": "Juliet (Nexora Automation): Hi Rohit, Juliet here from Nexora Automation. Did I catch you at a good time?\nRohit (IT Director, Kavya Finance): I have five minutes before a meeting.\nJuliet: Perfect. So Nexora builds AI agents and RPA bots for financial services. Our agents do KYC checks, loan document verification, collections calls and customer service. We have 120 pre-built bots, a no-code studio, and we're ISO 27001 certified.\nRohit: Okay.\nJuliet: We also have a generative AI layer that reads any document, plus dashboards for your compliance team. Lenders using us cut processing time by 70%.\nRohit: We're already running some pilots with our core banking vendor.\nJuliet: Our platform works alongside any vendor. Would you like to see a demo?\nRohit: Maybe later. The RBI audit is on our plate this quarter.\nJuliet: Understood. If you sign before December, we can give you 20% off the first year.\nRohit: We don't buy like that. Just email me some material.\nJuliet: Sure, I'll send our brochure and case studies. Thanks Rohit!",
  "saved": {
   "summary": "Rohit is IT Director at Kavya Finance, an NBFC. The rep pitched features for most of the call and learned only that Kavya is piloting tools with its core banking vendor and is busy with an RBI audit.",
   "verdict": "Disqualify",
   "verdict_reason": "No pain, metrics, budget or process was uncovered. The lead isn't necessarily bad, but this call gives no basis for pursuing it now.",
   "next_steps": [
    "Send a short, relevant note, not a brochure, referencing the RBI audit pressure.",
    "Ask for a 20-minute discovery call after the audit.",
    "Research Kavya's lending products and recent news before the next attempt."
   ],
   "strengths": [
    "Asked for permission at the start of the call."
   ],
   "improve": [
    "Pitched features for most of the call without asking a single discovery question.",
    "Offered a discount before any need was established.",
    "Ended with a brochure instead of a next step."
   ],
   "crm": {
    "company": "Kavya Finance",
    "contact": "Rohit",
    "role": "IT Director",
    "stage": "Cold call, disqualified for now",
    "pain": "Not discussed.",
    "impact": "Not discussed.",
    "budget": "Not discussed.",
    "decision_maker": "Not discussed.",
    "decision_process": "Not discussed. Rohit said they don't buy on discount offers.",
    "timeline": "Busy with an RBI audit this quarter.",
    "competition": "Running pilots with their core banking vendor.",
    "next_step": "Send material by email. No meeting booked.",
    "notes": "Re-approach after the audit with a discovery-led call."
   },
   "frameworks": {
    "MEDDICC": {
     "missed_questions": [
      "What are your biggest operational priorities this year, apart from the RBI audit?",
      "Which processes in lending or collections take the most manual effort today?",
      "What are the pilots with your core banking vendor trying to solve?",
      "How does Kavya usually evaluate and buy new technology?",
      "When would be a better time to talk, after the audit?"
     ],
     "scores": [
      {
       "key": "metrics",
       "score": 0,
       "evidence": "",
       "gap": "No business impact or success measures were discussed."
      },
      {
       "key": "economic_buyer",
       "score": 0,
       "evidence": "",
       "gap": "Never asked who owns budget or who decides."
      },
      {
       "key": "decision_criteria",
       "score": 0,
       "evidence": "",
       "gap": "Never asked how Kavya evaluates tools."
      },
      {
       "key": "decision_process",
       "score": 0,
       "evidence": "We don't buy like that.",
       "gap": "Rohit hinted there is a formal buying process, but the rep didn't ask about it."
      },
      {
       "key": "paper_process",
       "score": 0,
       "evidence": "",
       "gap": "Not discussed."
      },
      {
       "key": "pain",
       "score": 0,
       "evidence": "",
       "gap": "No problem was identified. The rep never asked about Rohit's challenges."
      },
      {
       "key": "champion",
       "score": 0,
       "evidence": "",
       "gap": "No champion identified."
      },
      {
       "key": "competition",
       "score": 1,
       "evidence": "We're already running some pilots with our core banking vendor.",
       "gap": "Competition surfaced, but the rep didn't ask what the pilots cover or how they're going."
      }
     ]
    },
    "BANT": {
     "missed_questions": [
      "What's taking most of your team's time in lending operations right now?",
      "What are you hoping the core banking vendor pilots will fix?",
      "When does the RBI audit finish?",
      "Who else would be involved if you looked at automation?",
      "Could we find 20 minutes after the audit to talk properly?"
     ],
     "scores": [
      {
       "key": "budget",
       "score": 0,
       "evidence": "",
       "gap": "Never asked. A discount was offered before anything was known about budget."
      },
      {
       "key": "authority",
       "score": 0,
       "evidence": "",
       "gap": "Unknown whether Rohit decides or who else is involved."
      },
      {
       "key": "need",
       "score": 0,
       "evidence": "",
       "gap": "No problem uncovered. The call was a feature list."
      },
      {
       "key": "timeline",
       "score": 1,
       "evidence": "The RBI audit is on our plate this quarter.",
       "gap": "Tells you when not to push. Ask when the audit finishes."
      }
     ]
    },
    "SPICED": {
     "missed_questions": [
      "How do KYC and loan document checks work today?",
      "What would it mean for the audit if those checks were faster?",
      "How do you usually evaluate and buy new technology?",
      "What did you mean by 'we don't buy like that'?"
     ],
     "scores": [
      {
       "key": "situation",
       "score": 1,
       "evidence": "We're already running some pilots with our core banking vendor.",
       "gap": "One fact about their setup. Nothing on volumes, teams or processes."
      },
      {
       "key": "pain",
       "score": 0,
       "evidence": "",
       "gap": "No problem was asked about."
      },
      {
       "key": "impact",
       "score": 0,
       "evidence": "",
       "gap": "No impact explored."
      },
      {
       "key": "critical_event",
       "score": 1,
       "evidence": "The RBI audit is on our plate this quarter.",
       "gap": "The audit is an event, but the rep didn't ask whether it creates a need."
      },
      {
       "key": "decision",
       "score": 1,
       "evidence": "We don't buy like that.",
       "gap": "Signals a formal buying process. Ask how they do buy."
      }
     ]
    }
   }
  }
 },
 {
  "id": "ceo",
  "label": "CEO, good call but poor fit",
  "source": "call",
  "file": "5-ceo-not-a-fit.txt",
  "text": "Juliet (Nexora Automation): Hi Nikhil, thanks for the time. My aim today is to understand whether automation would actually help Brewly right now. If it won't, I'll say so. Fair?\nNikhil (Co-founder and CEO, Brewly): Fair. My investor suggested I look at AI automation.\nJuliet: What made them suggest it?\nNikhil: They think we spend too much on operations. We're a D2C coffee brand, about 60 people.\nJuliet: Which processes take the most manual effort today?\nNikhil: Order reconciliation between Shopify, our warehouse and the payment gateways. Two people spend maybe half their week on it.\nJuliet: How many orders and invoices are we talking about each month?\nNikhil: Around 4,000 orders, and maybe 200 supplier invoices.\nJuliet: What does the manual work cost you today, or put at risk?\nNikhil: Honestly, not much. Maybe one refund mistake a month. It's annoying more than painful.\nJuliet: Is there budget set aside for automation this year?\nNikhil: No. We're focused on raising our Series A by March. Any spend over 2 lakh needs both my co-founder Aisha and me to agree.\nJuliet: Are you looking at any other options?\nNikhil: Someone on the team is trying Zapier. That might be enough.\nJuliet: Thanks for being open. Based on what you've said, a full automation programme wouldn't pay back for you right now. Zapier is probably the right tool at your volume. Could I check in with you after your Series A, around April, when volumes have grown?\nNikhil: That's refreshing. Yes, April works.",
  "saved": {
   "summary": "Nikhil is co-founder and CEO of Brewly, a 60-person D2C coffee brand. Order reconciliation is manual but low-volume and low-impact, there's no budget, and Zapier may be enough. The rep correctly qualified the deal out and booked a check-in for April.",
   "verdict": "Disqualify",
   "verdict_reason": "Pain is low, there is no budget and the volume doesn't justify a full programme. The rep handled this well by walking away and keeping the door open.",
   "next_steps": [
    "Send a short thank-you note confirming the April check-in.",
    "Set a reminder to reconnect after the Series A.",
    "Share one relevant example of when a D2C brand outgrew Zapier."
   ],
   "strengths": [
    "Set expectations at the start, including permission to say it's not a fit.",
    "Tested the pain honestly instead of inflating it.",
    "Walked away gracefully and booked a future check-in."
   ],
   "improve": [
    "Could have asked what growth after Series A would look like, to judge timing better."
   ],
   "crm": {
    "company": "Brewly",
    "contact": "Nikhil",
    "role": "Co-founder and CEO",
    "stage": "Disqualified, revisit April",
    "pain": "Manual order reconciliation across Shopify, warehouse and payment gateways. Low impact.",
    "impact": "~1 refund error a month. ~4,000 orders and ~200 supplier invoices a month; 2 people spend half their week on it.",
    "budget": "None this year. Raising Series A by March.",
    "decision_maker": "Nikhil and co-founder Aisha jointly approve spend over 2 lakh.",
    "decision_process": "Not applicable now.",
    "timeline": "Revisit in April, after the Series A.",
    "competition": "Trying Zapier internally.",
    "next_step": "Check in April, after the Series A.",
    "notes": "Good relationship. Not a fit at current volume."
   },
   "frameworks": {
    "MEDDICC": {
     "missed_questions": [
      "What volumes would make automation worth revisiting?",
      "What will operations look like after the Series A?"
     ],
     "scores": [
      {
       "key": "metrics",
       "score": 2,
       "evidence": "Around 4,000 orders, and maybe 200 supplier invoices.",
       "gap": "Well quantified, and it showed the opportunity is small."
      },
      {
       "key": "economic_buyer",
       "score": 2,
       "evidence": "Any spend over 2 lakh needs both my co-founder Aisha and me to agree.",
       "gap": "Clear. Both founders are the buyers, and there's no budget this year."
      },
      {
       "key": "decision_criteria",
       "score": 0,
       "evidence": "",
       "gap": "Not explored, which is fine given the deal was disqualified."
      },
      {
       "key": "decision_process",
       "score": 1,
       "evidence": "Any spend over 2 lakh needs both my co-founder Aisha and me to agree.",
       "gap": "Approval known, but no process needed at this stage."
      },
      {
       "key": "paper_process",
       "score": 0,
       "evidence": "",
       "gap": "Not discussed. Not needed for a disqualified deal."
      },
      {
       "key": "pain",
       "score": 2,
       "evidence": "Honestly, not much. Maybe one refund mistake a month. It's annoying more than painful.",
       "gap": "Pain was properly tested and found to be low."
      },
      {
       "key": "champion",
       "score": 1,
       "evidence": "My investor suggested I look at AI automation.",
       "gap": "Nikhil is open, but there's no internal push for a project."
      },
      {
       "key": "competition",
       "score": 2,
       "evidence": "Someone on the team is trying Zapier. That might be enough.",
       "gap": "Clear. The rep correctly agreed Zapier fits their volume."
      }
     ]
    },
    "BANT": {
     "missed_questions": [
      "What order volume would make reconciliation a real problem?",
      "What will change in operations after the Series A?"
     ],
     "scores": [
      {
       "key": "budget",
       "score": 2,
       "evidence": "No. We're focused on raising our Series A by March.",
       "gap": "Clearly no budget this year. Revisit after funding."
      },
      {
       "key": "authority",
       "score": 2,
       "evidence": "Any spend over 2 lakh needs both my co-founder Aisha and me to agree.",
       "gap": "Both approvers are known."
      },
      {
       "key": "need",
       "score": 1,
       "evidence": "Honestly, not much. Maybe one refund mistake a month.",
       "gap": "The need exists but is small. The rep tested it honestly."
      },
      {
       "key": "timeline",
       "score": 2,
       "evidence": "Yes, April works.",
       "gap": "A clear check-in date is agreed."
      }
     ]
    },
    "SPICED": {
     "missed_questions": [
      "What growth do you expect after the Series A?",
      "At what order volume would you need more people for reconciliation?"
     ],
     "scores": [
      {
       "key": "situation",
       "score": 2,
       "evidence": "We're a D2C coffee brand, about 60 people.",
       "gap": "Size, volumes and tools are clear."
      },
      {
       "key": "pain",
       "score": 2,
       "evidence": "Order reconciliation between Shopify, our warehouse and the payment gateways.",
       "gap": "Clear, specific problem."
      },
      {
       "key": "impact",
       "score": 2,
       "evidence": "Honestly, not much. Maybe one refund mistake a month.",
       "gap": "Low impact confirmed. This is the basis for disqualifying."
      },
      {
       "key": "critical_event",
       "score": 1,
       "evidence": "We're focused on raising our Series A by March.",
       "gap": "The funding round is an event, but it delays automation rather than driving it."
      },
      {
       "key": "decision",
       "score": 1,
       "evidence": "Any spend over 2 lakh needs both my co-founder Aisha and me to agree.",
       "gap": "Approvers known. The process doesn't matter yet."
      }
     ]
    }
   }
  }
 },
 {
  "id": "chat",
  "label": "Finance controller, WhatsApp chat",
  "source": "chat",
  "file": "6-whatsapp-chat.txt",
  "text": "[Mon 09:42] Juliet (Nexora Automation): Hi Kavya, Juliet here from Nexora. We met at the NASSCOM session last week. You mentioned your AP team is drowning in vendor invoices. Is that still a priority this quarter?\n[Mon 10:15] Kavya (Finance Controller, Brightline Retail): Hi Juliet! Yes very much. We get ~6,500 vendor invoices a month, mostly PDFs on email. 9 people key them into Tally + our ERP\n[Mon 10:17] Juliet: That's a lot of manual work. What does it cost you today? Delays, errors, late fees?\n[Mon 10:31] Kavya: Avg 11 days to approve an invoice. We lost early-payment discounts worth roughly 14 lakh last year. And month-end close takes 9 days 😩\n[Mon 10:33] Juliet: If we fixed this, what would success look like for you?\n[Mon 10:40] Kavya: Close in 5 days and capture at least 70% of discounts. That's literally on my goals for this year\n[Mon 10:42] Juliet: Clear. Who else would be involved in a decision like this?\n[Mon 11:05] Kavya: Me, our IT manager Rohit, and the CFO Anand signs anything above 20L\n[Mon 11:06] Juliet: Got it. Have you looked at other options?\n[Mon 11:20] Kavya: Our Tally partner pitched an add-on. Also thinking of just hiring 2 more people tbh\n[Mon 11:22] Juliet: Makes sense. Would a 30-min call with you and Rohit this week work? I can show how invoice capture works on your own sample invoices.\n[Tue 09:10] Kavya: Thursday 3pm works. I'll loop in Rohit. Anand won't join yet\n[Tue 09:12] Juliet: Perfect, invite sent for Thu 3pm. Could you share 10 sample invoices before then?\n[Tue 09:30] Kavya: Will do 👍",
  "saved": {
   "summary": "Kavya is Finance Controller at Brightline Retail. Her 9-person team keys ~6,500 emailed vendor invoices a month into Tally and the ERP; approvals take 11 days and the company lost about 14 lakh in early-payment discounts last year. A call with Kavya and IT manager Rohit is booked for Thursday.",
   "verdict": "Nurture",
   "verdict_reason": "Pain is strong and a call is booked, but budget, decision criteria and process are still open. Use Thursday's call to close those gaps.",
   "next_steps": [
    "Get the 10 sample invoices before Thursday and show them processed live.",
    "Use Thursday's call to ask about budget, criteria and IT requirements.",
    "Agree how to bring CFO Anand in, using the 14 lakh in lost discounts as the business case.",
    "Compare the cost of 2 new hires with the cost of automation."
   ],
   "strengths": [
    "Opened by recalling where they met and the problem Kavya had mentioned.",
    "Quantified the pain and the success measures within a few messages.",
    "Booked a specific call and asked for sample invoices to make it concrete."
   ],
   "improve": [
    "Didn't ask about budget or how the decision gets made.",
    "Accepted 'Anand won't join yet' without asking what he'll need to see.",
    "Didn't ask what Kavya thought of the Tally partner's add-on."
   ],
   "crm": {
    "company": "Brightline Retail",
    "contact": "Kavya",
    "role": "Finance Controller",
    "stage": "Demo booked, nurture",
    "pain": "~6,500 vendor invoices a month keyed manually into Tally and the ERP by 9 people. 11-day average approval; 9-day month-end close.",
    "impact": "Lost ~14 lakh in early-payment discounts last year. Goals: close in 5 days, capture 70% of discounts.",
    "budget": "Not discussed. CFO signs anything above 20L.",
    "decision_maker": "CFO Anand (above 20L). Not engaged yet.",
    "decision_process": "Kavya, IT manager Rohit and CFO Anand involved. Steps not discussed.",
    "timeline": "On Kavya's goals for this year. No decision date.",
    "competition": "Tally partner's add-on; hiring 2 more people.",
    "next_step": "Call Thu 3pm with Kavya and Rohit. Kavya to share 10 sample invoices first.",
    "notes": "Met at a NASSCOM session."
   },
   "frameworks": {
    "MEDDICC": {
     "missed_questions": [
      "What would you and Rohit need to see on Thursday to take this to Anand?",
      "Is there budget for this, or would it be a new request to Anand?",
      "How will you compare us with the Tally add-on?",
      "What does IT need to check before a new tool connects to Tally and the ERP?",
      "When would this need to be live to hit a 5-day close this year?"
     ],
     "scores": [
      {
       "key": "metrics",
       "score": 2,
       "evidence": "Close in 5 days and capture at least 70% of discounts.",
       "gap": "Clear targets. Confirm them in writing as success criteria."
      },
      {
       "key": "economic_buyer",
       "score": 1,
       "evidence": "the CFO Anand signs anything above 20L",
       "gap": "Named, but not engaged and not joining Thursday."
      },
      {
       "key": "decision_criteria",
       "score": 0,
       "evidence": "",
       "gap": "Never asked how Brightline will compare options."
      },
      {
       "key": "decision_process",
       "score": 1,
       "evidence": "Me, our IT manager Rohit, and the CFO Anand signs anything above 20L",
       "gap": "People are known, but not the steps or timeline."
      },
      {
       "key": "paper_process",
       "score": 0,
       "evidence": "",
       "gap": "Procurement, IT security and contract steps weren't raised."
      },
      {
       "key": "pain",
       "score": 2,
       "evidence": "We lost early-payment discounts worth roughly 14 lakh last year.",
       "gap": "Strong, quantified pain."
      },
      {
       "key": "champion",
       "score": 1,
       "evidence": "That's literally on my goals for this year",
       "gap": "Kavya has a personal stake. Test whether she'll sell this to Anand."
      },
      {
       "key": "competition",
       "score": 2,
       "evidence": "Our Tally partner pitched an add-on. Also thinking of just hiring 2 more people tbh",
       "gap": "Good, including the hiring alternative."
      }
     ]
    },
    "BANT": {
     "missed_questions": [
      "Is budget set aside for this, or would you build a case for Anand?",
      "When would this need to be live to hit your goals this year?",
      "What would Anand want to see before approving?"
     ],
     "scores": [
      {
       "key": "budget",
       "score": 0,
       "evidence": "",
       "gap": "Not asked. The CFO's 20L limit hints at deal size, not budget."
      },
      {
       "key": "authority",
       "score": 1,
       "evidence": "the CFO Anand signs anything above 20L",
       "gap": "Named, but won't join yet. Ask what Anand needs to see."
      },
      {
       "key": "need",
       "score": 2,
       "evidence": "We lost early-payment discounts worth roughly 14 lakh last year.",
       "gap": "Strong, quantified need."
      },
      {
       "key": "timeline",
       "score": 1,
       "evidence": "That's literally on my goals for this year",
       "gap": "This year's goals imply urgency, but there's no decision date."
      }
     ]
    },
    "SPICED": {
     "missed_questions": [
      "When is your year-end review against these goals?",
      "What will Rohit and Anand look at when deciding?",
      "How does the cost of 2 new hires compare with fixing the process?"
     ],
     "scores": [
      {
       "key": "situation",
       "score": 2,
       "evidence": "We get ~6,500 vendor invoices a month, mostly PDFs on email. 9 people key them into Tally + our ERP",
       "gap": "Volumes, team and tools are clear."
      },
      {
       "key": "pain",
       "score": 2,
       "evidence": "Avg 11 days to approve an invoice.",
       "gap": "Clear problem with a measurable symptom."
      },
      {
       "key": "impact",
       "score": 2,
       "evidence": "We lost early-payment discounts worth roughly 14 lakh last year.",
       "gap": "Quantified impact plus a 9-day close."
      },
      {
       "key": "critical_event",
       "score": 1,
       "evidence": "That's literally on my goals for this year",
       "gap": "An annual goal, not a hard date. Ask when her year-end review is."
      },
      {
       "key": "decision",
       "score": 1,
       "evidence": "Me, our IT manager Rohit, and the CFO Anand signs anything above 20L",
       "gap": "People known; criteria and steps are not."
      }
     ]
    }
   }
  }
 }
];
