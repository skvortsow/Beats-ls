
const firstOpenButton = $('#openProperties');
const secondOpenButton = $('#openProperties2');

const firstPropertiesWindow = $('#propertiesList');
const secondPropertiesWindow = $('#propertiesList2');

$(firstOpenButton).on('mouseover', function(evt) {
        $(firstPropertiesWindow).addClass('propeties__list--active');
});

$(firstOpenButton).on('mouseout', function(evt) {
    $(firstPropertiesWindow).removeClass('propeties__list--active');
});

$(firstPropertiesWindow).on('mouseover', function(evt) {
    $(firstPropertiesWindow).addClass('propeties__list--active');
});

$(firstPropertiesWindow).on('mouseout', function(evt) {
    $(firstPropertiesWindow).removeClass('propeties__list--active');
});



$(secondOpenButton).on('mouseover', function(evt) {
        $(secondPropertiesWindow).addClass('propeties__list--active');
});

$(secondOpenButton).on('mouseout', function(evt) {
    $(secondPropertiesWindow).removeClass('propeties__list--active');
});

$(secondPropertiesWindow).on('mouseover', function(evt) {
    $(secondPropertiesWindow).addClass('propeties__list--active');
});

$(secondPropertiesWindow).on('mouseout', function(evt) {
$(secondPropertiesWindow).removeClass('propeties__list--active');
});