from browser import document, window

document["user_agent"].value = window.navigator.userAgent
document["fournisseur"].value = window.navigator.vendor
document["navigateur"].value = window.navigator.appName
document["langue"].value = window.navigator.language
document["en_ligne"].value = window.navigator.onLine
document["plateforme"].value = window.navigator.platform