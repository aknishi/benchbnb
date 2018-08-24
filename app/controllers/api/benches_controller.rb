class Api::BenchesController < ApplicationController

  def index
    benches = bounds ? Bench.in_bounds(bounds) : Bench.all

    if params[:minSeating] && params[:maxSeating]
      benches = benches.where(seating: (params[:minSeating]..params[:maxSeating]))
    end

    @benches = benches.includes(:reviews)
    render :index
  end

  def show
    @bench = Bench.find(params[:id])
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: @bench.errors_full_messages
    end

  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end

  def bounds
   params[:bounds]
  end

end
