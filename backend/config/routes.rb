Rails.application.routes.draw do

  namespace :api do
    resources :trips
    resources :sites
  end

end
