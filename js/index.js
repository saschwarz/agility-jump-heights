// Copyright 2016 Steve Schwarz All Rights Reserved.
var config = [{
  maxheights: [4, 8, 12, 16, 20],
  jumpheights: [2, 4, 8, 12, 16],
  name: '<a href="http://www.k9tdaa.com/documents/2011%20Forms/Rules%20and%20Regulations%20v%205.2.pdf">TDAA</a>',
  notes: ''
}, {
  maxheights: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  name: '<a href="http://www.nadac.com/Rules_for_NADAC_trials.htm#_Jump_Heights">NADAC Skilled</a>',
  notes: ''
}, {
  maxheights: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  name: '<a href="http://www.asca.org/wp-content/uploads/sites/35/2016/04/AgilityRules.pdf">ASCA ACE</a>',
  notes: ''
}, {
  maxheights: [12, 16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16, 20],
  name: '<a href="http://www.k9cpe.com/forms/2016rb.pdf">CPE Enthusiast</a>',
  notes: ''
}, {
  maxheights: [11, 14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  name: '<a href="http://images.akc.org/pdf/rulebooks/REAGIL.pdf">AKC Preferred</a>',
  notes: ''
}, {
  maxheights: [11, 14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  name: '<a href="http://www.docna.com/Forms/2_Organizational_Structure.pdf">DOCNA Select</a>',
  notes: ''
}, {
  maxheights: [11, 14, 17.5, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  name: '<a href="https://www.ukagilityinternational.com/ImageUploads/UKI%20Rules%202016%20.pdf">UKI Select</a>',
  notes: ''
}, {
  maxheights: [12, 16, 19, 21, 26],
  jumpheights: [8, 12, 14, 16, 20],
  name: '<a href="https://www.usdaa.com/article.cfm?newsID=3387">USDAA Performance</a>',
  notes: 'Effective on December 28, 2016'
}, {
  maxheights: [11, 14, 18, 26],
  jumpheights: [8, 12, 16, 20],
  name: '<a href="http://www.asca.org/wp-content/uploads/sites/35/2016/04/AgilityRules.pdf">ASCA Championship</a>',
  notes: ''
}, {
  maxheights: [11, 14, 18, 26],
  jumpheights: [8, 12, 16, 20],
  name: '<a href="http://www.nadac.com/Rules_for_NADAC_trials.htm#_Jump_Heights">NADAC Proficient</a>',
  notes: ''
}, {
  maxheights: [11, 14, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  name: '<a href="http://images.akc.org/pdf/rulebooks/REAGIL.pdf">AKC Regular</a>',
  notes: ''
}, {
  maxheights: [11, 14, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  name: '<a href="http://www.docna.com/Forms/2_Organizational_Structure.pdf">DOCNA Competition</a>',
  notes: ''
},{
  maxheights: [10, 14, 20, 26],
  jumpheights: [4, 8, 14, 20],
  name: '<a href="http://res.ukcdogs.com/pdf/2011AgilityRulebookInsert.pdf">UKC</a>',
  notes: ''
}, {
  maxheights: [8, 12, 16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16, 20, 24],
  name: '<a href="http://www.k9cpe.com/forms/2016rb.pdf">CPE Regular</a>',
  notes: ''
}, {
  maxheights: [11, 14, 17.5, 22, 26],
  jumpheights: [8, 12, 16, 20, 22],
  name: '<a href="https://www.ukagilityinternational.com/ImageUploads/UKI%20Rules%202016%20.pdf">UKI Regular</a>',
  notes: ''
}, {
  maxheights: [12, 14, 17, 19, 21, 26],
  jumpheights: [10, 14, 16, 20, 22, 24],
  name: '<a href="https://www.usdaa.com/article.cfm?newsID=3387">USDAA Championship</a>',
  notes: 'Effective on December 28, 2016'
}];

function annotate(config) {
  return _.map(config, function (org) {
    // calculate the difference in measured heights for each supported jump height
    // and store that as an object/hash by height in each org's configuration.
    var numHeights = org.jumpheights.length;
    org.heightDiffs = {};
    org.text = [];  // rule text for each cutoff
    _.map(org.jumpheights, function (height, i) {
      org.heightDiffs[height] = i === 0 ? org.maxheights[i] : org.maxheights[i] - org.maxheights[i - 1];
      org.text.push(i === numHeights - 1 ? 'height > ' + org.maxheights[i - 1] : 'height <= ' + org.maxheights[i]);
    });
    return org;
  });
}

function setup(config) {
  var heights = _(config).map('jumpheights').flatten().uniq().sortBy().value();
  var config = annotate(config, heights);

  // Create trace for each jump height using heightdiff for Y axis of each bar
  var data = _.map(heights, function (height, index) {
    var matches = _.map(config, function (org) {
      if (org.heightDiffs[height]) {
        var hi = _.indexOf(org.jumpheights, height);
        // [bar name, y, hover text] for each bar
        return [org.name, org.heightDiffs[height], org.text[hi]];
      } else {
        return [];
      }
    }).filter(function (o) { return o.length; });
    return {
      x: _.map(matches, _.first),
      y: _.map(matches, function (o) { return o[1] }),
      name: height,
      type: 'bar',
      text: _.map(matches, function (o) { return o[2] })
    };
  });
  var layout = {
    yaxis: {
      title: "Dog's Height at Withers",
      autotick: false,
      dtick: 2
    },
    barmode: 'relative',
    title: 'US Dog Agility Jump Heights',
    annotations: _(config).map(function (org) {
      return _.map(org.maxheights, function (y, i) {
        // number on each bar x: org name, y: height - 2 in, text: jump height
        return {
          x: org.name,
          y: org.maxheights[i],
          xanchor: 'center',
          yanchor: 'top',
          showarrow: false,
          text: org.jumpheights[i],
          font: { color: 'white' }
        };
      });
    }).flatten().value()
  }
  return { data: data, layout: layout };
}

function updateTable(height) {
  var data = _.map(config, function(org){
    var index = _.findIndex(org.maxheights, function(h) { return height <= h});
    var jumpheight = org.jumpheights[index];
    var rule = 'height <= ' + org.maxheights[index];
    if (index === org.maxheights.length - 1) {
      rule = 'height > ' + org.maxheights[index - 1];
    } else if (index < 0) {
      rule = 'N/A';
    }
    if (jumpheight) {
      jumpheight += ' in';
    } else {
      jumpheight = 'N/A';
    }
    return {name: org.name, jumpheight: jumpheight, rule: rule, notes: org.notes};
  });
  var dest = document.getElementById('results-body');
  var template = _.template('<tr><td><%= name %></td><td class="jump-height"><%= jumpheight %></td><td class="max-height"><%= rule %></td><td><%= notes %></td></tr>');
  dest.innerHTML = _.map(data, template).join('');
  var dest = document.getElementById('results').style.display = 'block';
}

function update(gd, dataLayout) {
  var heightInput = document.getElementById('height');
  var height = heightInput.value;
  var heights, yvals;
  var values = dataLayout.data.slice();
  var columns = _(config).map('name').value();

  if (height) {
    if (height < 0) {
      height = 2;
    } else if (height > 26) {
      height = 26;
    }
    heightInput.value = height;
    yvals = _.fill(Array(columns.length), height);
    heights = {
      x: columns,
      y: yvals,
      name: "",
      type: 'line'
    };
    values.push(heights);
    updateTable(height);
  }
  Plotly.newPlot(gd, values, dataLayout.layout);
}

try {
  var gd = Plotly.d3.select('#graph').node();
  var dataLayout = setup(config);
  function onHeightChange() {
    update(gd, dataLayout);
  }
  onHeightChange();
} catch (e) {
  displayError();
}

function displayError() {
  var p = document.createElement("p");
  p.style = "color:red;font-face:bold;";
  p.innerHTML = "I'm sorry. If you don't see a graph here there was problem creating it.<br> This page uses some newer web technology you might try using more modern browser.";
  document.getElementById('graph').appendChild(p);
}

window.onresize = _.debounce(function () {
  Plotly.Plots.resize(gd);
}, 250);