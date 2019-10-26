require 'test_helper'

class PostitsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get postits_create_url
    assert_response :success
  end

  test "should get show" do
    get postits_show_url
    assert_response :success
  end

end
