const htmltagfilters = (message) => {
var text = (message==undefined) ? 'undefined':message      
return text.replace(/</g, "&lt").replace(/>/g, "&gt")
}
