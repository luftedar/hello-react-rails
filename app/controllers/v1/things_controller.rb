class V1::ThingsController < ApplicationController
  def index
    things = Thing.all.sample
    render json: { things: }.to_json
  end
end
