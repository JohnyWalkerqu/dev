function addDocumentFilterAsData (option, value, element) {
  switch (option) {
  case 'name':
    element.data('filter', function (doc) {
      return doc.getName().includes(value);
    });
    break
  case 'owner':
    element.data('filter', function (doc) {
      return doc.getOwners().has(value);
    });
    break;
  case 'tag':
    element.data('filter', function (doc) {
      return doc.getTags().has(value);
    });
    break;
  case 'date':
    element.data('filter', function (doc) {
      return doc.getUploadDate().toDateString().includes(value);
    });
    break;
  default:
    console.error('Unknown filter option:', criterion.val());
  }
}

//For filtering documents, on view documents page
function generateDocumentFilterItem (pane, filterList) {
  let filterItem = $('<li/>');
  let criterion = $('<select/>')
      .append($('<option/>').text('name'))
      .append($('<option/>').text('owner'))
      .append($('<option/>').text('tag'))
      .append($('<option/>').text('date'));
  let pattern = $('<input/>', { type: 'text' });

  //button to add a filter
  let addFilterButton = $('<button/>', {
    type: 'button',
    click: function () {
      addDocumentFilterAsData(criterion.val(), pattern.val(), filterItem);
      addFilterButton.detach();
      filterItem.append(updateFilterButton);
      filterItem.after(generateDocumentFilterItem(pane, filterList));
      refreshDocumentList(pane, filterList);
    }
  });

  addFilterButton.append('<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>');

  //button to update an already added filter
  let updateFilterButton = $('<button/>', {
    type: 'button',
    click: function () {
      addDocumentFilterAsData(criterion.val(), pattern.val(), filterItem);
      refreshDocumentList(pane, filterList);
    }
  });

  updateFilterButton.append('<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>');

  filterItem.append(criterion).append(pattern).append(addFilterButton);
  criterion.before('');
  criterion.after('');
  return filterItem;
}

$('#listDocumentsButton').click(function() {

  let listDocumentsPane = $('#listDocumentsPane');
  listDocumentsPane.empty().show().siblings().hide();

  let filterList = $('<ol/>', {
    'class': 'document-filter-list'
  }).appendTo(listDocumentsPane);

  let documentListPane = $('<div/>', {
    'class': 'document-list-pane'
  }).appendTo(listDocumentsPane);

  filterList.append(generateDocumentFilterItem(documentListPane, filterList));
  refreshDocumentList(documentListPane, filterList);
  $('#tagsMain').children().empty();
});
