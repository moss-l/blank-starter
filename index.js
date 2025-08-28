let data;
async function loadJsonData() {
    try {
        const response = await fetch('/database/db.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const datajson = await response.json();
        console.log(datajson);
        data = JSON.parse(datajson);
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}
loadJsonData();
const input = document.getElementById('inputdata');
const submitBtn = document.getElementById('submitbutton');

    input.addEventListener('input', () => {
      if (input.value.trim() !== "") {
        console.log("Input inputted");
        submitBtn.disabled = false;
        submitBtn.classList.add('active');
      } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('active');
      }
    });
    submitBtn.addEventListener('click', () => {
        console.log("burton pressed" + input.value);
        data.input = input.value.trim();
    });