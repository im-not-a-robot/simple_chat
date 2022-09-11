import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('Connected!')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log("Receiving:")
    console.log(data)

    $('.all_chats').append('<div class="per_person_chat"> \
    <div class="avatar"> \
      <img class="avatar_img" src="avatar.png" alt="avatar"> \
    </div> \
    \
    <div class="element"> \
      <div class="email">'+ data.email +'</div> \
      <div class="message">'+ data.message +'</div> \
      <div class="timestamp">'+ data.timestamp +'</div> \
    </div> \
  </div>')
  }
});
