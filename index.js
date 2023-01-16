// @ts-check

if (!XMLHttpRequest.prototype.super_send)
  XMLHttpRequest.prototype.super_send = XMLHttpRequest.prototype.send;

  /** @this {XMLHttpRequest} */
XMLHttpRequest.prototype.send = function xhrSendOverride(body) {
  var xhr = this;
  setTimeout(function () {
    xhr.super_send(body);
  }, 2000);
};