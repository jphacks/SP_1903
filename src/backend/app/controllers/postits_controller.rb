class PostitsController < ApplicationController
  # skip scrf token authenticity
  skip_before_action :verify_authenticity_token

  def create
    @postit = Postit.create!(
      user_id: params[:user],
      text: params[:text],
    )
  end

  def show
    postits = Postit.all

    render :json => postits
  end

end
