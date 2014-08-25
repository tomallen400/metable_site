function pricingCalculator(storage, type, users) {
	var usersTotal = usersCalculator(parseInt(users));
    var storageTotal = storageCalculator(parseInt(storage), type);
    return usersTotal + storageTotal;
}

function usersCalculator(no) {
    if(no > 0) {
        return (no - 1) * 35;
    } else {
        return 0;
    }
}

function storageCalculator(storage, type) {
    var gbs = gbCalculator(storage, type);
    if(gbs > 10) {
        return Math.ceil((gbs - 10) / 100) * 35;
    } else {
        return 0;
    }
};

function gbCalculator(storage, type) {
    if(type != "GB") {
        return  storage / noOfTypeToGb(type);
    } else {
        return storage;
    }
}

function noOfTypeToGb(type) {
    if(type == "Products") {
        return 2;
    } else if(type == "Tracks") {
        return 20;
    } else if(type == "Works") {
        return 40;
    } else {
        1
    }
}

function calculatePrice() {
    var storageNo = $('#storage-no').val();
    var storageType = $('#storage-type').val();
    var users = $('#users-no').val();
    var calculation = pricingCalculator(storageNo, storageType, users);
    $('.pricing-calc-total').html('£' + calculation);
}

$(document).keyup(function(){
    calculatePrice();
});

$(document).on('change', '#storage-type', function(){
    calculatePrice();
});

$(document).ready(function(){
	var position = $('.dd a').offset();
	var list = $('.new-dropdown-menu');
	list.css('top', position.top + 20 + 'px');
	list.css('left', position.left + 'px');
});

$(document).on('click', '.dd a', function(){
	var position = $(this).offset();
	var list = $('.new-dropdown-menu');
	list.css('top', position.top + 45 + 'px');
	list.css('left', position.left - 25 + 'px');
	list.toggle();
	calculatePrice();
	return false;
});

$(document).on('click', '.new-dropdown-menu li', function(){
	var val = $(this).html();
	$('.new-dropdown-toggle').html(val + ' <i class="icon-caret-down"></i>');
	$('.pricing-table select').val(val);
	$('.new-dropdown-menu').toggle();
	calculatePrice();
	return false;
});

