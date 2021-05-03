function render(data) {
    var html = "<div class='media-body'><h4 class='media-heading'>"+data.name+"</h4><p class='comPara'>"+data.body+"</p><ul class='list-unstyled list-inline media-detail pull-left'><li><i class='fa fa-calendar'></i>27/02/2014</li><li><i class='fa fa-thumbs-up'></i>13</li></ul><ul class='list-unstyled list-inline media-detail pull-right'><li class=''><a href=''>Like</a></li> <li class=''><a href=''>Reply</a></li> </ul></div>";
    $('.media').append(html);
}


$(document).ready(function() {
    var comnt = [
        {"name" : "John Smith", "body": "This is a comment"}
];

    for(var i = 0; i < comnt.length; i++) {
        render(comnt[i]);
    }

    $('#commentBtn').click(function() {
        var addObj = {
            "name" : "John Smith",
            "body" : $('#message').val()
        };

        console.log(addObj);
        comnt.push(addObj);
        render(addObj);
    });
});