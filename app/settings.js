var defaults = {
  fontSize: 14,
  tabSize: 2,
  tabType: 'spaces',
  theme: 'tomorrow',
  consoleOrientation: 'horizontal',
  showSidebar: false,
  wordWrap: false,
  runInBrowser: true
};

module.exports.load = function() {
  if (typeof nodeGlobal.userSettings === 'object') {
    return nodeGlobal.userSettings;
  }

  var settings = localStorage.userSettings;
  if (!settings) {
    settings = defaults;
  } else {
    try {
      settings = JSON.parse(settings);
    } catch(err) {
      settings = defaults;
    }
  }

  nodeGlobal.userSettings = settings;

  return settings;
};

module.exports.save = function(settings) {
  nodeGlobal.userSettings = settings;
  localStorage.userSettings = JSON.stringify(nodeGlobal.userSettings);
};

module.exports.write = function() {
  localStorage.userSettings = JSON.stringify(nodeGlobal.userSettings);
};

module.exports.defaults = defaults;
