fetch("https://dashboard.elering.ee/API/BALANCE")
.then(res => res.json())
.then(data => console.log(data))