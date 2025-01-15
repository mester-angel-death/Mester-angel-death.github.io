document.getElementById("reportForm").addEventListener("submit", function(event) {
    
    const username = document.getElementById("username").value;
    const reason = document.getElementById("reason").value;
    const description = document.getElementById("description").value;

    // داده‌ها را به سرور ارسال می‌کنیم
    fetch('https://splus.ir/ip', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            reason: reason,
            description: description
        })
    })
    .then(response => {
        if (response.ok) {
            alert("گزارش شما با موفقیت ارسال شد! 📨");
          
        } else {
            alert("خطا در ارسال گزارش. لطفاً دوباره تلاش کنید. ⚠️");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("خطا: " + error.message + " ❌");
    });
});
