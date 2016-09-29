Rails.application.routes.draw do

  root to: "static_pages#home"
  get '/about', :to => 'static_pages#about', as: :about
  get '/team', :to => 'static_pages#team', as: :team
  
  # get '/pages/:page_name/edit', :to => 'pages#edit'
  resources :pages
  
  namespace :api do
    resources :pages, only: [:show, :index]
    resources :sections, only: [:update, :show]
    resources :paragraphs, only: [:index, :update]
  end

  get 'users/create'

  devise_for :users

end
