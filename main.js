document.getElementById('my-form').addEventListener('submit', function(e) {
    e.preventDefault(); // ngăn chặn việc submit form

    var email = document.getElementById('email').value; // lấy giá trị của email từ input

    //Hiển thị thông báo thành công
    document.getElementById('success-message').style.display='block';
    document.getElementById('user-email').textContent = email; // Sẽ gán tên email bên trang nhập

    //Ẩn form
    document.getElementById('my-form').style.display='none';
});

document.getElementById('end-submit').addEventListener('click', function() {
    //Ẩn thông báo thành công
    document.getElementById('success-message').style.display='none';

    //Hiện lại form
    document.getElementById('my-form').style.display='block';

    //Xóa giá trị email
    document.getElementById('email').value = '';
});
