// Data should be fetched using an AJAX request
const jsonResponse = {
    "logoImage": "assets/images/sfeLogo.png",
    "account": {
        "fname": "Bob",
        "lname": "Walker",
        "email": "bob@stronde.com",
        "timeZone": "EST"
    },
    "modules": {
        "options": [
            {"label": "Coca Cola Brand", "url": "https://www.google.com"},
            {"label": "Unilever Brand", "url": "https://www.google.com"},
            {"label": "Waterworld Waterpark Ayia Napa", "url": "https://www.google.com"},
            {"label": "Amazon Electronics", "url": "https://www.google.com"}
        ]
    }
}

$(document).ready(() => {
    renderFromJsonResponse(jsonResponse);
});

function renderFromJsonResponse(jsonResponse) {
    setLogo(jsonResponse);
    setAccountAndUserInfo(jsonResponse);
    setModuleOptions(jsonResponse);
}

function setLogo(jsonResponse) {
    document.getElementById("logoImg").src = jsonResponse?.logoImage;
}

function setAccountAndUserInfo(jsonResponse) {
    let account = jsonResponse?.account;
    const fullName = `${account?.fname} ${account?.lname}`
    document.getElementById("accountName").innerText = fullName;
    document.getElementById("emailAccount").innerText = account?.email;
    // const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let time = `Time zone: ${account?.timeZone}`;
    document.getElementById("timeZone").innerHTML = time;
    let user = `Welcome, ${fullName}`;
    document.getElementById("user").innerHTML = user;
}

function setModuleOptions(jsonResponse) {
    let modules = jsonResponse?.modules?.options;
    let options = modules?.map(opt => {
        return `<a href="${opt.url}" target="_blank">
                    <h5>${opt.label}</h5>
                    <i class="fa fa-angle-right"></i>
                </a>`
    });
    options = options.join("\n");
    document.getElementById("moduleOptions").innerHTML = options;
}

function accountInfo() {
    document.getElementById("dropDown").classList.toggle("show");
    document.getElementById("angleDown").classList.toggle("hide");
    document.getElementById("angleUp").classList.toggle("hide");
};

$(document).on("click", function(event){
    var $trigger = $(".account");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        document.getElementById("dropDown").classList.remove("show");
        document.getElementById("angleDown").classList.remove("hide");
        document.getElementById("angleUp").classList.add("hide");
    }            
});
