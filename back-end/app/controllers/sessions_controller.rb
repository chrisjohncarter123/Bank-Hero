class SessionsController < ApplicationController
  def new
  end

  def create

    @user = User.create(params.require(:user).permit(:username,        
    :password))
    session[:user_id] = @user.id
    redirect_to '/welcome'

  end

  def login
  end

  def welcome
  end
end
