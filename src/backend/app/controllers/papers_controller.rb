class PapersController < ApplicationController
  def create
    @paper = Paper.create!(
      name: params[:name],
    )

    render status: 200, json: { status: 200, message: "Success" }
  end

  def show
    papers = Paper.all

    render json: { data: papers }
  end
end
