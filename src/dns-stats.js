const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj={};
  if (domains.length===0) {
    return obj;
  }
  let com=0;
  let epam=0;
  let info=0;

  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split('.');
    for (let k = 0; k < arr.length; k++) {
      if (arr[k]==='com') {
          com++;
      } else if (arr[k]==='epam') {
        epam++;
      } else if (arr[k]==='info') {
        info++;
      }
    };
  }
  if (com>0) {
    obj[".com"] = com;
  }
  if (epam>0) {
    obj[".com.epam"] = epam;
  }
  if (info>0) {
    obj[".com.epam.info"] = info;
  }
  return obj;
}

module.exports = {
  getDNSStats
};
