var ajax_loader_myktj = '<img src="/static/images/loading.gif" style="padding:10%"/>';

function openMyKtj () {
        updateAjax();
        $("#myktj_container").animate({left:"0%"},700);
        $(".section-container").animate({opacity:"0"},700);
}

function closeMyKtj () {
        $("#myktj_container").animate({left:"-200%"},700);
        $(".section-container").animate({opacity:"1"},700);
}


function mFillProfile () {
    $('#content_block').html(ajax_loader_myktj);
    $('#content_block').load('/accounts/myktjprofile');
}

function mFillPass () {
    $('#content_block').html(ajax_loader_myktj);
    $('#content_block').load('/accounts/myktjpassword');
}

function mFillTeam () {
    $('#content_block').html(ajax_loader_myktj);
    $('#content_block').load('/accounts/myktjteam');
}

function mFillInvites () {
    $('#content_block').html(ajax_loader_myktj);
    $('#content_block').load(URLS.ACCOUNTS + 'myktjteam/invites');
}

function mFillInstructions () {
    $('#content_block').html(ajax_loader_myktj);
    $('#content_block').load(URLS.ACCOUNTS + 'myktjinstructions');
}



function mFillUpload () {
    $('#content_block').html(ajax_loader_myktj);
    $('#content_block').load('/accounts/fileupload');
}

function update_profile() {
    var token = $('input[name="csrfmiddlewaretoken"]').prop('value');
    var values = $('#update_profile').serialize();
    $('#content_block1').html(ajax_loader_myktj);
    $.ajax({
        url: '/accounts/profilesave',
        type: 'POST',
        data: values,
        success: function (data) {
            $('#login_container').load('/accounts/profile');
        },
        error: function(jqXHR, textStatus, errorThrown) {},
    }).done(function(){
        $('#login_container').load('/accounts/profile');
    });
}


var URLS={ACCOUNTS:'/accounts/'};
var ajax_loader_myktj = '<img src="/static/images/loading/mktjload.gif" style="padding:10%"/>';

