class HelloController < ApplicationController
  def index
    render json: { message: "Hello from Rails!" }
  end

  def greet
    name = params[:name].presence || "World"
    render json: { message: "Hello, #{name}!" }
  end
end
