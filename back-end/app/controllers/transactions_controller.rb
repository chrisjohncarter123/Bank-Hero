class TransactionsController < ApplicationController
  before_action :set_transaction, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /transactions
  # GET /transactions.json
  def index
    @transactions = Transaction.all

    puts @transactions

    render :json => @transactions
  end

  # GET /transactions/1
  # GET /transactions/1.json
  def show
  end

  # GET /transactions/new
  def new
    @transaction = Transaction.new
  end

  # GET /transactions/1/edit
  def edit
  end

  # POST /transactions
  # POST /transactions.json
  def create

    puts "New Transaction..."

    @transaction = Transaction.new()
    puts "Hi"
    puts params
    puts "Hi2"

    @account_from = Account.find_by(name: params[:account_from])
    @account_to = Account.find_by(name: params[:account_to])

    @transaction.account_from_id = @account_from.id
    @transaction.account_to_id = @account_to.id
    @transaction.cash = params[:cash]

   # Account.find_by(name: params[:account_from]).cash += @transaction.cash

    if @transaction.save
      puts "saved"

      puts @transaction.cash

      puts (Account.find_by(name: params[:account_from]).cash += @transaction.cash)
      Account.find_by(name: params[:account_to]).cash -= @transaction.cash
      
      @account_to.cash += @transaction.cash
      @account_from.cash -= @transaction.cash
      @account_to.save
      @account_from.save
      #Account.find_by(name: params[:account_from]).cash += @transaction.cash
      #@account_to.save
      puts Account.find_by(name: params[:account_from]).cash
      puts Account.find_by(name: params[:account_to]).cash
      
     # @account_from.cash -= @transaction.cash
    #  @account_from.save
      puts "saved from"





    else
      puts "not saved"
    end

    respond_to do |format|
      if @transaction.save
        format.html { redirect_to @transaction, notice: 'Transaction was successfully created.' }
        format.json { render :show, status: :created, location: @transaction }
      else
        format.html { render :new }
        format.json { render json: @transaction.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /transactions/1
  # PATCH/PUT /transactions/1.json
  def update
    respond_to do |format|
      if @transaction.update(transaction_params)
        format.html { redirect_to @transaction, notice: 'Transaction was successfully updated.' }
        format.json { render :show, status: :ok, location: @transaction }
      else
        format.html { render :edit }
        format.json { render json: @transaction.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /transactions/1
  # DELETE /transactions/1.json
  def destroy
    @transaction.destroy
    respond_to do |format|
      format.html { redirect_to transactions_url, notice: 'Transaction was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transaction
      @transaction = Transaction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def transaction_params
      params.permit(:created_at, :account_from, :account_to, :cash)
    end
end
