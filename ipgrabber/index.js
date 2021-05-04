async function create() {
    const url = document.getElementById("original").value;
    const webhook = document.getElementById("webhook").value;
    if (!webhook || !url) return;
    
    document.getElementById("create-button").style.visibility = "hidden";
    document.getElementById("result-flex").style.visibility = "visible";
    document.getElementById("result").placeholder = "Requesting link, please wait";
    const response = await fetch("http://backend.zsongli.cc/create", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
        body: JSON.stringify({
            url: url,
            webhook: webhook
        })
    }).catch(err => {
        document.getElementById("result").placeholder = "Server is offline. Please try again later.";
    });

    if (response) {
        if (response.status == 201)
            document.getElementById("result").value = `http://backend.zsongli.cc/shortener/${await response.json().then(body=>body.code)}/`;
        else
            document.getElementById("result").placeholder = "The URLs are not valid.";
    }
}

function copyLink(){
    const text = document.getElementById("result");
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
