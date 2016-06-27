Rails.application.routes.draw do
  namespace :api do
    resources :pages, only: [:show, :index]
    resources :sections, only: [:update, :show]
    resources :paragraphs, only: [:index]
  end

  get 'users/create'

  devise_for :users
  
  namespace :api do 
    get 'users/fetch_current_user', :to => 'users#fetch_current_user' 
    get 'users/sign_out', :to => 'users#sign_out_current_user'
  end
  
  root to: "static_pages#home"
end
