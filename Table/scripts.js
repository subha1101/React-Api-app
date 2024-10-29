    const apiUrl = "https://jsonplaceholder.typicode.com/comments"; 
    let itemsPerPage = 10; 
    let currentPage = 1; 
    let commentsData = []; 

function fetchData() {
  fetch(apiUrl)
      .then(function (res) {
          return res.json(); 
      })
      .then(function (data) {
          console.log(data); 
          commentsData = data; 
          updateTable(); 
      })
}
    function updateTable() {
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = ""; 
        const searchInput = document.getElementById('emailSearch').value.toLowerCase();
        const filteredData = commentsData.filter(comment => comment.email.toLowerCase().includes(searchInput));

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const comment = filteredData[i];
            const row = `
                <tr>
                    <td>${comment.postId}</td>
                    <td>${comment.id}</td>
                    <td>${comment.name}</td>
                    <td>${comment.email}</td>
                    <td>${comment.body}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', row); 
        }
        updatePagination(filteredData.length);
      }
    function updatePagination(filteredCount) {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = ""; 
        const totalPages = Math.ceil(filteredCount / itemsPerPage);
        const maxPagesToShow = 5; 
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        
        for (let i = startPage; i <= endPage; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
            pageItem.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
            pageItem.onclick = () => { 
                currentPage = i; 
                updateTable();
            };
            pagination.appendChild(pageItem); 
        }

        if (currentPage > 1) {
            const prevPage = document.createElement('li');
            prevPage.className = 'page-item';
            prevPage.innerHTML = `<a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a>`;
            prevPage.onclick = () => {
                currentPage--; 
                updateTable(); 
            };
            pagination.insertBefore(prevPage, pagination.firstChild); 
        }
        if (currentPage < totalPages) {
            const nextPage = document.createElement('li');
            nextPage.className = 'page-item';
            nextPage.innerHTML = `<a class="page-link" href="#" data-page="${currentPage + 1}">Next</a>`;
            nextPage.onclick = () => {
                currentPage++;
                updateTable(); 
            };
            pagination.appendChild(nextPage); 
        }
    }
    document.getElementById('itemsPerPage').addEventListener('change', function() {
        itemsPerPage = parseInt(this.value); 
        currentPage = 1; 
        updateTable(); 
    });
    document.getElementById('emailSearch').addEventListener('input', function() {
        currentPage = 1;
        updateTable(); 
    });

    fetchData(); 
