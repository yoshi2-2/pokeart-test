class UsersController < ApplicationController
  before_action :correct_user, only: [:show]

  def index
  end

  def show
  end

  private
    def correct_user
      user = User.find(params[:id])
      if current_user != user
        redirect_to root_path
      end
    end

end
