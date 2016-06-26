class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable, :lockable
  
  validate :limit_emails     
         
         
  def limit_emails
   unless email == "brentvale@gmail.com" || email == "bradhvale@gmail.com"
     errors.add(:email, "Thank you for your interest, unfortunately, we are not taking signups at the moment.")
   end
  end
end
