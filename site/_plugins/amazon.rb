# Implement Amazon Affiliate program links.
# By Michael Brundage (michael@michaelbrundage.com)
#
# Add your affiliate ID to _config.yml for the amazon key, like:
#
# amazon: michaelbrundage
#
# And then use any product ID with this filter, like:
#
# {{ '0321165810' | amazon }}
#
# To get the URL
# http://www.amazon.com/gp/product/0321165810?tag=michaelbrundage
module AmazonFilter
  def amazon(input)
    affiliate_id = @context.registers[:site].config['amazon']
    if (affiliate_id.nil?)
      raise FatalException.new("Missing required 'amazon' affiliate id in _config.yml.")
    end
    "https://www.amazon.com/gp/product/#{input}/?tag=#{affiliate_id}"
  end
end
Liquid::Template.register_filter(AmazonFilter)