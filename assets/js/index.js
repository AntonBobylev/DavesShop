function onBodyLoad() {
    setFooterLabel();
}

function setFooterLabel() {
    let footerLabel = document.querySelector(".footer__label"),
        currentDate = new Date();
    footerLabel.innerHTML = footerLabel.innerHTML.format(`${currentDate.getFullYear()}`);
}

/* private functions*/

String.prototype.format = function() {
    var formatted = this;
    for (arg in arguments) {
      formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
  };