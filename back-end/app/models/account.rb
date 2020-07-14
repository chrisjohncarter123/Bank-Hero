class Account < ApplicationRecord

    def balance

        @total = 0

        @all_from = Transactions.all.where(account_from_id: id)

        @all_from.foreach do |a|
            total -= a.cash

        end

        @all_to = Transactions.all.where(account_to_id: id)

        @all_to.foreach do |a|
            total += a.cash

        end

        return total


    end
end
