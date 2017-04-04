const getFormFields = require(`../../lib/get-form-fields`)

const onSubmit = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('my name is ' + data.form.name + ' and my email address is ' + data.form.email)
  document.getElementById('log').innerHTML = 'my name is ' + data.form.name + ' and my email address is ' + data.form.email
}

const addHandlers = () => {
  $('#myForm').on('submit', onSubmit)
}
module.exports = {
  addHandlers
}
