function scrollToDemo() {
  document.getElementById("demo").scrollIntoView({ behavior: "smooth" });
}

// Sample places for 30 Karnataka districts
const samplePlans = {
  "Bagalkot": ["9:00 AM – Badami Caves", "11:30 AM – Pattadakal Temples", "1:00 PM – Lunch", "3:00 PM – Aihole Monuments"],
  "Bengaluru Rural": ["9:00 AM – Nandi Hills", "11:30 AM – Devanahalli Fort", "1:00 PM – Lunch", "3:00 PM – Skandagiri Trek"],
  "Bengaluru Urban": ["9:00 AM – Lalbagh Botanical Garden", "11:30 AM – Cubbon Park", "1:00 PM – Lunch at MG Road", "3:00 PM – Bangalore Palace"],
  "Belagavi": ["9:00 AM – Belagavi Fort", "11:30 AM – Kamal Basti", "1:00 PM – Lunch", "3:00 PM – Gokak Falls"],
  "Ballari": ["9:00 AM – Ballari Fort", "11:30 AM – Tungabhadra Dam", "1:00 PM – Lunch", "3:00 PM – Hampi ruins nearby"],
  "Bidar": ["9:00 AM – Bidar Fort", "11:30 AM – Bahmani Tombs", "1:00 PM – Lunch", "3:00 PM – Guru Nanak Jhira Sahib"],
  "Chamarajanagar": ["9:00 AM – Biligiriranga Hills", "11:30 AM – Hogenakkal Falls", "1:00 PM – Lunch", "3:00 PM – Male Mahadeshwara Hills"],
  "Chikballapur": ["9:00 AM – Nandi Hills", "11:30 AM – Muddenahalli", "1:00 PM – Lunch", "3:00 PM – Bhoga Nandeeshwara Temple"],
  "Chikkamagaluru": ["9:00 AM – Mullayanagiri", "11:30 AM – Baba Budangiri", "1:00 PM – Lunch", "3:00 PM – Coffee Plantations Tour"],
  "Chitradurga": ["9:00 AM – Chitradurga Fort", "11:30 AM – Chandravalli Caves", "1:00 PM – Lunch", "3:00 PM – Vedavati River Viewpoint"],
  "Dakshina Kannada": ["9:00 AM – Mangaluru Beaches", "11:30 AM – St. Aloysius Chapel", "1:00 PM – Lunch", "3:00 PM – Pilikula Zoo"],
  "Davanagere": ["9:00 AM – Kunduvada Cave Temple", "11:30 AM – Bhadra Dam", "1:00 PM – Lunch", "3:00 PM – Harihara River View"],
  "Dharwad": ["9:00 AM – Unkal Lake", "11:30 AM – Nrupatunga Hill", "1:00 PM – Lunch", "3:00 PM – Indira Gandhi Glass House"],
  "Gadag": ["9:00 AM – Trikuteshwara Temple", "11:30 AM – Veeranarayana Temple", "1:00 PM – Lunch", "3:00 PM – Lakkundi Temples"],
  "Hassan": ["9:00 AM – Belur Temple", "11:30 AM – Halebidu Temples", "1:00 PM – Lunch", "3:00 PM – Shravanabelagola"],
  "Haveri": ["9:00 AM – Ranebennur Blackbuck Sanctuary", "11:30 AM – Sonda Fort", "1:00 PM – Lunch", "3:00 PM – Hangal Temples"],
  "Kalaburagi": ["9:00 AM – Gulbarga Fort", "11:30 AM – Khwaja Bande Nawaz Dargah", "1:00 PM – Lunch", "3:00 PM – Narayanpet Lake"],
  "Kodagu": ["9:00 AM – Abbey Falls", "11:30 AM – Talakaveri", "1:00 PM – Lunch", "3:00 PM – Madikeri Fort"],
  "Kolar": ["9:00 AM – Kolar Gold Fields", "11:30 AM – Someshwara Temple", "1:00 PM – Lunch", "3:00 PM – Antaragange Trek"],
  "Koppal": ["9:00 AM – Hampi Nearby Ruins", "11:30 AM – Koppal Fort", "1:00 PM – Lunch", "3:00 PM – Maski Archaeological Site"],
  "Mandya": ["9:00 AM – Krishna Raja Sagar Dam", "11:30 AM – Ranganathittu Bird Sanctuary", "1:00 PM – Lunch", "3:00 PM – Srirangapatna"],
  "Mysuru": ["9:00 AM – Mysore Palace", "11:30 AM – Chamundi Hill", "1:00 PM – Lunch at Devaraja Market", "3:00 PM – Brindavan Gardens"],
  "Raichur": ["9:00 AM – Raichur Fort", "11:30 AM – Narayanpur Dam", "1:00 PM – Lunch", "3:00 PM – Maski Archaeological Site"],
  "Ramanagara": ["9:00 AM – Ramadevara Betta", "11:30 AM – Rock Climbing Spots", "1:00 PM – Lunch", "3:00 PM – Janapada Loka Museum"],
  "Shimoga": ["9:00 AM – Jog Falls", "11:30 AM – Sharavathi River View", "1:00 PM – Lunch", "3:00 PM – Sakrebailu Elephant Camp"],
  "Tumakuru": ["9:00 AM – Devarayanadurga Hills", "11:30 AM – Siddara Betta", "1:00 PM – Lunch", "3:00 PM – Shivagange"],
  "Udupi": ["9:00 AM – Sri Krishna Temple", "11:30 AM – Malpe Beach", "1:00 PM – Lunch", "3:00 PM – St. Mary’s Island"],
  "Uttara Kannada": ["9:00 AM – Karwar Beach", "11:30 AM – Kali River", "1:00 PM – Lunch", "3:00 PM – Dandeli Wildlife Sanctuary"],
  "Vijayapura": ["9:00 AM – Gol Gumbaz", "11:30 AM – Ibrahim Rauza", "1:00 PM – Lunch", "3:00 PM – Bara Kaman"],
  "Yadgir": ["9:00 AM – Yadgir Fort", "11:30 AM – Devapur Lake", "1:00 PM – Lunch", "3:00 PM – Baichi Basthi Temple"]
};

function generatePlan() {
  const district = document.getElementById("district").value;
  const days = document.getElementById("days").value;
  const budget = document.getElementById("budget").value;

  if (!district || !days || !budget) {
    alert("Please select all fields");
    return;
  }

  const output = document.getElementById("output");
  const plan = samplePlans[district] || ["9:00 AM – Local sightseeing", "11:30 AM – Visit nearby attractions", "1:00 PM – Lunch", "3:00 PM – Explore local markets"];

  let html = `<h3>Sample Trip Plan</h3>
              <p><strong>District:</strong> ${district}</p>
              <p><strong>Days:</strong> ${days}</p>
              <p><strong>Budget:</strong> ${budget}</p>
              <hr>`;

  plan.forEach(item => {
    html += `<p>${item}</p>`;
  });

  html += `<hr><small>*This is a demo preview, not a real plan</small>`;
  output.innerHTML = html;
}

