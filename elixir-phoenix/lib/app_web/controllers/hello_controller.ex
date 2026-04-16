defmodule AppWeb.HelloController do
  use AppWeb, :controller

  def index(conn, _params) do
    json(conn, %{message: "Hello from Phoenix!"})
  end

  def greet(conn, %{"name" => name}) do
    json(conn, %{message: "Hello, #{name}!"})
  end

  def greet(conn, _params) do
    json(conn, %{message: "Hello, World!"})
  end
end
