/**
 * Implements hook_field_formatter_view().
 */
function shadowbox_field_formatter_view(entity_type, entity, field, instance, langcode, items, display) {
  try {
    var element = {};
    if (!drupalgap_empty(items)) {
      $.each(items, function(delta, item){
          element[delta] = {
            theme:'image_style',
            path:item.uri,
            style_name:display.settings.image_style
          };
      });
    }
    return element;
  }
  catch (error) { drupalgap_error(error); }
}

