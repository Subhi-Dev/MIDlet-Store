// Simple JavaScript for WAP/XHTML-MP application

// Categories data
var categories = {
  games: [
    { name: 'Snake Game', size: '32KB', price: 'Free' },
    { name: 'Tetris', size: '45KB', price: '$1.99' },
    { name: 'Puzzle', size: '28KB', price: 'Free' }
  ],
  utilities: [
    { name: 'Calculator', size: '22KB', price: 'Free' },
    { name: 'File Manager', size: '56KB', price: '$0.99' }
  ],
  productivity: [
    { name: 'Calendar', size: '42KB', price: 'Free' },
    { name: 'Notes', size: '38KB', price: 'Free' },
    { name: 'Task List', size: '30KB', price: '$1.49' }
  ]
}

// Function to display category items
function showCategory(categoryName) {
  if (!categories[categoryName]) {
    return
  }

  var contentDiv = document.getElementById('categoryContent')
  if (!contentDiv) {
    return
  }

  var html = '<h2>' + capitalizeFirstLetter(categoryName) + '</h2>'
  html += '<table border="0" cellpadding="2" cellspacing="1" width="100%">'

  for (var i = 0; i < categories[categoryName].length; i++) {
    var item = categories[categoryName][i]
    html += '<tr>'
    html +=
      '<td><a href="javascript:showItemDetails(\'' +
      categoryName +
      "'," +
      i +
      ')">' +
      item.name +
      '</a></td>'
    html += '<td>' + item.size + '</td>'
    html += '</tr>'
  }

  html += '</table>'
  contentDiv.innerHTML = html
}

// Function to show item details
function showItemDetails(categoryName, itemIndex) {
  var item = categories[categoryName][itemIndex]
  var contentDiv = document.getElementById('categoryContent')

  var html = '<h2>' + item.name + '</h2>'
  html += '<p>Size: ' + item.size + '</p>'
  html += '<p>Price: ' + item.price + '</p>'
  html +=
    '<p><a href="#" onclick="showCategory(\'' +
    categoryName +
    '\')">Back</a></p>'

  contentDiv.innerHTML = html
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
