document.addEventListener("DOMContentLoaded", function() {
    const spinner = document.querySelector('.spinner');
    const tableBody = document.getElementById("table_body");

    // Hide the table initially
    document.querySelector('.container').style.display = 'none';

    // Fetch data from the API
    fetch("https://reqres.in/api/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Hide the spinner after 3 seconds
            setTimeout(() => {
                spinner.style.display = 'none';
                document.querySelector('.container').style.display = 'block'; // Show the table
            }, 3000);

            // Populate the table with fetched data
            let tableData = "";
            data.data.forEach((values) => {
                tableData += `<tr>
                    <td>${values.id}</td>
                    <td>${values.email}</td>
                    <td>${values.first_name}</td>
                    <td>${values.last_name}</td>
                    <td><img src="${values.avatar}" alt="Avatar"/></td>
                </tr>`;
            });
            tableBody.innerHTML = tableData;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});
