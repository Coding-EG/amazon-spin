
function spin() {
    let spinDesk;
    spinDesk = document.querySelector("#spin");
    let rotation = Math.floor(Math.random()*10 + 5);
    luckyNum = Math.floor(Math.random()*5 + 1);
    localStorage.setItem("luckyNum",luckyNum);
    spinDesk.style.transitionDuration = `${luckyNum*1.5+2}s`;
    spinDesk.style.transform = `rotate(${360*rotation+60*luckyNum+30}deg)`;
    spinDesk.addEventListener("transitionend",() => {
        let luckyCheer = document.createElement("img");
        document.getElementById("container").append(luckyCheer);
        luckyCheer.className = "lucky-cheer";
        let priceCollect = document.createElement("button");
        document.body.append(priceCollect);
        priceCollect.className = "button";
        if(luckyNum != 1) {
        luckyCheer.src = "luckycheer.gif";
        priceCollect.innerText = "Claim Your Price";
        priceCollect.onclick = () => {window.open("price.html","_self");}
    }else{
        spinDesk.style.opacity = "0.5";
        luckyCheer.src = "Untitled.gif";
        priceCollect.innerText = "Try Again";
        priceCollect.onclick= () => location.reload();
            
        }
        
        
    });
}
document.getElementById("swing").addEventListener("click",spin);