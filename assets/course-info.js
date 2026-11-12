/* ENT 141 · course settings for the course portal (assets/portal.js).
   To update the site, edit only this file. Empty links show "coming soon" until you paste them. */
window.COURSE={
  code:'ENT 141', title:['Innovation &','Entrepreneurship 1'], eyebrow:'ENT 141 · Fall 2026 · 2 credit hours · on campus',
  instructor:'Nadia',
  nav:[
    {key:'lectures',label:'Lectures',href:'lectures.html',icon:'lectures',blurb:'Each week: real examples, the textbook model, reflection.'},
    {key:'project',label:'Project 1',href:'project-1.html',icon:'project',blurb:'Team poster and presentation: done.'},
    {key:'project2',label:'Project 2',href:'project-2.html',icon:'project',blurb:'Idea Validation Report: write it on the page, save as Word, submit.'},
    {key:'act2',label:'Activity 2',href:'activity-2.html',icon:'toolkit',blurb:'Article or case analysis: five questions.'}
  ],
  navExtra:[['roadmap.html','Roadmap','roadmap'],['toolkit.html','Toolkit','toolkit']],
  assessPage:'project-2.html', assessLabel:'Project 2',
  onlineAnswer:'No. Classes are on campus, with your team, in class. This site supports your classes: lecture notes, the project guide and dates.',
  highlight:'a2',

  links:{
    reg:'',         /* team registration form: paste the link here when ready */
    booking:'',
    moodle:''
  },

  ask:()=>window.ENT141Assistant&&ENT141Assistant.open(),
  search:q=>{ const A=window.ENT141Assistant; if(!A||!A.search) return []; const r=A.search(q);
    return r.kb.slice(0,3).map(x=>({t:x.e.q,s:x.e.a,l:x.e.l})).concat(r.idx.slice(0,4).map(x=>({t:x.e.pt+' · '+x.e.n,s:x.e.t,l:x.e.l}))); },

  /* assessments (syllabus section 8). submit = Moodle submission link, '' = coming soon */
  assess:[
    {id:'a1',name:'Activity 1 · Video pitch',short:'Activity 1',type:'Activity',weight:'10%',when:'Week 4',covers:['30–45 second video pitch on the topic your instructor assigns','Posted on the Moodle forum before the deadline'],clos:'2',format:'Individual',
      submit:{link:'',dueText:'Week 4'},revise:[['Pitch practice','toolkit.html#s7']],done:true},
    {id:'p1',name:'Project 1 · Poster',short:'Poster',type:'Project',weight:'30%',when:'Week 9',covers:['Team poster: problem, interviews, empathy map, journey map, solutions, prototype','Built from Weeks 3–8'],clos:'1, 3, 4',format:'Team',
      submit:{link:'',dueText:'Week 9'},revise:[['Project guide','project-1.html'],['Poster template','poster.html']],done:true},
    {id:'p1p',name:'Project 1 · Presentation',short:'Presentation',type:'Project',weight:'10%',when:'Week 9',covers:['Present the poster with your team','Answer the panel’s questions'],clos:'2',format:'Team, graded individually',
      revise:[['How to present','project-1.html#s11']],done:true},
    {id:'a2',name:'Activity 2 · Article or case',short:'Activity 2',type:'Activity',weight:'10%',when:'Week 11',date:'2026-11-19T09:00:00+04:00',time:false,covers:['One article or case assigned in class','Five questions: venture, strategy, evidence, value, lesson'],clos:'1',format:'Individual',caseLink:'',
      submit:{link:'',due:'2026-11-19T23:59:00+04:00',dueText:'Thu 19 Nov'},revise:[['Activity 2 page','activity-2.html'],['Week 11 · Strategies','week-11.html']]},
    {id:'p2',name:'Project 2 · Idea Validation Report',short:'Project 2',type:'Project',weight:'40%',when:'Week 16',date:'2026-12-17T09:00:00+04:00',time:false,covers:['Three social innovation ideas, evaluated and one selected','Market and industry analysis','Value proposition canvas, differentiation, sustainability check'],clos:'1, 3, 4',format:'Team',
      submit:{link:'',due:'2026-12-17T23:59:00+04:00',dueText:'Thu 17 Dec'},revise:[['Project 2 builder','project-2.html']]}
  ],

  /* semester calendar: lec = [title, link] (no link = in preparation) */
  weeks:[
    {w:'1', lec:['Overview of the Course · Introduction to Entrepreneurship','week-01.html']},
    {w:'2', lec:['Introduction to Innovation · Introduction to Creativity','week-02.html']},
    {w:'3', lec:['Introduction to Sustainability','week-03.html']},
    {w:'4', lec:['Design Thinking Process (DTP) for Sustainable Innovation','week-04.html'], ev:['a1']},
    {w:'5', lec:['DTP Step 1: Empathy','week-05.html']},
    {w:'6', lec:['DTP Step 2: Defining','week-06.html']},
    {w:'7', lec:['DTP Step 3: Ideation','week-07.html']},
    {w:'8', lec:['Idea Evaluation','week-08.html']},
    {w:'9', lec:['Defending the Idea · Presenting the Idea','week-09.html'], ev:['p1','p1p']},
    {w:'10', lec:['Entrepreneurial Strategy','week-10.html']},
    {w:'11', lec:['Overview of Entrepreneurial Strategies','week-11.html'], ev:['a2']},
    {w:'12', lec:['Market/Industry Analysis','week-12.html']},
    {w:'13', lec:['Value Proposition Canvas (Part 1)','week-13.html']},
    {w:'14', lec:['Value Proposition Canvas (Part 2)','week-14.html']},
    {w:'15', lec:['Product Differentiation (Part 1)','week-15.html']},
    {w:'16', lec:['Product Differentiation (Part 2)','week-16.html'], ev:['p2']}
  ],

  clos:[
    ['CLO 1','Explain the basic concepts of innovation, entrepreneurship, and sustainability, and their value to the society and economy.'],
    ['CLO 2','Demonstrate skills of effective teamwork and presentation.'],
    ['CLO 3','Evaluate ideas and viable opportunities using the design thinking process.'],
    ['CLO 4','Identify key elements of the sustainability framework in the proposed innovative opportunities.']
  ],

  faqExtra:[
    ['What is next after Project 1?','Activity 2 (case analysis, due Thu 19 Nov) and Project 2, the Idea Validation Report (team, due Thu 17 Dec). <a href="roadmap.html">See the roadmap →</a>'],
    ['What is Project 1?','A team poster about one real social problem: you interview people, map what they feel, suggest solutions and draw a prototype. <a href="project-1.html">See the project guide, one part per page →</a>'],
    ['Are there exams in this course?','No written exams. You are assessed on two projects, a presentation and two activities.'],
    ['How do we register our team?','The registration link will be on the <a href="project-1.html#s2">project guide</a> as soon as your professor shares it.'],
    ['We have no idea for the project. What now?','Open the <a href="toolkit.html">Toolkit</a>: pick a problem from the bank, or find your own in four steps.'],
    ['Can I use ChatGPT or AI?','Only as your instructor allows in class. Interviews, quotes and the prototype must be your team’s own work.']
  ]
};
