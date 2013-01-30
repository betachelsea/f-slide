#2013/01/31 @beta_chelsea fix gemfile settings
#Thanks to Mr.@june29!! :)

#source 'https://rubygems.org'
source :rubygems

ruby '1.9.3'
gem 'rails', '~>3.2'
gem 'jquery-rails'

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end

group :development, :test do
  gem 'sqlite3'
end

group :production do
  gem 'pg' 
  gem 'thin'
end

