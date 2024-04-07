export const PostFormData = (url, formData) => {
  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => alert(data))
    .catch((error) => console.error('Error:', error));
};
