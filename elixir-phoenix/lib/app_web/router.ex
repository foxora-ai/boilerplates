defmodule AppWeb.Router do
  use AppWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug CORSPlug
  end

  scope "/api", AppWeb do
    pipe_through :api
    get "/hello", HelloController, :index
    post "/hello", HelloController, :greet
  end

  scope "/", AppWeb do
    pipe_through :api
    get "/", HelloController, :index
  end
end
