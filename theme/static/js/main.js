var config = [{
  group: 1,
  name: 'TDAA',
  division: 'Regular',
  cutoffs: [8, 12, 16, 20],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="https://k9tdaa.com/site2021/wp-content/uploads/2022/11/Rules-and-Regulations-v-5.8.3.pdf">TDAA</a>',
  rules: 'https://k9tdaa.com/site2021/wp-content/uploads/2022/11/Rules-and-Regulations-v-5.8.3.pdf',
  notes: ''
}, {
  group: 3,
  name: 'CPE',
  division: 'Specialist',
  cutoffs: [16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="http://www.k9cpe.com/forms/2019rb.pdf">CPE Specialist</a>',
  rules: 'http://www.k9cpe.com/forms/2019rb.pdf',
  notes: ''
}, {
  group: 3,
  name: 'UKC',
  division: 'Veterans',
  cutoffs: [14, 20, 26],
  jumpheights: [4, 8, 14],
  display: '<a href="https://res.ukcdogs.com/pdf/2011AgilityRulebookInsert.pdf">UKC Veteran</a>',
  rules: 'https://res.ukcdogs.com/pdf/2011AgilityRulebookInsert.pdf',
  notes: ''
}, {
  group: 3,
  name: 'USDAA',
  division: 'Veterans',
  cutoffs: [15, 18, 26],
  jumpheights: [4, 8, 12],
  jumpheightsdisplay: [4, 8, '12/16'],
  jumpheightsnotes: ['', '', 'Choice of 12 in or 16 in.'],
  display: '<a href="https://www.usdaa.com/regulations/upload/USDAAEquipmentSettingsChart2023.pdf">USDAA Veterans</a>',
  rules: 'https://www.usdaa.com/regulations/upload/USDAAEquipmentSettingsChart2023.pdf',
  notes: ''
}, {
  group: 4,
  name: 'CKC',
  division: 'Veterans',
  cutoffs: [14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="https://www.ckc.ca/en/Files/Forms/Shows-Trials/Event-Rules-Regulations/Agility-Rules-and-Regulations-Effective-January-1.aspx">CKC Veterans</a>',
  rules: 'https://www.ckc.ca/en/Files/Forms/Shows-Trials/Event-Rules-Regulations/Agility-Rules-and-Regulations-Effective-January-1.aspx',
  notes: "Dog's >= 7yro."
}, {
  group: 3,
  name: 'ASCA',
  division: 'Veterans',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="https://www.asca.org/wp-content/uploads/2019/05/June-2019-Agility-Rules.pdf">ASCA Veterans</a>',
  rules: 'https://www.asca.org/wp-content/uploads/2019/05/June-2019-Agility-Rules.pdf',
  notes: "Dog's >= 7yro."
}, {
  group: 4,
  name: 'AAC',
  division: 'Veterans',
  cutoffs: [12, 15, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="https://www.aac.ca/en/forms/_pdf/AAC_DogMeasurementForm_2017-18_v2.pdf">AAC Vet</a>',
  rules: 'https://www.aac.ca/en/forms/_pdf/AAC_DogMeasurementForm_2017-18_v2.pdf',
  notes: ''
}, {
  group: 3,
  name: 'NADAC',
  division: 'Veterans',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="https://www.nadac.com/WPsite/wp-content/uploads/2022/12/NADAC-Exhibitor_MasterFile-Rev-12.24.22.pdf">NADAC Proficient</a>',
  rules: 'https://www.nadac.com/WPsite/wp-content/uploads/2022/12/NADAC-Exhibitor_MasterFile-Rev-12.24.22.pdf',
  notes: "Dog's >= 7yro."
},
{
  group: 3,
  name: 'NADAC',
  division: 'Veterans',
  cutoffs: [14, 18, 26],
  jumpheights: [4, 8, 12],
  display: '<a href="https://www.nadac.com/WPsite/wp-content/uploads/2022/12/NADAC-Exhibitor_MasterFile-Rev-12.24.22.pdf">NADAC Skilled</a>',
  rules: 'https://www.nadac.com/WPsite/wp-content/uploads/2022/12/NADAC-Exhibitor_MasterFile-Rev-12.24.22.pdf',
  notes: "Dog's >= 7yro."
},

{
  group: 3,
  name: 'CPE',
  division: 'Veterans',
  cutoffs: [12, 16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="http://www.k9cpe.com/forms/2019rb.pdf">CPE Veterans</a>',
  rules: 'http://www.k9cpe.com/forms/2019rb.pdf',
  notes: "Dog's >= 6yro."
}, {
  group: 2,
  name: 'NADAC',
  division: 'Skilled',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="https://www.nadac.com/WPsite/wp-content/uploads/2022/12/NADAC-Exhibitor_MasterFile-Rev-12.24.22.pdf">NADAC Skilled</a>',
  rules: 'https://www.nadac.com/WPsite/wp-content/uploads/2022/12/NADAC-Exhibitor_MasterFile-Rev-12.24.22.pdf',
  notes: ''
}, {
  group: 2,
  name: 'ASCA',
  division: 'ACE',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="https://www.asca.org/wp-content/uploads/2019/05/June-2019-Agility-Rules.pdf">ASCA ACE</a>',
  rules: 'https://www.asca.org/wp-content/uploads/2019/05/June-2019-Agility-Rules.pdf',
  notes: ''
}, {
  group: 2,
  name: 'CPE',
  division: 'Enthusiast',
  cutoffs: [12, 16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="http://www.k9cpe.com/forms/2019rb.pdf">CPE Enth.</a>',
  rules: 'http://www.k9cpe.com/forms/2019rb.pdf',
  notes: ''
}, {
  group: 2,
  name: 'AKC',
  division: 'Preferred',
  cutoffs: [11, 14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="https://images.akc.org/pdf/rulebooks/REAGIL.pdf">AKC Pref.</a>',
  rules: 'https://images.akc.org/pdf/rulebooks/REAGIL.pdf',
  notes: ''
}, {
  group: 2,
  name: 'UKI',
  division: 'Select',
  cutoffs: [12.75, 15, 17.5, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="https://ukagilityinternational.com/events/jump-heights/">UKI Select</a>',
  rules: 'https://ukagilityinternational.com/events/jump-heights/',
  notes: ''
}, {
  group: 2,
  name: 'USDAA',
  division: 'Performance',
  cutoffs: [12, 15, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="https://www.usdaa.com/regulations/upload/USDAAEquipmentSettingsChart2023.pdf">USDAA Perf.</a>',
  rules: 'https://www.usdaa.com/regulations/upload/USDAAEquipmentSettingsChart2023.pdf',
  notes: ''
}, {
  group: 1,
  name: 'ASCA',
  division: 'Championship',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [8, 12, 16, 20],
  display: '<a href="https://www.asca.org/wp-content/uploads/2019/05/June-2019-Agility-Rules.pdf">ASCA Champ.</a>',
  rules: 'https://www.asca.org/wp-content/uploads/2019/05/June-2019-Agility-Rules.pdf',
  notes: ''
}, {
  group: 1,
  name: 'NADAC',
  division: 'Proficient',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [8, 12, 16, 20],
  display: '<a href="https://www.nadac.com/WPsite/wp-content/uploads/2022/12/NADAC-Exhibitor_MasterFile-Rev-12.24.22.pdf">NADAC Prof.</a>',
  rules: 'https://www.nadac.com/WPsite/wp-content/uploads/2022/12/NADAC-Exhibitor_MasterFile-Rev-12.24.22.pdf',
  notes: ''
}, {
  group: 1,
  name: 'AKC',
  division: 'Regular',
  cutoffs: [11, 14, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  display: '<a href="https://images.akc.org/pdf/rulebooks/REAGIL.pdf">AKC Regular</a>',
  rules: 'https://images.akc.org/pdf/rulebooks/REAGIL.pdf',
  notes: ''
}, {
  group: 4,
  name: 'AAC',
  division: 'Special',
  cutoffs: [12, 15, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="https://www.aac.ca/en/forms/_pdf/AAC_DogMeasurementForm_2017-18_v2.pdf">AAC Special</a>',
  rules: 'https://www.aac.ca/en/forms/_pdf/AAC_DogMeasurementForm_2017-18_v2.pdf',
  notes: ''
}, {
  group: 4,
  name: 'CKC',
  division: 'Selected',
  cutoffs: [11, 14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="https://www.ckc.ca/en/Files/Forms/Shows-Trials/Event-Rules-Regulations/Agility-Rules-and-Regulations-Effective-January-1.aspx">CKC Selected</a>',
  rules: 'https://www.ckc.ca/en/Files/Forms/Shows-Trials/Event-Rules-Regulations/Agility-Rules-and-Regulations-Effective-January-1.aspx',
  notes: ''
}, {
  group: 1,
  name: 'UKC',
  division: '',
  cutoffs: [10, 14, 20, 26],
  jumpheights: [4, 8, 14, 20],
  display: '<a href="https://res.ukcdogs.com/pdf/2011AgilityRulebookInsert.pdf">UKC</a>',
  rules: 'https://res.ukcdogs.com/pdf/2011AgilityRulebookInsert.pdf',
  notes: ''
}, {
  group: 1,
  name: 'CPE',
  division: 'Regular',
  cutoffs: [8, 12, 16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16, 20, 24],
  display: '<a href="http://www.k9cpe.com/forms/2019rb.pdf">CPE Regular</a>',
  rules: 'http://www.k9cpe.com/forms/2019rb.pdf',
  notes: ''
}, {
  group: 4,
  name: 'CKC',
  division: 'Regular',
  cutoffs: [11, 14, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  display: '<a href="https://www.ckc.ca/en/Files/Forms/Shows-Trials/Event-Rules-Regulations/Agility-Rules-and-Regulations-Effective-January-1.aspx">CKC Regular</a>',
  rules: 'https://www.ckc.ca/en/Files/Forms/Shows-Trials/Event-Rules-Regulations/Agility-Rules-and-Regulations-Effective-January-1.aspx',
  notes: ''
}, {
  group: 1,
  name: 'UKI',
  division: 'Regular',
  cutoffs: [12.75, 15, 17.5, 22, 26],
  jumpheights: [8, 12, 16, 20, 22],
  jumpheightsdisplay: [8, 12, 16, 20, '22/24'],
  jumpheightsnotes: ['', '', '', '', 'Choice of 22 in or 24 in.'],
  display: '<a href="https://ukagilityinternational.com/events/jump-heights/">UKI</a>',
  rules: 'https://ukagilityinternational.com/events/jump-heights/',
  notes: ''
}, {
  group: 1,
  name: 'USDAA',
  division: 'Championship',
  cutoffs: [12, 15, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  display: '<a href="https://www.usdaa.com/regulations/upload/USDAAEquipmentSettingsChart2023.pdf">USDAA Champ.</a>',
  rules: 'https://www.usdaa.com/regulations/upload/USDAAEquipmentSettingsChart2023.pdf',
  notes: ''
}, {
  group: 4,
  name: 'AAC',
  division: 'Regular',
  cutoffs: [12, 15, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  display: '<a href="https://www.aac.ca/en/forms/_pdf/AAC_DogMeasurementForm_2017-18_v2.pdf">AAC Reg</a>',
  rules: 'https://www.aac.ca/en/forms/_pdf/AAC_DogMeasurementForm_2017-18_v2.pdf',
  notes: '> 12in can jump next higher.'
}, {
  group: 5,
  name: 'FCI',
  division: '',
  cutoffs: [13.75, 16.92, 18.89, 26],
  cutoffnotes: ['(350 mm)', '(430 mm)', '(480 mm)', '(600 mm)'],
  jumpheights: [300, 400, 500, 600],
  jumpheightsnotes: ['*Cutoff IS LESS THAN 350 mm. Jump height ~12 in.', '*Cutoff IS LESS THAN 430 mm. Jump height ~16 in.', '*Cutoff IS LESS THAN 480 mm. Jump height ~24 in.', 'Jump height ~24 in.'],
  display: '<a href="https://www.fci.be/medias/AGI-REG-49-2020-en-15525.pdf">FCI</a>',
  rules: 'https://www.fci.be/medias/AGI-REG-49-2020-en-15525.pdf',
  notes: ''
}, {
  group: 5,
  name: 'WAO',
  division: '',
  cutoffs: [12.60, 14.96, 17.32, 19.69, 26],
  cutoffnotes: ['(320mm)', '(380 mm)', '(440 mm)', '(500 mm)', '(500mm)'],
  jumpheights: [250, 300, 400, 525, 600],
  jumpheightsnotes: ['Jump height ~10 in.', 'Jump height ~12 in.', 'Jump height ~16 in.', 'Jump height ~20 in.', 'Jump height ~24 in.'],
  display: '<a href="https://www.facebook.com/WorldAgilityOpen/posts/5316818461693961">WAO</a>',
  rules: 'https://www.facebook.com/WorldAgilityOpen/posts/5316818461693961',
  notes: ''
}, {
  group: 5,
  name: 'IFCS',
  division: '',
  cutoffs: [11.81, 13.78, 16.54, 19.69, 26],
  cutoffnotes: ['(300 mm)', '(350 mm)', '(420 mm)', '(500 mm)', '(500mm)'],
  jumpheights: [250, 300, 400, 500, 600],
  jumpheightsnotes: ['Jump height ~10 in.', 'Jump height ~12 in.', 'Jump height ~16 in.', 'Jump height ~20 in.', 'Jump height ~24 in.'],
  display: '<a href="https://ifcsdogsports.org/latestnews/council-approves-new-height-divisions/">IFCS</a>',
  rules: 'https://ifcsdogsports.org/latestnews/council-approves-new-height-divisions/',
  notes: ''
}
];

function annotate(config) {
  return _.map(config, function (org) {
    // calculate the difference in measured heights for each supported jump height
    // and store that as an object/hash by height in each org's configuration.
    var numHeights = org.jumpheights.length;
    org.heightDiffs = {};
    org.heights = []; // convert parallel lists into a list of objects
    _.map(org.jumpheights, function (height, i) {
      org.heightDiffs[height] = i === 0 ? org.cutoffs[i] : org.cutoffs[i] - org.cutoffs[i - 1];
      org.heights.push({
        cutoff: org.cutoffs[i],
        cutoffdisplay: org.cutoffnotes && (org.cutoffs[i] + ' ' + org.cutoffnotes[i]) || org.cutoffs[i],
        jumpheight: org.jumpheights[i],
        jumpheightdisplay: org.jumpheightsdisplay && org.jumpheightsdisplay[i] || org.jumpheights[i],
        notes: org.jumpheightsnotes && org.jumpheightsnotes[i] || '',
        text: i === numHeights - 1 ? 'height > ' + org.cutoffs[i - 1] : 'height <= ' + org.cutoffs[i],
      })
    });
    return org;
  });
}

// from https://personal.sron.nl/~pault/colourschemes.pdf
var colors = {
  2: '#781C81',
  300: '#781C81',
  4: '#413B93',
  400: '#413B93',
  6: '#4065B1',
  500: '#4065B1',
  8: '#488BC2',
  525: '#488BC2',
  10: '#55A1B1',
  600: '#55A1B1',
  12: '#63AD99',
  14: '#7FB972',
  16: '#B5BD4C',
  20: '#D9AD3C',
  22: '#E68E34',
  24: '#E6642C',
  26: '#D92120',
};

function setup(config) {
  // Create trace for each jump height using heightdiff for Y axis of each bar
  var heights = _(config).map('jumpheights').flatten().uniq().sortBy().value();
  return _.map(heights, function (height, index) {
    var matches = _.map(config, function (org) {
      if (org.heightDiffs[height]) {
        var hi = _.indexOf(org.jumpheights, height);
        var color = colors[height];
        var data = org.heights[hi];
        // [bar display, y, hover text, bar color] for each bar
        return [org.display, org.heightDiffs[height], data.text, color];
      } else {
        return [];
      }
    }).filter(function (o) { return o.length; });
    return {
      x: _.map(matches, _.first),
      y: _.map(matches, function (o) { return o[1] }),
      name: height,
      type: 'bar',
      text: _.map(matches, function (o) { return o[2] }),
      marker: { color: _.map(matches, function (o) { return o[3] }) }
    };
  });
}

function buildLayout(orgs, title) {
  var smallScreen = document.getElementById('graph1').clientWidth <= 550;
  // currently layout settings are non-responsive
  var margin = {
    l: 50,
    r: smallScreen ? 0 : 65,
    b: smallScreen ? 110 : 65,
  };
  return {
    xaxis: {
      tickangle: smallScreen ? 90 : 'auto',
      fixedrange: true,
    },
    yaxis: {
      title: "Dog's Height at Withers",
      autotick: false,
      dtick: 2,
      fixedrange: true,
    },
    barmode: 'relative',
    title: title,
    showlegend: false,
    margin: margin,
    annotations: _(orgs).map(function (org) {
      return _.map(org.cutoffs, function (y, i) {
        // number on each bar x: org display, y: height - 2 in, text: jump height
        var data = org.heights[i];
        return {
          x: org.display,
          y: data.cutoff,
          xanchor: 'center',
          yanchor: 'top',
          showarrow: false,
          text: data.jumpheightdisplay,
          font: { color: 'white' }
        };
      });
    }).flatten().value()
  }
}

function updateTable(height, filter) {
  var resultsTemplate = document.getElementById('results-template').innerHTML;
  var resultsRow = document.getElementById('results');
  var filterBy = ['jump'];
  var filters = document.getElementById('filters');
  if (!height) {
    resultsRow.innerHTML = '';
    resultsRow.className = 'u-max-full-width';
    return;
  }
  if (filter === 'org') {
    // order by org name then jump height
    filterBy.unshift('name')
  }
  filters.style.display = 'block';
  resultsRow.innerHTML = resultsTemplate;
  var filtered = _.filter(config, function (d) { return !d.name.includes('Current') });
  var data = _(filtered).map(function (org) {
    var jumpheight = 'N/A', jump = 0, rule = 'N/A', notes = org.notes;
    var index = _.findIndex(org.cutoffs, function (h) { return height <= h });
    var data = org.heights[index];
    if (data) {
      rule = 'height <= ' + data.cutoffdisplay;
      jumpheight = data.jumpheightdisplay;
      jump = data.jumpheight;
      notes += ' ' + data.notes;
      if (index === org.cutoffs.length - 1) {
        rule = 'height > ' + org.heights[index - 1].cutoffdisplay;
      }
    }
    return { name: org.name, rules: org.rules, division: org.division, jumpheight: jumpheight, rule: rule, notes: notes, jump: jump };
  }).sortBy(filterBy).value();
  var dest = resultsRow.getElementsByClassName('results-body')[0];
  var template = _.template('<tr><td><a href="<%= rules %>"><%= name %></a></td><td><%= division %></td><td class="jump-height"><%= jumpheight %></td><td class="max-height"><%= rule %></td><td><%= notes %></td></tr>');
  dest.innerHTML = _.map(data, template).join('');
  resultsRow.className = 'u-max-full-width load';
}

function updateGraph(gnode, orgs, data, layout, height) {
  var heights;
  if (height) {
    heights = {
      x: _(orgs).map('display').value(),
      y: _.fill(Array(orgs.length), height),
      name: "",
      type: 'line',
      line: { color: '#444444', width: 3 }
    };
    data.push(heights);
  }
  Plotly.newPlot(gnode, data, layout, { scrollZoom: false, displayModeBar: false, editable: false });
}

function getFilter() {
  var checked = document.querySelector('input[name="sort"]:checked');
  return checked && checked.value || 'jump';
}

function getHeight() {
  var heightInput = document.getElementById('height');
  var height = heightInput.value;
  if (height < 0) {
    height = 2;
  } else if (height > 26) {
    height = 26;
  }
  heightInput.value = height;
  return height;
}

function displayError() {
  var p = document.createElement("p");
  p.style = "color:red;font-face:bold;";
  p.innerHTML = "I'm sorry!<br>If you don't see a graph here there was problem creating it.<br>This page uses some newer web technology you might try using more modern browser.";
  document.getElementById('graph1').appendChild(p);
}

try {
  var annotated = annotate(config);
  var gnodes = [];  // graph nodes
  // all configs based on 1-based index into this array:
  var graphConfigs = [
    'Jump Heights US Organizations<br>"Regular/Championship"',
    'Jump Heights US Organizations<br>"Performance/Preferred"',
    'Jump Heights US Organizations<br>"Veterans/Specialist"',
    'Jump Heights Canadian Organizations',
    'Jump Heights International<br>Championship Organizations',
  ];
  var graphData = _.map(graphConfigs, function (title, i) {
    var index = i + 1;
    var filtered = _.filter(annotated, { group: index });
    var layout = buildLayout(filtered, title);
    var data = setup(filtered);
    var gnode = Plotly.d3.select('#graph' + index).node();
    gnodes.push(gnode);
    return {
      gnode: gnode,
      filtered: filtered,
      data: data,
      layout: layout,
    };
  })

  function onHeightChange() {
    var height = getHeight();
    var filter = getFilter();
    updateTable(height, filter);
    _.each(graphData, function (config) {
      // updateGraph modifies data
      window.setTimeout(function () { updateGraph(config.gnode, config.filtered, config.data.slice(), config.layout, height) });
    });
  }
  onHeightChange();
} catch (e) {
  displayError();
}

window.onresize = _.debounce(function () {
  _.each(gnodes, function (gnode) {
    Plotly.Plots.resize(gnode);
  })
}, 250);