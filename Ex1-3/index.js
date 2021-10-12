$(document).ready(function () {
  console.log('ready!')

  $('#go').on('click', function (e) {
    console.log('Hit!')
    e.preventDefault()
  
    const fname = $('#fname').val()
    const lname = $('#lname').val()
  
    $('#jumbotron').append(`Welcome ${fname} ${lname}!`)
  
    return false
  })
})
