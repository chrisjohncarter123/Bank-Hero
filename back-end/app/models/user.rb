class User < ApplicationRecord

    has_secure_password

    def authenticate(password)
        @password == password
    end
end
