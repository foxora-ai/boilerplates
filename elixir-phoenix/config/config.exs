import Config

config :app, AppWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [formats: [json: AppWeb.ErrorJSON], layout: false],
  pubsub_server: App.PubSub,
  live_view: [signing_salt: "changeme"]

config :app, :generators, timestamp_type: :utc_datetime

import_config "#{config_env()}.exs"
