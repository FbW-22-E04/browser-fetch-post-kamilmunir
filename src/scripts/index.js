import '../styles/main.scss';
import "babel-polyfill";

    const form = document.getElementById("submit-form");
    const formInput = document.querySelectorAll("input");

    //get data
    async function submitData() {
        const inputs = [];
        formInput.forEach(input => {
            inputs.push(`${input.id}: ${input.value}`);
        });
        const jsonData = JSON.stringify(inputs);
        
        const settings = {
            method: 'POST',
            body: jsonData
        }
        
        //send data
        const fetchResponse = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts`, settings);
        const data = await fetchResponse.json();
        console.log(jsonData);
        console.log(data)
        return data;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        submitData().then(data => alert(`Thank you for submitting your details. 
User ID: ${data.id}`));
    });