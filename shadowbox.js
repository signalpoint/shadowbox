/**
 * Implements hook_field_formatter_view().
 */
function shadowbox_field_formatter_view(entity_type, entity, field, instance, langcode, items, display) {
  try {
    var element = {};
    if (!drupalgap_empty(items)) {
      console.log(JSON.stringify(items));
      $.each(items, function(delta, item){
          element[delta] = {
            theme:'image',
            path:drupalgap_image_path(item.uri)
          };
      });
    }
    return element;
  }
  catch (error) { drupalgap_error(error); }
}

