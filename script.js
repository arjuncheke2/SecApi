function fetchData() {
    fetch('https://fakejson.com/', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
       
        const dataContainer = document.getElementById('dataContainer');
        dataContainer.innerHTML = '';

        for (const key in data) {
           
            // eslint-disable-next-line no-prototype-builtins
            if (data.hasOwnProperty(key)) {
                const value = data[key];
                const itemElement = document.createElement('div');
                itemElement.classList.add('col-md-4', 'mb-3');
                itemElement.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${key}</h5>
                            <p class="card-text">${value}</p>
                        </div>
                    </div>
                `;
                dataContainer.appendChild(itemElement);
            }
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}


fetchData();