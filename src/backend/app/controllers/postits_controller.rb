class PostitsController < ApplicationController
  # skip scrf token authenticity
  skip_before_action :verify_authenticity_token

  def create
    @postit = Postit.create!(
      user_id: params[:user_id],
      text: params[:text],
    )

    render status: 200, json: { status: 200, message: "Success" }
  end

  def show
    postits = Postit.all

    render json: { data: postits }
  end

end
