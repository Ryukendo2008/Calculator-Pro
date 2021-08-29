function display(n) {
          document.getElementById('cal-screen').value = document.getElementById('cal-screen').value + n;
};

document.getElementById("ac").addEventListener('click', function () {
          document.getElementById('cal-screen').value = "";
});

document.getElementById('equal').addEventListener('click', function () {
          if (document.getElementById('cal-screen').innerText == "") {
                    document.getElementById('cal-screen').value = "";
          }
})