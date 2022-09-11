class ChatController < ApplicationController
  def index
    @chats = Chat.all.includes(:user)
  end

  def create
    @chat = Chat.new(message: params["message"], user: current_user)
    if @chat.save
      ActionCable.server.broadcast("message_channel", { email: @chat.user.email, message: @chat.message, timestamp: @chat.created_at })
      redirect_to("/")
    else
      # What to do if error
    end
  end
end
