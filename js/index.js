// Copyright 2016 Steve Schwarz All Rights Reserved.
var config = [{
  maxheights: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  org: '<a href="http://www.nadac.com/Rules_for_NADAC_trials.htm#_Jump_Heights">NADAC Skilled</a>'
}, {
  maxheights: [11, 14, 18, 26],
  jumpheights: [4, 8, 12, 16],
  org: '<a href="http://www.asca.org/wp-content/uploads/sites/35/2016/04/AgilityRules.pdf">ASCA ACE</a>'
}, {
  maxheights: [12, 16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16, 20],
  org: '<a href="http://www.k9cpe.com/forms/2016rb.pdf">CPE Enthusiast</a>'
}, {
  maxheights: [11, 14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  org: '<a href="http://images.akc.org/pdf/rulebooks/REAGIL.pdf">AKC Preferred</a>'
}, {
  maxheights: [11, 14, 18, 22, 26],
  jumpheights: [4, 8, 12, 16, 20],
  org: '<a href="http://www.docna.com/Forms/2_Organizational_Structure.pdf">DOCNA Select</a>'
}, {
  maxheights: [14, 17.5, 22, 26],
  jumpheights: [8, 12, 16, 20],
  org: '<a href="https://www.ukagilityinternational.com/DynamicContent.aspx?PageName=jump+heights">UKI Select</a>'
}, {
  maxheights: [12, 16, 19, 21, 26],
  jumpheights: [8, 12, 14, 16, 20],
  org: '<a href="https://www.usdaa.com/article.cfm?newsID=3387">USDAA Performance</a>'
}, {
  maxheights: [11, 14, 18, 26],
  jumpheights: [8, 12, 16, 20],
  org: '<a href="http://www.asca.org/wp-content/uploads/sites/35/2016/04/AgilityRules.pdf">ASCA Championship</a>'
}, {
  maxheights: [11, 14, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  org: '<a href="http://images.akc.org/pdf/rulebooks/REAGIL.pdf">AKC Regular</a>'
}, {
  maxheights: [11, 14, 18, 22, 26],
  jumpheights: [8, 12, 16, 20, 24],
  org: '<a href="http://www.docna.com/Forms/2_Organizational_Structure.pdf">DOCNA Competition</a>'
}, {
  maxheights: [8, 12, 16, 20, 24, 26],
  jumpheights: [4, 8, 12, 16, 20, 24],
  org: '<a href="http://www.k9cpe.com/forms/2016rb.pdf">CPE Regular</a>'
}, {
  maxheights: [11, 14, 18, 26],
  jumpheights: [8, 12, 16, 20],
  org: '<a href="http://www.nadac.com/Rules_for_NADAC_trials.htm#_Jump_Heights">NADAC Proficient</a>'
}, {
  maxheights: [11, 14, 17.5, 22, 26],
  jumpheights: [8, 12, 16, 20, 22],
  org: '<a href="https://www.ukagilityinternational.com/DynamicContent.aspx?PageName=jump+heights">UKI</a>'
}, {
  maxheights: [12, 14, 17, 19, 21, 26],
  jumpheights: [10, 14, 16, 20, 22, 24],
  org: '<a href="https://www.usdaa.com/article.cfm?newsID=3387">USDAA Championship</a>'
}];

var orgs = _(config).map('org').value();

function setup() {
  var heights = _(config).map('jumpheights').flatten().uniq().sortBy().value();

  _.map(config, function (org) {
    // calculate the difference in measured heights for each supported jump height
    // and store that as an object/hash by height in each org's configuration.
    org.heightDiffs = {};
    _.map(heights, function (height, index) {
      var i = _.findIndex(org.jumpheights, function (jh) {
        return jh === height;
      });
      if (i !== -1) {
        org.heightDiffs[height] = i === 0 ? org.maxheights[i] : org.maxheights[i] - org.maxheights[i - 1];
      }
    });
  });
  // Assemble traces using heightdiff for Y axis of each stacked bar
  var data = _.map(heights, function (height, index) {
    var matches = _.map(config, function (org) {
      if (org.heightDiffs[height]) {
        var hi = _.indexOf(org.jumpheights, height);
        var text = 'height <= ' + org.maxheights[hi];
        if (hi === org.jumpheights.length - 1) {
          text = 'height > ' + org.maxheights[hi - 1];
        }
        // [bar name, y, hover text] for each bar
        return [org.org, org.heightDiffs[height], text];
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
          x: org.org,
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
    var rule = 'height <= ' + org.maxheights[index];
    if (index === org.maxheights.length - 1) {
      rule = 'height > ' + org.maxheights[index - 1];
    }
    return {name: org.org, jumpheight: org.jumpheights[index], rule: rule};
  });
  var dest = document.getElementById('results-body');
  var template = _.template('<tr><td><%= name %></td><td class="jump-height"><%= jumpheight %> in</td><td class="max-height"><%= rule %></td></tr>');
  dest.innerHTML = _.map(data, template).join('');
  var dest = document.getElementById('results').style.display = 'block';
}

function update(gd, dataLayout) {
  var height = document.getElementById('height').value;
  var heights, yvals;
  var values = dataLayout.data.slice();
  if (height) {
    yvals = _.fill(Array(orgs.length), height);
    heights = {
      x: orgs,
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
  var dataLayout = setup();
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