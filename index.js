const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8f65ba12d8msh0b947589ba8e783p1a3424jsnd3abfac80ff6',
    'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
  },
}

const fetchIpInfo = (ip) => {
  return fetch(
    `https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err))
}

const $ = (selector) => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const { value } = $input
  if (!value) return
  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', true)
  const ipInfo = await fetchIpInfo(value)

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')
})
