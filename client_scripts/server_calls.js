async function getApiCall(webhook) {
  var response = await fetch('/webhooks/' + webhook).then(response => response.json())
  return response
}

document.getElementById("me-btn").addEventListener("click", async () => {
  var response = await getApiCall('me')
  alert(JSON.stringify(response.value, null, 2))
});

document.getElementById("models-btn").addEventListener("click", async () => {
  var response = await getApiCall('models')
  alert(JSON.stringify(response.value, null, 2))
});
