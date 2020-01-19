class Api::V1::PartnersController < ApplicationController
  before_action :set_partner, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /partners
  # GET /partners.json
  def index
    @partners = Partner.all
    render json: @partners.map{ |p| { id: p.id, name: p.name, p_locations:  p.locations.map{|l| {city: l.city, coords: l.coords, merchants: p.merchants.map{|m| {coverage: m.percent_cover(l, 0.5), m_coords: m.locations.map(&:coords) } } } } } }
  end

  # GET /partners/1
  # GET /partners/1.json
  def show
    if @partner
      radius = params[:radius]
      render json: {
        id: @partner.id,
        name: @partner.name,
        avg_locations: @partner.average_location,
        p_locations:  @partner.locations.map{ |l|{
          city: l.city, 
          coords: ->(c){{lat: c[0], lng: c[1]}}[l.coords.split(',').map(&:to_f)],
          merchants: @partner.merchants.map{|m| {
            coverage: m.percent_cover(l, radius.to_f), 
            m_coords: m.locations.map(&:coords).map{|c| {
              lat: c.split(',')[0].to_f,
              lng: c.split(',')[1].to_f
              } }
                  }
              }
            }
        }
      }
    else
      render json: @partner.errors
    end
  end

  # GET /partners/new
  def new
    @partner = Partner.new
  end

  # GET /partners/1/edit
  def edit
  end

  # POST /partners
  # POST /partners.json
  def create
    @partner = Partner.new(partner_params)
    if partner
      render json: @partner
    else
      render json: partner.errors
    end
  end

  # PATCH/PUT /partners/1
  # PATCH/PUT /partners/1.json
  def update
    respond_to do |format|
      if @partner.update(partner_params)
        format.json { render :show, status: :ok, location: @partner }
      else
        format.json { render json: @partner.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /partners/1
  # DELETE /partners/1.json
  def destroy
    @partner&.destroy
    render json: { message: 'Partner deleted!' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_partner
      @partner = Partner.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def partner_params
      params.fetch(:partner, {})
    end
end
