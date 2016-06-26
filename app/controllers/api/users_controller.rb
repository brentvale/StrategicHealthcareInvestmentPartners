class Api::UsersController < ApplicationController
  def fetch_current_user
    @user = current_user
    if @user.nil?
      render json: {message: "no current user"}
    else
      render json: {current_user: @user}
    end
  end
  
  def sign_out_current_user
    sign_out(current_user)
    render json: {message: "successfully signed out"}
  end

end
