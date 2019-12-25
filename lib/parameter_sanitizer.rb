
# frozen_string_literal: true
module Devise

  private
  def cast_to_hash(params)
    p '###'
    if params
      p '####1'
      tmp_params = params
      tmp_params[:role] = tmp_params[:role].downcase.to_sym
      p '##', tmp_params
      params = ActionController::Parameters.new(tmp_params)
      params.to_h.with_indifferent_access
    end
  end
end
