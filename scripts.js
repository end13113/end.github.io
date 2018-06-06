
$(window).on('load', function() {
  var subscribers         = 0,
      views               = 0,
      $subscriber_counter = $('#subscriber-counter');

  function get_user_views_subscribers() {
    var api_key = "AIzaSyBYmVleOuz4Hffe2x2xRdqBWLOjB52MEVE";
    var channel_id = "UCskG7xk7hK7n8wSZsblz2vQ";
    var data_url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + channel_id + "&key=" + api_key;

    $.ajax({
        url : data_url,
        type : 'GET',
        success : function (json) {
          var statistics = json.items[0].statistics;
          subscribers = statistics.subscriberCount;

          var subscriberString = subscribers.toString(subscribers);

          subscriber_string = '';
          for (i=0; i<subscriberString.length; i++) {
            subscriber_string += '<div class="time flip"><span class="count top">' + subscriberString[i] + '</span></div>';
          }

          $subscriber_counter.html(subscriber_string);
        }
    });
  }
  get_user_views_subscribers()
  setInterval(get_user_views_subscribers, 5000);
});
