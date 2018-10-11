export default function getBaseUrl() {
  // https://github.com/coryhouse/js-dev-env-demo-api - heroku server api source
  // http://drab-note.surge.sh/ - frontend deploy
  // https://www.javascriptstuff.com/react-starter-projects/ - starter projects
  return getParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://mysterious-crag-56986.herokuapp.com/';
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
