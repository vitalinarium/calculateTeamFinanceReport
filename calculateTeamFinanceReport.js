// const salaries1 = {
//     Manager: { salary: 1000, tax: "10%" },
//     Designer: { salary: 600, tax: "30%" },
//     Artist: { salary: 1500, tax: "15%" },}
// const team1 = [
//     { name: "Misha", specialization: "Manager" },
//     { name: "Max", specialization: "Designer" },
//     { name: "Vova", specialization: "Designer"},
//     { name: "Leo", specialization: "Artist"},]

const salaries2 = {
    TeamLead: { salary: 1000, tax: "99%" },
    Architect: { salary: 9000, tax: "34%" },}
const team2 = [
    { name: "Alexander", specialization: "TeamLead" },
    { name: "Gaudi", specialization: "Architect" },
    { name: "Koolhas", specialization: "Architect" },
    { name: "Foster", specialization: "Architect" },
    { name: "Napoleon", specialization: "General" },]

function calculateTeamFinanceReport(salaries, team) {    

    let totals = {
        "totalBudgetTeam":0,
    };
    
    team.forEach(name => {               
        if (name.specialization in salaries) {  
            let percent = (100 - parseInt(salaries[name.specialization].tax, 10))/100;    
            totals["totalBudgetTeam"] += salaries[name.specialization].salary / percent; 
            if (`totalBudget${name.specialization}` in totals) {
                totals[`totalBudget${name.specialization}`] += salaries[name.specialization].salary / percent; 
            } 
            else {            
                totals[`totalBudget${name.specialization}`] = salaries[name.specialization].salary / percent;
            }             
        };
    });

    for (let item in totals){
        totals[item] = parseInt(totals[item],10)
    };

    return totals;
}

const financeReport = calculateTeamFinanceReport(salaries2, team2)
console.log(JSON.stringify(financeReport))