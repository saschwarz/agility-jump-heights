// Copyright 2016 Steve Schwarz All Rights Reserved.
var config = [{
  group: 1,
  name: 'TDAA',
  division: 'Regular',
  cutoffs: [4, 8, 12, 16, 20],
  jumpheights: [2, 4, 8, 12, 16],
  display: '<a href="http://www.k9tdaa.com/documents/2011%20Forms/Rules%20and%20Regulations%20v%205.2.pdf">TDAA</a>',
  rules: 'http://www.k9tdaa.com/documents/2011%20Forms/Rules%20and%20Regulations%20v%205.2.pdf',
  notes: ''
}, {
  group: 3,
  name: 'CPE',
  division: 'Specialist',
  cutoffs: [16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="http://www.k9cpe.com/forms/2016rb.pdf">CPE Specialist</a>',
  rules: 'http://www.k9cpe.com/forms/2016rb.pdf',
  notes: ''
}, {
  group: 3,
  name: 'UKC',
  division: 'Veterans',
  cutoffs: [14, 20, 26],
  jumpheights: [4, 8, 14],
  display: '<a href="http://res.ukcdogs.com/pdf/2011AgilityRulebookInsert.pdf">UKC Veteran</a>',
  rules: 'http://res.ukcdogs.com/pdf/2011AgilityRulebookInsert.pdf',
  notes: ''
}, {
  group: 3,
  name: 'USDAA',
  division: 'Veterans',
  cutoffs: [12, 16, 26],
  jumpheights: [4, 8, 12],
 display: '<a href="https://www.usdaa.com/article.cfm?newsID=3387">USDAA Veterans</a>',
  rules: 'https://www.usdaa.com/article.cfm?newsID=3387',
  notes: 'Effective on Dec 28, 2016'
}, {
  group: 4,
  name: 'AAC',
  division: 'Veterans',
  cutoffs: [16, 21, 26],
  jumpheights: [6, 10, 16],
  display: '<a href="https://www.aac.ca/en/rules/_pdf/AAC-RulebookV5-(SECURE).pdf">AAC Veterans</a>',
  rules: 'https://www.aac.ca/en/rules/_pdf/AAC-RulebookV5-(SECURE).pdf',
  notes: '> 12in can jump next higher'
}, {
  group: 3,
  name: 'DOCNA',
  division: 'Veterans',
  cutoffs: [14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="http://www.docna.com/Forms/2_Organizational_Structure.pdf">DOCNA Veterans</a>',
  rules: 'http://www.docna.com/Forms/2_Organizational_Structure.pdf',
  notes: "Dog's >= 7yro"
}, {
  group: 4,
  name: 'CKC',
  division: 'Veterans',
  cutoffs: [14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="https://www.ckc.ca/en/Files/Forms/Shows-Trials/Event-Rules-Regulations/Agility-Rules-and-Regulations-Effective-January-1.aspx">CKC Veterans</a>',
  rules: 'https://www.ckc.ca/en/Files/Forms/Shows-Trials/Event-Rules-Regulations/Agility-Rules-and-Regulations-Effective-January-1.aspx',
  notes: "Dog's >= 7yro"
}, {
  group: 3,
  name: 'ASCA',
  division: 'Veterans',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="http://www.asca.org/wp-content/uploads/sites/35/2016/04/AgilityRules.pdf">ASCA Veterans</a>',
  rules: 'http://www.asca.org/wp-content/uploads/sites/35/2016/04/AgilityRules.pdf',
  notes: "Dog's >= 7yro"
}, {
  group: 3,
  name: 'NADAC',
  division: 'Veterans',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="http://www.nadac.com/Rules_for_NADAC_trials.htm#_Jump_Heights">NADAC Proficient</a>',
  rules: 'http://www.nadac.com/Rules_for_NADAC_trials.htm#_Jump_Heights',
  notes: "Dog's >= 7yro"
},  {
  group: 3,
  name: 'CPE',
  division: 'Veterans',
  cutoffs: [12, 16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="http://www.k9cpe.com/forms/2016rb.pdf">CPE Veterans</a>',
  rules: 'http://www.k9cpe.com/forms/2016rb.pdf',
  notes: "Dog's >= 6yro"
}, {
  group: 2,
  name: 'NADAC',
  division: 'Skilled',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="http://www.nadac.com/Rules_for_NADAC_trials.htm#_Jump_Heights">NADAC Skilled</a>',
  rules: 'http://www.nadac.com/Rules_for_NADAC_trials.htm#_Jump_Heights',
  notes: ''
}, {
  group: 2,
  name: 'ASCA',
  division: 'ACE',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  display: '<a href="http://www.asca.org/wp-content/uploads/sites/35/2016/04/AgilityRules.pdf">ASCA ACE</a>',
  rules: 'http://www.asca.org/wp-content/uploads/sites/35/2016/04/AgilityRules.pdf',
  notes: ''
}, {
  group: 2,
  name: 'CPE',
  division: 'Enthusiast',
  cutoffs: [12, 16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="http://www.k9cpe.com/forms/2016rb.pdf">CPE Enth.</a>',
  rules: 'http://www.k9cpe.com/forms/2016rb.pdf',
  notes: ''
}, {
  group: 2,
  name: 'AKC',
  division: 'Preferred',
  cutoffs: [11, 14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="http://images.akc.org/pdf/rulebooks/REAGIL.pdf">AKC Pref.</a>',
  rules: 'http://images.akc.org/pdf/rulebooks/REAGIL.pdf',
  notes: ''
}, {
  group: 2,
  name: 'DOCNA',
  division: 'Select',
  cutoffs: [11, 14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="http://www.docna.com/Forms/2_Organizational_Structure.pdf">DOCNA Select</a>',
  rules: 'http://www.docna.com/Forms/2_Organizational_Structure.pdf',
  notes: ''
}, {
  group: 2,
  name: 'UKI',
  division: 'Select',
  cutoffs: [11, 14, 17.5, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  display: '<a href="https://www.ukagilityinternational.com/ImageUploads/UKI%20Rules%202016%20.pdf">UKI Select</a>',
  rules: 'https://www.ukagilityinternational.com/ImageUploads/UKI%20Rules%202016%20.pdf',
  notes: ''
}, {
  group: 2,
  name: 'USDAA',
  division: 'Performance',
  cutoffs: [12, 16, 19, 21, 26],
  jumpheights: [8, 12, 14, 16, 20],
  display: '<a href="https://www.usdaa.com/article.cfm?newsID=3387">USDAA Perf.</a>',
  rules: 'https://www.usdaa.com/article.cfm?newsID=3387',
  notes: 'Effective on Dec 28, 2016'
}, {
  group: 1,
  name: 'ASCA',
  division: 'Championship',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [8, 12, 16, 20],
  display: '<a href="http://www.asca.org/wp-content/uploads/sites/35/2016/04/AgilityRules.pdf">ASCA Champ.</a>',
  rules: 'http://www.asca.org/wp-content/uploads/sites/35/2016/04/AgilityRules.pdf',
  notes: ''
}, {
  group: 1,
  name: 'NADAC',
  division: 'Proficient',
  cutoffs: [11, 14, 18, 26],
  jumpheights: [8, 12, 16, 20],
  display: '<a href="http://www.nadac.com/Rules_for_NADAC_trials.htm#_Jump_Heights">NADAC Prof.</a>',
  rules: 'http://www.nadac.com/Rules_for_NADAC_trials.htm#_Jump_Heights',
  notes: ''
}, {
  group: 1,
  name: 'AKC',
  division: 'Regular',
  cutoffs: [11, 14, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  display: '<a href="http://images.akc.org/pdf/rulebooks/REAGIL.pdf">AKC Regular</a>',
  rules: 'http://images.akc.org/pdf/rulebooks/REAGIL.pdf',
  notes: ''
}, {
  group: 1,
  name: 'DOCNA',
  division: 'Competition',
  cutoffs: [11, 14, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  display: '<a href="http://www.docna.com/Forms/2_Organizational_Structure.pdf">DOCNA Comp.</a>',
  rules: 'http://www.docna.com/Forms/2_Organizational_Structure.pdf',
  notes: ''
},{
  group: 4,
  name: 'CKC',
  division: 'Selected',
  cutoffs: [10, 14, 18, 22, 26],
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
  display: '<a href="http://res.ukcdogs.com/pdf/2011AgilityRulebookInsert.pdf">UKC</a>',
  rules: 'http://res.ukcdogs.com/pdf/2011AgilityRulebookInsert.pdf',
  notes: ''
}, {
  group: 4,
  name: 'AAC',
  division: 'Special',
  cutoffs: [12, 16, 21, 26],
  jumpheights: [6, 10, 16, 22],
  display: '<a href="https://www.aac.ca/en/rules/_pdf/AAC-RulebookV5-(SECURE).pdf">AAC Special</a>',
  rules: 'https://www.aac.ca/en/rules/_pdf/AAC-RulebookV5-(SECURE).pdf',
  notes: ''
}, {
  group: 1,
  name: 'CPE',
  division: 'Regular',
  cutoffs: [8, 12, 16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16, 20, 24],
  display: '<a href="http://www.k9cpe.com/forms/2016rb.pdf">CPE Regular</a>',
  rules: 'http://www.k9cpe.com/forms/2016rb.pdf',
  notes: ''
}, {
  group: 4,
  name: 'CKC',
  division: 'Regular',
  cutoffs: [10, 14, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  display: '<a href="https://www.ckc.ca/en/Files/Forms/Shows-Trials/Event-Rules-Regulations/Agility-Rules-and-Regulations-Effective-January-1.aspx">CKC Regular</a>',
  rules: 'https://www.ckc.ca/en/Files/Forms/Shows-Trials/Event-Rules-Regulations/Agility-Rules-and-Regulations-Effective-January-1.aspx',
  notes: ''
}, {
  group: 1,
  name: 'UKI',
  division: 'Regular',
  cutoffs: [11, 14, 17.5, 22, 26],
  jumpheights: [8, 12, 16, 20, 22],
  jumpheightsdisplay: [8, 12, 16, 20, '22/26'],
  jumpheightsnotes: ['', '', '', '', 'Choice of 22 in or 24 in'],
  display: '<a href="https://www.ukagilityinternational.com/ImageUploads/UKI%20Rules%202016%20.pdf">UKI Regular</a>',
  rules: 'https://www.ukagilityinternational.com/ImageUploads/UKI%20Rules%202016%20.pdf',
  notes: ''
}, {
  group: 1,
  name: 'USDAA',
  division: 'Championship',
  cutoffs: [12, 14, 17, 19, 21, 26],
  jumpheights: [10, 14, 16, 20, 22, 24],
  display: '<a href="https://www.usdaa.com/article.cfm?newsID=3387">USDAA Champ.</a>',
  rules: 'https://www.usdaa.com/article.cfm?newsID=3387',
  notes: 'Effective on Dec 28, 2016'
}, {
  group: 4,
  name: 'AAC',
  division: 'Regular',
  cutoffs: [12, 16, 21, 26],
  jumpheights: [10, 16, 22, 26],
  display: '<a href="https://www.aac.ca/en/rules/_pdf/AAC-RulebookV5-(SECURE).pdf">AAC Regular</a>',
  rules: 'https://www.aac.ca/en/rules/_pdf/AAC-RulebookV5-(SECURE).pdf',
  notes: 'Can jump next higher height'
}];

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
    4: '#413B93',
    6: '#4065B1',
    8: '#488BC2',
    10: '#55A1B1',
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
      marker: {color: _.map(matches, function (o) { return o[3] })}
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
      tickangle: smallScreen ? 90 : 'auto'
    },
    yaxis: {
      title: "Dog's Height at Withers",
      autotick: false,
      dtick: 2
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

function updateTable(height) {
  var resultsTemplate = document.getElementById('results-template').innerHTML;
  var resultsRow = document.getElementById('results');
  if (!height) {
      resultsRow.innerHTML = '';
    resultsRow.className = 'u-max-full-width';
    return;
  }
  resultsRow.innerHTML = resultsTemplate;
  var data = _(config).map(function(org){
    var jumpheight = 'N/A', jump = 0, rule = 'N/A', index = _.findIndex(org.cutoffs, function(h) { return height <= h });
    var data = org.heights[index];
    if (data) {
      rule = 'height <= ' + data.cutoff;
      jumpheight = data.jumpheightdisplay;
      jump = data.jumpheight;
      if (index === org.cutoffs.length - 1) {
        rule = 'height > ' + org.cutoffs[index - 1];
      }
    }
    return {name: org.name, rules: org.rules, division: org.division, jumpheight: jumpheight, rule: rule, notes: org.notes, jump: jump};
  }).sortBy('jump').value();
  var dest = resultsRow.getElementsByClassName('results-body')[0];
  var template = _.template('<tr><td><a href="<%= rules %>"><%= name %></a></td><td><%= division %></td><td class="jump-height"><%= jumpheight %></td><td class="max-height"><%= rule %></td><td><%= notes %></td></tr>');
  dest.innerHTML = _.map(data, template).join('');
  resultsRow.className = 'u-max-full-width load';
}

function updateGraph(gd, orgs, data, layout, height) {
  var heights, yvals;
  var columns = _(orgs).map('display').value();
  if (height) {
    yvals = _.fill(Array(columns.length), height);
    heights = {
      x: columns,
      y: yvals,
      name: "",
      type: 'line',
      line: {color: '#444444', width: 3}
    };
    data.push(heights);
  }
  Plotly.newPlot(gd, data, layout);
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

try {
  var annotated = annotate(config);

  var gd1 = Plotly.d3.select('#graph1').node();
  var filtered1 = _.filter(annotated, {group: 1});
  var data1 = setup(filtered1);
  var layout1 = buildLayout(filtered1, 'Jump Heights US Organizations<br>"Regular/Championship"');

  var gd2 = Plotly.d3.select('#graph2').node();
  var filtered2 = _.filter(annotated, {group: 2});
  var data2 = setup(filtered2);
  var layout2 = buildLayout(filtered2, 'Jump Heights US Organizations<br>"Performance/Preferred"');

 var gd3 = Plotly.d3.select('#graph3').node();
  var filtered3 = _.filter(annotated, {group: 3});
  var data3 = setup(filtered3);
  var layout3 = buildLayout(filtered3, 'Jump Heights US Organizations<br>"Veterans/Specialist"');

  var gd4 = Plotly.d3.select('#graph4').node();
  var filtered4 = _.filter(annotated, {group: 4});
  var data4 = setup(filtered4);
  var layout4 = buildLayout(filtered4, 'Jump Heights Canadian Organizations');

  function onHeightChange() {
    var height = getHeight();
    updateTable(height);

    // update modifies data
    updateGraph(gd1, filtered1, data1.slice(), layout1, height);
    updateGraph(gd2, filtered2, data2.slice(), layout2, height);
    updateGraph(gd3, filtered3, data3.slice(), layout3, height);
    updateGraph(gd4, filtered4, data4.slice(), layout4, height);
  }
  window.setTimeout(onHeightChange); // don't busy main loop
} catch (e) {
  displayError();
}

function displayError() {
  var p = document.createElement("p");
  p.style = "color:red;font-face:bold;";
  p.innerHTML = "I'm sorry!<br>If you don't see a graph here there was problem creating it.<br>This page uses some newer web technology you might try using more modern browser.";
  document.getElementById('graph1').appendChild(p);
}

window.onresize = _.debounce(function () {
  Plotly.Plots.resize(gd1);
  Plotly.Plots.resize(gd2);
  Plotly.Plots.resize(gd3);
  Plotly.Plots.resize(gd4);
}, 250);