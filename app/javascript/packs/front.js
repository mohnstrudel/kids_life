// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


// Internal
// require("@rails/ujs")
import { Glide } from '@glidejs/glide'
// Glide.start()

import Rails from '@rails/ujs'
Rails.start()
require('jquery')
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Custom

require('./vendor_js/vendor_import.js')
require('./custom/z_custom_import.js');



// import Glide from '@glidejs/glide';

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)