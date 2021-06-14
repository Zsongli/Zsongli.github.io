async function create() {
    const url = document.getElementById("original").value;
    const webhook = document.getElementById("webhook").value;
    if (!url) return;
    if (!url.includes(".") || url.length <= 2 || url.indexOf(".") == url.length-1 || url.indexOf(".") == 0) {
        document.getElementById("original").style.border = "2px solid rgb(136, 0, 0)";
        return;
    }
    if (webhook.length > 0 && !webhook.startsWith("https://discord.com/api/")) {
        document.getElementById("webhook").style.border = "2px solid rgb(136, 0, 0)";
        return;
    }

    document.getElementById("result-flex").style.display = "flex";
    document.getElementById("result").placeholder = "Requesting link, please wait";
    const response = await fetch("https://backend.zsongli.cc/shorten", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
        body: JSON.stringify({
            url: url,
            webhook: webhook.length > 0 ? webhook : undefined
        })
    }).catch(err => {
        document.getElementById("result").placeholder = "Server is offline. Please try again later.";
    });

    const result = document.getElementById("result");
    if (response) {
        if (response.status == 201){
            result.style = "";
            result.value = `https://backend.zsongli.cc/goto/${await response.json().then(body => body.code)}/`;
            document.getElementById("original").style = "";
            document.getElementById("webhook").style = "";
        }
        else if (response.status == 400) {
            result.style = "";
            result.placeholder = "Invalid details.";
        }
        else if (response.status == 429) {
            
            result.value = "";
            result.placeholder = "You are being rate limited.";
            result.style.border = "2px solid rgb(136, 0, 0)";
            document.getElementById("original").style = "";
            document.getElementById("webhook").style = "";
        }
    }
}

function copyLink() {
    const text = document.getElementById("result");
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
}