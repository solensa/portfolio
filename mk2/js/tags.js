



var projectArray = ['Masterplan','Salt Lick Studio','HTML','CSS','JS','Jive','GitHub','AngularJS','Photoshop','Crowdsourcing','Change Management','Sharepoint','Communication','Automation','Dashboard','Simplification','Agile','Scrum','Kanban','design','frontbackend','data','Acrolist','Salt Lick Studio','HTML','CSS','JS','Jive','GitHub','ListJS','Photoshop','Crowdsourcing','Social Marketing','Community Building','design','frontbackend','Feedme','Salt Lick Studio','HTML','CSS','JS','Jive','GitHub','Photoshop','Social Marketing','Feedback','Performance rating','Social Marketing','Community Building','Culture Change','Simplification','Agile','Scrum','JIRA','Confluence','design','frontbackend','data','Talent Market','Salt Lick Studio','HTML','CSS','Jive','GitHub','Photoshop','Social Marketing','Community Building','Shadowing','Mentoring','Knowledge exchange','Initiatives','Job Hunting','Agile','Scrum','Kanban','design','frontbackend','Learning style quiz','Salt Lick Studio','HTML','CSS','JS','Jive','GitHub','Photoshop','Social Marketing','Sharing','Quiz','design','frontbackend','Orgtree','Salt Lick Studio','HTML','CSS','JS','Jive','GitHub','Photoshop','Crowdsourcing','Community Building','Simplification','design','frontbackend','data','Location Directory','Salt Lick Studio','HTML','CSS','Jive','Social Marketing','Community Building','Simplification','frontbackend','Pinboard','Salt Lick Studio','HTML','CSS','Jive','Social Marketing','Community Building','Simplification','frontbackend','Atom','Salt Lick Studio','HTML','CSS','Jive','GitHub','Chart.js','Node.js','Express','MySQL','MySQL Workbench','Docker','Jenkins','IBM Bluemix','Kubernetes','Photoshop','XD','Marvel','JIRA','Confluence','Agile','Scrum','Kanban','Prototyping','Speech to text','Text to speech','design','frontbackend','clouddevops','data','Evabuild','Salt Lick Studio','HTML','CSS','Jive','GitHub','design','frontbackend','Passimal','Salt Lick Studio','HTML','CSS','Jive','GitHub','design','frontbackend','Risk Tracker RPA','LBG','Excel VBA','Robotic Process Automation','Meeting Management','Simplification','data','Spirit of Scrum','LBG','Methodology','Agile','Scrum','Kanban','waysofworking','Lovebots','Okami Studio','Objective C','Xcode','Facebook Sharing','Image Analysis','design','mobile','Salterns Sailing Academy','Okami Studio','Objective C','Xcode','design','frontbackend','mobile','sound','Naughty Coin and Dice','Okami Studio','Objective C','Xcode','Audacity','Logic','design','mobile','Countdown','Okami Studio','Objective C','Xcode','design','mobile','Mac-to-Window shortcuts','Okami Studio','Objective C','Xcode','design','mobile','illustrations','John Claridge Boat Builders','Illustrator','Photoshop','Sketch','design','HSE','John Claridge Boat Builders','AutoCAD','Fluid Mechanics','Matlab','Scilab','design','data','Civil Engineering','Seafly','John Claridge Boat Builders','AutoCAD','Fluid Dynamics','Structural Mechanics','Hydrodynamics','Prototyping','Carbon Fibre','Glass Fibre','Plywood','Sailing','design','data','Civil Engineering','Lightning 368','John Claridge Boat Builders','AutoCAD','Fluid Dynamics','Structural Mechanics','Hydrodynamics','Prototyping','Carbon Fibre','Glass Fibre','Plywood','Sailing','design','data','Civil Engineering','Te Wero Bridge','Arcadis','AutoCAD','Excel','Structural Mechanics','Civil Engineering','Athlete','Personal','waysofworking','Analysing Tree Morphology','Education','Biology','Chemistry','Physics','Civil Engineering','Modelling','Finite Element Analysis','Fractals','Matlab','Photoshop','Image Analysis','Data Analysis','data','Machine Learning Chatbot','Education','Data Science','Jupyter','Python','Natural Language Processing','Naive Bayes Theorem','Flask','machine learning','data','Chartered Banker','Education','Stemnet Volunteering','Volunteering','Arduino','Teaching','sound','Civil Engineering','Coaching','Volunteering','Coaching','Sailing','Physics','Fluid Dynamics','Simplification','waysofworking','Model Boat','A-level','AutoCAD','design','data','Civil Engineering','Sofa','A-level','AutoCAD','design','Civil Engineering','Music','Personal','Audacity','Logic','Ableton','Piano','sound'];

var uniqueProjectArray = [];
$.each(projectArray, function(i, el){
    if($.inArray(el, uniqueProjectArray) === -1) uniqueProjectArray.push(el);
})

var projectTagsArray = [['masterplan','saltlickstudio','html','css','js','jive','github','angularjs','photoshop','crowdsourcing','changemanagement','sharepoint','communication','automation','dashboard','simplification','agile','scrum','kanban','design','frontbackend','data'],['acrolist','saltlickstudio','html','css','js','jive','github','listjs','photoshop','crowdsourcing','socialmarketing','communitybuilding','design','frontbackend'],['feedme','saltlickstudio','html','css','js','jive','github','photoshop','socialmarketing','feedback','performancerating','socialmarketing','communitybuilding','culturechange','simplification','agile','scrum','jira','confluence','design','frontbackend','data'],['talentmarket','saltlickstudio','html','css','jive','github','photoshop','socialmarketing','communitybuilding','shadowing','mentoring','knowledgeexchange','initiatives','jobhunting','agile','scrum','kanban','design','frontbackend'],['learningstylequiz','saltlickstudio','html','css','js','jive','github','photoshop','socialmarketing','sharing','quiz','design','frontbackend'],['orgtree','saltlickstudio','html','css','js','jive','github','photoshop','crowdsourcing','communitybuilding','simplification','design','frontbackend','data'],['locationdirectory','saltlickstudio','html','css','jive','socialmarketing','communitybuilding','simplification','frontbackend'],['pinboard','saltlickstudio','html','css','jive','socialmarketing','communitybuilding','simplification','frontbackend'],['atom','saltlickstudio','html','css','jive','github','chart.js','node.js','express','mysql','mysqlworkbench','docker','jenkins','ibmbluemix','kubernetes','photoshop','xd','marvel','jira','confluence','agile','scrum','kanban','prototyping','speechtotext','texttospeech','design','frontbackend','clouddevops','data'],['evabuild','saltlickstudio','html','css','jive','github','design','frontbackend'],['passimal','saltlickstudio','html','css','jive','github','design','frontbackend'],['risktrackerrpa','lbg','excelvba','roboticprocessautomation','meetingmanagement','simplification','data'],['spiritofscrum','lbg','methodology','agile','scrum','kanban','waysofworking'],['lovebots','okamistudio','objectivec','xcode','facebooksharing','imageanalysis','design','mobile'],['salternssailingacademy','okamistudio','objectivec','xcode','design','frontbackend','mobile','sound'],['naughtycoinanddice','okamistudio','objectivec','xcode','audacity','logic','design','mobile'],['countdown','okamistudio','objectivec','xcode','design','mobile'],['mac-to-windowshortcuts','okamistudio','objectivec','xcode','design','mobile'],['illustrations','johnclaridgeboatbuilders','illustrator','photoshop','sketch','design'],['hse','johnclaridgeboatbuilders','autocad','fluidmechanics','matlab','scilab','design','data','civilengineering'],['seafly','johnclaridgeboatbuilders','autocad','fluiddynamics','structuralmechanics','hydrodynamics','prototyping','carbonfibre','glassfibre','plywood','sailing','design','data','civilengineering'],['lightning368','johnclaridgeboatbuilders','autocad','fluiddynamics','structuralmechanics','hydrodynamics','prototyping','carbonfibre','glassfibre','plywood','sailing','design','data','civilengineering'],['tewerobridge','arcadis','autocad','excel','structuralmechanics','civilengineering'],['athlete','personal','waysofworking'],['analysingtreemorphology','education','biology','chemistry','physics','civilengineering','modelling','finiteelementanalysis','fractals','matlab','photoshop','imageanalysis','dataanalysis','data'],['machinelearningchatbot','education','datascience','jupyter','python','naturallanguageprocessing','naivebayestheorem','flask','machinelearning','data'],['charteredbanker','education'],['stemnetvolunteering','volunteering','arduino','teaching','sound','civilengineering'],['coaching','volunteering','coaching','sailing','physics','fluiddynamics','simplification','waysofworking'],['modelboat','a-level','autocad','design','data','civilengineering'],['sofa','a-level','autocad','design','civilengineering'],['music','personal','audacity','logic','ableton','piano','sound']];
