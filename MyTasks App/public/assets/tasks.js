$(document).ready(function(){
  $('form').on('submit', function(){
      var item = $('form input');
      var mytask = {item: item.val()};
      $.ajax({
        type: 'POST',
        url: '/mytask',
        data: mytask,
        success: function(data){
          location.reload(true);
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/mytask/' + item,
        success: function(data){
          location.reload(true);
        }
      });
  });
});