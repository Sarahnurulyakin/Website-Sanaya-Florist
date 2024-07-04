document.querySelectorAll(".btnDetails").forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        let judul = parent.querySelector('.card-title').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi yang tersedia</i>';

      
        document.querySelector('.modalTitle').innerHTML = judul;
        document.querySelector('.modalImage').innerHTML = `<img src="${gambar}" class="img-fluid" alt="${judul}">`;
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;

      
        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();
    });
});
