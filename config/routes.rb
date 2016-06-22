Rails.application.routes.draw do
  root to: "static_pages#home"
  
  get '/power_point', to: 'static_pages#powerpoint'
end
