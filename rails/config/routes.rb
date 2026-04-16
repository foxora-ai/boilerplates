Rails.application.routes.draw do
  get  "up" => "rails/health#show", as: :rails_health_check
  get  "/",            to: "hello#index"
  get  "/api/hello",  to: "hello#index"
  post "/api/hello",  to: "hello#greet"
end
