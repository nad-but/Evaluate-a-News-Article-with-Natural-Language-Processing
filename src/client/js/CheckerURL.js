const urlIsvalid = require('valid-url')

const VvalidURL = (urL) => {
Boolean(urlIsvalid.isWebUri(`${urL}`));
}
export {VvalidURL}
