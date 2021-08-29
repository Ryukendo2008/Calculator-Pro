function display(n) {
          document.getElementById('cal-screen').value = document.getElementById('cal-screen').value + n;
};

document.getElementById("ac").addEventListener('click', function () {
          document.getElementById('cal-screen').value = "";
});