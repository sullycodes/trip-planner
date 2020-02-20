Rails.application.routes.draw do

  namespace :api do
    resources :trips do
      resources :sites
    end
  end

end
